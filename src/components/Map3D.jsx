import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {
  Box,
  Compass,
  Eye,
  RotateCcw,
  Layers,
  Sparkles,
  Maximize2,
  Scan,
  Zap,
  Target,
  X
} from 'lucide-react';

export default function Map3D({
  mapData,
  position,
  theme = 'dark',
  robotMode = 'automatic',
  onShowToast,
  onRemove
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // View state
  const [cameraMode, setCameraMode] = useState('orbit'); // 'orbit' | 'chase' | 'iso' | 'top'
  const [showPointCloud, setShowPointCloud] = useState(true);
  const [showWireframe, setShowWireframe] = useState(false);
  const [headlightsOn, setHeadlightsOn] = useState(true);
  const [autoRotate, setAutoRotate] = useState(false);
  const [camDistance, setCamDistance] = useState(48);

  // References for Three.js instance
  const threeRefs = useRef({
    renderer: null,
    scene: null,
    camera: null,
    controls: null,
    robotGroup: null,
    lidarPoints: null,
    pathLine: null,
    obstaclesGroup: null,
    gasCloudGroup: null,
    spotlightL: null,
    spotlightR: null,
    animFrameId: null,
    tunnelMesh: null,
    archMeshes: [],
    railsGroup: null
  });

  const isLight = theme === 'light';

  // Build / initialize Three.js Scene
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 480;
    const height = container.clientHeight || 280;

    // 1. Scene
    const scene = new THREE.Scene();
    const bgColor = isLight ? 0xe2e8f0 : 0x070b14;
    scene.background = new THREE.Color(bgColor);
    scene.fog = new THREE.FogExp2(bgColor, 0.009);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(48, width / height, 0.5, 500);
    camera.position.set(20, 28, 42);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // 4. Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.maxPolarAngle = Math.PI / 2 - 0.04; // Don't go below floor
    controls.minDistance = 6;
    controls.maxDistance = 140;
    controls.target.set(0, 2, 0);
    controls.enableZoom = false; // Zoom is handled via container listener to prevent page scrolling!

    controls.addEventListener('change', () => {
      const dist = camera.position.distanceTo(controls.target);
      setCamDistance(Math.round(dist));
    });

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(
      isLight ? 0xffffff : 0x1e293b,
      isLight ? 1.4 : 0.85
    );
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(
      isLight ? 0xf8fafc : 0x38bdf8,
      isLight ? 1.2 : 0.45
    );
    dirLight.position.set(30, 45, 20);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    // 6. Underground Tunnel Environment (Curved Ceiling + Rock Floor)
    const tunnelLength = 120;
    const tunnelWidth = 36;
    const tunnelHeight = 16;

    // Floor
    const floorGeo = new THREE.PlaneGeometry(tunnelWidth, tunnelLength, 32, 64);
    const floorMat = new THREE.MeshStandardMaterial({
      color: isLight ? 0xcbd5e1 : 0x0f172a,
      roughness: 0.85,
      metalness: 0.15,
      wireframe: showWireframe
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);

    // Grid on Floor
    const gridHelper = new THREE.GridHelper(
      120,
      40,
      isLight ? 0x2563eb : 0x38bdf8,
      isLight ? 0x94a3b8 : 0x1e293b
    );
    gridHelper.position.y = 0.02;
    scene.add(gridHelper);

    // Arched Tunnel Shell
    const tunnelShape = new THREE.Shape();
    tunnelShape.moveTo(-tunnelWidth / 2, 0);
    tunnelShape.lineTo(-tunnelWidth / 2, tunnelHeight * 0.55);
    tunnelShape.quadraticCurveTo(
      0,
      tunnelHeight * 1.35,
      tunnelWidth / 2,
      tunnelHeight * 0.55
    );
    tunnelShape.lineTo(tunnelWidth / 2, 0);

    const extrudeSettings = {
      depth: tunnelLength,
      bevelEnabled: false
    };
    const tunnelGeo = new THREE.ExtrudeGeometry(tunnelShape, extrudeSettings);
    const tunnelMat = new THREE.MeshStandardMaterial({
      color: isLight ? 0xe2e8f0 : 0x0a0f1d,
      roughness: 0.9,
      metalness: 0.1,
      side: THREE.BackSide,
      wireframe: showWireframe
    });
    const tunnelMesh = new THREE.Mesh(tunnelGeo, tunnelMat);
    tunnelMesh.position.set(0, 0, -tunnelLength / 2);
    scene.add(tunnelMesh);

    // Steel Mining Support Arches (Ribs)
    const archMeshes = [];
    const archCount = 9;
    for (let i = 0; i < archCount; i++) {
      const zPos = -tunnelLength / 2 + (i * tunnelLength) / (archCount - 1);
      const ribCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-tunnelWidth / 2 + 0.3, 0, zPos),
        new THREE.Vector3(-tunnelWidth / 2 + 0.3, tunnelHeight * 0.5, zPos),
        new THREE.Vector3(0, tunnelHeight * 1.15, zPos),
        new THREE.Vector3(tunnelWidth / 2 - 0.3, tunnelHeight * 0.5, zPos),
        new THREE.Vector3(tunnelWidth / 2 - 0.3, 0, zPos)
      ]);
      const ribGeo = new THREE.TubeGeometry(ribCurve, 24, 0.45, 8, false);
      const ribMat = new THREE.MeshStandardMaterial({
        color: isLight ? 0x64748b : 0xf59e0b,
        metalness: 0.8,
        roughness: 0.3
      });
      const archMesh = new THREE.Mesh(ribGeo, ribMat);
      scene.add(archMesh);
      archMeshes.push(archMesh);

      // Warning marker light at top of arch
      const archLight = new THREE.PointLight(
        isLight ? 0x3b82f6 : 0xf59e0b,
        isLight ? 0.4 : 0.8,
        14
      );
      archLight.position.set(0, tunnelHeight * 1.1, zPos);
      scene.add(archLight);
    }

    // Mining Railroad Tracks on Floor
    const railsGroup = new THREE.Group();
    const railMat = new THREE.MeshStandardMaterial({
      color: isLight ? 0x475569 : 0x94a3b8,
      metalness: 0.9,
      roughness: 0.2
    });
    const leftRail = new THREE.Mesh(
      new THREE.BoxGeometry(0.35, 0.3, tunnelLength),
      railMat
    );
    leftRail.position.set(-2.5, 0.15, 0);
    const rightRail = new THREE.Mesh(
      new THREE.BoxGeometry(0.35, 0.3, tunnelLength),
      railMat
    );
    rightRail.position.set(2.5, 0.15, 0);
    railsGroup.add(leftRail, rightRail);

    // Wooden Ties
    const tieMat = new THREE.MeshStandardMaterial({
      color: isLight ? 0x78350f : 0x3f2e1e,
      roughness: 0.95
    });
    for (let tz = -tunnelLength / 2; tz < tunnelLength / 2; tz += 2.2) {
      const tie = new THREE.Mesh(new THREE.BoxGeometry(6.5, 0.18, 0.8), tieMat);
      tie.position.set(0, 0.08, tz);
      railsGroup.add(tie);
    }
    scene.add(railsGroup);

    // 7. 3D Mining Robot Model
    const robotGroup = new THREE.Group();

    // Chassis body
    const bodyGeo = new THREE.BoxGeometry(3.6, 1.4, 4.8);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: isLight ? 0x1e293b : 0x1e3a8a,
      metalness: 0.6,
      roughness: 0.4
    });
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    bodyMesh.position.y = 1.3;
    bodyMesh.castShadow = true;
    robotGroup.add(bodyMesh);

    // Cyber Armor plates
    const armorGeo = new THREE.BoxGeometry(3.8, 0.3, 4.2);
    const armorMat = new THREE.MeshStandardMaterial({
      color: isLight ? 0x0284c7 : 0x38bdf8,
      metalness: 0.8,
      roughness: 0.2
    });
    const armorMesh = new THREE.Mesh(armorGeo, armorMat);
    armorMesh.position.y = 2.1;
    robotGroup.add(armorMesh);

    // Caterpillar Treads (Left & Right)
    const treadMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.9
    });
    const leftTread = new THREE.Mesh(
      new THREE.BoxGeometry(0.9, 1.5, 5.2),
      treadMat
    );
    leftTread.position.set(-2.2, 0.75, 0);
    leftTread.castShadow = true;

    const rightTread = new THREE.Mesh(
      new THREE.BoxGeometry(0.9, 1.5, 5.2),
      treadMat
    );
    rightTread.position.set(2.2, 0.75, 0);
    rightTread.castShadow = true;
    robotGroup.add(leftTread, rightTread);

    // Rotating LiDAR Scanner Pod
    const lidarPodGeo = new THREE.CylinderGeometry(0.5, 0.6, 0.8, 16);
    const lidarPodMat = new THREE.MeshStandardMaterial({
      color: 0x111827,
      metalness: 0.9,
      roughness: 0.1
    });
    const lidarPod = new THREE.Mesh(lidarPodGeo, lidarPodMat);
    lidarPod.position.set(0, 2.6, 0.5);
    robotGroup.add(lidarPod);

    // LiDAR Laser Scanner Disc (Cyan Glow)
    const lidarDiscGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.15, 16);
    const lidarDiscMat = new THREE.MeshBasicMaterial({
      color: isLight ? 0x0284c7 : 0x38bdf8
    });
    const lidarDisc = new THREE.Mesh(lidarDiscGeo, lidarDiscMat);
    lidarDisc.position.set(0, 3.0, 0.5);
    robotGroup.add(lidarDisc);

    // Dual 3D Headlights with Volumetric Spotlights
    const spotlightL = new THREE.SpotLight(0xfff7ed, 4.5, 38, Math.PI / 5, 0.45);
    spotlightL.position.set(-1.3, 1.7, 2.5);
    spotlightL.target.position.set(-1.3, 0.2, 22);
    spotlightL.castShadow = true;
    robotGroup.add(spotlightL);
    robotGroup.add(spotlightL.target);

    const spotlightR = new THREE.SpotLight(0xfff7ed, 4.5, 38, Math.PI / 5, 0.45);
    spotlightR.position.set(1.3, 1.7, 2.5);
    spotlightR.target.position.set(1.3, 0.2, 22);
    spotlightR.castShadow = true;
    robotGroup.add(spotlightR);
    robotGroup.add(spotlightR.target);

    // Headlight Lens Glow Spheres
    const lensMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
    const lensL = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 12), lensMat);
    lensL.position.set(-1.3, 1.6, 2.4);
    const lensR = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 12), lensMat);
    lensR.position.set(1.3, 1.6, 2.4);
    robotGroup.add(lensL, lensR);

    // Hazard Stripes on Front Bumper
    const bumperGeo = new THREE.BoxGeometry(3.6, 0.5, 0.4);
    const bumperMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.5
    });
    const bumper = new THREE.Mesh(bumperGeo, bumperMat);
    bumper.position.set(0, 0.9, 2.5);
    robotGroup.add(bumper);

    // Status Beacon on Mast
    const mastGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.8, 8);
    const mastMat = new THREE.MeshStandardMaterial({ color: 0x64748b });
    const mast = new THREE.Mesh(mastGeo, mastMat);
    mast.position.set(-1.4, 3.0, -1.8);
    robotGroup.add(mast);

    const beaconGeo = new THREE.SphereGeometry(0.22, 12, 12);
    const beaconMat = new THREE.MeshBasicMaterial({
      color: isLight ? 0x16a34a : 0x22c55e
    });
    const beacon = new THREE.Mesh(beaconGeo, beaconMat);
    beacon.position.set(-1.4, 3.9, -1.8);
    robotGroup.add(beacon);

    scene.add(robotGroup);

    // 8. 3D LiDAR Point Cloud Particle System
    const pointCount = 2200;
    const pointGeo = new THREE.BufferGeometry();
    const pointPos = new Float32Array(pointCount * 3);
    const pointColors = new Float32Array(pointCount * 3);

    for (let i = 0; i < pointCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 6 + Math.random() * (tunnelWidth / 2 - 6);
      const z = (Math.random() - 0.5) * tunnelLength;
      const y = Math.max(0.2, Math.min(tunnelHeight, Math.sin(angle) * (tunnelHeight * 0.7) + 3));
      const x = Math.cos(angle) * radius;

      pointPos[i * 3] = x;
      pointPos[i * 3 + 1] = y;
      pointPos[i * 3 + 2] = z;

      // Cyan to amber gradient
      pointColors[i * 3] = isLight ? 0.1 : 0.22;
      pointColors[i * 3 + 1] = isLight ? 0.45 : 0.75;
      pointColors[i * 3 + 2] = isLight ? 0.85 : 0.98;
    }

    pointGeo.setAttribute('position', new THREE.BufferAttribute(pointPos, 3));
    pointGeo.setAttribute('color', new THREE.BufferAttribute(pointColors, 3));

    const pointMat = new THREE.PointsMaterial({
      size: 0.35,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const lidarPoints = new THREE.Points(pointGeo, pointMat);
    scene.add(lidarPoints);

    // 9. 3D Obstacles Group (Boulders & Warning Barriers)
    const obstaclesGroup = new THREE.Group();
    scene.add(obstaclesGroup);

    // 10. 3D Path Spline Tube (Glowing Waypoint Route)
    const pathGroup = new THREE.Group();
    scene.add(pathGroup);

    // 11. 3D Gas Hazard Cloud
    const gasCloudGroup = new THREE.Group();
    scene.add(gasCloudGroup);

    // Store refs
    threeRefs.current = {
      renderer,
      scene,
      camera,
      controls,
      robotGroup,
      lidarPoints,
      pathGroup,
      obstaclesGroup,
      gasCloudGroup,
      spotlightL,
      spotlightR,
      animFrameId: null,
      tunnelMesh,
      archMeshes,
      railsGroup,
      lidarDisc
    };

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Spin LiDAR disc
      if (lidarDisc) {
        lidarDisc.rotation.y += delta * 12;
      }

      // LiDAR points subtle breathing wave
      if (lidarPoints && showPointCloud) {
        lidarPoints.rotation.y = Math.sin(elapsed * 0.4) * 0.05;
      }

      // Auto-rotate camera if active
      if (controls) {
        controls.autoRotate = autoRotate;
        controls.autoRotateSpeed = 1.2;
        controls.update();
      }

      // Follow camera updates if in chase mode
      if (cameraMode === 'chase' && robotGroup) {
        const targetOffset = new THREE.Vector3(0, 5, -12);
        targetOffset.applyQuaternion(robotGroup.quaternion);
        const desiredPos = robotGroup.position.clone().add(targetOffset);
        camera.position.lerp(desiredPos, 0.08);

        const lookTarget = robotGroup.position.clone().add(new THREE.Vector3(0, 2, 8));
        camera.lookAt(lookTarget);
      }

      renderer.render(scene, camera);
      threeRefs.current.animFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize observer
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      if (threeRefs.current.animFrameId) {
        cancelAnimationFrame(threeRefs.current.animFrameId);
      }
      resizeObserver.disconnect();
      renderer.dispose();
      controls.dispose();
    };
  }, [isLight]);

  // Update theme & display toggles dynamically
  useEffect(() => {
    const { tunnelMesh, spotlightL, spotlightR, lidarPoints } = threeRefs.current;
    if (tunnelMesh) {
      tunnelMesh.material.wireframe = showWireframe;
    }
    if (spotlightL && spotlightR) {
      spotlightL.intensity = headlightsOn ? (isLight ? 2.5 : 4.5) : 0;
      spotlightR.intensity = headlightsOn ? (isLight ? 2.5 : 4.5) : 0;
    }
    if (lidarPoints) {
      lidarPoints.visible = showPointCloud;
    }
  }, [showWireframe, headlightsOn, showPointCloud, isLight]);

  // Update Robot Position & Heading
  useEffect(() => {
    const { robotGroup, controls } = threeRefs.current;
    if (!robotGroup) return;

    // Convert 2D map coords (0..100) to 3D tunnel coords (-15..+15, -50..+50)
    const rawX = position?.x ?? mapData?.robot?.x ?? 52.4;
    const rawY = position?.y ?? mapData?.robot?.y ?? 38.6;
    const headingDeg = position?.heading ?? 84;

    // Mapping: rawX (0..100) -> 3D X (-15..15), rawY (0..80) -> 3D Z (-45..45)
    const worldX = ((rawX - 50) / 50) * 14;
    const worldZ = ((rawY - 40) / 40) * 45;

    robotGroup.position.set(worldX, 0, worldZ);

    // Rotate heading
    const headingRad = (headingDeg * Math.PI) / 180;
    robotGroup.rotation.y = -headingRad + Math.PI / 2;

    if (cameraMode === 'orbit' && controls) {
      // Smoothly track orbit target to robot vicinity
      controls.target.lerp(new THREE.Vector3(worldX, 1.5, worldZ), 0.1);
    }
  }, [position, mapData, cameraMode]);

  // Update Obstacles in 3D
  useEffect(() => {
    const { scene, obstaclesGroup } = threeRefs.current;
    if (!scene || !obstaclesGroup) return;

    // Clear old obstacles
    while (obstaclesGroup.children.length > 0) {
      const obj = obstaclesGroup.children[0];
      obstaclesGroup.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
    }

    if (Array.isArray(mapData?.obstacles)) {
      mapData.obstacles.forEach((obs) => {
        const ox = ((obs.x - 50) / 50) * 14;
        const oz = ((obs.y - 40) / 40) * 45;
        const w = Math.max(2.5, ((obs.width || 8) / 100) * 28);
        const h = 4.2;
        const d = Math.max(3.0, ((obs.height || 18) / 80) * 40);

        // 3D Boulder / Barrier Mesh
        const obsGeo = new THREE.DodecahedronGeometry(Math.min(w, d) * 0.7, 1);
        const obsMat = new THREE.MeshStandardMaterial({
          color: isLight ? 0xb91c1c : 0xdc2626,
          roughness: 0.8,
          metalness: 0.2
        });
        const mesh = new THREE.Mesh(obsGeo, obsMat);
        mesh.position.set(ox, h * 0.5, oz);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        obstaclesGroup.add(mesh);

        // Warning Hazard Boundary Ring
        const ringGeo = new THREE.RingGeometry(w * 0.6, w * 0.75, 24);
        const ringMat = new THREE.MeshBasicMaterial({
          color: 0xef4444,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.65
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = -Math.PI / 2;
        ring.position.set(ox, 0.05, oz);
        obstaclesGroup.add(ring);

        // Red Hazard Warning Beacon Light
        const pLight = new THREE.PointLight(0xef4444, isLight ? 0.6 : 1.2, 12);
        pLight.position.set(ox, h + 0.5, oz);
        obstaclesGroup.add(pLight);
      });
    }
  }, [mapData?.obstacles, isLight]);

  // Update 3D Path Curve
  useEffect(() => {
    const { pathGroup } = threeRefs.current;
    if (!pathGroup) return;

    while (pathGroup.children.length > 0) {
      const obj = pathGroup.children[0];
      pathGroup.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
    }

    if (Array.isArray(mapData?.path) && mapData.path.length > 1) {
      const points3D = mapData.path.map((pt) => {
        const px = ((pt.x - 50) / 50) * 14;
        const pz = ((pt.y - 40) / 40) * 45;
        return new THREE.Vector3(px, 0.25, pz);
      });

      const curve = new THREE.CatmullRomCurve3(points3D);
      const tubeGeo = new THREE.TubeGeometry(curve, 48, 0.22, 8, false);
      const tubeMat = new THREE.MeshStandardMaterial({
        color: isLight ? 0x2563eb : 0x38bdf8,
        emissive: isLight ? 0x1d4ed8 : 0x0284c7,
        emissiveIntensity: 0.6,
        roughness: 0.2
      });
      const pathTube = new THREE.Mesh(tubeGeo, tubeMat);
      pathGroup.add(pathTube);

      // Waypoint Pins
      points3D.forEach((pt) => {
        const marker = new THREE.Mesh(
          new THREE.SphereGeometry(0.35, 12, 12),
          new THREE.MeshBasicMaterial({ color: isLight ? 0x1d4ed8 : 0x60a5fa })
        );
        marker.position.copy(pt);
        pathGroup.add(marker);
      });
    }
  }, [mapData?.path, isLight]);

  // Camera Mode Presets
  const setPresetCamera = useCallback((mode) => {
    const { camera, controls, robotGroup } = threeRefs.current;
    if (!camera || !controls) return;

    setCameraMode(mode);

    const rx = robotGroup?.position.x || 0;
    const rz = robotGroup?.position.z || 0;

    if (mode === 'orbit') {
      controls.target.set(rx, 1.5, rz);
      camera.position.set(rx + 18, 22, rz + 28);
      onShowToast?.("3D View: Free Orbit Cam (Click & Drag)");
    } else if (mode === 'chase') {
      controls.target.set(rx, 2, rz + 10);
      onShowToast?.("3D View: Third-Person Rover Chase Cam");
    } else if (mode === 'iso') {
      controls.target.set(rx, 1, rz);
      camera.position.set(rx + 32, 38, rz + 32);
      onShowToast?.("3D View: Tactical Isometric Mine Perspective");
    } else if (mode === 'top') {
      controls.target.set(rx, 0, rz);
      camera.position.set(rx, 55, rz + 0.1);
      onShowToast?.("3D View: Top-Down 3D Spatial Scan");
    }
    controls.update();
  }, [onShowToast]);

  // Wheel Zoom Listener: strictly zooms in/out 3D camera and completely prevents page scrolling
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      // 1. Strictly stop browser page/dashboard from scrolling
      e.preventDefault();
      e.stopPropagation();

      const { camera, controls } = threeRefs.current;
      if (!camera || !controls) return;

      // 2. Smooth zoom: scroll up (deltaY < 0) zooms in, scroll down (deltaY > 0) zooms out
      const zoomFactor = e.deltaY < 0 ? 0.90 : 1.11;
      const target = controls.target;
      const curDist = camera.position.distanceTo(target);
      const newDist = Math.max(controls.minDistance, Math.min(controls.maxDistance, curDist * zoomFactor));

      const dir = camera.position.clone().sub(target).normalize();
      camera.position.copy(target).addScaledVector(dir, newDist);
      controls.update();
      setCamDistance(Math.round(newDist));
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const handleRecenter = () => {
    setPresetCamera('orbit');
    onShowToast?.("3D Camera locked to Mining Robot");
  };

  const handleZoomIn = () => {
    const { camera, controls } = threeRefs.current;
    if (!camera || !controls) return;
    const target = controls.target;
    const curDist = camera.position.distanceTo(target);
    const newDist = Math.max(controls.minDistance, curDist * 0.85);
    const dir = camera.position.clone().sub(target).normalize();
    camera.position.copy(target).addScaledVector(dir, newDist);
    controls.update();
    setCamDistance(Math.round(newDist));
  };

  const handleZoomOut = () => {
    const { camera, controls } = threeRefs.current;
    if (!camera || !controls) return;
    const target = controls.target;
    const curDist = camera.position.distanceTo(target);
    const newDist = Math.min(controls.maxDistance, curDist * 1.18);
    const dir = camera.position.clone().sub(target).normalize();
    camera.position.copy(target).addScaledVector(dir, newDist);
    controls.update();
    setCamDistance(Math.round(newDist));
  };

  return (
    <section className="card map-card map3d-card">
      <div className="card-header">
        <div className="card-title-group">
          <Box size={18} className="card-header-icon" />
          <h2 className="card-title">3D Map Section</h2>
          <span className="badge-3d">WebGL 3D Twin</span>
        </div>
        <div className="card-header-right">
          {/* Camera Mode Toolbar */}
          <div className="cam-mode-toolbar">
            <button
              className={`cam-mode-btn ${cameraMode === 'orbit' ? 'active' : ''}`}
              onClick={() => setPresetCamera('orbit')}
              title="Free Orbit Camera (Rotate & Tilt)"
            >
              <Compass size={13} />
              <span>Orbit</span>
            </button>
            <button
              className={`cam-mode-btn ${cameraMode === 'chase' ? 'active' : ''}`}
              onClick={() => setPresetCamera('chase')}
              title="Third-Person Chase Camera (Follows Robot)"
            >
              <Eye size={13} />
              <span>Chase</span>
            </button>
            <button
              className={`cam-mode-btn ${cameraMode === 'iso' ? 'active' : ''}`}
              onClick={() => setPresetCamera('iso')}
              title="Tactical Isometric 3D View"
            >
              <Box size={13} />
              <span>Iso</span>
            </button>
            <button
              className={`cam-mode-btn ${cameraMode === 'top' ? 'active' : ''}`}
              onClick={() => setPresetCamera('top')}
              title="Top-Down 3D Spatial View"
            >
              <Scan size={13} />
              <span>Top</span>
            </button>
          </div>

          <span className={`live-pill ${robotMode === 'emergency_outside' ? 'pill-emergency' : robotMode === 'manual' ? 'pill-manual' : ''}`}>
            <span className={`live-dot ${robotMode === 'emergency_outside' ? 'dot-emergency' : robotMode === 'manual' ? 'dot-manual' : ''}`}></span>
            {robotMode === 'emergency_outside' ? '3D Evacuating' : robotMode === 'manual' ? '3D Manual' : 'Live 3D'}
          </span>

          {onRemove && (
            <button
              className="card-remove-btn"
              onClick={onRemove}
              title="Remove 3D Map from screen (Can be restored anytime)"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      <div className="map-viewport-wrapper map3d-viewport" ref={containerRef}>
        <canvas ref={canvasRef} id="mining-map-3d-canvas" />

        {/* 3D HUD Telemetry Overlay */}
        <div className="map-hud-overlay map3d-hud">
          <span className="coord-chip">
            <span className="coord-label">X:</span> <strong>{Number(position?.x ?? 52.4).toFixed(1)}m</strong>
          </span>
          <span className="coord-chip">
            <span className="coord-label">Y:</span> <strong>{Number(position?.y ?? 38.6).toFixed(1)}m</strong>
          </span>
          <span className="coord-chip">
            <span className="coord-label">Depth:</span> <strong>-480m</strong>
          </span>
          <span className="coord-chip">
            <span className="coord-label">H:</span> <strong>{Math.round(position?.heading ?? 84)}°</strong>
          </span>
          <span className={`coord-chip mode-indicator-chip ${robotMode}`}>
            {robotMode === 'emergency_outside' ? '🚨 OUTSIDE EGRESS' : robotMode === 'manual' ? '🎮 MANUAL' : '🧊 3D TWIN'}
          </span>
        </div>

        {/* 3D Layer & Feature Quick Toggles */}
        <div className="map3d-quick-toggles">
          <button
            className={`map3d-quick-btn ${showPointCloud ? 'active' : ''}`}
            onClick={() => setShowPointCloud(!showPointCloud)}
            title="Toggle LiDAR Point Cloud Particles"
          >
            <Sparkles size={14} />
            <span>LiDAR</span>
          </button>
          <button
            className={`map3d-quick-btn ${headlightsOn ? 'active' : ''}`}
            onClick={() => setHeadlightsOn(!headlightsOn)}
            title="Toggle Robot High-Beam Headlights"
          >
            <Zap size={14} />
            <span>Lights</span>
          </button>
          <button
            className={`map3d-quick-btn ${showWireframe ? 'active' : ''}`}
            onClick={() => setShowWireframe(!showWireframe)}
            title="Toggle Rock Tunnel Wireframe Mesh"
          >
            <Layers size={14} />
            <span>Mesh</span>
          </button>
          <button
            className={`map3d-quick-btn ${autoRotate ? 'active' : ''}`}
            onClick={() => setAutoRotate(!autoRotate)}
            title="Toggle 360° Auto-Orbit Inspection"
          >
            <RotateCcw size={14} />
            <span>Auto</span>
          </button>
        </div>

        {/* Zoom & Recenter Controls with Zoom Badge */}
        <div className="map-controls">
          <span className="map-zoom-badge" title="3D Camera Distance">{camDistance}m</span>
          <button className="map-ctrl-btn" onClick={handleZoomIn} title="Zoom In 3D Scene">+</button>
          <button className="map-ctrl-btn" onClick={handleZoomOut} title="Zoom Out 3D Scene">−</button>
          <button className="map-ctrl-btn" onClick={handleRecenter} title="Center Camera on Robot">
            <Target size={16} />
          </button>
        </div>

        {/* 3D Legend */}
        <div className="map-legend map3d-legend">
          <div className="legend-item">
            <span className="legend-symbol robot-dot"></span>
            <span className="legend-text">3D Rover</span>
          </div>
          <div className="legend-item">
            <span className="legend-symbol path-dash"></span>
            <span className="legend-text">3D Path</span>
          </div>
          <div className="legend-item">
            <span className="legend-symbol obstacle-box"></span>
            <span className="legend-text">Rock Hazard</span>
          </div>
          <div className="legend-item">
            <span className="legend-symbol lidar-dot"></span>
            <span className="legend-text">LiDAR Cloud</span>
          </div>
        </div>
      </div>
    </section>
  );
}
