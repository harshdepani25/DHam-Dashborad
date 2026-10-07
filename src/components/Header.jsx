import React, { useState, useRef, useEffect } from 'react';
import { FileText, Upload, Code, MoreVertical, ChevronDown, Sun, Moon } from 'lucide-react';

export default function Header({
  status,
  liveSim,
  onToggleSim,
  onSelectPreset,
  onFileUpload,
  onOpenJsonDrawer,
  theme,
  onToggleTheme
}) {
  const [presetOpen, setPresetOpen] = useState(false);
  const fileInputRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setPresetOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileUpload(file);
      e.target.value = '';
    }
  };

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h1 className="header-title">Mining Robot</h1>
        <p className="header-subtitle">Smart Mining Dashboard</p>
      </div>

      <div className="header-right">
        <div className="header-actions">
          {/* Preset Selector */}
          <div className="preset-dropdown-container" ref={dropdownRef}>
            <button
              className="action-btn preset-btn"
              onClick={() => setPresetOpen(!presetOpen)}
              title="Select JSON Preset Scenario"
            >
              <FileText size={15} />
              <span>Sample JSON Scenarios</span>
              <ChevronDown size={14} />
            </button>

            {presetOpen && (
              <div className="preset-dropdown-menu">
                <button
                  className="preset-option"
                  onClick={() => { onSelectPreset('normal'); setPresetOpen(false); }}
                >
                  <span className="preset-tag green">Nominal</span>
                  <strong>1. Normal Patrol</strong>
                  <small>CH4: 1.2 ppm | Battery: 78% | Nominal</small>
                </button>
                <button
                  className="preset-option"
                  onClick={() => { onSelectPreset('gas'); setPresetOpen(false); }}
                >
                  <span className="preset-tag red">Hazard</span>
                  <strong>2. Gas Leak Hazard</strong>
                  <small>CH4: 4.2 ppm spike | Toxic CO alert</small>
                </button>
                <button
                  className="preset-option"
                  onClick={() => { onSelectPreset('obstacle'); setPresetOpen(false); }}
                >
                  <span className="preset-tag orange">Warning</span>
                  <strong>3. Obstacle Proximity</strong>
                  <small>LiDAR warning | Pillar B proximity</small>
                </button>
                <button
                  className="preset-option"
                  onClick={() => { onSelectPreset('battery'); setPresetOpen(false); }}
                >
                  <span className="preset-tag red">Critical</span>
                  <strong>4. Low Battery Emergency</strong>
                  <small>Battery: 14% | Return to base dock</small>
                </button>
                <button
                  className="preset-option"
                  onClick={() => { onSelectPreset('replay'); setPresetOpen(false); }}
                >
                  <span className="preset-tag blue">Replay</span>
                  <strong>5. Mission Log Replay</strong>
                  <small>Animated multi-frame tunnel traversal</small>
                </button>
              </div>
            )}
          </div>

          {/* Import JSON File */}
          <label className="action-btn upload-json-btn" title="Upload your robot's JSON telemetry file">
            <input
              type="file"
              ref={fileInputRef}
              accept=".json,application/json"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <Upload size={15} />
            <span>Import JSON</span>
          </label>

          {/* JSON Live Drawer Button */}
          <button
            className="action-btn json-drawer-btn"
            onClick={onOpenJsonDrawer}
            title="View & Edit Live JSON Stream"
          >
            <Code size={15} />
            <span>JSON Live</span>
          </button>

          {/* Live Sim Toggle */}
          <button
            className={`action-btn sim-toggle-btn ${liveSim ? 'active' : ''}`}
            onClick={onToggleSim}
            title="Toggle autonomous live simulation ticks"
          >
            <span className="pulse-dot"></span>
            <span>{liveSim ? 'Live Sim: ON' : 'Live Sim: PAUSED'}</span>
          </button>

          {/* Theme Toggle Button (Dark / White Mode) */}
          <button
            className="action-btn theme-toggle-btn"
            onClick={onToggleTheme}
            title={theme === 'dark' ? "Switch to White / Light Theme" : "Switch to Cyber Dark Theme"}
          >
            {theme === 'dark' ? (
              <>
                <Sun size={15} className="theme-toggle-icon sun" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon size={15} className="theme-toggle-icon moon" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>

        {/* Status Pill */}
        <div className={`status-pill ${status === 'warning' ? 'warning' : status === 'offline' ? 'offline' : 'online'}`}>
          <span className="status-dot"></span>
          <span className="status-text">
            {status === 'warning' ? 'Warning' : status === 'offline' ? 'Offline' : 'Online'}
          </span>
        </div>

        {/* Options */}
        <button className="more-menu-btn" onClick={onOpenJsonDrawer} title="Dashboard Settings & JSON Hub">
          <MoreVertical size={18} />
        </button>
      </div>
    </header>
  );
}
