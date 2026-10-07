import React from 'react';
import { Home, Map as MapIcon, Video, Activity, Bell, Settings, Sun, Moon } from 'lucide-react';

export default function Sidebar({ activeView, setActiveView, alertCount, onOpenRobotModal, robotInfo, theme, onToggleTheme }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'map', label: 'Map', icon: MapIcon },
    { id: 'camera', label: 'Camera', icon: Video },
    { id: 'analytics', label: 'Analytics', icon: Activity },
    { id: 'alerts', label: 'Alerts', icon: Bell, badge: alertCount },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="brand-logo" onClick={onOpenRobotModal} title="Mining Robot Controller">
          <img src="/assets/robot_avatar.jpg" alt="Robot Mascot" className="brand-avatar-img" />
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setActiveView(item.id)}
                title={item.label}
              >
                <div className="nav-icon-wrapper">
                  <Icon size={20} />
                  {item.badge > 0 && (
                    <span className="alert-nav-badge">{item.badge}</span>
                  )}
                </div>
                <span className="nav-label">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="sidebar-bottom">
        <button
          className="sidebar-theme-toggle-btn"
          onClick={onToggleTheme}
          title={theme === 'dark' ? "Switch to White / Light Theme" : "Switch to Cyber Dark Theme"}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <div className="robot-status-card" onClick={onOpenRobotModal} title="View Robot Specs">
          <div className="robot-card-icon">
            <img src="/assets/robot_avatar.jpg" alt="Mining Bot Badge" />
            <span className="online-indicator-dot"></span>
          </div>
          <div className="robot-card-info">
            <div className="robot-card-title">{robotInfo.name || "Mining Bot"}</div>
            <div className="robot-card-ver">{robotInfo.version || "v1.0.0"}</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
