import React, { useRef, useEffect, useState } from 'react';
import { MapPin, Target } from 'lucide-react';

export default function Map2D({
  mapData,
  position,
  theme = 'dark',
  robotMode = 'automatic',
  onShowToast
}) {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const [view, setView] = useState({ zoom: 1.0, panX: 0, panY: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  const isLight = theme === 'light';
  const isEmergency = robotMode === 'emergency_outside';
  const isManual = robotMode === 'manual';

  // Surface Portal outside coordinate
  const portalCoords = { x: 12, y: 16 };

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

    // 3. Normal Path (Curved / Dashed line)
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

    // 4. Outside Surface Portal Exit
    const px = portalCoords.x * scaleX;
    const py = portalCoords.y * scaleY;
    ctx.save();
    // Portal ring
    ctx.beginPath();
    ctx.arc(px, py, 14, 0, Math.PI * 2);
    ctx.fillStyle = isLight ? 'rgba(16, 185, 129, 0.18)' : 'rgba(16, 185, 129, 0.25)';
    ctx.fill();
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Portal icon core
    ctx.beginPath();
    ctx.arc(px, py, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#10b981';
    ctx.shadowColor = '#10b981';
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.shadowBlur = 0;

    // Portal text label
    ctx.font = 'bold 9px "Outfit", sans-serif';
    ctx.fillStyle = isLight ? '#065f46' : '#6ee7b7';
    ctx.textAlign = 'center';
    ctx.fillText('OUTSIDE PORTAL', px, py - 18);
    ctx.restore();

    // 5. Emergency Evacuation Route Line
    const rx = (mapData?.robot?.x ?? 52) * scaleX;
    const ry = (mapData?.robot?.y ?? 38) * scaleY;

    if (isEmergency) {
      ctx.save();
      ctx.shadowColor = 'rgba(239, 68, 68, 0.8)';
      ctx.shadowBlur = 10;
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 4]);

      ctx.beginPath();
      ctx.moveTo(rx, ry);
      ctx.lineTo(px, py);
      ctx.stroke();

      // Draw directional arrow on route
      const midX = (rx + px) / 2;
      const midY = (ry + py) / 2;
      ctx.fillStyle = '#f87171';
      ctx.beginPath();
      ctx.arc(midX, midY, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // 6. Robot Indicator
    ctx.save();
    // Pulse ripple ring
    const pulse = 14 + Math.sin(Date.now() / 250) * 4;
    ctx.beginPath();
    ctx.arc(rx, ry, pulse, 0, Math.PI * 2);
    if (isEmergency) {
      ctx.fillStyle = 'rgba(239, 68, 68, 0.3)';
    } else if (isManual) {
      ctx.fillStyle = 'rgba(245, 158, 11, 0.25)';
    } else {
      ctx.fillStyle = isLight ? 'rgba(2, 132, 199, 0.15)' : 'rgba(56, 189, 248, 0.2)';
    }
    ctx.fill();

    // Outer glow
    ctx.beginPath();
    ctx.arc(rx, ry, 11, 0, Math.PI * 2);
    if (isEmergency) {
      ctx.fillStyle = 'rgba(239, 68, 68, 0.6)';
      ctx.shadowColor = '#ef4444';
    } else if (isManual) {
      ctx.fillStyle = 'rgba(245, 158, 11, 0.5)';
      ctx.shadowColor = '#f59e0b';
    } else {
      ctx.fillStyle = isLight ? 'rgba(37, 99, 235, 0.35)' : 'rgba(59, 130, 246, 0.45)';
      ctx.shadowColor = isLight ? '#0284c7' : '#38bdf8';
    }
    ctx.shadowBlur = 12;
    ctx.fill();

    // Core
    ctx.beginPath();
    ctx.arc(rx, ry, 7, 0, Math.PI * 2);
    ctx.fillStyle = isEmergency ? '#ef4444' : isManual ? '#f59e0b' : isLight ? '#0284c7' : '#38bdf8';
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
    ctx.restore();
  }, [mapData, position, view, isLight, isEmergency, isManual]);

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
      e.preventDefault();
      e.stopPropagation();

      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      const zoomFactor = e.deltaY < 0 ? 1.15 : 0.85;

      setView((prev) => {
        const nextZoom = Math.max(0.4, Math.min(4.5, Number((prev.zoom * zoomFactor).toFixed(3))));
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
          <span className={`live-pill ${isEmergency ? 'pill-emergency' : isManual ? 'pill-manual' : ''}`}>
            <span className={`live-dot ${isEmergency ? 'dot-emergency' : isManual ? 'dot-manual' : ''}`}></span>
            {isEmergency ? 'Evacuating' : isManual ? 'Manual' : 'Live'}
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

        {/* Compact HUD Readout (Positioned neatly without overlapping zoom controls) */}
        <div className="map-hud-overlay">
          <span className="coord-chip">
            <span className="coord-label">X:</span> <strong>{Number(position?.x ?? 52.4).toFixed(1)}m</strong>
          </span>
          <span className="coord-chip">
            <span className="coord-label">Y:</span> <strong>{Number(position?.y ?? 38.6).toFixed(1)}m</strong>
          </span>
          <span className="coord-chip">
            <span className="coord-label">H:</span> <strong>{Math.round(position?.heading ?? 84)}°</strong>
          </span>
          <span className={`coord-chip mode-indicator-chip ${robotMode}`}>
            {isEmergency ? '🚨 OUTSIDE EGRESS' : isManual ? '🎮 MANUAL' : '🤖 AUTO'}
          </span>
        </div>

        {/* Zoom Controls with Zoom Badge */}
        <div className="map-controls">
          <span className="map-zoom-badge" title="Current Zoom Level">{Math.round(view.zoom * 100)}%</span>
          <button className="map-ctrl-btn" onClick={handleZoomIn} title="Zoom In">+</button>
          <button className="map-ctrl-btn" onClick={handleZoomOut} title="Zoom Out">−</button>
          <button className="map-ctrl-btn" onClick={handleRecenter} title="Center on Robot">
            <Target size={16} />
          </button>
        </div>

        {/* Map Legend with Outside Portal indicator */}
        <div className="map-legend">
          <div className="legend-item">
            <span className="legend-symbol portal-dot"></span>
            <span className="legend-text">Outside Portal</span>
          </div>
          <div className="legend-item">
            <span className={`legend-symbol robot-dot ${isEmergency ? 'emergency' : isManual ? 'manual' : ''}`}></span>
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
