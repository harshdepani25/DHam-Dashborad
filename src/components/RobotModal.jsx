import React from 'react';
import { X } from 'lucide-react';

export default function RobotModal({ isOpen, onClose, robotInfo }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="robot-details-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-box">
            <img src="/assets/robot_avatar.jpg" alt="Robot Icon" className="modal-avatar" />
            <div>
              <h3>Mining Bot Telemetry Unit</h3>
              <p>Model: {robotInfo.robotId || 'AM-08'} Deep Shaft Rover</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="specs-grid">
            <div className="spec-item">
              <span className="spec-label">Firmware</span>
              <span className="spec-val">{robotInfo.version || 'v1.0.0'}-PROD</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Chassis</span>
              <span className="spec-val">Titanium Heavy Tread</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Operating Depth</span>
              <span className="spec-val">-480 meters</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">LiDAR Range</span>
              <span className="spec-val">60m Solid State</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Gas Detection Array</span>
              <span className="spec-val">MQ-4 (CH4), MQ-7 (CO), MQ-135 (NH3), MQ-136 (H2S)</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Atmospheric & Climate</span>
              <span className="spec-val">DHT22 (Temp & RH), ME2-O2, Laser PM2.5 Dust</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Sensor Signal Bus</span>
              <span className="spec-val">ADS1115 16-Bit ADC + 1-Wire GPIO + I2C/SMBus</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Safety Certification</span>
              <span className="spec-val">MSHA Class 1 Div 1 / ATEX Zone 1 Intrinsically Safe</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Comms Link</span>
              <span className="spec-val">Subterranean Mesh 5.8GHz</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
