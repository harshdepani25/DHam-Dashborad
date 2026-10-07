import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';

export default function SystemStatus({ health, subsystems }) {
  const pct = Math.max(0, Math.min(100, health ?? 100));
  const circumference = 314.159; // 2 * PI * 50
  const offset = circumference - (pct / 100) * circumference;

  let strokeColor = '#22c55e';
  if (pct < 70) strokeColor = '#ef4444';
  else if (pct < 90) strokeColor = '#f97316';

  const items = [
    { key: 'sensors', label: 'Sensors', state: subsystems?.sensors || 'Active' },
    { key: 'motors', label: 'Motors', state: subsystems?.motors || 'Active' },
    { key: 'comm', label: 'Communication', state: subsystems?.communication || 'Stable' },
    { key: 'nav', label: 'Navigation', state: subsystems?.navigation || 'Active' },
  ];

  return (
    <section className="card status-card">
      <div className="card-header">
        <div className="card-title-group">
          <ShieldCheck size={18} className="card-header-icon" />
          <h2 className="card-title">System Status</h2>
        </div>
      </div>

      <div className="system-status-body">
        {/* Radial Health Gauge */}
        <div className="health-gauge-container">
          <div className="circular-progress">
            <svg className="progress-ring" viewBox="0 0 120 120">
              <circle className="progress-ring-bg" cx="60" cy="60" r="50" />
              <circle
                className="progress-ring-circle"
                cx="60"
                cy="60"
                r="50"
                style={{
                  strokeDashoffset: offset,
                  stroke: strokeColor
                }}
              />
            </svg>
            <div className="health-gauge-label">
              <span className="health-gauge-number">{pct}%</span>
              <span className="health-gauge-desc">System Health</span>
            </div>
          </div>
        </div>

        {/* Subsystems List */}
        <div className="subsystems-list">
          {items.map((item) => {
            const isOk =
              item.state.toLowerCase() === 'active' ||
              item.state.toLowerCase() === 'stable';
            return (
              <div key={item.key} className="subsystem-item">
                <div className="subsystem-name-group">
                  <span className={`status-check-circle ${isOk ? 'active' : 'warning'}`}>
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="subsystem-title">{item.label}</span>
                </div>
                <span className={`subsystem-state ${isOk ? 'active' : 'warning'}`}>
                  {item.state}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
