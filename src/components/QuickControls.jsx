import React from 'react';
import { Zap, Play, Pause, Square, Home } from 'lucide-react';

export default function QuickControls({ onControlAction }) {
  return (
    <section className="card controls-card">
      <div className="card-header">
        <div className="card-title-group">
          <Zap size={18} className="card-header-icon" />
          <h2 className="card-title">Quick Controls</h2>
        </div>
      </div>

      <div className="controls-grid">
        {/* Start */}
        <button
          className="ctrl-action-btn btn-start"
          onClick={() => onControlAction('start')}
          title="Start Autonomous Mission"
        >
          <div className="ctrl-icon-box">
            <Play size={22} fill="currentColor" />
          </div>
          <span className="ctrl-btn-label">Start</span>
        </button>

        {/* Pause */}
        <button
          className="ctrl-action-btn btn-pause"
          onClick={() => onControlAction('pause')}
          title="Pause Mining Operations"
        >
          <div className="ctrl-icon-box">
            <Pause size={22} fill="currentColor" />
          </div>
          <span className="ctrl-btn-label">Pause</span>
        </button>

        {/* Stop */}
        <button
          className="ctrl-action-btn btn-stop"
          onClick={() => onControlAction('stop')}
          title="Emergency Stop"
        >
          <div className="ctrl-icon-box">
            <Square size={20} fill="currentColor" />
          </div>
          <span className="ctrl-btn-label">Stop</span>
        </button>

        {/* Home */}
        <button
          className="ctrl-action-btn btn-home"
          onClick={() => onControlAction('home')}
          title="Return to Recharge Base"
        >
          <div className="ctrl-icon-box">
            <Home size={22} fill="currentColor" />
          </div>
          <span className="ctrl-btn-label">Home</span>
        </button>
      </div>
    </section>
  );
}
