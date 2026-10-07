export const initialTelemetry = {
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
    // 1. MQ-4 Methane / Natural Gas / CNG
    mq4: {
      name: "Methane (CH4)",
      chip: "MQ-4",
      type: "Combustible Gas",
      value: 1.2,
      unit: "ppm",
      status: "normal",
      threshold: 2.5,
      criticalThreshold: 4.0,
      pin: "ADC0 (A0)",
      safeRange: "< 2.5 ppm",
      category: "gas"
    },
    // 2. MQ-7 Carbon Monoxide
    mq7: {
      name: "Carbon Monoxide (CO)",
      chip: "MQ-7",
      type: "Toxic Gas",
      value: 4,
      unit: "ppm",
      status: "normal",
      threshold: 25,
      criticalThreshold: 40,
      pin: "ADC1 (A1)",
      safeRange: "< 25 ppm",
      category: "gas"
    },
    // 3. MQ-135 Air Quality / Hazardous Fumes (NH3, Benzene, Smoke, CO2)
    mq135: {
      name: "Air Quality / NH3",
      chip: "MQ-135",
      type: "Multi-Hazard Fumes",
      value: 18,
      unit: "ppm",
      status: "normal",
      threshold: 50,
      criticalThreshold: 80,
      pin: "ADC2 (A2)",
      safeRange: "< 50 ppm",
      category: "gas"
    },
    // 4. MQ-136 Hydrogen Sulfide (H2S) Sour Gas
    mq136: {
      name: "Hydrogen Sulfide (H2S)",
      chip: "MQ-136",
      type: "Deadly Sour Gas",
      value: 0.3,
      unit: "ppm",
      status: "normal",
      threshold: 5.0,
      criticalThreshold: 10.0,
      pin: "ADC3 (A3)",
      safeRange: "< 5.0 ppm",
      category: "gas"
    },
    // 5. DHT22 Ambient Temperature
    dht22_temp: {
      name: "Ambient Temperature",
      chip: "DHT22",
      type: "Climate",
      value: 27.2,
      unit: "°C",
      status: "normal",
      threshold: 45,
      criticalThreshold: 55,
      pin: "GPIO 4 (1-Wire)",
      safeRange: "15 - 35 °C",
      category: "climate"
    },
    // 6. DHT22 Relative Humidity
    dht22_humidity: {
      name: "Relative Humidity",
      chip: "DHT22",
      type: "Climate",
      value: 68.0,
      unit: "% RH",
      status: "normal",
      threshold: 85,
      criticalThreshold: 95,
      pin: "GPIO 4 (1-Wire)",
      safeRange: "40 - 80 %",
      category: "climate"
    },
    // 7. ME2-O2 Oxygen Concentration (Mining safety critical)
    o2: {
      name: "Atmospheric Oxygen (O2)",
      chip: "ME2-O2",
      type: "Life Support",
      value: 20.9,
      unit: "% Vol",
      status: "normal",
      minThreshold: 19.5,
      criticalMinThreshold: 16.0,
      pin: "I2C 0x48",
      safeRange: "19.5 - 23.5 %",
      category: "climate"
    },
    // 8. Particulate Matter Dust (PM2.5) Coal & Silica Dust
    pm25: {
      name: "Particulate Dust (PM2.5)",
      chip: "GP2Y1010",
      type: "Optical Dust",
      value: 34,
      unit: "µg/m³",
      status: "normal",
      threshold: 100,
      criticalThreshold: 150,
      pin: "UART2 / RX",
      safeRange: "< 50 µg/m³",
      category: "climate"
    },
    // 9. Battery Pack BMS
    battery: {
      name: "Battery Pack (BMS)",
      chip: "BMS-4S",
      type: "Power Supply",
      value: 78,
      unit: "%",
      status: "normal",
      charging: false,
      estRuntime: "4h 30m",
      pin: "SMBus",
      safeRange: "> 20 %",
      category: "power"
    },
    depth: { value: -480, unit: "m" },

    // Backward-compatibility aliases:
    ch4: { value: 1.2, unit: "ppm", status: "normal", threshold: 2.5 },
    co: { value: 4, unit: "ppm", status: "normal", threshold: 25 },
    temperature: { value: 27.2, unit: "°C", status: "normal", threshold: 45 },
    humidity: { value: 68.0, unit: "%" }
  },
  position: {
    x: 52.4,
    y: 38.6,
    heading: 84,
    zone: "Sector 4 - Deep Shaft B",
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
};

export const samplePresets = {
  normal: {
    ...initialTelemetry,
    status: "online",
    systemHealth: 100,
    alerts: []
  },
  gas: {
    timestamp: new Date().toISOString(),
    robotId: "AM-08",
    name: "Mining Bot",
    version: "v1.0.0",
    status: "warning",
    systemHealth: 64,
    subsystems: {
      sensors: "Warning",
      motors: "Active",
      communication: "Stable",
      navigation: "Active"
    },
    sensors: {
      mq4: {
        name: "Methane (CH4)",
        chip: "MQ-4",
        type: "Combustible Gas",
        value: 4.8,
        unit: "ppm",
        status: "danger",
        threshold: 2.5,
        criticalThreshold: 4.0,
        pin: "ADC0 (A0)",
        safeRange: "< 2.5 ppm",
        category: "gas"
      },
      mq7: {
        name: "Carbon Monoxide (CO)",
        chip: "MQ-7",
        type: "Toxic Gas",
        value: 38,
        unit: "ppm",
        status: "warning",
        threshold: 25,
        criticalThreshold: 40,
        pin: "ADC1 (A1)",
        safeRange: "< 25 ppm",
        category: "gas"
      },
      mq135: {
        name: "Air Quality / NH3",
        chip: "MQ-135",
        type: "Multi-Hazard Fumes",
        value: 118,
        unit: "ppm",
        status: "warning",
        threshold: 50,
        criticalThreshold: 80,
        pin: "ADC2 (A2)",
        safeRange: "< 50 ppm",
        category: "gas"
      },
      mq136: {
        name: "Hydrogen Sulfide (H2S)",
        chip: "MQ-136",
        type: "Deadly Sour Gas",
        value: 6.8,
        unit: "ppm",
        status: "danger",
        threshold: 5.0,
        criticalThreshold: 10.0,
        pin: "ADC3 (A3)",
        safeRange: "< 5.0 ppm",
        category: "gas"
      },
      dht22_temp: {
        name: "Ambient Temperature",
        chip: "DHT22",
        type: "Climate",
        value: 36.8,
        unit: "°C",
        status: "warning",
        threshold: 45,
        criticalThreshold: 55,
        pin: "GPIO 4 (1-Wire)",
        safeRange: "15 - 35 °C",
        category: "climate"
      },
      dht22_humidity: {
        name: "Relative Humidity",
        chip: "DHT22",
        type: "Climate",
        value: 84.0,
        unit: "% RH",
        status: "warning",
        threshold: 85,
        criticalThreshold: 95,
        pin: "GPIO 4 (1-Wire)",
        safeRange: "40 - 80 %",
        category: "climate"
      },
      o2: {
        name: "Atmospheric Oxygen (O2)",
        chip: "ME2-O2",
        type: "Life Support",
        value: 17.4,
        unit: "% Vol",
        status: "danger",
        minThreshold: 19.5,
        criticalMinThreshold: 16.0,
        pin: "I2C 0x48",
        safeRange: "19.5 - 23.5 %",
        category: "climate"
      },
      pm25: {
        name: "Particulate Dust (PM2.5)",
        chip: "GP2Y1010",
        type: "Optical Dust",
        value: 92,
        unit: "µg/m³",
        status: "warning",
        threshold: 100,
        criticalThreshold: 150,
        pin: "UART2 / RX",
        safeRange: "< 50 µg/m³",
        category: "climate"
      },
      battery: {
        name: "Battery Pack (BMS)",
        chip: "BMS-4S",
        type: "Power Supply",
        value: 65,
        unit: "%",
        status: "normal",
        charging: false,
        estRuntime: "3h 40m",
        pin: "SMBus",
        safeRange: "> 20 %",
        category: "power"
      },
      depth: { value: -520, unit: "m" },
      // Aliases
      ch4: { value: 4.8, unit: "ppm", status: "danger", threshold: 2.5 },
      co: { value: 38, unit: "ppm", status: "warning", threshold: 25 },
      temperature: { value: 36.8, unit: "°C", status: "warning", threshold: 45 },
      humidity: { value: 84.0, unit: "%" }
    },
    position: {
      x: 62.0,
      y: 42.0,
      heading: 110,
      zone: "Sector 4 - Gas Pocket C",
      speed: 0.5
    },
    map: {
      robot: { x: 62, y: 42 },
      path: [
        { x: 18, y: 25 },
        { x: 35, y: 29 },
        { x: 52, y: 38 },
        { x: 62, y: 42 }
      ],
      obstacles: [
        { x: 30, y: 16, width: 6, height: 18, label: "Rockfall Alpha" },
        { x: 65, y: 25, width: 6, height: 16, label: "Pillar Bravo" },
        { x: 67, y: 56, width: 6, height: 18, label: "Debris Delta" }
      ]
    },
    camera: {
      feedAvailable: true,
      currentCam: "front",
      nightVision: true,
      flashlight: true
    },
    alerts: [
      {
        id: "ALT-101",
        time: "11:04:12",
        level: "critical",
        message: "MQ-4 Methane spike detected: 4.8 ppm (Safe limit < 2.5 ppm)",
        action: "Exhaust ventilation initiated, robot engine throttle reduced"
      },
      {
        id: "ALT-102",
        time: "11:04:45",
        level: "warning",
        message: "MQ-7 Carbon Monoxide elevated: 38 ppm (OSHA limit 25 ppm)",
        action: "Auxiliary catalytic air scrubbers activated"
      },
      {
        id: "ALT-103",
        time: "11:05:08",
        level: "critical",
        message: "MQ-136 Hydrogen Sulfide (H2S) lethal hazard: 6.8 ppm (> 5.0 ppm threshold)",
        action: "Sector 4 sour gas warning broadcast, human personnel evacuated"
      },
      {
        id: "ALT-104",
        time: "11:05:32",
        level: "warning",
        message: "ME2-O2 Atmospheric Oxygen depleted to 17.4% (Safe min 19.5% Vol)",
        action: "Autonomous breathing emergency alert triggered"
      }
    ]
  },
  obstacle: {
    timestamp: new Date().toISOString(),
    robotId: "AM-08",
    name: "Mining Bot",
    version: "v1.0.0",
    status: "warning",
    systemHealth: 88,
    subsystems: {
      sensors: "Active",
      motors: "Active",
      communication: "Stable",
      navigation: "Rerouting"
    },
    sensors: {
      mq4: { name: "Methane (CH4)", chip: "MQ-4", type: "Combustible Gas", value: 1.4, unit: "ppm", status: "normal", threshold: 2.5, criticalThreshold: 4.0, pin: "ADC0 (A0)", safeRange: "< 2.5 ppm", category: "gas" },
      mq7: { name: "Carbon Monoxide (CO)", chip: "MQ-7", type: "Toxic Gas", value: 6, unit: "ppm", status: "normal", threshold: 25, criticalThreshold: 40, pin: "ADC1 (A1)", safeRange: "< 25 ppm", category: "gas" },
      mq135: { name: "Air Quality / NH3", chip: "MQ-135", type: "Multi-Hazard Fumes", value: 22, unit: "ppm", status: "normal", threshold: 50, criticalThreshold: 80, pin: "ADC2 (A2)", safeRange: "< 50 ppm", category: "gas" },
      mq136: { name: "Hydrogen Sulfide (H2S)", chip: "MQ-136", type: "Deadly Sour Gas", value: 0.4, unit: "ppm", status: "normal", threshold: 5.0, criticalThreshold: 10.0, pin: "ADC3 (A3)", safeRange: "< 5.0 ppm", category: "gas" },
      dht22_temp: { name: "Ambient Temperature", chip: "DHT22", type: "Climate", value: 28.1, unit: "°C", status: "normal", threshold: 45, criticalThreshold: 55, pin: "GPIO 4 (1-Wire)", safeRange: "15 - 35 °C", category: "climate" },
      dht22_humidity: { name: "Relative Humidity", chip: "DHT22", type: "Climate", value: 65.0, unit: "% RH", status: "normal", threshold: 85, criticalThreshold: 95, pin: "GPIO 4 (1-Wire)", safeRange: "40 - 80 %", category: "climate" },
      o2: { name: "Atmospheric Oxygen (O2)", chip: "ME2-O2", type: "Life Support", value: 20.8, unit: "% Vol", status: "normal", minThreshold: 19.5, criticalMinThreshold: 16.0, pin: "I2C 0x48", safeRange: "19.5 - 23.5 %", category: "climate" },
      pm25: { name: "Particulate Dust (PM2.5)", chip: "GP2Y1010", type: "Optical Dust", value: 42, unit: "µg/m³", status: "normal", threshold: 100, criticalThreshold: 150, pin: "UART2 / RX", safeRange: "< 50 µg/m³", category: "climate" },
      battery: { name: "Battery Pack (BMS)", chip: "BMS-4S", type: "Power Supply", value: 72, unit: "%", status: "normal", charging: false, estRuntime: "4h 10m", pin: "SMBus", safeRange: "> 20 %", category: "power" },
      depth: { value: -482, unit: "m" },
      ch4: { value: 1.4, unit: "ppm", status: "normal", threshold: 2.5 },
      co: { value: 6, unit: "ppm", status: "normal", threshold: 25 },
      temperature: { value: 28.1, unit: "°C", status: "normal", threshold: 45 },
      humidity: { value: 65.0, unit: "%" }
    },
    position: {
      x: 60.5,
      y: 27.2,
      heading: 45,
      zone: "Sector 4 - Pillar B Proximity",
      speed: 0.2
    },
    map: {
      robot: { x: 60.5, y: 27.2 },
      path: [
        { x: 18, y: 25 },
        { x: 35, y: 29 },
        { x: 52, y: 38 },
        { x: 60.5, y: 27.2 }
      ],
      obstacles: [
        { x: 30, y: 16, width: 6, height: 18, label: "Rockfall Alpha" },
        { x: 65, y: 25, width: 6, height: 16, label: "Pillar Bravo (CLOSE)" },
        { x: 67, y: 56, width: 6, height: 18, label: "Debris Delta" }
      ]
    },
    camera: {
      feedAvailable: true,
      currentCam: "front",
      nightVision: false,
      flashlight: true
    },
    alerts: [
      {
        id: "ALT-201",
        time: "11:09:50",
        level: "warning",
        message: "Obstacle proximity warning: LiDAR detected object at 1.4m",
        action: "Autonomous speed reduced, calculating alternative path"
      }
    ]
  },
  battery: {
    timestamp: new Date().toISOString(),
    robotId: "AM-08",
    name: "Mining Bot",
    version: "v1.0.0",
    status: "warning",
    systemHealth: 65,
    subsystems: {
      sensors: "Active",
      motors: "Active",
      communication: "Stable",
      navigation: "Returning"
    },
    sensors: {
      mq4: { name: "Methane (CH4)", chip: "MQ-4", type: "Combustible Gas", value: 1.1, unit: "ppm", status: "normal", threshold: 2.5, criticalThreshold: 4.0, pin: "ADC0 (A0)", safeRange: "< 2.5 ppm", category: "gas" },
      mq7: { name: "Carbon Monoxide (CO)", chip: "MQ-7", type: "Toxic Gas", value: 3, unit: "ppm", status: "normal", threshold: 25, criticalThreshold: 40, pin: "ADC1 (A1)", safeRange: "< 25 ppm", category: "gas" },
      mq135: { name: "Air Quality / NH3", chip: "MQ-135", type: "Multi-Hazard Fumes", value: 16, unit: "ppm", status: "normal", threshold: 50, criticalThreshold: 80, pin: "ADC2 (A2)", safeRange: "< 50 ppm", category: "gas" },
      mq136: { name: "Hydrogen Sulfide (H2S)", chip: "MQ-136", type: "Deadly Sour Gas", value: 0.2, unit: "ppm", status: "normal", threshold: 5.0, criticalThreshold: 10.0, pin: "ADC3 (A3)", safeRange: "< 5.0 ppm", category: "gas" },
      dht22_temp: { name: "Ambient Temperature", chip: "DHT22", type: "Climate", value: 29.0, unit: "°C", status: "normal", threshold: 45, criticalThreshold: 55, pin: "GPIO 4 (1-Wire)", safeRange: "15 - 35 °C", category: "climate" },
      dht22_humidity: { name: "Relative Humidity", chip: "DHT22", type: "Climate", value: 62.0, unit: "% RH", status: "normal", threshold: 85, criticalThreshold: 95, pin: "GPIO 4 (1-Wire)", safeRange: "40 - 80 %", category: "climate" },
      o2: { name: "Atmospheric Oxygen (O2)", chip: "ME2-O2", type: "Life Support", value: 20.9, unit: "% Vol", status: "normal", minThreshold: 19.5, criticalMinThreshold: 16.0, pin: "I2C 0x48", safeRange: "19.5 - 23.5 %", category: "climate" },
      pm25: { name: "Particulate Dust (PM2.5)", chip: "GP2Y1010", type: "Optical Dust", value: 28, unit: "µg/m³", status: "normal", threshold: 100, criticalThreshold: 150, pin: "UART2 / RX", safeRange: "< 50 µg/m³", category: "climate" },
      battery: { name: "Battery Pack (BMS)", chip: "BMS-4S", type: "Power Supply", value: 14, unit: "%", status: "danger", charging: false, estRuntime: "0h 25m", pin: "SMBus", safeRange: "> 20 %", category: "power" },
      depth: { value: -475, unit: "m" },
      ch4: { value: 1.1, unit: "ppm", status: "normal", threshold: 2.5 },
      co: { value: 3, unit: "ppm", status: "normal", threshold: 25 },
      temperature: { value: 29.0, unit: "°C", status: "normal", threshold: 45 },
      humidity: { value: 62.0, unit: "%" }
    },
    position: {
      x: 35.0,
      y: 28.0,
      heading: 210,
      zone: "Sector 2 - Return Path",
      speed: 1.8
    },
    map: {
      robot: { x: 35.0, y: 28.0 },
      path: [
        { x: 62, y: 42 },
        { x: 52, y: 38 },
        { x: 35, y: 28 }
      ],
      obstacles: [
        { x: 30, y: 16, width: 6, height: 18, label: "Rockfall Alpha" },
        { x: 65, y: 25, width: 6, height: 16, label: "Pillar Bravo" },
        { x: 67, y: 56, width: 6, height: 18, label: "Debris Delta" }
      ]
    },
    camera: {
      feedAvailable: true,
      currentCam: "front",
      nightVision: false,
      flashlight: true
    },
    alerts: [
      {
        id: "ALT-301",
        time: "11:14:20",
        level: "warning",
        message: "Battery critically low: 14% remaining",
        action: "Autonomous mission halted, returning to recharge dock at base"
      }
    ]
  }
};
