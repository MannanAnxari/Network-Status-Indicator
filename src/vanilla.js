function init(options = {}) {
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

  function injectStyles() {
    const styleElement = document.createElement("style");
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
  }

  function createNetworkStatusBar() {
    const container = document.createElement("div");
    container.className = `${uniquePrefix}-container`;

    const bar = document.createElement("div");
    bar.className = `${uniquePrefix}-bar`;

    const icon = document.createElement("div");
    icon.className = `${uniquePrefix}-icon`;

    const text = document.createElement("span");
    text.className = `${uniquePrefix}-text`;

    bar.appendChild(icon);
    bar.appendChild(text);
    container.appendChild(bar);
    document.body.appendChild(container);

    return { bar, text };
  }

  function showNetworkStatus(online) {
    const { bar, text } = window[uniquePrefix] || {};
    if (!bar || !text) return;

    bar.classList.remove(`${uniquePrefix}-offline`, `${uniquePrefix}-online`);
    bar.classList.add(
      online ? `${uniquePrefix}-online` : `${uniquePrefix}-offline`
    );
    text.textContent = online
      ? options.onlineText || "You're back online!"
      : options.offlineText || "You're offline. Check your connection.";
    bar.classList.add(`${uniquePrefix}-show`);

    if (online) {
      setTimeout(() => {
        bar.classList.remove(`${uniquePrefix}-show`);
      }, options.onlineDuration || 3000);
    }
  }

  function initNetworkStatusIndicator() {
    injectStyles();
    window[uniquePrefix] = createNetworkStatusBar();

    window.addEventListener("online", () => showNetworkStatus(true));
    window.addEventListener("offline", () => showNetworkStatus(false));

    if (!navigator.onLine) {
      showNetworkStatus(false);
    }
  }

  // Initialize when the DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNetworkStatusIndicator);
  } else {
    initNetworkStatusIndicator();
  }
}

window.NetworkStatusIndicator = { init };
module.exports = { init };