<template>
  <div v-if="showBar" :class="containerClass">
    <div :class="barClass">
      <div class="vnsi-icon"></div>
      <span>{{ statusText }}</span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue';

export default {
  name: 'NetworkStatusIndicator',
  props: {
    onlineText: {
      type: String,
      default: "You're back online!"
    },
    offlineText: {
      type: String,
      default: "You're offline. Check your connection."
    },
    onlineDuration: {
      type: Number,
      default: 3000
    }
  },
  setup(props) {
    const isOnline = ref(true);
    const showBar = ref(false);
    const uniquePrefix = 'vnsi-' + Math.random().toString(36).substr(2, 5);

    const containerClass = computed(() => `${uniquePrefix}-container`);
    const barClass = computed(() => `${uniquePrefix}-bar ${isOnline.value ? `${uniquePrefix}-online` : `${uniquePrefix}-offline`} ${showBar.value ? `${uniquePrefix}-show` : ''}`);
    const statusText = computed(() => isOnline.value ? props.onlineText : props.offlineText);

    const handleOnline = () => {
      isOnline.value = true;
      showBar.value = true;
      setTimeout(() => showBar.value = false, props.onlineDuration);
    };

    const handleOffline = () => {
      isOnline.value = false;
      showBar.value = true;
    };

    onMounted(() => {
      isOnline.value = navigator.onLine;

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

      const styleElement = document.createElement('style');
      styleElement.textContent = styles;
      document.head.appendChild(styleElement);

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
    });

    onUnmounted(() => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    });

    return {
      containerClass,
      barClass,
      statusText,
      showBar
    };
  }
};
</script>