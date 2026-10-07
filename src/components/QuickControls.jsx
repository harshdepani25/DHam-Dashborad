import React from 'react';
import {
  Zap,
  Play,
  Pause,
  Square,
  Home,
  Bot,
  Sliders,
  AlertTriangle,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  ShieldAlert,
  Compass
} from 'lucide-react';

export default function QuickControls({
  robotMode = 'automatic',
  onChangeMode,
  manualSpeed = 1.2,
  onSetManualSpeed,
  onManualDrive,
  onControlAction,
  onEmergencyOutside,
  onCancelEmergency,
  telemetry
}) {
  const currentSpeed = Number(telemetry?.position?.speed ?? 1.2).toFixed(1);
  const currentHeading = Math.round(telemetry?.position?.heading ?? 84);
  const isEmergency = robotMode === 'emergency_outside';
  const isManual = robotMode === 'manual';
  const isAuto = robotMode === 'automatic';

  return (
    <section className={`card controls-card ${isEmergency ? 'emergency-mode-active' : ''}`}>
      <div className="card-header">
        <div className="card-title-group">
          <Zap size={18} className="card-header-icon" />
          <h2 className="card-title">Robot Operation & Controls</h2>
        </div>
        <div className="card-header-right">
          <span className={`mode-status-badge ${robotMode}`}>
            {isAuto && '🤖 Auto Patrol'}
            {isManual && '🎮 Manual Teleop'}
            {isEmergency && '🚨 Return Outside'}
          </span>
        </div>
      </div>

      {/* Mode Switcher Segmented Pills */}
      <div className="controls-mode-switcher" role="tablist" aria-label="Robot Operation Mode">
        <button
          className={`ctrl-mode-tab ${isAuto ? 'active' : ''}`}
          onClick={() => onChangeMode?.('automatic')}
          title="Autonomous mission traversal & environmental patrol"
        >
          <Bot size={14} />
          <span>Automatic</span>
        </button>

        <button
          className={`ctrl-mode-tab ${isManual ? 'active' : ''}`}
          onClick={() => onChangeMode?.('manual')}
          title="Manual teleoperation driving using on-screen D-Pad or W/A/S/D keys"
        >
          <Sliders size={14} />
          <span>Manual</span>
        </button>

        <button
          className={`ctrl-mode-tab emergency-tab ${isEmergency ? 'active' : ''}`}
          onClick={() => onEmergencyOutside?.()}
          title="Emergency command: Abort mission and return outside to surface portal immediately"
        >
          <AlertTriangle size={14} />
          <span>Return Outside</span>
        </button>
      </div>

      <div className="controls-body">
        {/* ================= MODE 1: AUTOMATIC ================= */}
        {isAuto && (
          <div className="mode-pane mode-pane-auto">
            <div className="mode-intel-banner">
              <span className="intel-dot auto"></span>
              <div className="intel-text">
                <strong>Autonomous Navigation Active</strong>
                <span>Following shaft waypoints with real-time obstacle avoidance</span>
              </div>
            </div>

            <div className="controls-grid">
              <button
                className="ctrl-action-btn btn-start"
                onClick={() => onControlAction?.('start')}
                title="Start or Resume Autonomous Patrol"
              >
                <div className="ctrl-icon-box">
                  <Play size={20} fill="currentColor" />
                </div>
                <span className="ctrl-btn-label">Start Patrol</span>
              </button>

              <button
                className="ctrl-action-btn btn-pause"
                onClick={() => onControlAction?.('pause')}
                title="Pause Robot in Place"
              >
                <div className="ctrl-icon-box">
                  <Pause size={20} fill="currentColor" />
                </div>
                <span className="ctrl-btn-label">Pause</span>
              </button>

              <button
                className="ctrl-action-btn btn-stop"
                onClick={() => onControlAction?.('stop')}
                title="Emergency Brake"
              >
                <div className="ctrl-icon-box">
                  <Square size={18} fill="currentColor" />
                </div>
                <span className="ctrl-btn-label">Halt</span>
              </button>

              <button
                className="ctrl-action-btn btn-home"
                onClick={() => onControlAction?.('home')}
                title="Navigate to Base Charging Dock"
              >
                <div className="ctrl-icon-box">
                  <Home size={20} fill="currentColor" />
                </div>
                <span className="ctrl-btn-label">Base Dock</span>
              </button>
            </div>
          </div>
        )}

        {/* ================= MODE 2: MANUAL TELEOP ================= */}
        {isManual && (
          <div className="mode-pane mode-pane-manual">
            {/* Speed Presets */}
            <div className="manual-speed-bar">
              <span className="speed-bar-label">Speed:</span>
              <div className="speed-pills">
                <button
                  className={`speed-pill ${manualSpeed === 0.5 ? 'active' : ''}`}
                  onClick={() => onSetManualSpeed?.(0.5)}
                  title="Crawl speed (0.5 m/s) for precision inspection"
                >
                  🐢 0.5m/s
                </button>
                <button
                  className={`speed-pill ${manualSpeed === 1.2 ? 'active' : ''}`}
                  onClick={() => onSetManualSpeed?.(1.2)}
                  title="Standard survey speed (1.2 m/s)"
                >
                  🚶 1.2m/s
                </button>
                <button
                  className={`speed-pill ${manualSpeed === 2.2 ? 'active' : ''}`}
                  onClick={() => onSetManualSpeed?.(2.2)}
                  title="Turbo traversal speed (2.2 m/s)"
                >
                  ⚡ 2.2m/s
                </button>
              </div>
            </div>

            {/* Directional D-Pad */}
            <div className="dpad-wrapper">
              <div className="dpad-container">
                <button
                  className="dpad-btn dpad-up"
                  onClick={() => onManualDrive?.('forward')}
                  title="Drive Forward (Key: W or Up Arrow)"
                >
                  <ArrowUp size={18} />
                  <span className="dpad-key-hint">W</span>
                </button>

                <div className="dpad-middle-row">
                  <button
                    className="dpad-btn dpad-left"
                    onClick={() => onManualDrive?.('left')}
                    title="Steer Left (Key: A or Left Arrow)"
                  >
                    <ArrowLeft size={18} />
                    <span className="dpad-key-hint">A</span>
                  </button>

                  <button
                    className="dpad-btn dpad-center"
                    onClick={() => onManualDrive?.('stop')}
                    title="Brake / Stop (Key: Space or Esc)"
                  >
                    <Square size={14} fill="currentColor" />
                    <span className="dpad-key-hint">STOP</span>
                  </button>

                  <button
                    className="dpad-btn dpad-right"
                    onClick={() => onManualDrive?.('right')}
                    title="Steer Right (Key: D or Right Arrow)"
                  >
                    <ArrowRight size={18} />
                    <span className="dpad-key-hint">D</span>
                  </button>
                </div>

                <button
                  className="dpad-btn dpad-down"
                  onClick={() => onManualDrive?.('backward')}
                  title="Reverse (Key: S or Down Arrow)"
                >
                  <ArrowDown size={18} />
                  <span className="dpad-key-hint">S</span>
                </button>
              </div>

              {/* Live Teleop Metrics */}
              <div className="dpad-telemetry">
                <div className="teleop-stat">
                  <span className="stat-label">Throttle</span>
                  <span className="stat-val">{currentSpeed} m/s</span>
                </div>
                <div className="teleop-stat">
                  <span className="stat-label">Heading</span>
                  <span className="stat-val">{currentHeading}°</span>
                </div>
                <div className="teleop-stat">
                  <span className="stat-label">Controls</span>
                  <span className="stat-val">W/A/S/D</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= MODE 3: EMERGENCY RETURN OUTSIDE ================= */}
        {isEmergency && (
          <div className="mode-pane mode-pane-emergency">
            <div className="emergency-alert-card">
              <div className="emergency-alert-header">
                <ShieldAlert size={20} className="emergency-icon-pulse" />
                <div className="emergency-alert-title">
                  Commanded to Return Outside
                </div>
              </div>
              <p className="emergency-alert-desc">
                High-priority evacuation command engaged. Subterranean exploration suspended.
                Robot is navigating towards surface portal exit at maximum speed (2.4 m/s).
              </p>

              <div className="emergency-status-row">
                <div className="emerg-stat-box">
                  <span className="emerg-stat-lbl">Destination</span>
                  <span className="emerg-stat-val">Surface Portal (Outside)</span>
                </div>
                <div className="emerg-stat-box">
                  <span className="emerg-stat-lbl">Egress Speed</span>
                  <span className="emerg-stat-val">2.4 m/s</span>
                </div>
                <div className="emerg-stat-box">
                  <span className="emerg-stat-lbl">Shaft Depth</span>
                  <span className="emerg-stat-val">{telemetry?.sensors?.depth?.value ?? -480}m</span>
                </div>
              </div>

              <div className="emergency-actions-row">
                <button
                  className="emerg-action-btn btn-cancel-evac"
                  onClick={() => onCancelEmergency?.()}
                  title="Cancel evacuation and resume normal operations"
                >
                  ✕ Cancel & Hold
                </button>
                <button
                  className="emerg-action-btn btn-switch-manual"
                  onClick={() => onChangeMode?.('manual')}
                  title="Take over manual control"
                >
                  🎮 Switch to Manual
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
