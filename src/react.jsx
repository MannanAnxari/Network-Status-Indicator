import React, { useEffect, useState } from "react";

export function NetworkStatusIndicator({
  onlineText = "You're back online!",
  offlineText = "You're offline. Check your connection.",
  onlineDuration = 3000,
}) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const uniquePrefix = "vnsi-" + Math.random().toString(36).substr(2, 5);

    const styles = `
      .${uniquePrefix}-container {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000000;
      }
      .${uniquePrefix}-bar {
        padding: 12px 24px;
        border-radius: 30px;
        font-weight: bold;
        display: flex;
        align-items: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        font-family: Arial, sans-serif;
      }
      .${uniquePrefix}-bar.${uniquePrefix}-show {
        opacity: 1;
        transform: translateY(0);
      }
      .${uniquePrefix}-icon {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin-right: 10px;
        border: 2px solid white;
      }
      .${uniquePrefix}-offline {
        background-color: #ff4757;
        color: white;
      }
      .${uniquePrefix}-offline .${uniquePrefix}-icon {
        background-color: #ff6b6b;
        box-shadow: 0 0 0 2px #ff4757;
        animation: ${uniquePrefix}-pulse 1.5s infinite;
      }
      .${uniquePrefix}-online {
        background-color: #2ecc71;
        color: white;
      }
      .${uniquePrefix}-online .${uniquePrefix}-icon {
        background-color: #7bed9f;
        box-shadow: 0 0 0 2px #2ecc71;
      }
      @keyframes ${uniquePrefix}-pulse {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.3); opacity: 0.7; }
        100% { transform: scale(1); opacity: 1; }
      }
    `;

    const styleElement = document.createElement("style");
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);

    const handleOnline = () => {
      setIsOnline(true);
      setShowBar(true);
      setTimeout(() => setShowBar(false), onlineDuration);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowBar(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      document.head.removeChild(styleElement);
    };
  }, [onlineDuration]);

  if (!showBar) return null;

  return (
    <div className={`vnsi-container`}>
      <div
        className={`vnsi-bar ${isOnline ? "vnsi-online" : "vnsi-offline"} ${
          showBar ? "vnsi-show" : ""
        }`}
      >
        <div className="vnsi-icon"></div>
        <span>{isOnline ? onlineText : offlineText}</span>
      </div>
    </div>
  );
}
