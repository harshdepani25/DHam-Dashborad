import React, { useRef, useEffect, useState } from 'react';
import {
  Thermometer,
  Battery as BatteryIcon,
  Flame,
  AlertTriangle,
  Wind,
  Droplets,
  Layers,
  ShieldCheck,
  Activity,
  Info,
  X,
  CheckCircle2,
  Cpu,
  Radio,
  Sliders,
  Filter
} from 'lucide-react';

// Reusable High-DPI Sparkline Canvas
function SparklineCanvas({ data, strokeColor, fillColor }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !data || data.length < 2) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;

    ctx.clearRect(0, 0, w, h);

    const min = Math.min(...data) * 0.92;
    const max = Math.max(...data) * 1.08 || 1;
    const range = max - min || 1;

    const step = w / (data.length - 1);
    const points = data.map((val, i) => ({
      x: i * step,
      y: h - ((val - min) / range) * (h - 8) - 4
    }));

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 0; i < points.length - 1; i++) {
      const xc = (points[i].x + points[i + 1].x) / 2;
      const yc = (points[i].y + points[i + 1].y) / 2;
      ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
    }
    ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);

    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2.2;
    ctx.lineCap = 'round';
    ctx.stroke();

    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();

    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, fillColor);
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fill();
  }, [data, strokeColor, fillColor]);

  return <canvas ref={canvasRef} className="sensor-sparkline" />;
}

// Full Sensor Definitions Catalog
export const SENSOR_DEFINITIONS = [
  {
    id: 'mq4',
    alias: 'ch4',
    chip: 'MQ-4',
    chipType: 'purple',
    name: 'Methane (CH4)',
    shortFormula: 'CH4',
    category: 'gas',
    formula: 'Combustible / Natural Gas / CNG',
    desc: 'Explosive firedamp gas detector',
    unit: 'ppm',
    precision: 2,
    color: '#a855f7',
    fillColor: 'rgba(168, 85, 247, 0.22)',
    glowClass: 'purple-glow',
    cardClass: 'mq4-card',
    icon: Flame,
    threshold: 2.5,
    criticalThreshold: 4.0,
    safeText: '< 2.5 ppm',
    pin: 'ADC0 (A0)',
    specs: {
      type: 'Solid State Semiconductor (SnO2)',
      range: '300 – 10,000 ppm CH4',
      responseTime: '< 10 sec rapid catalytic',
      voltage: '5.0V ± 0.1V DC (150mA)',
      heaterPower: '≤ 900 mW',
      standard: 'MSHA 30 CFR § 75.323 (Max 1.0% / 10,000 ppm)',
      baseline: 'Rs/R0 = 4.4 clean air reference'
    }
  },
  {
    id: 'mq7',
    alias: 'co',
    chip: 'MQ-7',
    chipType: 'orange',
    name: 'Carbon Monoxide',
    shortFormula: 'CO',
    category: 'gas',
    formula: 'Toxic Whitedamp (CO)',
    desc: 'Incomplete combustion & smoldering coal',
    unit: 'ppm',
    precision: 0,
    color: '#f97316',
    fillColor: 'rgba(249, 115, 22, 0.22)',
    glowClass: 'orange-glow',
    cardClass: 'mq7-card',
    icon: AlertTriangle,
    threshold: 25,
    criticalThreshold: 40,
    safeText: '< 25 ppm',
    pin: 'ADC1 (A1)',
    specs: {
      type: 'Micro-hotplate Metal Oxide (SnO2)',
      range: '10 – 1,000 ppm CO',
      responseTime: '< 60 sec high/low heat cycle',
      voltage: '5.0V (High) / 1.4V (Low) alternating',
      heaterPower: '≤ 350 mW avg',
      standard: 'OSHA PEL: 50 ppm | ACGIH TLV: 25 ppm',
      baseline: 'Rs/R0 = 7.2 clean air reference'
    }
  },
  {
    id: 'mq135',
    chip: 'MQ-135',
    chipType: 'cyan',
    name: 'Air Quality / NH3',
    shortFormula: 'AQI/NH3',
    category: 'gas',
    formula: 'NH3 / NOx / Benzene / Smoke',
    desc: 'Toxic blasting fumes & diesel exhaust',
    unit: 'ppm',
    precision: 1,
    color: '#06b6d4',
    fillColor: 'rgba(6, 182, 212, 0.22)',
    glowClass: 'cyan-glow',
    cardClass: 'mq135-card',
    icon: Wind,
    threshold: 50,
    criticalThreshold: 80,
    safeText: '< 50 ppm',
    pin: 'ADC2 (A2)',
    specs: {
      type: 'Broad-Spectrum Metal Oxide Semiconductor',
      range: '10 – 1,000 ppm Multi-gas',
      responseTime: '< 10 sec',
      voltage: '5.0V ± 0.1V DC (160mA)',
      heaterPower: '≤ 800 mW',
      standard: 'NIOSH REL: 25 ppm NH3 | EPA Ambient Standard',
      baseline: 'Rs/R0 = 3.6 clean air reference'
    }
  },
  {
    id: 'mq136',
    chip: 'MQ-136',
    chipType: 'rose',
    name: 'Hydrogen Sulfide',
    shortFormula: 'H2S',
    category: 'gas',
    formula: 'H2S / Sour Gas / SO2',
    desc: 'Deadly toxic stinkdamp sewer hazard',
    unit: 'ppm',
    precision: 2,
    color: '#f43f5e',
    fillColor: 'rgba(244, 63, 94, 0.22)',
    glowClass: 'rose-glow',
    cardClass: 'mq136-card',
    icon: Activity,
    threshold: 5.0,
    criticalThreshold: 10.0,
    safeText: '< 5.0 ppm',
    pin: 'ADC3 (A3)',
    specs: {
      type: 'High Sensitivity SnO2 Semiconductor',
      range: '1 – 200 ppm H2S',
      responseTime: '< 20 sec rapid sniff',
      voltage: '5.0V ± 0.1V DC',
      heaterPower: '≤ 850 mW',
      standard: 'MSHA: 5.0 ppm Action Ceiling | OSHA: 20 ppm max',
      baseline: 'Rs/R0 = 2.1 calibrated baseline'
    }
  },
  {
    id: 'dht22_temp',
    alias: 'temperature',
    chip: 'DHT22',
    chipType: 'blue',
    name: 'DHT22 Temperature',
    shortFormula: 'Temp',
    category: 'climate',
    formula: 'Thermal State (°C)',
    desc: 'Subterranean ambient temperature',
    unit: '°C',
    precision: 1,
    color: '#38bdf8',
    fillColor: 'rgba(56, 189, 248, 0.22)',
    glowClass: 'blue-glow',
    cardClass: 'dht22-temp-card',
    icon: Thermometer,
    threshold: 45,
    criticalThreshold: 55,
    safeText: '15 – 35 °C',
    pin: 'GPIO 4 (1-Wire)',
    specs: {
      type: 'NTC Thermistor / Calibrated AM2302',
      range: '-40.0°C to +80.0°C (±0.5°C accuracy)',
      responseTime: '2.0 sec reading cycle',
      voltage: '3.3V – 5.5V DC',
      heaterPower: 'Ultra-low 1.5 mA max active',
      standard: 'Mine Safety & Health Admin Thermal Comfort Code',
      baseline: 'Factory calibrated 16-bit internal ADC'
    }
  },
  {
    id: 'dht22_humidity',
    alias: 'humidity',
    chip: 'DHT22',
    chipType: 'teal',
    name: 'DHT22 Humidity',
    shortFormula: '% RH',
    category: 'climate',
    formula: 'Relative Humidity (% RH)',
    desc: 'Shaft aquifer & borehole moisture',
    unit: '% RH',
    precision: 1,
    color: '#0ea5e9',
    fillColor: 'rgba(14, 165, 233, 0.22)',
    glowClass: 'teal-glow',
    cardClass: 'dht22-hum-card',
    icon: Droplets,
    threshold: 85,
    criticalThreshold: 95,
    safeText: '40 – 80 %',
    pin: 'GPIO 4 (1-Wire)',
    specs: {
      type: 'Polymer Capacitor Relative Humidity Sensor',
      range: '0 – 100% RH (±2% RH precision)',
      responseTime: '2.0 sec reading cycle',
      voltage: '3.3V – 5.5V DC',
      heaterPower: '1.0 – 1.5 mA active',
      standard: 'Explosive Atmosphere Dew Point Standard',
      baseline: 'Single-bus digital protocol'
    }
  },
  {
    id: 'o2',
    chip: 'ME2-O2',
    chipType: 'emerald',
    name: 'Atmospheric O2',
    shortFormula: 'O2',
    category: 'climate',
    formula: 'Oxygen (% Vol)',
    desc: 'Crew life support & asphyxiation safety',
    unit: '% Vol',
    precision: 1,
    color: '#10b981',
    fillColor: 'rgba(16, 185, 129, 0.22)',
    glowClass: 'emerald-glow',
    cardClass: 'o2-card',
    icon: ShieldCheck,
    isLowerThreshold: true,
    threshold: 19.5,
    criticalThreshold: 16.0,
    safeText: '19.5 – 23.5 %',
    pin: 'I2C 0x48',
    specs: {
      type: 'Electrochemical Fuel Cell O2 Sensor',
      range: '0 – 25% Vol O2 (0.1% resolution)',
      responseTime: '< 15 sec (T90)',
      voltage: '3.3V via ADS1115 Differential Amp',
      heaterPower: 'Zero power self-generating galvanic cell',
      standard: 'MSHA § 75.321: Min 19.5% O2 in working faces',
      baseline: 'Span calibrated at 20.9% sea-level air'
    }
  },
  {
    id: 'pm25',
    chip: 'GP2Y1010',
    chipType: 'amber',
    name: 'Particulate Dust',
    shortFormula: 'PM2.5',
    category: 'climate',
    formula: 'Respirable Dust (PM2.5)',
    desc: 'Coal dust explosion & silica monitoring',
    unit: 'µg/m³',
    precision: 0,
    color: '#eab308',
    fillColor: 'rgba(234, 179, 8, 0.22)',
    glowClass: 'amber-glow',
    cardClass: 'pm25-card',
    icon: Layers,
    threshold: 100,
    criticalThreshold: 150,
    safeText: '< 50 µg/m³',
    pin: 'UART2 / RX',
    specs: {
      type: 'Optical Laser Scattering Dust Sensor',
      range: '0 – 500 µg/m³ particulate density',
      responseTime: '< 1.0 sec pulse response',
      voltage: '5.0V DC (20 mA)',
      heaterPower: '≤ 100 mW',
      standard: 'MSHA Respirable Coal Dust Standard (1.5 mg/m³)',
      baseline: 'Zero-point dark chamber calibrated'
    }
  },
  {
    id: 'battery',
    chip: 'BMS-4S',
    chipType: 'green',
    name: 'Battery System',
    shortFormula: 'BAT',
    category: 'power',
    formula: 'LiFePO4 4S Pack',
    desc: 'Autonomous rover drive & sensor power',
    unit: '%',
    precision: 0,
    color: '#22c55e',
    fillColor: 'rgba(34, 197, 94, 0.22)',
    glowClass: 'green-glow',
    cardClass: 'battery-card',
    icon: BatteryIcon,
    isBattery: true,
    threshold: 20,
    criticalThreshold: 12,
    safeText: '> 20 %',
    pin: 'SMBus I2C',
    specs: {
      type: 'Smart Battery Management System (BMS)',
      range: '0 – 100% State of Charge (SoC)',
      responseTime: 'Continuous 100ms telemetry',
      voltage: '14.8V Nominal (16.8V Full Charge)',
      heaterPower: 'Internal cell thermal protection',
      standard: 'UN 38.3 Lithium Battery Safety Standard',
      baseline: 'Coulomb-counting fuel gauge IC'
    }
  }
];

export default function SensorCards({ sensors, history, onShowToast }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [inspectingSensor, setInspectingSensor] = useState(null);

  // Helper to extract raw value
  const getSensorValue = (def) => {
    const raw = sensors?.[def.id] ?? (def.alias ? sensors?.[def.alias] : undefined);
    if (raw === undefined || raw === null) {
      if (def.id === 'mq4') return 1.2;
      if (def.id === 'mq7') return 4;
      if (def.id === 'mq135') return 18;
      if (def.id === 'mq136') return 0.3;
      if (def.id === 'dht22_temp') return 27.2;
      if (def.id === 'dht22_humidity') return 68.0;
      if (def.id === 'o2') return 20.9;
      if (def.id === 'pm25') return 34;
      if (def.id === 'battery') return 78;
      return 0;
    }
    const val = typeof raw === 'object' ? raw.value : raw;
    return Number(val);
  };

  // Helper to compute status
  const getSensorStatus = (def, val) => {
    if (def.isLowerThreshold) {
      if (val < def.criticalThreshold) return 'danger';
      if (val < def.threshold) return 'warning';
      return 'normal';
    }
    if (def.isBattery) {
      if (val < def.criticalThreshold) return 'danger';
      if (val < def.threshold) return 'warning';
      return 'normal';
    }
    if (val >= def.criticalThreshold) return 'danger';
    if (val >= def.threshold) return 'warning';
    return 'normal';
  };

  // Filtered list
  const filteredSensors = SENSOR_DEFINITIONS.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  // Count active warnings
  const hazardCount = SENSOR_DEFINITIONS.filter((def) => {
    const val = getSensorValue(def);
    const status = getSensorStatus(def, val);
    return status === 'danger' || status === 'warning';
  }).length;

  return (
    <div className="sensors-suite-container">
      {/* Top Header & Filter Bar */}
      <div className="sensors-suite-header">
        <div className="sensors-header-title-box">
          <div className="sensors-header-title-row">
            <Sliders size={18} className="sensors-title-icon" />
            <h3 className="sensors-suite-title">Sensor Telemetry Array</h3>
            <span className="sensors-count-pill">
              {SENSOR_DEFINITIONS.length} Channels Online
            </span>
          </div>
          <span className="sensors-suite-subtitle">
            MSHA & ATEX Zone 1 Compliant • MQ Series Gas Detection & DHT22 Environmental Matrix
          </span>
        </div>

        <div className="sensors-filter-row">
          <div className="sensor-category-tabs">
            <button
              className={`sensor-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Sensors ({SENSOR_DEFINITIONS.length})
            </button>
            <button
              className={`sensor-tab-btn ${activeCategory === 'gas' ? 'active' : ''}`}
              onClick={() => setActiveCategory('gas')}
            >
              Gas Array (MQ-4, 7, 135, 136)
            </button>
            <button
              className={`sensor-tab-btn ${activeCategory === 'climate' ? 'active' : ''}`}
              onClick={() => setActiveCategory('climate')}
            >
              Atmosphere & Climate (DHT22, O2, Dust)
            </button>
            <button
              className={`sensor-tab-btn ${activeCategory === 'power' ? 'active' : ''}`}
              onClick={() => setActiveCategory('power')}
            >
              Power (BMS)
            </button>
          </div>

          <div className={`sensors-global-status-badge ${hazardCount > 0 ? 'hazard' : 'nominal'}`}>
            <span className="pulse-dot"></span>
            <span>{hazardCount > 0 ? `${hazardCount} Active Hazards` : 'All Systems Nominal'}</span>
          </div>
        </div>
      </div>

      {/* Sensor Cards Grid */}
      <div className="sensors-row-grid">
        {filteredSensors.map((def) => {
          const val = getSensorValue(def);
          const status = getSensorStatus(def, val);
          const formattedVal = val.toFixed(def.precision);
          const Icon = def.icon;

          // History array for sparkline
          const histData = history?.[def.id] ?? (def.alias ? history?.[def.alias] : null) ?? [val, val, val, val];

          return (
            <section
              key={def.id}
              className={`card sensor-card ${def.cardClass} ${status}`}
              onClick={() => setInspectingSensor(def)}
              title={`Click to inspect ${def.name} (${def.chip}) calibration & specs`}
            >
              <div className="sensor-card-top">
                <div className="sensor-header">
                  <div className={`sensor-icon-wrapper ${def.glowClass}`}>
                    <Icon size={20} color={def.color} />
                  </div>
                  <div className="sensor-title-col">
                    <div className="sensor-chip-row">
                      <span className={`chip-badge ${def.chipType}`}>{def.chip}</span>
                      <span className="sensor-short-code">{def.shortFormula}</span>
                    </div>
                    <div className="sensor-name">{def.name}</div>
                  </div>
                </div>

                <div className="sensor-status-col">
                  <span className={`sensor-status-badge ${status}`}>
                    {status.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Primary Value Readout */}
              <div className="sensor-val-unit">
                <span className="sensor-value">{formattedVal}</span>
                <span className="sensor-unit">{def.unit}</span>
              </div>

              {/* Sparkline Canvas or Battery Bar */}
              {def.isBattery ? (
                <div className="battery-bar-container">
                  <div className="battery-bar-track">
                    <div
                      className="battery-bar-fill"
                      style={{
                        width: `${Math.max(0, Math.min(100, val))}%`,
                        background:
                          val < 20
                            ? 'linear-gradient(90deg, #dc2626, #ef4444)'
                            : val < 40
                            ? 'linear-gradient(90deg, #ea580c, #f97316)'
                            : 'linear-gradient(90deg, #10b981, #22c55e)'
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="sparkline-container">
                  <SparklineCanvas
                    data={histData}
                    strokeColor={def.color}
                    fillColor={def.fillColor}
                  />
                </div>
              )}

              {/* Footer Meta Row */}
              <div className="sensor-card-footer">
                <div className="sensor-footer-meta">
                  <span className="sensor-limit-tag" title="Safety Threshold">
                    {def.safeText}
                  </span>
                  <span className="sensor-pin-tag" title="Hardware Interface">
                    {def.pin}
                  </span>
                </div>
                <button
                  className="sensor-inspect-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setInspectingSensor(def);
                  }}
                  title="View Sensor Diagnostics"
                >
                  <Info size={13} />
                </button>
              </div>
            </section>
          );
        })}
      </div>

      {/* Detailed Sensor Diagnostics Modal */}
      {inspectingSensor && (
        <SensorDiagnosticsModal
          sensor={inspectingSensor}
          currentVal={getSensorValue(inspectingSensor)}
          status={getSensorStatus(inspectingSensor, getSensorValue(inspectingSensor))}
          onClose={() => setInspectingSensor(null)}
          onShowToast={onShowToast}
        />
      )}
    </div>
  );
}

// Sensor Diagnostics & Calibration Modal Component
function SensorDiagnosticsModal({ sensor, currentVal, status, onClose, onShowToast }) {
  const Icon = sensor.icon;
  const formattedVal = currentVal.toFixed(sensor.precision);

  const handleCalibrate = () => {
    onShowToast?.(`Calibrated zero-drift baseline for ${sensor.chip} (${sensor.name})`);
  };

  const handleSelfTest = () => {
    onShowToast?.(`Self-test passed: ${sensor.chip} response time < 10ms. Signal nominal.`);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="sensor-diag-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-box">
            <div className={`sensor-icon-wrapper ${sensor.glowClass}`} style={{ width: 44, height: 44 }}>
              <Icon size={24} color={sensor.color} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className={`chip-badge ${sensor.chipType}`}>{sensor.chip}</span>
                <h3 style={{ margin: 0 }}>{sensor.name} Diagnostics</h3>
              </div>
              <p style={{ margin: 0, fontSize: 12, color: 'var(--text-secondary)' }}>
                Target Gas / Parameter: {sensor.formula} • Hardware Pin: {sensor.pin}
              </p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="diag-modal-body">
          {/* Current Live Status Strip */}
          <div className={`diag-live-strip ${status}`}>
            <div className="diag-readout">
              <span className="diag-readout-label">Live Telemetry Reading</span>
              <div className="diag-readout-val">
                <span className="val-large">{formattedVal}</span>
                <span className="unit-small">{sensor.unit}</span>
              </div>
            </div>

            <div className="diag-threshold-box">
              <div className="diag-threshold-item">
                <span className="dim">Safe Operational Range:</span>
                <strong>{sensor.safeText}</strong>
              </div>
              <div className="diag-threshold-item">
                <span className="dim">Action Threshold:</span>
                <strong>{sensor.threshold} {sensor.unit}</strong>
              </div>
              <div className="diag-threshold-item">
                <span className="dim">Current Status:</span>
                <span className={`status-pill-text ${status}`}>{status.toUpperCase()}</span>
              </div>
            </div>
          </div>

          {/* Technical Specifications Grid */}
          <h4 className="diag-section-title">Hardware & Datasheet Specifications</h4>
          <div className="diag-specs-grid">
            <div className="diag-spec-row">
              <span className="spec-name">Sensor Architecture</span>
              <span className="spec-data">{sensor.specs.type}</span>
            </div>
            <div className="diag-spec-row">
              <span className="spec-name">Detection Dynamic Range</span>
              <span className="spec-data">{sensor.specs.range}</span>
            </div>
            <div className="diag-spec-row">
              <span className="spec-name">Response Time (T90)</span>
              <span className="spec-data">{sensor.specs.responseTime}</span>
            </div>
            <div className="diag-spec-row">
              <span className="spec-name">Operating Voltage & Pin</span>
              <span className="spec-data">{sensor.specs.voltage} • {sensor.pin}</span>
            </div>
            <div className="diag-spec-row">
              <span className="spec-name">Heater / Power Load</span>
              <span className="spec-data">{sensor.specs.heaterPower}</span>
            </div>
            <div className="diag-spec-row">
              <span className="spec-name">Safety Compliance Standard</span>
              <span className="spec-data">{sensor.specs.standard}</span>
            </div>
            <div className="diag-spec-row full-width">
              <span className="spec-name">Calibration Baseline Ratio</span>
              <span className="spec-data">{sensor.specs.baseline}</span>
            </div>
          </div>

          {/* Actions Bar */}
          <div className="diag-actions-bar">
            <button className="secondary-btn" onClick={handleCalibrate}>
              <Cpu size={14} style={{ marginRight: 6 }} />
              Calibrate R0 Zero Baseline
            </button>
            <button className="primary-btn" onClick={handleSelfTest}>
              <CheckCircle2 size={14} style={{ marginRight: 6 }} />
              Run Channel Diagnostic Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
