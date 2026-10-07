import React, { useState, useEffect, useRef, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Map2D from './components/Map2D';
import Map3D from './components/Map3D';
import LiveCamera from './components/LiveCamera';
import SensorCards from './components/SensorCards';
import SystemStatus from './components/SystemStatus';
import RecentAlerts from './components/RecentAlerts';
import QuickControls from './components/QuickControls';
import JsonDrawer from './components/JsonDrawer';
import RobotModal from './components/RobotModal';
import DropOverlay from './components/DropOverlay';
import { initialTelemetry, samplePresets } from './data/defaultTelemetry';

export default function App() {
  const [telemetry, setTelemetry] = useState(initialTelemetry);
  const [history, setHistory] = useState({
    mq4: [1.1, 1.2, 1.2, 1.3, 1.1, 1.2, 1.4, 1.3, 1.2, 1.2],
    mq7: [3.8, 4.0, 4.1, 4.2, 3.9, 4.0, 4.3, 4.1, 4.0, 4.0],
    mq135: [17.5, 18.0, 18.2, 17.8, 18.1, 18.4, 18.0, 17.9, 18.2, 18.0],
    mq136: [0.28, 0.30, 0.31, 0.29, 0.32, 0.30, 0.33, 0.31, 0.30, 0.30],
    dht22_temp: [26.8, 27.0, 27.2, 27.1, 27.3, 27.2, 27.4, 27.3, 27.2, 27.2],
    dht22_humidity: [67, 68, 68, 69, 68, 67, 69, 68, 68, 68],
    o2: [20.9, 20.9, 20.8, 20.9, 20.9, 20.8, 20.9, 20.9, 20.9, 20.9],
    pm25: [32, 34, 35, 33, 34, 36, 34, 33, 35, 34],
    battery: [78, 78, 78, 78, 78, 78, 78, 78, 78, 78],
    // Backwards compatibility
    ch4: [1.1, 1.2, 1.2, 1.3, 1.1, 1.2, 1.4, 1.3, 1.2, 1.2],
    co: [3.8, 4.0, 4.1, 4.2, 3.9, 4.0, 4.3, 4.1, 4.0, 4.0],
    temp: [26.8, 27.0, 27.2, 27.1, 27.3, 27.2, 27.4, 27.3, 27.2, 27.2]
  });

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('mining_dashboard_theme') || 'dark';
    } catch {
      return 'dark';
    }
  });

  const [activeView, setActiveView] = useState('dashboard');
  const [mapLayout, setMapLayout] = useState('triple'); // 'triple' | 'dual_map' | 'map3d_cam' | 'map2d_cam'
  const [liveSim, setLiveSim] = useState(true);
  const [isJsonDrawerOpen, setIsJsonDrawerOpen] = useState(false);
  const [isRobotModalOpen, setIsRobotModalOpen] = useState(false);
  const [isDraggingFile, setIsDraggingFile] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const toastTimeoutRef = useRef(null);
  const replayIntervalRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('mining_dashboard_theme', theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      showToast(next === 'light' ? '☀️ Switched to White / Light Theme' : '🌙 Switched to Cyber Dark Theme');
      return next;
    });
  };

  const showToast = useCallback((msg) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToastMessage(msg);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  }, []);

  // Update telemetry and push history
  const updateTelemetry = useCallback((newPacket, sourceName = "JSON Update") => {
    if (!newPacket || typeof newPacket !== 'object') return;

    setTelemetry((prev) => {
      const merged = {
        ...prev,
        ...newPacket,
        timestamp: newPacket.timestamp || new Date().toISOString(),
        sensors: {
          ...prev.sensors,
          ...(newPacket.sensors || {})
        },
        position: {
          ...prev.position,
          ...(newPacket.position || {})
        },
        map: {
          ...prev.map,
          ...(newPacket.map || {})
        },
        subsystems: {
          ...prev.subsystems,
          ...(newPacket.subsystems || {})
        },
        camera: {
          ...prev.camera,
          ...(newPacket.camera || {})
        },
        alerts: Array.isArray(newPacket.alerts) ? newPacket.alerts : prev.alerts
      };

      // Ensure robot map point syncs with position
      if (newPacket.position) {
        merged.map.robot = { x: newPacket.position.x, y: newPacket.position.y };
      }

      return merged;
    });

    // Update Sparklines History for all sensors
    if (newPacket.sensors) {
      setHistory((prev) => {
        const getVal = (primary, alias) => {
          const raw = newPacket.sensors[primary] !== undefined ? newPacket.sensors[primary] : (alias ? newPacket.sensors[alias] : undefined);
          if (raw === undefined || raw === null) return null;
          return Number(typeof raw === 'object' ? raw.value : raw);
        };

        const pushItem = (arr = [], val) => {
          if (val === null || isNaN(val)) return arr;
          const next = [...arr, val];
          if (next.length > 20) next.shift();
          return next;
        };

        const vMq4 = getVal('mq4', 'ch4');
        const vMq7 = getVal('mq7', 'co');
        const vMq135 = getVal('mq135', 'aqi');
        const vMq136 = getVal('mq136', 'h2s');
        const vTemp = getVal('dht22_temp', 'temperature');
        const vHum = getVal('dht22_humidity', 'humidity');
        const vO2 = getVal('o2', 'oxygen');
        const vPm25 = getVal('pm25', 'dust');
        const vBat = getVal('battery', null);

        return {
          mq4: pushItem(prev.mq4, vMq4),
          mq7: pushItem(prev.mq7, vMq7),
          mq135: pushItem(prev.mq135, vMq135),
          mq136: pushItem(prev.mq136, vMq136),
          dht22_temp: pushItem(prev.dht22_temp, vTemp),
          dht22_humidity: pushItem(prev.dht22_humidity, vHum),
          o2: pushItem(prev.o2, vO2),
          pm25: pushItem(prev.pm25, vPm25),
          battery: pushItem(prev.battery, vBat),
          ch4: pushItem(prev.ch4, vMq4),
          co: pushItem(prev.co, vMq7),
          temp: pushItem(prev.temp, vTemp)
        };
      });
    }

    if (sourceName !== "sim") {
      showToast(`Telemetry updated via ${sourceName}`);
    }
  }, [showToast]);

  // Live simulation ticker
  useEffect(() => {
    if (!liveSim) return;

    const timer = setInterval(() => {
      // Realistic drift across sensor suite
      const mq4Drift = (Math.random() - 0.49) * 0.06;
      const mq7Drift = (Math.random() - 0.49) * 0.25;
      const mq135Drift = (Math.random() - 0.5) * 0.5;
      const mq136Drift = (Math.random() - 0.49) * 0.02;
      const tempDrift = (Math.random() - 0.5) * 0.1;
      const humDrift = (Math.random() - 0.5) * 0.25;
      const o2Drift = (Math.random() - 0.5) * 0.03;
      const pm25Drift = (Math.random() - 0.5) * 0.7;

      setTelemetry((prev) => {
        const s = prev.sensors || {};
        const getV = (key, defVal) => {
          const raw = s[key];
          if (raw === undefined || raw === null) return defVal;
          return Number(typeof raw === 'object' ? raw.value : raw) || defVal;
        };

        const curMq4 = Math.max(0.8, Number((getV('mq4', getV('ch4', 1.2)) + mq4Drift).toFixed(2)));
        const curMq7 = Math.max(2, Math.round(getV('mq7', getV('co', 4)) + mq7Drift));
        const curMq135 = Math.max(10, Number((getV('mq135', 18) + mq135Drift).toFixed(1)));
        const curMq136 = Math.max(0.1, Number((getV('mq136', 0.3) + mq136Drift).toFixed(2)));
        const curTemp = Number((getV('dht22_temp', getV('temperature', 27.2)) + tempDrift).toFixed(1));
        const curHum = Math.min(100, Math.max(20, Number((getV('dht22_humidity', getV('humidity', 68.0)) + humDrift).toFixed(1))));
        const curO2 = Math.min(23.5, Math.max(15.0, Number((getV('o2', 20.9) + o2Drift).toFixed(1))));
        const curPm25 = Math.max(5, Math.round(getV('pm25', 34) + pm25Drift));

        // Movement step
        let { x, y, heading } = prev.position;
        const step = 0.2;
        x += Math.cos((heading * Math.PI) / 180) * step;
        y += Math.sin((heading * Math.PI) / 180) * step * 0.4;

        if (x > 80) heading = 220;
        if (x < 20) heading = 40;

        const nextPos = {
          ...prev.position,
          x: Number(x.toFixed(1)),
          y: Number(y.toFixed(1)),
          heading
        };

        // Update history
        setHistory((h) => ({
          mq4: [...(h.mq4 || []).slice(-19), curMq4],
          mq7: [...(h.mq7 || []).slice(-19), curMq7],
          mq135: [...(h.mq135 || []).slice(-19), curMq135],
          mq136: [...(h.mq136 || []).slice(-19), curMq136],
          dht22_temp: [...(h.dht22_temp || []).slice(-19), curTemp],
          dht22_humidity: [...(h.dht22_humidity || []).slice(-19), curHum],
          o2: [...(h.o2 || []).slice(-19), curO2],
          pm25: [...(h.pm25 || []).slice(-19), curPm25],
          battery: h.battery || [78],
          ch4: [...(h.ch4 || []).slice(-19), curMq4],
          co: [...(h.co || []).slice(-19), curMq7],
          temp: [...(h.temp || []).slice(-19), curTemp]
        }));

        return {
          ...prev,
          sensors: {
            ...prev.sensors,
            mq4: { ...(s.mq4 || {}), value: curMq4 },
            mq7: { ...(s.mq7 || {}), value: curMq7 },
            mq135: { ...(s.mq135 || {}), value: curMq135 },
            mq136: { ...(s.mq136 || {}), value: curMq136 },
            dht22_temp: { ...(s.dht22_temp || {}), value: curTemp },
            dht22_humidity: { ...(s.dht22_humidity || {}), value: curHum },
            o2: { ...(s.o2 || {}), value: curO2 },
            pm25: { ...(s.pm25 || {}), value: curPm25 },
            // Aliases synced
            ch4: { ...(s.ch4 || {}), value: curMq4 },
            co: { ...(s.co || {}), value: curMq7 },
            temperature: { ...(s.temperature || {}), value: curTemp },
            humidity: { ...(s.humidity || {}), value: curHum }
          },
          position: nextPos,
          map: {
            ...prev.map,
            robot: { x: nextPos.x, y: nextPos.y }
          }
        };
      });
    }, 1500);

    return () => clearInterval(timer);
  }, [liveSim]);

  // Handle Preset Selection
  const handleSelectPreset = async (presetKey) => {
    if (replayIntervalRef.current) {
      clearInterval(replayIntervalRef.current);
      replayIntervalRef.current = null;
    }

    if (presetKey === 'replay') {
      try {
        const res = await fetch('/sample-data/mission_replay.json');
        const frames = await res.json();
        replayFrames(frames);
      } catch (err) {
        showToast("Error loading mission replay: " + err.message);
      }
      return;
    }

    const preset = samplePresets[presetKey] || samplePresets.normal;
    updateTelemetry(preset, `Preset: ${presetKey.toUpperCase()}`);
  };

  const replayFrames = (frames) => {
    if (!Array.isArray(frames) || frames.length === 0) return;
    let idx = 0;
    showToast(`Replaying mission log (${frames.length} frames)...`);

    replayIntervalRef.current = setInterval(() => {
      if (idx >= frames.length) {
        clearInterval(replayIntervalRef.current);
        replayIntervalRef.current = null;
        showToast("Mission log replay completed");
        return;
      }

      const f = frames[idx];
      updateTelemetry({
        timestamp: f.timestamp,
        status: f.status,
        systemHealth: f.health,
        sensors: {
          mq4: { value: f.mq4 ?? f.ch4 ?? 1.2 },
          mq7: { value: f.mq7 ?? f.co ?? 4 },
          mq135: { value: f.mq135 ?? 18 },
          mq136: { value: f.mq136 ?? 0.3 },
          dht22_temp: { value: f.dht22_temp ?? f.temperature ?? 27.2 },
          dht22_humidity: { value: f.dht22_humidity ?? f.humidity ?? 68.0 },
          o2: { value: f.o2 ?? 20.9 },
          pm25: { value: f.pm25 ?? 34 },
          battery: { value: f.battery ?? 78 },
          ch4: f.ch4,
          co: f.co,
          temperature: f.temperature
        },
        position: {
          x: f.x,
          y: f.y,
          heading: f.heading,
          zone: f.zone,
          speed: f.speed
        }
      }, `Replay Frame ${idx + 1}/${frames.length}`);

      idx++;
    }, 1200);
  };

  // Handle File Upload
  const handleFileUpload = (file) => {
    if (!file.name.endsWith('.json')) {
      alert("Please upload a valid .json telemetry file.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        if (Array.isArray(parsed)) {
          replayFrames(parsed);
        } else {
          updateTelemetry(parsed, `File: ${file.name}`);
        }
      } catch (err) {
        alert("Error parsing JSON file: " + err.message);
      }
    };
    reader.readAsText(file);
  };

  // Drag and Drop
  useEffect(() => {
    const handleDragOver = (e) => {
      e.preventDefault();
      setIsDraggingFile(true);
    };
    const handleDragLeave = (e) => {
      e.preventDefault();
      setIsDraggingFile(false);
    };
    const handleDrop = (e) => {
      e.preventDefault();
      setIsDraggingFile(false);
      if (e.dataTransfer.files?.length > 0) {
        handleFileUpload(e.dataTransfer.files[0]);
      }
    };

    window.addEventListener('dragover', handleDragOver);
    window.addEventListener('dragleave', handleDragLeave);
    window.addEventListener('drop', handleDrop);

    return () => {
      window.removeEventListener('dragover', handleDragOver);
      window.removeEventListener('dragleave', handleDragLeave);
      window.removeEventListener('drop', handleDrop);
    };
  }, []);

  // Quick Controls
  const handleControlAction = (action) => {
    if (action === 'start') {
      setLiveSim(true);
      updateTelemetry({
        subsystems: { motors: "Active", navigation: "Active" },
        position: { speed: 1.2 }
      }, "Controls");
      showToast("▶ Autonomous Mission Started: Patrolling Sector 4");
    } else if (action === 'pause') {
      setLiveSim(false);
      updateTelemetry({
        subsystems: { motors: "Standby" },
        position: { speed: 0.0 }
      }, "Controls");
      showToast("⏸ Operation Paused: Robot halted in position");
    } else if (action === 'stop') {
      setLiveSim(false);
      const newAlert = {
        id: "EMERGENCY-STOP",
        time: new Date().toTimeString().split(' ')[0],
        level: "critical",
        message: "Emergency Stop triggered from Operator Dashboard",
        action: "All actuators locked"
      };
      updateTelemetry({
        subsystems: { motors: "Halted" },
        position: { speed: 0.0 },
        alerts: [newAlert, ...(telemetry.alerts || [])]
      }, "Controls");
      showToast("🛑 EMERGENCY STOP: Robot completely halted");
    } else if (action === 'home') {
      setLiveSim(true);
      updateTelemetry({
        subsystems: { navigation: "Returning" },
        position: { x: 18, y: 25, zone: "Sector 1 - Base Docking", speed: 1.5 }
      }, "Controls");
      showToast("⌂ Returning Home: Navigating to base charging dock");
    }
  };

  const handleClearAlerts = () => {
    updateTelemetry({
      alerts: [],
      systemHealth: 100,
      status: "online"
    }, "Clear Alerts");
    showToast("All alerts cleared. System nominal.");
  };

  return (
    <div className="app-layout">
      {/* File Drop Overlay */}
      <DropOverlay isVisible={isDraggingFile} />

      {/* Sidebar */}
      <Sidebar
        activeView={activeView}
        setActiveView={setActiveView}
        alertCount={telemetry.alerts?.length || 0}
        onOpenRobotModal={() => setIsRobotModalOpen(true)}
        robotInfo={{ name: telemetry.name, version: telemetry.version }}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Viewport */}
      <main className="main-viewport">
        {/* Header */}
        <Header
          status={telemetry.status}
          liveSim={liveSim}
          onToggleSim={() => setLiveSim(!liveSim)}
          onSelectPreset={handleSelectPreset}
          onFileUpload={handleFileUpload}
          onOpenJsonDrawer={() => setIsJsonDrawerOpen(true)}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        {/* Toast Notification Banner */}
        {toastMessage && (
          <div className="toast-banner">
            <span className="toast-icon">⚡</span>
            <span className="toast-message">{toastMessage}</span>
          </div>
        )}

        {/* Map & Navigation Views Layout Bar */}
        <div className="section-toolbar">
          <div className="section-toolbar-left">
            <span className="section-toolbar-title">Tactical Vision & Spatial Navigation</span>
            <span className="section-toolbar-subtitle">Dual-Engine 2D Tactical Grid & 3D WebGL Digital Twin</span>
          </div>
          <div className="layout-toggle-pills">
            <button
              className={`layout-pill-btn ${mapLayout === 'triple' ? 'active' : ''}`}
              onClick={() => { setMapLayout('triple'); showToast("Switched to Triple View: 2D + 3D + Camera"); }}
              title="Show 2D Map, 3D Digital Twin, and Live Camera side-by-side"
            >
              <span>⚡ Triple View (2D + 3D + Cam)</span>
            </button>
            <button
              className={`layout-pill-btn ${mapLayout === 'dual_map' ? 'active' : ''}`}
              onClick={() => { setMapLayout('dual_map'); showToast("Switched to Dual Maps View: 2D & 3D side-by-side"); }}
              title="Show 2D Map and 3D Map side-by-side"
            >
              <span>🧭 Dual Maps (2D & 3D)</span>
            </button>
            <button
              className={`layout-pill-btn ${mapLayout === 'map3d_cam' ? 'active' : ''}`}
              onClick={() => { setMapLayout('map3d_cam'); showToast("Switched to 3D Map + Camera View"); }}
              title="Show 3D Map and Live Camera"
            >
              <span>🧊 3D Map + Camera</span>
            </button>
            <button
              className={`layout-pill-btn ${mapLayout === 'map2d_cam' ? 'active' : ''}`}
              onClick={() => { setMapLayout('map2d_cam'); showToast("Switched to 2D Map + Camera View"); }}
              title="Show 2D Map and Live Camera"
            >
              <span>🗺️ 2D Map + Camera</span>
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="dashboard-grid">
          {/* Row 1: Dual/Triple Spatial & Vision Grid */}
          <div className={`top-row-grid layout-${mapLayout}`}>
            {(mapLayout === 'triple' || mapLayout === 'dual_map' || mapLayout === 'map2d_cam') && (
              <Map2D
                mapData={telemetry.map}
                position={telemetry.position}
                theme={theme}
                onShowToast={showToast}
              />
            )}

            {(mapLayout === 'triple' || mapLayout === 'dual_map' || mapLayout === 'map3d_cam') && (
              <Map3D
                mapData={telemetry.map}
                position={telemetry.position}
                theme={theme}
                onShowToast={showToast}
              />
            )}

            {(mapLayout === 'triple' || mapLayout === 'map3d_cam' || mapLayout === 'map2d_cam') && (
              <LiveCamera
                cameraData={telemetry.camera}
                depth={telemetry.sensors?.depth?.value}
                speed={telemetry.position?.speed}
                onShowToast={showToast}
              />
            )}
          </div>

          {/* Row 2: Multigas & Environmental Sensors Suite */}
          <SensorCards
            sensors={telemetry.sensors}
            history={history}
            onShowToast={showToast}
          />

          {/* Row 3: System Status, Recent Alerts, Quick Controls */}
          <div className="bottom-row-grid">
            <SystemStatus
              health={telemetry.systemHealth}
              subsystems={telemetry.subsystems}
            />
            <RecentAlerts
              alerts={telemetry.alerts}
              onClearAlerts={handleClearAlerts}
            />
            <QuickControls
              onControlAction={handleControlAction}
            />
          </div>
        </div>
      </main>

      {/* JSON Inspector & Editor Drawer */}
      <JsonDrawer
        isOpen={isJsonDrawerOpen}
        onClose={() => setIsJsonDrawerOpen(false)}
        telemetry={telemetry}
        onApplyCustomJson={(data) => updateTelemetry(data, "Custom JSON Injection")}
        onResetSample={() => handleSelectPreset('normal')}
        onShowToast={showToast}
      />

      {/* Robot Specifications Modal */}
      <RobotModal
        isOpen={isRobotModalOpen}
        onClose={() => setIsRobotModalOpen(false)}
        robotInfo={{ robotId: telemetry.robotId, version: telemetry.version }}
      />
    </div>
  );
}
