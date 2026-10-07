import React from 'react';
import { UploadCloud } from 'lucide-react';

export default function DropOverlay({ isVisible }) {
  if (!isVisible) return null;

  return (
    <div className="drop-overlay">
      <div className="drop-modal">
        <UploadCloud size={56} className="drop-icon" />
        <h3>Drop JSON Telemetry File Here</h3>
        <p>Instant live update for sensors, 2D map, and robot status</p>
      </div>
    </div>
  );
}
