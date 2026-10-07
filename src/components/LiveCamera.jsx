import React, { useState, useRef, useEffect } from 'react';
import { Video, RefreshCw, Eye, Maximize, RotateCcw } from 'lucide-react';

export default function LiveCamera({ cameraData, depth, speed, onShowToast }) {
  const [currentCam, setCurrentCam] = useState(cameraData?.currentCam || 'front');
  const [nightVision, setNightVision] = useState(cameraData?.nightVision || false);
  const [feedAvailable, setFeedAvailable] = useState(cameraData?.feedAvailable !== false);
  const [timeStr, setTimeStr] = useState('');
  const [webcamStream, setWebcamStream] = useState(null);

  const videoRef = useRef(null);
  const viewportRef = useRef(null);

  useEffect(() => {
    setFeedAvailable(cameraData?.feedAvailable !== false);
    if (cameraData?.nightVision !== undefined) setNightVision(cameraData.nightVision);
    if (cameraData?.currentCam) setCurrentCam(cameraData.currentCam);
  }, [cameraData]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeStr(new Date().toTimeString().split(' ')[0]);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // WebCam Handler
  useEffect(() => {
    if (currentCam === 'webcam') {
      navigator.mediaDevices?.getUserMedia({ video: true })
        .then((stream) => {
          setWebcamStream(stream);
          if (videoRef.current) videoRef.current.srcObject = stream;
        })
        .catch((err) => {
          console.warn("Webcam access error:", err);
          onShowToast?.("Webcam unavailable: switching to rover front camera");
          setCurrentCam('front');
        });
    } else {
      if (webcamStream) {
        webcamStream.getTracks().forEach((track) => track.stop());
        setWebcamStream(null);
      }
    }
    return () => {
      if (webcamStream) {
        webcamStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [currentCam]);

  const cycleCam = () => {
    if (currentCam === 'front') setCurrentCam('cockpit');
    else if (currentCam === 'cockpit') setCurrentCam('webcam');
    else setCurrentCam('front');
  };

  const toggleNightVision = () => {
    setNightVision(!nightVision);
    onShowToast?.(!nightVision ? "Night Vision IR: ENABLED" : "Night Vision IR: DISABLED");
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      viewportRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  const handleRetry = () => {
    setFeedAvailable(true);
    onShowToast?.("Camera feed reconnected!");
  };

  const toggleFeedUnavailable = () => {
    setFeedAvailable(!feedAvailable);
    if (feedAvailable) onShowToast?.("Simulating camera feed unavailable");
  };

  return (
    <section className="card camera-card">
      <div className="card-header">
        <div className="card-title-group">
          <Video size={18} className="card-header-icon" />
          <h2 className="card-title">Live Camera</h2>
        </div>
        <div className="card-header-right">
          <div className="cam-tools">
            <button className="cam-tool-btn" onClick={cycleCam} title="Switch Camera View">
              <RotateCcw size={13} />
              <span>{currentCam === 'front' ? 'Front IR' : currentCam === 'cockpit' ? 'Cockpit' : 'Webcam'}</span>
            </button>
            <button className="cam-tool-btn" onClick={toggleNightVision} title="Toggle Night Vision">
              <Eye size={13} />
            </button>
            <button className="cam-tool-btn" onClick={toggleFeedUnavailable} title="Simulate Feed Unavailable">
              <RefreshCw size={13} />
            </button>
            <button className="cam-tool-btn" onClick={toggleFullscreen} title="Fullscreen Camera">
              <Maximize size={14} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={viewportRef}
        className={`camera-viewport-wrapper ${nightVision ? 'night-vision' : ''}`}
      >
        {/* Real Webcam video */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className={`camera-video-elem ${currentCam !== 'webcam' ? 'hidden' : ''}`}
        />

        {/* Rover / Cockpit image stream */}
        <img
          src={currentCam === 'cockpit' ? '/assets/mining_tunnel_cockpit.jpg' : '/assets/mining_tunnel.jpg'}
          alt="Live Mining Shaft Feed"
          className={`camera-feed-img ${currentCam === 'webcam' ? 'hidden' : ''}`}
        />

        {/* Scanline layer */}
        <div className="camera-lens-overlay"></div>

        {/* HUD Telemetry Overlay */}
        <div className="cam-hud-overlay">
          <div className="cam-hud-top">
            <div className="cam-rec-indicator">
              <span className="rec-dot"></span> [REC] LIVE
            </div>
            <div className="cam-hud-stats">
              <span>DEPTH: {depth ?? -480}M</span>
              <span>{timeStr || '11:00:00'}</span>
            </div>
          </div>

          <div className="cam-hud-center">
            <div className="cam-crosshair"></div>
          </div>

          <div className="cam-hud-bottom">
            <div className="cam-heading-compass">ROVER-AM08 | SPEED {speed ?? 1.2} KM/H</div>
            <div className="cam-fov-status">ILLUMINATION: 100%</div>
          </div>
        </div>

        {/* Feed Unavailable State */}
        {!feedAvailable && (
          <div className="camera-unavailable-overlay">
            <div className="unavailable-box">
              <h3 className="unavailable-title">Feed unavailable</h3>
              <button className="retry-btn" onClick={handleRetry}>
                <RefreshCw size={15} />
                <span>Retry</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
