# ⛏️ Mining Robot - Smart Mining Dashboard (React Edition)

A modern, high-performance React web application for autonomous mining robot telemetry built with **React 19**, **Vite**, **HTML5 Canvas**, and **Lucide Icons**.

---

## 🌐 Running & Hosting Options

### Option 1: Local Development Server (Currently Running)
```bash
npm run dev
```
Open **[http://localhost:3050](http://localhost:3050)** in your browser (also accessible across your local Wi-Fi / LAN at `http://192.168.1.7:3050`).

### Option 2: Production Build & Local Preview
```bash
# 1. Build optimized production bundle
npm run build

# 2. Preview the production build locally
npm run preview -- --port 3050
```

### Option 3: Free Cloud Hosting (1-Click Deployment)

#### 1. Deploy to Vercel
```bash
npx vercel
```
Or import your GitHub repository into [Vercel Dashboard](https://vercel.com/dashboard) (Framework preset: `Vite`, Build command: `npm run build`, Output directory: `dist`).

#### 2. Deploy to Netlify
```bash
# Drag and drop the `dist/` folder directly to https://app.netlify.com/drop
# Or via CLI:
npx netlify deploy --prod --dir=dist
```

#### 3. Host with Docker / Nginx
```dockerfile
FROM nginx:alpine
COPY dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 🧩 React Component Hierarchy
```
src/
├── App.jsx                  # Main application state & layout coordinator
├── main.jsx                 # React root mount
├── index.css                # Industrial cyber-dark styles & tokens
├── data/
│   └── defaultTelemetry.js  # Baseline telemetry & sample scenario presets
└── components/
    ├── Sidebar.jsx          # Left navigation bar with active blue pill & robot badge
    ├── Header.jsx           # Dashboard title, JSON scenario presets & connection pill
    ├── Map2D.jsx            # Canvas 2D mining map with pan, zoom & robot indicator
    ├── LiveCamera.jsx       # Multi-cam video feeds, Night Vision, & Retry overlay
    ├── SensorCards.jsx      # CH4, CO, Temp & Battery with Bezier sparkline canvas
    ├── SystemStatus.jsx     # Circular SVG health ring & 4 subsystem checkmarks
    ├── RecentAlerts.jsx     # Empty state check badge & dynamic hazard alerts
    ├── QuickControls.jsx    # Start, Pause, Stop, and Home buttons
    ├── JsonDrawer.jsx       # Live JSON inspector, custom JSON injector & API docs
    ├── RobotModal.jsx       # Robot specs dialog
    └── DropOverlay.jsx      # Drag-and-drop file upload target
```

---

## 📄 JSON-Friendly Capabilities

1. **Drag-and-Drop JSON**: Drop any `.json` file anywhere on the dashboard window.
2. **Preset Scenarios**: 1-click test scenarios for Normal Patrol, Gas Leak Hazard, Obstacle Proximity, Low Battery, and Multi-frame Mission Replay.
3. **JSON Live Drawer**: Click **"JSON Live"** to inspect live telemetry, copy JSON, download `.json` files, or inject custom JSON.
4. **Streaming Integration**: External Python, ROS, or ESP32 scripts can stream live JSON packets to the dashboard.
