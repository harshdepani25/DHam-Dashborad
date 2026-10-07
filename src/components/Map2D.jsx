import React, { useRef, useEffect, useState } from 'react';
import { MapPin, Target } from 'lucide-react';

export default function Map2D({ mapData, position, theme = 'dark', onShowToast }) {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const [view, setView] = useState({ zoom: 1.0, panX: 0, panY: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  const isLight = theme === 'light';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;

    // Fill background according to theme
    ctx.fillStyle = isLight ? '#f8fafc' : '#090e18';
    ctx.fillRect(0, 0, w, h);

    // Pan & Zoom Transform
    ctx.save();
    ctx.translate(w / 2 + view.panX, h / 2 + view.panY);
    ctx.scale(view.zoom, view.zoom);
    ctx.translate(-w / 2, -h / 2);

    const scaleX = w / 100;
    const scaleY = h / 80;

    // 1. Grid
    ctx.strokeStyle = isLight ? 'rgba(148, 163, 184, 0.45)' : 'rgba(30, 58, 138, 0.28)';
    ctx.lineWidth = 1;
    const gridSize = 25;
    for (let x = 0; x < w; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // 2. Obstacles (Red Rectangles with subtle shadow)
    if (Array.isArray(mapData?.obstacles)) {
      mapData.obstacles.forEach((obs) => {
        const ox = obs.x * scaleX;
        const oy = obs.y * scaleY;
        const ow = (obs.width || 8) * scaleX;
        const oh = (obs.height || 18) * scaleY;

        ctx.shadowColor = isLight ? 'rgba(220, 38, 38, 0.25)' : 'rgba(239, 68, 68, 0.5)';
        ctx.shadowBlur = 8;
        ctx.fillStyle = isLight ? '#dc2626' : '#ef4444';

        // Rounded rect
        const radius = 3;
        ctx.beginPath();
        ctx.moveTo(ox + radius, oy);
        ctx.lineTo(ox + ow - radius, oy);
        ctx.quadraticCurveTo(ox + ow, oy, ox + ow, oy + radius);
        ctx.lineTo(ox + ow, oy + oh - radius);
        ctx.quadraticCurveTo(ox + ow, oy + oh, ox + ow - radius, oy + oh);
        ctx.lineTo(ox + radius, oy + oh);
        ctx.quadraticCurveTo(ox, oy + oh, ox, oy + oh - radius);
        ctx.lineTo(ox, oy + radius);
        ctx.quadraticCurveTo(ox, oy, ox + radius, oy);
        ctx.closePath();
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.strokeStyle = isLight ? '#b91c1c' : '#f87171';
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    }

    // 3. Path (Curved / Dashed line)
    if (Array.isArray(mapData?.path) && mapData.path.length > 1) {
      ctx.save();
      ctx.shadowColor = isLight ? 'rgba(37, 99, 235, 0.3)' : 'rgba(59, 130, 246, 0.6)';
      ctx.shadowBlur = 6;
      ctx.strokeStyle = isLight ? '#2563eb' : '#38bdf8';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([5, 5]);

      ctx.beginPath();
      const p0 = mapData.path[0];
      ctx.moveTo(p0.x * scaleX, p0.y * scaleY);

      for (let i = 1; i < mapData.path.length; i++) {
        const p = mapData.path[i];
        ctx.lineTo(p.x * scaleX, p.y * scaleY);
      }
      ctx.stroke();
      ctx.restore();
    }

    // 4. Robot Indicator
    const rx = (mapData?.robot?.x ?? 52) * scaleX;
    const ry = (mapData?.robot?.y ?? 38) * scaleY;

    // Pulse ripple ring
    const pulse = 14 + Math.sin(Date.now() / 250) * 4;
    ctx.beginPath();
    ctx.arc(rx, ry, pulse, 0, Math.PI * 2);
    ctx.fillStyle = isLight ? 'rgba(2, 132, 199, 0.15)' : 'rgba(56, 189, 248, 0.2)';
    ctx.fill();

    // Outer glow
    ctx.beginPath();
    ctx.arc(rx, ry, 11, 0, Math.PI * 2);
    ctx.fillStyle = isLight ? 'rgba(37, 99, 235, 0.35)' : 'rgba(59, 130, 246, 0.45)';
    ctx.shadowColor = isLight ? '#0284c7' : '#38bdf8';
    ctx.shadowBlur = 10;
    ctx.fill();

    // Core
    ctx.beginPath();
    ctx.arc(rx, ry, 7, 0, Math.PI * 2);
    ctx.fillStyle = isLight ? '#0284c7' : '#38bdf8';
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.shadowBlur = 0;

    // Heading pointer
    const headingRad = ((position?.heading ?? 84) * Math.PI) / 180;
    ctx.beginPath();
    ctx.moveTo(rx, ry);
    ctx.lineTo(rx + Math.cos(headingRad) * 14, ry + Math.sin(headingRad) * 14);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.restore();
  }, [mapData, position, view, isLight]);

  // Handle Dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - view.panX, y: e.clientY - view.panY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setView((prev) => ({
      ...prev,
      panX: e.clientX - dragStartRef.current.x,
      panY: e.clientY - dragStartRef.current.y
    }));
  };

  const handleMouseUp = () => setIsDragging(false);

  // Wheel Zoom Listener: strictly zooms in/out map and prevents page scrolling
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleWheel = (e) => {
      // Strictly prevent browser page scrolling
      e.preventDefault();
      e.stopPropagation();

      const canvas = canvasRef.current;
      if (!canvas) return;

      const factor = e.deltaY < 0 ? 1.15 : 0.87;

      setView((prev) => {
        const nextZoom = Math.max(0.4, Math.min(4.5, Number((prev.zoom * factor).toFixed(2))));
        if (nextZoom === prev.zoom) return prev;

        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const scaleChange = nextZoom / prev.zoom;

        const nextPanX = prev.panX + (mouseX - cx - prev.panX) * (1 - scaleChange);
        const nextPanY = prev.panY + (mouseY - cy - prev.panY) * (1 - scaleChange);

        return {
          zoom: nextZoom,
          panX: Number(nextPanX.toFixed(2)),
          panY: Number(nextPanY.toFixed(2))
        };
      });
    };

    wrapper.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      wrapper.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const handleZoomIn = () => setView((p) => ({ ...p, zoom: Math.min(4.5, Number((p.zoom * 1.2).toFixed(2))) }));
  const handleZoomOut = () => setView((p) => ({ ...p, zoom: Math.max(0.4, Number((p.zoom / 1.2).toFixed(2))) }));
  const handleRecenter = () => {
    setView({ zoom: 1.0, panX: 0, panY: 0 });
    onShowToast?.("Map centered on Mining Robot");
  };

  return (
    <section className="card map-card">
      <div className="card-header">
        <div className="card-title-group">
          <MapPin size={18} className="card-header-icon" />
          <h2 className="card-title">2D Map Section</h2>
          <span className="badge-2d">Tactical Grid</span>
        </div>
        <div className="card-header-right">
          <span className="live-pill">
            <span className="live-dot"></span> Live
          </span>
        </div>
      </div>

      <div
        ref={wrapperRef}
        className="map-viewport-wrapper"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <canvas ref={canvasRef} id="mining-map-canvas" />

        {/* HUD Coordinates Readout */}
        <div className="map-hud-overlay">
          <span className="coord-label">X:</span> <strong>{Number(position?.x ?? 52.4).toFixed(1)}m</strong>
          <span className="coord-label">Y:</span> <strong>{Number(position?.y ?? 38.6).toFixed(1)}m</strong>
          <span className="coord-label">Heading:</span> <strong>{Math.round(position?.heading ?? 84)}°</strong>
          <span className="coord-label">Zone:</span> <span>{position?.zone ?? "Sector 4"}</span>
        </div>

        {/* Controls with Zoom Badge */}
        <div className="map-controls">
          <span className="map-zoom-badge" title="Current Zoom Level">{Math.round(view.zoom * 100)}%</span>
          <button className="map-ctrl-btn" onClick={handleZoomIn} title="Zoom In">+</button>
          <button className="map-ctrl-btn" onClick={handleZoomOut} title="Zoom Out">−</button>
          <button className="map-ctrl-btn" onClick={handleRecenter} title="Center on Robot">
            <Target size={16} />
          </button>
        </div>

        {/* Legend */}
        <div className="map-legend">
          <div className="legend-item">
            <span className="legend-symbol robot-dot"></span>
            <span className="legend-text">Robot</span>
          </div>
          <div className="legend-item">
            <span className="legend-symbol path-dash"></span>
            <span className="legend-text">Path</span>
          </div>
          <div className="legend-item">
            <span className="legend-symbol obstacle-box"></span>
            <span className="legend-text">Obstacle</span>
          </div>
        </div>
      </div>
    </section>
  );
}
