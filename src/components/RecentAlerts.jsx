import React from 'react';
import { Bell, Check } from 'lucide-react';

export default function RecentAlerts({ alerts = [], onClearAlerts }) {
  const hasAlerts = alerts && alerts.length > 0;

  return (
    <section className="card alerts-card">
      <div className="card-header">
        <div className="card-title-group">
          <Bell size={18} className="card-header-icon" />
          <h2 className="card-title">Recent Alerts</h2>
        </div>
        <div className="card-header-right">
          {hasAlerts && (
            <button className="clear-alerts-btn" onClick={onClearAlerts}>
              Clear All
            </button>
          )}
        </div>
      </div>

      <div className="alerts-body">
        {!hasAlerts ? (
          <div className="alerts-empty-state">
            <div className="green-check-badge">
              <Check size={26} strokeWidth={2.5} />
            </div>
            <div className="empty-alerts-text">No alerts at the moment</div>
            <div className="empty-alerts-sub">Everything looks good!</div>
          </div>
        ) : (
          <div className="alerts-list">
            {alerts.map((a, idx) => (
              <div
                key={a.id || idx}
                className={`alert-item-row ${a.level === 'critical' ? 'critical' : 'warning'}`}
              >
                <div className="alert-item-left">
                  <div className="alert-msg">{a.message}</div>
                  <div className="alert-meta">
                    {a.time || 'Just now'} • {a.action || 'Monitoring'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
