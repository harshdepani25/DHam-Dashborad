/**
 * MINING ROBOT SMART DASHBOARD - CORE CONTROLLER
 * Handles live telemetry, 2D map canvas, camera feeds, sparkline graphs,
 * quick controls, and comprehensive JSON file / stream integration.
 */

// ==========================================
// 1. GLOBAL STATE & DEFAULT TELEMETRY
// ==========================================

const state = {
  // Telemetry Snapshot
  telemetry: {
    timestamp: new Date().toISOString(),
    robotId: "AM-08",
    name: "Mining Bot",
    version: "v1.0.0",
    status: "online",
    systemHealth: 100,
    subsystems: {
      sensors: "Active",
      motors: "Active",
      communication: "Stable",
      navigation: "Active"
    },
    sensors: {
      mq4: { value: 1.2, unit: "ppm", threshold: 2.5 },
      mq7: { value: 4, unit: "ppm", threshold: 25 },
      mq135: { value: 18, unit: "ppm", threshold: 50 },
      mq136: { value: 0.3, unit: "ppm", threshold: 5.0 },
      dht22_temp: { value: 27.2, unit: "°C", threshold: 45 },
      dht22_humidity: { value: 68.0, unit: "% RH", threshold: 85 },
      o2: { value: 20.9, unit: "% Vol", minThreshold: 19.5 },
      pm25: { value: 34, unit: "µg/m³", threshold: 100 },
      battery: { value: 78, unit: "%", charging: false, estRuntime: "4h 30m" },
      ch4: { value: 1.2, unit: "ppm", threshold: 2.5 },
      co: { value: 4, unit: "ppm", threshold: 25 },
      temperature: { value: 27.2, unit: "°C", threshold: 45 },
      humidity: { value: 68.0, unit: "%" },
      depth: { value: -480, unit: "m" }
    },
    position: {
      x: 52.4,
      y: 38.6,
      heading: 84,
      zone: "Sector 4",
      speed: 1.2
    },
    map: {
      robot: { x: 52, y: 38 },
      path: [
        { x: 18, y: 25 },
        { x: 24, y: 33 },
        { x: 35, y: 29 },
        { x: 42, y: 22 },
        { x: 47, y: 28 },
        { x: 52, y: 38 },
        { x: 62, y: 42 },
        { x: 75, y: 38 }
      ],
      obstacles: [
        { x: 30, y: 16, width: 6, height: 18, label: "Rockfall Alpha" },
        { x: 65, y: 25, width: 6, height: 16, label: "Pillar Bravo" },
        { x: 67, y: 56, width: 6, height: 18, label: "Debris Delta" }
      ]
    },
    camera: {
      feedAvailable: true,
      currentCam: "front", // 'front' | 'cockpit' | 'webcam'
      nightVision: false,
      flashlight: true
    },
    alerts: []
  },

  // Rolling History Buffers for Sparklines
  history: {
    ch4: [1.1, 1.2, 1.2, 1.3, 1.1, 1.2, 1.4, 1.3, 1.2, 1.2],
    co: [3.8, 4.0, 4.1, 4.2, 3.9, 4.0, 4.3, 4.1, 4.0, 4.0],
    temp: [26.5, 26.8, 27.0, 27.2, 27.0, 26.9, 27.1, 27.0, 27.0, 27.0]
  },

  // UI & Runtime Flags
  liveSimActive: true,
  simTimer: null,
  replayTimer: null,
  missionStatus: "patrolling", // 'patrolling', 'paused', 'stopped', 'homing'
  
  // 2D Map Pan & Zoom
  mapView: {
    zoom: 1.0,
    panX: 0,
    panY: 0,
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0
  },

  // WebCam Stream Object
  webcamStream: null
};

// ==========================================
// 2. DOM ELEMENTS
// ==========================================

const DOM = {
  // Navigation
  navButtons: document.querySelectorAll('.nav-item'),
  navAlertBadge: document.getElementById('nav-alert-badge'),
  robotCardBtn: document.getElementById('robot-card-btn'),
  sidebarRobotName: document.getElementById('sidebar-robot-name'),
  sidebarRobotVer: document.getElementById('sidebar-robot-ver'),

  // Header Actions
  presetToggle: document.getElementById('preset-dropdown-toggle'),
  presetMenu: document.getElementById('preset-menu'),
  presetOptions: document.querySelectorAll('.preset-option'),
  jsonFileInput: document.getElementById('json-file-input'),
  openJsonDrawerBtn: document.getElementById('open-json-drawer-btn'),
  simToggleBtn: document.getElementById('sim-toggle-btn'),
  simToggleText: document.getElementById('sim-toggle-text'),
  connectionStatusPill: document.getElementById('connection-status-pill'),
  connectionStatusText: document.getElementById('connection-status-text'),
  headerOptionsBtn: document.getElementById('header-options-btn'),
  toastBanner: document.getElementById('toast-banner'),
  toastMessage: document.getElementById('toast-message'),

  // 2D Map
  mapCanvas: document.getElementById('mining-map-canvas'),
  mapZoomIn: document.getElementById('map-zoom-in'),
  mapZoomOut: document.getElementById('map-zoom-out'),
  mapRecenter: document.getElementById('map-recenter'),
  hudCoordX: document.getElementById('hud-coord-x'),
  hudCoordY: document.getElementById('hud-coord-y'),
  hudHeading: document.getElementById('hud-heading'),
  hudZone: document.getElementById('hud-zone'),

  // Camera
  cameraViewport: document.getElementById('camera-viewport'),
  cameraFeedImg: document.getElementById('camera-feed-img'),
  webcamVideo: document.getElementById('webcam-video'),
  camSourceToggle: document.getElementById('cam-source-toggle'),
  camSourceLabel: document.getElementById('cam-source-label'),
  camNvToggle: document.getElementById('cam-nv-toggle'),
  camFullscreenBtn: document.getElementById('cam-fullscreen-btn'),
  cameraUnavailable: document.getElementById('camera-unavailable'),
  cameraRetryBtn: document.getElementById('camera-retry-btn'),
  camDepth: document.getElementById('cam-telemetry-depth'),
  camTime: document.getElementById('cam-telemetry-time'),
  camCompass: document.getElementById('cam-compass'),

  // Sensor Elements
  valCh4: document.getElementById('val-ch4'),
  valCo: document.getElementById('val-co'),
  valTemp: document.getElementById('val-temp'),
  valBattery: document.getElementById('val-battery'),
  sparklineCh4: document.getElementById('sparkline-ch4'),
  sparklineCo: document.getElementById('sparkline-co'),
  sparklineTemp: document.getElementById('sparkline-temp'),
  batteryFillBar: document.getElementById('battery-fill-bar'),
  sensorBatteryCard: document.getElementById('sensor-battery'),

  // System Status
  healthPercent: document.getElementById('health-percent'),
  healthRing: document.getElementById('health-ring'),
  stateSensors: document.getElementById('state-sensors'),
  stateMotors: document.getElementById('state-motors'),
  stateComm: document.getElementById('state-comm'),
  stateNav: document.getElementById('state-nav'),
  chkSensors: document.getElementById('icon-chk-sensors'),
  chkMotors: document.getElementById('icon-chk-motors'),
  chkComm: document.getElementById('icon-chk-comm'),
  chkNav: document.getElementById('icon-chk-nav'),

  // Recent Alerts
  alertsContainer: document.getElementById('alerts-container'),
  alertsEmptyView: document.getElementById('alerts-empty-view'),
  alertsListView: document.getElementById('alerts-list-view'),
  clearAlertsBtn: document.getElementById('clear-alerts-btn'),

  // Quick Controls
  btnStart: document.getElementById('btn-ctrl-start'),
  btnPause: document.getElementById('btn-ctrl-pause'),
  btnStop: document.getElementById('btn-ctrl-stop'),
  btnHome: document.getElementById('btn-ctrl-home'),

  // JSON Drawer & Modal
  jsonDrawer: document.getElementById('json-drawer'),
  jsonDrawerBackdrop: document.getElementById('json-drawer-backdrop'),
  jsonDrawerClose: document.getElementById('json-drawer-close'),
  drawerTabs: document.querySelectorAll('.drawer-tab'),
  tabPanes: document.querySelectorAll('.tab-pane'),
  liveJsonDisplay: document.getElementById('live-json-display'),
  customJsonTextarea: document.getElementById('custom-json-textarea'),
  btnApplyCustomJson: document.getElementById('btn-apply-custom-json'),
  btnResetSampleJson: document.getElementById('btn-reset-sample-json'),
  btnCopyJson: document.getElementById('btn-copy-json'),
  btnDownloadJson: document.getElementById('btn-download-json'),
  jsonUpdateTimestamp: document.getElementById('json-update-timestamp'),
  robotModalBackdrop: document.getElementById('robot-modal-backdrop'),
  robotModalClose: document.getElementById('robot-modal-close'),
  dropOverlay: document.getElementById('drop-overlay')
};

// ==========================================
// 3. INITIALIZATION & SETUP
// ==========================================

function initApp() {
  setupEventListeners();
  setupMapInteraction();
  resizeMapCanvas();
  renderDashboard();
  startSimulationTicker();
  initSSEorPolling();

  window.addEventListener('resize', () => {
    resizeMapCanvas();
    renderMap();
    renderAllSparklines();
  });
}

// ==========================================
// 4. TELEMETRY NORMALIZATION & UPDATE
// ==========================================

/**
 * Ingests external JSON telemetry (from file, websocket, HTTP POST or simulation)
 * Safely updates state, history buffers, and refreshes the UI
 */
function updateTelemetry(newPacket, sourceName = "JSON Update") {
  if (!newPacket || typeof newPacket !== 'object') return;

  // Merge timestamp and metadata
  state.telemetry.timestamp = newPacket.timestamp || new Date().toISOString();
  if (newPacket.robotId) state.telemetry.robotId = newPacket.robotId;
  if (newPacket.name) state.telemetry.name = newPacket.name;
  if (newPacket.version) state.telemetry.version = newPacket.version;
  if (newPacket.status) state.telemetry.status = newPacket.status;
  if (typeof newPacket.systemHealth === 'number') state.telemetry.systemHealth = newPacket.systemHealth;

  // Subsystems
  if (newPacket.subsystems) {
    state.telemetry.subsystems = { ...state.telemetry.subsystems, ...newPacket.subsystems };
  }

  // Sensors
  if (newPacket.sensors) {
    if (newPacket.sensors.ch4) {
      const val = typeof newPacket.sensors.ch4 === 'object' ? newPacket.sensors.ch4.value : newPacket.sensors.ch4;
      state.telemetry.sensors.ch4.value = Number(val);
      pushHistory('ch4', Number(val));
    }
    if (newPacket.sensors.co) {
      const val = typeof newPacket.sensors.co === 'object' ? newPacket.sensors.co.value : newPacket.sensors.co;
      state.telemetry.sensors.co.value = Number(val);
      pushHistory('co', Number(val));
    }
    if (newPacket.sensors.temperature) {
      const val = typeof newPacket.sensors.temperature === 'object' ? newPacket.sensors.temperature.value : newPacket.sensors.temperature;
      state.telemetry.sensors.temperature.value = Number(val);
      pushHistory('temp', Number(val));
    }
    if (newPacket.sensors.battery) {
      const val = typeof newPacket.sensors.battery === 'object' ? newPacket.sensors.battery.value : newPacket.sensors.battery;
      state.telemetry.sensors.battery.value = Math.max(0, Math.min(100, Number(val)));
    }
    if (newPacket.sensors.depth) {
      const val = typeof newPacket.sensors.depth === 'object' ? newPacket.sensors.depth.value : newPacket.sensors.depth;
      state.telemetry.sensors.depth.value = Number(val);
    }
  }

  // Position & Map
  if (newPacket.position) {
    state.telemetry.position = { ...state.telemetry.position, ...newPacket.position };
    state.telemetry.map.robot.x = state.telemetry.position.x;
    state.telemetry.map.robot.y = state.telemetry.position.y;
  }
  if (newPacket.map) {
    if (newPacket.map.robot) state.telemetry.map.robot = { ...newPacket.map.robot };
    if (Array.isArray(newPacket.map.path)) state.telemetry.map.path = newPacket.map.path;
    if (Array.isArray(newPacket.map.obstacles)) state.telemetry.map.obstacles = newPacket.map.obstacles;
  }

  // Camera
  if (newPacket.camera) {
    state.telemetry.camera = { ...state.telemetry.camera, ...newPacket.camera };
  }

  // Alerts
  if (Array.isArray(newPacket.alerts)) {
    state.telemetry.alerts = newPacket.alerts;
  }

  // Sync UI
  renderDashboard();
  updateJsonDrawerView();
  
  if (sourceName !== "sim") {
    showToast(`Telemetry updated via ${sourceName}`);
  }
}

function pushHistory(key, val) {
  state.history[key].push(val);
  if (state.history[key].length > 20) {
    state.history[key].shift();
  }
}

// ==========================================
// 5. DASHBOARD UI RENDERING
// ==========================================

function renderDashboard() {
  const t = state.telemetry;

  // Sidebar info
  DOM.sidebarRobotName.textContent = t.name || "Mining Bot";
  DOM.sidebarRobotVer.textContent = t.version || "v1.0.0";

  // Connection Status Pill
  if (t.status === 'online') {
    DOM.connectionStatusPill.className = 'status-pill online';
    DOM.connectionStatusText.textContent = 'Online';
  } else if (t.status === 'warning') {
    DOM.connectionStatusPill.className = 'status-pill warning';
    DOM.connectionStatusText.textContent = 'Warning';
  } else {
    DOM.connectionStatusPill.className = 'status-pill offline';
    DOM.connectionStatusText.textContent = 'Offline';
  }

  // Sensors Values
  DOM.valCh4.textContent = Number(t.sensors.ch4.value).toFixed(1);
  DOM.valCo.textContent = Math.round(t.sensors.co.value);
  DOM.valTemp.textContent = Math.round(t.sensors.temperature.value);
  DOM.valBattery.textContent = Math.round(t.sensors.battery.value);

  // Battery bar
  const batPct = Math.round(t.sensors.battery.value);
  DOM.batteryFillBar.style.width = `${batPct}%`;
  if (batPct < 20) {
    DOM.sensorBatteryCard.classList.add('critical');
  } else {
    DOM.sensorBatteryCard.classList.remove('critical');
  }

  // Sparklines
  renderSparkline(DOM.sparklineCh4, state.history.ch4, '#a855f7', 'rgba(168, 85, 247, 0.2)');
  renderSparkline(DOM.sparklineCo, state.history.co, '#f97316', 'rgba(249, 115, 22, 0.2)');
  renderSparkline(DOM.sparklineTemp, state.history.temp, '#38bdf8', 'rgba(56, 189, 248, 0.2)');

  // 2D Map HUD
  DOM.hudCoordX.textContent = `${Number(t.position.x).toFixed(1)}m`;
  DOM.hudCoordY.textContent = `${Number(t.position.y).toFixed(1)}m`;
  DOM.hudHeading.textContent = `${Math.round(t.position.heading)}°`;
  DOM.hudZone.textContent = t.position.zone || "Sector 4";

  // Render 2D Map Canvas
  renderMap();

  // Camera Status & HUD
  renderCameraFeed();

  // System Status Health Gauge
  renderHealthGauge(t.systemHealth);

  // Subsystems Checklist
  renderSubsystems(t.subsystems);

  // Recent Alerts
  renderAlerts(t.alerts);
}

// ==========================================
// 6. 2D MINING MAP CANVAS RENDERER
// ==========================================

function resizeMapCanvas() {
  const canvas = DOM.mapCanvas;
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
}

function renderMap() {
  const canvas = DOM.mapCanvas;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.width / dpr;
  const h = canvas.height / dpr;

  ctx.clearRect(0, 0, w, h);

  // Save transformation for pan/zoom
  ctx.save();
  ctx.translate(w / 2 + state.mapView.panX, h / 2 + state.mapView.panY);
  ctx.scale(state.mapView.zoom, state.mapView.zoom);
  ctx.translate(-w / 2, -h / 2);

  // Grid coordinates mapping (logical space: 0 to 100 on X, 0 to 80 on Y)
  const scaleX = w / 100;
  const scaleY = h / 80;

  // 1. Draw Subterranean Coordinate Grid
  ctx.strokeStyle = 'rgba(30, 58, 138, 0.22)';
  ctx.lineWidth = 1;
  const gridSize = 25;

  for (let x = 0; x < w; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y < h; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  const mapData = state.telemetry.map;

  // 2. Draw Obstacles (Red Rectangles matching reference screenshot)
  if (Array.isArray(mapData.obstacles)) {
    mapData.obstacles.forEach(obs => {
      const ox = obs.x * scaleX;
      const oy = obs.y * scaleY;
      const ow = (obs.width || 8) * scaleX;
      const oh = (obs.height || 18) * scaleY;

      // Obstacle subtle glow
      ctx.shadowColor = 'rgba(239, 68, 68, 0.4)';
      ctx.shadowBlur = 8;
      ctx.fillStyle = '#dc2626';

      drawRoundedRect(ctx, ox, oy, ow, oh, 3);
      ctx.fill();

      // Border
      ctx.shadowBlur = 0;
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 1;
      ctx.stroke();
    });
  }

  // 3. Draw Path Trajectory (Curved/Dashed Blue line matching screenshot)
  if (Array.isArray(mapData.path) && mapData.path.length > 1) {
    ctx.save();
    ctx.shadowColor = 'rgba(59, 130, 246, 0.6)';
    ctx.shadowBlur = 6;
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);

    ctx.beginPath();
    const p0 = mapData.path[0];
    ctx.moveTo(p0.x * scaleX, p0.y * scaleY);

    for (let i = 1; i < mapData.path.length; i++) {
      const p = mapData.path[i];
      ctx.lineTo(p.x * scaleX, p.y * scaleY);
    }
    ctx.stroke();
    ctx.restore();
  }

  // 4. Draw Robot (Glowing blue circle with animated pulse ring & heading)
  const rx = mapData.robot.x * scaleX;
  const ry = mapData.robot.y * scaleY;

  // Ripple pulse ring
  const pulseRadius = 14 + Math.sin(Date.now() / 250) * 4;
  ctx.beginPath();
  ctx.arc(rx, ry, pulseRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(56, 189, 248, 0.18)';
  ctx.fill();

  // Outer glow ring
  ctx.beginPath();
  ctx.arc(rx, ry, 11, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(59, 130, 246, 0.45)';
  ctx.shadowColor = '#38bdf8';
  ctx.shadowBlur = 12;
  ctx.fill();

  // Core robot dot
  ctx.beginPath();
  ctx.arc(rx, ry, 7, 0, Math.PI * 2);
  ctx.fillStyle = '#38bdf8';
  ctx.shadowBlur = 10;
  ctx.fill();
  ctx.shadowBlur = 0;

  // Robot Heading Pointer
  const headingRad = (state.telemetry.position.heading || 0) * (Math.PI / 180);
  ctx.beginPath();
  ctx.moveTo(rx, ry);
  ctx.lineTo(rx + Math.cos(headingRad) * 14, ry + Math.sin(headingRad) * 14);
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.restore();
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function setupMapInteraction() {
  const canvas = DOM.mapCanvas;

  canvas.addEventListener('mousedown', (e) => {
    state.mapView.isDragging = true;
    state.mapView.dragStartX = e.clientX - state.mapView.panX;
    state.mapView.dragStartY = e.clientY - state.mapView.panY;
  });

  window.addEventListener('mousemove', (e) => {
    if (!state.mapView.isDragging) return;
    state.mapView.panX = e.clientX - state.mapView.dragStartX;
    state.mapView.panY = e.clientY - state.mapView.dragStartY;
    renderMap();
  });

  window.addEventListener('mouseup', () => {
    state.mapView.isDragging = false;
  });

  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
    state.mapView.zoom = Math.max(0.5, Math.min(3.0, state.mapView.zoom * zoomFactor));
    renderMap();
  }, { passive: false });

  DOM.mapZoomIn.addEventListener('click', () => {
    state.mapView.zoom = Math.min(3.0, state.mapView.zoom * 1.2);
    renderMap();
  });

  DOM.mapZoomOut.addEventListener('click', () => {
    state.mapView.zoom = Math.max(0.5, state.mapView.zoom / 1.2);
    renderMap();
  });

  DOM.mapRecenter.addEventListener('click', () => {
    state.mapView.zoom = 1.0;
    state.mapView.panX = 0;
    state.mapView.panY = 0;
    renderMap();
    showToast("Map centered on Mining Robot");
  });
}

// ==========================================
// 7. SPARKLINE CANVAS GRAPH RENDERER
// ==========================================

function renderAllSparklines() {
  renderSparkline(DOM.sparklineCh4, state.history.ch4, '#a855f7', 'rgba(168, 85, 247, 0.2)');
  renderSparkline(DOM.sparklineCo, state.history.co, '#f97316', 'rgba(249, 115, 22, 0.2)');
  renderSparkline(DOM.sparklineTemp, state.history.temp, '#38bdf8', 'rgba(56, 189, 248, 0.2)');
}

function renderSparkline(canvas, data, strokeColor, fillColor) {
  if (!canvas || !data || data.length < 2) return;
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  const w = rect.width;
  const h = rect.height;

  ctx.clearRect(0, 0, w, h);

  const min = Math.min(...data) * 0.9;
  const max = Math.max(...data) * 1.1 || 1;
  const range = max - min || 1;

  const step = w / (data.length - 1);
  const points = data.map((val, i) => ({
    x: i * step,
    y: h - ((val - min) / range) * (h - 8) - 4
  }));

  // Path for smooth wave
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);

  for (let i = 0; i < points.length - 1; i++) {
    const xc = (points[i].x + points[i + 1].x) / 2;
    const yc = (points[i].y + points[i + 1].y) / 2;
    ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
  }
  ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);

  // Stroke
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 2.2;
  ctx.lineCap = 'round';
  ctx.stroke();

  // Gradient fill underneath
  ctx.lineTo(w, h);
  ctx.lineTo(0, h);
  ctx.closePath();

  const gradient = ctx.createLinearGradient(0, 0, 0, h);
  gradient.addColorStop(0, fillColor);
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = gradient;
  ctx.fill();
}

// ==========================================
// 8. LIVE CAMERA MANAGEMENT
// ==========================================

function renderCameraFeed() {
  const cam = state.telemetry.camera;

  // Toggle Unavailable State
  if (cam.feedAvailable === false) {
    DOM.cameraUnavailable.classList.remove('hidden');
    return;
  } else {
    DOM.cameraUnavailable.classList.add('hidden');
  }

  // Update HUD values
  const now = new Date();
  DOM.camTime.textContent = now.toTimeString().split(' ')[0];
  DOM.camDepth.textContent = `DEPTH: ${state.telemetry.sensors.depth ? state.telemetry.sensors.depth.value : -480}M`;
  DOM.camCompass.textContent = `ROVER-AM08 | SPEED ${state.telemetry.position.speed || 1.2} KM/H`;

  // Night Vision CSS Filter
  if (cam.nightVision) {
    DOM.cameraViewport.classList.add('night-vision');
  } else {
    DOM.cameraViewport.classList.remove('night-vision');
  }

  // Source Switcher
  if (cam.currentCam === 'cockpit') {
    DOM.cameraFeedImg.src = 'assets/mining_tunnel_cockpit.jpg';
    DOM.cameraFeedImg.classList.remove('hidden');
    DOM.webcamVideo.classList.add('hidden');
    DOM.camSourceLabel.textContent = 'Cockpit';
  } else if (cam.currentCam === 'webcam') {
    startWebcam();
    DOM.cameraFeedImg.classList.add('hidden');
    DOM.webcamVideo.classList.remove('hidden');
    DOM.camSourceLabel.textContent = 'Webcam';
  } else {
    stopWebcam();
    DOM.cameraFeedImg.src = 'assets/mining_tunnel.jpg';
    DOM.cameraFeedImg.classList.remove('hidden');
    DOM.webcamVideo.classList.add('hidden');
    DOM.camSourceLabel.textContent = 'Front IR';
  }
}

async function startWebcam() {
  if (state.webcamStream) return;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    state.webcamStream = stream;
    DOM.webcamVideo.srcObject = stream;
  } catch (err) {
    console.warn("Webcam not available or access denied:", err);
    showToast("Webcam unavailable: switching to simulated rover feed");
    state.telemetry.camera.currentCam = 'front';
    DOM.cameraFeedImg.classList.remove('hidden');
    DOM.webcamVideo.classList.add('hidden');
    DOM.camSourceLabel.textContent = 'Front IR';
  }
}

function stopWebcam() {
  if (state.webcamStream) {
    state.webcamStream.getTracks().forEach(track => track.stop());
    state.webcamStream = null;
    DOM.webcamVideo.srcObject = null;
  }
}

// ==========================================
// 9. SYSTEM HEALTH & SUBSYSTEMS GAUGE
// ==========================================

function renderHealthGauge(percent) {
  const pct = Math.max(0, Math.min(100, percent || 100));
  DOM.healthPercent.textContent = `${pct}%`;

  // 2 * PI * r = 2 * PI * 50 = ~314.159
  const circumference = 314.159;
  const offset = circumference - (pct / 100) * circumference;
  DOM.healthRing.style.strokeDashoffset = offset;

  if (pct >= 90) {
    DOM.healthRing.style.stroke = '#22c55e';
  } else if (pct >= 70) {
    DOM.healthRing.style.stroke = '#f97316';
  } else {
    DOM.healthRing.style.stroke = '#ef4444';
  }
}

function renderSubsystems(sub) {
  const updateItem = (elemState, elemChk, statusVal) => {
    const val = statusVal || "Active";
    elemState.textContent = val;
    if (val.toLowerCase() === 'active' || val.toLowerCase() === 'stable') {
      elemState.className = 'subsystem-state active';
      elemChk.className = 'status-check-circle active';
    } else {
      elemState.className = 'subsystem-state warning';
      elemChk.className = 'status-check-circle warning';
    }
  };

  updateItem(DOM.stateSensors, DOM.chkSensors, sub.sensors);
  updateItem(DOM.stateMotors, DOM.chkMotors, sub.motors);
  updateItem(DOM.stateComm, DOM.chkComm, sub.communication);
  updateItem(DOM.stateNav, DOM.chkNav, sub.navigation);
}

// ==========================================
// 10. RECENT ALERTS LIST
// ==========================================

function renderAlerts(alerts) {
  const count = alerts ? alerts.length : 0;

  if (count === 0) {
    DOM.alertsEmptyView.classList.remove('hidden');
    DOM.alertsListView.classList.add('hidden');
    DOM.clearAlertsBtn.classList.add('hidden');
    DOM.navAlertBadge.classList.add('hidden');
  } else {
    DOM.alertsEmptyView.classList.add('hidden');
    DOM.alertsListView.classList.remove('hidden');
    DOM.clearAlertsBtn.classList.remove('hidden');
    DOM.navAlertBadge.classList.remove('hidden');
    DOM.navAlertBadge.textContent = count;

    DOM.alertsListView.innerHTML = alerts.map(a => `
      <div class="alert-item-row ${a.level === 'critical' ? 'critical' : 'warning'}">
        <div class="alert-item-left">
          <div class="alert-msg">${escapeHtml(a.message)}</div>
          <div class="alert-meta">${a.time || 'Just now'} • ${escapeHtml(a.action || 'Monitoring')}</div>
        </div>
      </div>
    `).join('');
  }
}

// ==========================================
// 11. QUICK CONTROLS ACTIONS
// ==========================================

function setupQuickControls() {
  DOM.btnStart.addEventListener('click', () => {
    state.missionStatus = 'patrolling';
    state.liveSimActive = true;
    updateSimButtonState();
    state.telemetry.subsystems.motors = "Active";
    state.telemetry.subsystems.navigation = "Active";
    state.telemetry.position.speed = 1.2;
    renderDashboard();
    showToast("▶ Autonomous Mission Started: Patrolling Sector 4");
  });

  DOM.btnPause.addEventListener('click', () => {
    state.missionStatus = 'paused';
    state.liveSimActive = false;
    updateSimButtonState();
    state.telemetry.subsystems.motors = "Standby";
    state.telemetry.position.speed = 0.0;
    renderDashboard();
    showToast("⏸ Operation Paused: Robot halted in position");
  });

  DOM.btnStop.addEventListener('click', () => {
    state.missionStatus = 'stopped';
    state.liveSimActive = false;
    updateSimButtonState();
    state.telemetry.subsystems.motors = "Halted";
    state.telemetry.position.speed = 0.0;
    state.telemetry.alerts.unshift({
      id: "EMERGENCY-STOP",
      time: new Date().toTimeString().split(' ')[0],
      level: "critical",
      message: "Emergency Stop triggered from Operator Dashboard",
      action: "All actuators locked"
    });
    renderDashboard();
    showToast("🛑 EMERGENCY STOP: Robot completely halted");
  });

  DOM.btnHome.addEventListener('click', () => {
    state.missionStatus = 'homing';
    state.liveSimActive = true;
    updateSimButtonState();
    state.telemetry.subsystems.navigation = "Returning";
    state.telemetry.position.zone = "Sector 1 - Base Docking";
    
    // Animate robot moving back to dock base (18, 25)
    state.telemetry.map.robot.x = 18;
    state.telemetry.map.robot.y = 25;
    state.telemetry.position.x = 18;
    state.telemetry.position.y = 25;
    renderDashboard();
    showToast("⌂ Returning Home: Navigating to base charging dock");
  });
}

// ==========================================
// 12. JSON INTEGRATION (FILE, PRESET, DRAWER)
// ==========================================

function setupJsonFeatures() {
  // 1. Presets dropdown
  DOM.presetToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    DOM.presetMenu.classList.toggle('hidden');
  });

  document.addEventListener('click', () => {
    DOM.presetMenu.classList.add('hidden');
  });

  DOM.presetOptions.forEach(btn => {
    btn.addEventListener('click', async () => {
      const presetKey = btn.dataset.preset;
      DOM.presetMenu.classList.add('hidden');
      await loadPreset(presetKey);
    });
  });

  // 2. Custom JSON File Upload Input
  DOM.jsonFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) handleJsonFile(file);
  });

  // 3. Drag and drop anywhere on dashboard
  window.addEventListener('dragover', (e) => {
    e.preventDefault();
    DOM.dropOverlay.classList.remove('hidden');
  });

  DOM.dropOverlay.addEventListener('dragleave', (e) => {
    e.preventDefault();
    DOM.dropOverlay.classList.add('hidden');
  });

  DOM.dropOverlay.addEventListener('drop', (e) => {
    e.preventDefault();
    DOM.dropOverlay.classList.add('hidden');
    if (e.dataTransfer.files.length > 0) {
      handleJsonFile(e.dataTransfer.files[0]);
    }
  });

  // 4. JSON Live Inspector Drawer
  DOM.openJsonDrawerBtn.addEventListener('click', () => {
    openJsonDrawer();
  });
  DOM.jsonDrawerClose.addEventListener('click', () => {
    closeJsonDrawer();
  });
  DOM.jsonDrawerBackdrop.addEventListener('click', () => {
    closeJsonDrawer();
  });

  // Drawer Tabs
  DOM.drawerTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      DOM.drawerTabs.forEach(t => t.classList.remove('active'));
      DOM.tabPanes.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(`pane-${tab.dataset.tab}`).classList.add('active');
    });
  });

  // Apply custom JSON button
  DOM.btnApplyCustomJson.addEventListener('click', () => {
    try {
      const parsed = JSON.parse(DOM.customJsonTextarea.value);
      updateTelemetry(parsed, "Custom JSON Injection");
      showToast("Custom JSON applied successfully!");
      closeJsonDrawer();
    } catch (err) {
      alert("Invalid JSON format: " + err.message);
    }
  });

  // Reset to sample button
  DOM.btnResetSampleJson.addEventListener('click', () => {
    loadPreset('normal');
  });

  // Copy JSON button
  DOM.btnCopyJson.addEventListener('click', () => {
    navigator.clipboard.writeText(JSON.stringify(state.telemetry, null, 2));
    showToast("Telemetry JSON copied to clipboard!");
  });

  // Download JSON button
  DOM.btnDownloadJson.addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(state.telemetry, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mining_robot_telemetry_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Telemetry JSON downloaded!");
  });

  // Sim toggle button
  DOM.simToggleBtn.addEventListener('click', () => {
    state.liveSimActive = !state.liveSimActive;
    updateSimButtonState();
  });
}

function updateSimButtonState() {
  if (state.liveSimActive) {
    DOM.simToggleBtn.classList.add('active');
    DOM.simToggleText.textContent = 'Live Sim: ON';
  } else {
    DOM.simToggleBtn.classList.remove('active');
    DOM.simToggleText.textContent = 'Live Sim: PAUSED';
  }
}

async function loadPreset(presetKey) {
  if (presetKey === 'replay') {
    startMissionReplay();
    return;
  }

  // Stop replay if running
  if (state.replayTimer) {
    clearInterval(state.replayTimer);
    state.replayTimer = null;
  }

  const map = {
    normal: 'sample-data/normal_patrol.json',
    gas: 'sample-data/gas_leak_hazard.json',
    obstacle: 'sample-data/obstacle_detected.json',
    battery: 'sample-data/low_battery.json'
  };

  const file = map[presetKey] || map.normal;
  try {
    const res = await fetch(file);
    const data = await res.json();
    updateTelemetry(data, `Preset: ${presetKey.toUpperCase()}`);
  } catch (err) {
    console.error("Failed to load preset:", err);
  }
}

function handleJsonFile(file) {
  if (!file.name.endsWith('.json')) {
    alert("Please upload a valid .json telemetry file.");
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (Array.isArray(data)) {
        // Multi-frame replay log!
        replayJsonArray(data);
      } else {
        updateTelemetry(data, `File: ${file.name}`);
      }
    } catch (err) {
      alert("Error parsing JSON file: " + err.message);
    }
  };
  reader.readAsText(file);
}

function openJsonDrawer() {
  DOM.jsonDrawer.classList.remove('hidden');
  DOM.jsonDrawerBackdrop.classList.remove('hidden');
  updateJsonDrawerView();
}

function closeJsonDrawer() {
  DOM.jsonDrawer.classList.add('hidden');
  DOM.jsonDrawerBackdrop.classList.add('hidden');
}

function updateJsonDrawerView() {
  const jsonStr = JSON.stringify(state.telemetry, null, 2);
  if (DOM.liveJsonDisplay) {
    DOM.liveJsonDisplay.textContent = jsonStr;
  }
  if (DOM.customJsonTextarea && !DOM.customJsonTextarea.matches(':focus')) {
    DOM.customJsonTextarea.value = jsonStr;
  }
  if (DOM.jsonUpdateTimestamp) {
    DOM.jsonUpdateTimestamp.textContent = new Date().toLocaleTimeString();
  }
}

// ==========================================
// 13. MULTI-FRAME MISSION LOG REPLAY
// ==========================================

async function startMissionReplay() {
  try {
    const res = await fetch('sample-data/mission_replay.json');
    const frames = await res.json();
    replayJsonArray(frames);
  } catch (e) {
    console.error("Could not load mission replay data:", e);
  }
}

function replayJsonArray(frames) {
  if (!Array.isArray(frames) || frames.length === 0) return;
  if (state.replayTimer) clearInterval(state.replayTimer);

  let frameIdx = 0;
  showToast(`Replaying mission logs (${frames.length} frames)...`);

  state.replayTimer = setInterval(() => {
    if (frameIdx >= frames.length) {
      clearInterval(state.replayTimer);
      state.replayTimer = null;
      showToast("Mission log replay completed");
      return;
    }

    const frame = frames[frameIdx];
    updateTelemetry({
      timestamp: frame.timestamp,
      systemHealth: frame.health,
      status: frame.status,
      sensors: {
        ch4: frame.ch4,
        co: frame.co,
        temperature: frame.temperature,
        battery: frame.battery
      },
      position: {
        x: frame.x,
        y: frame.y,
        heading: frame.heading,
        zone: frame.zone,
        speed: frame.speed
      },
      map: {
        robot: { x: frame.x, y: frame.y }
      }
    }, `Replay Frame ${frameIdx + 1}/${frames.length}`);

    frameIdx++;
  }, 1200);
}

// ==========================================
// 14. LIVE SIMULATION TICKER
// ==========================================

function startSimulationTicker() {
  state.simTimer = setInterval(() => {
    if (!state.liveSimActive || state.replayTimer) return;

    // Gentle realistic sensor drift
    const ch4Drift = (Math.random() - 0.48) * 0.08;
    const coDrift = (Math.random() - 0.48) * 0.2;
    const tempDrift = (Math.random() - 0.5) * 0.15;

    const newCh4 = Math.max(0.8, Number((state.telemetry.sensors.ch4.value + ch4Drift).toFixed(2)));
    const newCo = Math.max(2, Math.round(state.telemetry.sensors.co.value + coDrift));
    const newTemp = Math.max(20, Math.round(state.telemetry.sensors.temperature.value + tempDrift));

    // Slight movement along path
    let curX = state.telemetry.position.x;
    let curY = state.telemetry.position.y;
    let heading = state.telemetry.position.heading;

    if (state.missionStatus === 'patrolling') {
      const step = 0.2;
      curX += Math.cos(heading * Math.PI / 180) * step;
      curY += Math.sin(heading * Math.PI / 180) * step * 0.4;

      // Keep within bounds
      if (curX > 80) heading = 220;
      if (curX < 20) heading = 40;

      state.telemetry.position.heading = heading;
      state.telemetry.position.x = Number(curX.toFixed(1));
      state.telemetry.position.y = Number(curY.toFixed(1));
      state.telemetry.map.robot.x = state.telemetry.position.x;
      state.telemetry.map.robot.y = state.telemetry.position.y;
    }

    state.telemetry.sensors.ch4.value = newCh4;
    state.telemetry.sensors.co.value = newCo;
    state.telemetry.sensors.temperature.value = newTemp;

    pushHistory('ch4', newCh4);
    pushHistory('co', newCo);
    pushHistory('temp', newTemp);

    renderDashboard();
    updateJsonDrawerView();
  }, 1500);
}

// ==========================================
// 15. BACKEND SSE & POLLING
// ==========================================

function initSSEorPolling() {
  if (typeof EventSource !== 'undefined') {
    try {
      const evtSource = new EventSource('/api/stream');
      evtSource.onmessage = (e) => {
        try {
          const data = JSON.parse(e.data);
          updateTelemetry(data, "Live Stream API");
        } catch (err) {}
      };
      evtSource.onerror = () => {
        // Fallback or local dev standalone mode
        evtSource.close();
      };
    } catch (e) {}
  }
}

// ==========================================
// 16. EVENT LISTENERS
// ==========================================

function setupEventListeners() {
  setupQuickControls();
  setupJsonFeatures();

  // Navigation sidebar item clicks
  DOM.navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      DOM.navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.dataset.view;
      if (view === 'map') {
        DOM.mapCanvas.scrollIntoView({ behavior: 'smooth' });
        showToast("Switched to 2D Map navigation");
      } else if (view === 'camera') {
        DOM.cameraViewport.scrollIntoView({ behavior: 'smooth' });
        showToast("Switched to Live Camera view");
      } else if (view === 'alerts') {
        DOM.alertsContainer.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Robot profile card click
  DOM.robotCardBtn.addEventListener('click', () => {
    DOM.robotModalBackdrop.classList.remove('hidden');
  });
  DOM.robotModalClose.addEventListener('click', () => {
    DOM.robotModalBackdrop.classList.add('hidden');
  });

  // Camera Tools
  DOM.camSourceToggle.addEventListener('click', () => {
    const current = state.telemetry.camera.currentCam;
    if (current === 'front') state.telemetry.camera.currentCam = 'cockpit';
    else if (current === 'cockpit') state.telemetry.camera.currentCam = 'webcam';
    else state.telemetry.camera.currentCam = 'front';
    renderDashboard();
  });

  DOM.camNvToggle.addEventListener('click', () => {
    state.telemetry.camera.nightVision = !state.telemetry.camera.nightVision;
    renderDashboard();
    showToast(state.telemetry.camera.nightVision ? "Night Vision IR: ENABLED" : "Night Vision IR: DISABLED");
  });

  DOM.camFullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      DOM.cameraViewport.requestFullscreen().catch(err => {
        alert("Fullscreen request denied: " + err.message);
      });
    } else {
      document.exitFullscreen();
    }
  });

  DOM.cameraRetryBtn.addEventListener('click', () => {
    state.telemetry.camera.feedAvailable = true;
    renderDashboard();
    showToast("Camera feed reconnected!");
  });

  // Clear Alerts
  DOM.clearAlertsBtn.addEventListener('click', () => {
    state.telemetry.alerts = [];
    state.telemetry.systemHealth = 100;
    state.telemetry.status = "online";
    renderDashboard();
    showToast("All alerts cleared. System nominal.");
  });

  // Header Options button
  DOM.headerOptionsBtn.addEventListener('click', () => {
    openJsonDrawer();
  });
}

// ==========================================
// 17. UTILITY FUNCTIONS
// ==========================================

let toastTimeout = null;
function showToast(msg) {
  if (toastTimeout) clearTimeout(toastTimeout);
  DOM.toastMessage.textContent = msg;
  DOM.toastBanner.classList.remove('hidden');
  toastTimeout = setTimeout(() => {
    DOM.toastBanner.classList.add('hidden');
  }, 3500);
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[m]);
}

// Boot application when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
