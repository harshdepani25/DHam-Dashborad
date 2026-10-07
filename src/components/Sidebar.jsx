import React, { useState, useEffect } from 'react';
import {
  Home,
  Map as MapIcon,
  Video,
  Activity,
  Bell,
  Settings,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function Sidebar({
  activeView,
  setActiveView,
  alertCount,
  onOpenRobotModal,
  robotInfo = {},
  theme = 'dark',
  onToggleTheme
}) {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    try {
      return localStorage.getItem('mining_sidebar_collapsed') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('mining_sidebar_collapsed', isCollapsed ? 'true' : 'false');
    } catch {
      // ignore
    }
  }, [isCollapsed]);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'map', label: 'Spatial Map', icon: MapIcon },
    { id: 'camera', label: 'Live Camera', icon: Video },
    { id: 'analytics', label: 'Gas Analytics', icon: Activity },
    { id: 'alerts', label: 'Alerts', icon: Bell, badge: alertCount },
    { id: 'settings', label: 'Diagnostics', icon: Settings },
  ];

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : 'expanded'}`}>
      {/* 1. Header with Brand & Collapse Button */}
      <div className="sidebar-header">
        <div
          className="brand-group"
          onClick={onOpenRobotModal}
          title="Click to view Robot Specifications & Telemetry"
        >
          <div className="brand-avatar-box">
            <img
              src="/assets/robot_avatar.jpg"
              alt="Mining Robot Avatar"
              className="brand-avatar-img"
            />
            <span className="brand-pulse-dot" title="Actuator Core Online"></span>
          </div>

          {!isCollapsed && (
            <div className="brand-text">
              <span className="brand-title">{robotInfo?.name || "Mining Bot"}</span>
              <span className="brand-subtitle">Subsurface OS</span>
            </div>
          )}
        </div>

        <button
          className="sidebar-toggle-btn"
          onClick={toggleCollapse}
          title={isCollapsed ? "Expand Sidebar (Full Navigation)" : "Collapse Sidebar (Compact Icons)"}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
        </button>
      </div>

      {/* 2. Primary Navigation Links */}
      <nav className="sidebar-nav">
        {!isCollapsed && <div className="nav-section-title">Mission Navigation</div>}

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;

          return (
            <button
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setActiveView(item.id)}
              title={isCollapsed ? item.label : undefined}
            >
              <div className="nav-icon-wrapper">
                <Icon size={19} />
                {item.badge > 0 && (
                  <span className="alert-nav-badge" title={`${item.badge} active alerts`}>
                    {item.badge}
                  </span>
                )}
              </div>

              {!isCollapsed && (
                <span className="nav-label">{item.label}</span>
              )}

              {isActive && <span className="nav-active-pill-bar"></span>}
            </button>
          );
        })}
      </nav>

      {/* 3. Footer: Theme Toggle & Robot Profile Card */}
      <div className="sidebar-bottom">
        <button
          className="sidebar-theme-toggle-btn"
          onClick={onToggleTheme}
          title={theme === 'dark' ? "Switch to White / Light Theme" : "Switch to Cyber Dark Theme"}
        >
          <div className="theme-toggle-icon-box">
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </div>
          {!isCollapsed && (
            <span className="theme-toggle-text">
              {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
            </span>
          )}
        </button>

        <div
          className="robot-status-card"
          onClick={onOpenRobotModal}
          title="View Full Robot Specifications Modal"
        >
          <div className="robot-card-icon">
            <img src="/assets/robot_avatar.jpg" alt="Mining Bot Badge" />
            <span className="online-indicator-dot"></span>
          </div>

          {!isCollapsed && (
            <div className="robot-card-info">
              <div className="robot-card-header-row">
                <span className="robot-card-title">{robotInfo?.name || "Mining Bot"}</span>
                <span className="robot-card-specs-badge">Specs ↗</span>
              </div>
              <div className="robot-card-meta-row">
                <span className="robot-card-ver">{robotInfo?.version || "v1.0.0"}</span>
                <span className="robot-card-status-dot">● Online</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
