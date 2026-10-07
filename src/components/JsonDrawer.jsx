import React, { useState, useEffect } from 'react';
import { Code, X, Copy, Download, Check } from 'lucide-react';

export default function JsonDrawer({
  isOpen,
  onClose,
  telemetry,
  onApplyCustomJson,
  onResetSample,
  onShowToast
}) {
  const [activeTab, setActiveTab] = useState('live');
  const [customText, setCustomText] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (telemetry) {
      setCustomText(JSON.stringify(telemetry, null, 2));
    }
  }, [telemetry]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(telemetry, null, 2));
    setCopied(true);
    onShowToast?.("Telemetry JSON copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(telemetry, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mining_telemetry_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    onShowToast?.("Telemetry JSON downloaded!");
  };

  const handleApply = () => {
    try {
      const parsed = JSON.parse(customText);
      onApplyCustomJson(parsed);
      onShowToast?.("Custom JSON applied to dashboard!");
      onClose();
    } catch (err) {
      alert("Invalid JSON format: " + err.message);
    }
  };

  return (
    <>
      <div className="json-drawer-backdrop" onClick={onClose} />
      <aside className="json-drawer">
        <div className="drawer-header">
          <div className="drawer-title-group">
            <Code size={20} />
            <h3>JSON Telemetry Integration Hub</h3>
          </div>
          <button className="drawer-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="drawer-tabs">
          <button
            className={`drawer-tab ${activeTab === 'live' ? 'active' : ''}`}
            onClick={() => setActiveTab('live')}
          >
            Live Telemetry JSON
          </button>
          <button
            className={`drawer-tab ${activeTab === 'edit' ? 'active' : ''}`}
            onClick={() => setActiveTab('edit')}
          >
            Inject / Paste Custom JSON
          </button>
          <button
            className={`drawer-tab ${activeTab === 'api' ? 'active' : ''}`}
            onClick={() => setActiveTab('api')}
          >
            API & ROS Integration
          </button>
        </div>

        <div className="drawer-content">
          {/* TAB 1: Live JSON */}
          {activeTab === 'live' && (
            <div className="tab-pane active">
              <div className="drawer-actions-bar">
                <div className="stream-status">
                  <span className="pulse-dot"></span> Live Sync Active
                </div>
                <div className="action-btn-group">
                  <button className="secondary-btn" onClick={handleCopy}>
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    <span style={{ marginLeft: 4 }}>{copied ? 'Copied' : 'Copy JSON'}</span>
                  </button>
                  <button className="secondary-btn" onClick={handleDownload}>
                    <Download size={12} />
                    <span style={{ marginLeft: 4 }}>Download .json</span>
                  </button>
                </div>
              </div>
              <pre className="json-code-viewer">
                <code>{JSON.stringify(telemetry, null, 2)}</code>
              </pre>
            </div>
          )}

          {/* TAB 2: Edit Custom JSON */}
          {activeTab === 'edit' && (
            <div className="tab-pane active">
              <p className="tab-instruction">
                Paste or edit your robot's JSON telemetry packet below and click <strong>Apply Telemetry</strong> to immediately update the 2D map, sensors, and status:
              </p>
              <textarea
                className="custom-json-textarea"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                spellCheck="false"
              />
              <div className="tab-footer-actions">
                <button className="secondary-btn" onClick={onResetSample}>
                  Reset to Nominal
                </button>
                <button className="primary-btn" onClick={handleApply}>
                  Apply Telemetry
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: API & Robot Guide */}
          {activeTab === 'api' && (
            <div className="tab-pane active">
              <div className="api-guide-section">
                <h4>1. Direct HTTP POST Stream (Python / ROS / C++)</h4>
                <p>Post live telemetry directly into your dashboard server:</p>
                <pre className="code-snippet">
                  <code>{`curl -X POST http://localhost:3050/api/telemetry \\
  -H "Content-Type: application/json" \\
  -d '{
    "sensors": {
      "mq4": {"value": 1.4},
      "mq7": {"value": 5},
      "mq135": {"value": 19.2},
      "mq136": {"value": 0.35},
      "dht22_temp": {"value": 27.4},
      "dht22_humidity": {"value": 66.5},
      "o2": {"value": 20.9},
      "pm25": {"value": 32},
      "battery": {"value": 78}
    }
  }'`}</code>
                </pre>

                <h4>2. Python Live Telemetry Loop (MQ & DHT22 Suite)</h4>
                <pre className="code-snippet">
                  <code>{`import requests, time, random

while True:
    payload = {
        "sensors": {
            "mq4": {"value": round(random.uniform(1.0, 1.8), 2)},
            "mq7": {"value": random.randint(3, 8)},
            "mq135": {"value": round(random.uniform(15.0, 22.0), 1)},
            "mq136": {"value": round(random.uniform(0.2, 0.5), 2)},
            "dht22_temp": {"value": round(random.uniform(25.0, 29.0), 1)},
            "dht22_humidity": {"value": round(random.uniform(60.0, 75.0), 1)},
            "o2": {"value": round(random.uniform(20.7, 21.0), 1)},
            "pm25": {"value": random.randint(25, 45)},
            "battery": {"value": 78}
        },
        "position": {"x": 52.4, "y": 38.6, "heading": 84}
    }
    requests.post("http://localhost:3050/api/telemetry", json=payload)
    time.sleep(1)`}</code>
                </pre>

                <h4>3. Telemetry JSON Normalization</h4>
                <p>
                  Any JSON payload containing <code>sensors</code>, <code>position</code>, <code>map</code>, or <code>alerts</code> keys is automatically normalized and rendered on this dashboard.
                </p>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
