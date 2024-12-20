# Network Status Indicator

[![npm version](https://badge.fury.io/js/network-status-indicator.svg)](https://badge.fury.io/js/network-status-indicator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A customizable network status indicator for React, Next.js, Vue, and vanilla JavaScript applications. This package provides an elegant way to inform users about their network connectivity status.

## Features

- 🌐 Support for React, Next.js, Vue, and vanilla JavaScript
- 🎨 Customizable appearance and messages
- 🚀 Lightweight and easy to integrate
- 📱 Responsive design
- 🔧 Configurable display duration

## Installation

### Full Package

```bash
npm install network-status-indicator
```

Or if you prefer using yarn:

```shellscript
yarn add network-status-indicator
```

### Framework-Specific Installations

If you only need support for a specific framework, you can install the corresponding package:

#### React

```shellscript
npm install network-status-indicator-react
```

#### Next.js

```shellscript
npm install network-status-indicator-nextjs
```

#### Vue

```shellscript
npm install network-status-indicator-vue
```

#### Vanilla JavaScript

```shellscript
npm install network-status-indicator-vanilla
```

## Usage

### React

```javascriptreact
import { NetworkStatusIndicator } from 'network-status-indicator-react';

function App() {
  return (
    <div>
      <NetworkStatusIndicator 
        onlineText="You're back online!"
        offlineText="You're offline. Check your connection."
        onlineDuration={3000}
      />
      {/* Your app content */}
    </div>
  );
}
```

### Next.js

```javascriptreact
import { NetworkStatusIndicator } from 'network-status-indicator-nextjs';

function App() {
  return (
    <div>
      <NetworkStatusIndicator 
        onlineText="You're back online!"
        offlineText="You're offline. Check your connection."
        onlineDuration={3000}
      />
      {/* Your app content */}
    </div>
  );
}
```

### Vue

```vue
<template>
  <div>
    <NetworkStatusIndicator 
      onlineText="You're back online!"
      offlineText="You're offline. Check your connection."
      :onlineDuration="3000"
    />
    <!-- Your app content -->
  </div>
</template>

<script>
import { NetworkStatusIndicator } from 'network-status-indicator-vue';

export default {
  components: {
    NetworkStatusIndicator
  }
}
</script>
```

### Vanilla JavaScript

```javascript
import { init } from 'network-status-indicator-vanilla';

init({
  onlineText: "You're back online!",
  offlineText: "You're offline. Check your connection.",
  onlineDuration: 3000
});
```

### CDN Usage

You can also use the Network Status Indicator directly from a CDN:

```html
<script src="https://unpkg.com/network-status-indicator/dist/vanilla.min.js"></script>
<script>
  NetworkStatusIndicator.init({
    onlineText: "You're back online!",
    offlineText: "You're offline. Check your connection.",
    onlineDuration: 3000
  });
</script>
```

## API

### Props

| Prop | Type | Default | Description
|-----|-----|-----|-----
| `onlineText` | string | "You're back online!" | Text to display when the network is back online
| `offlineText` | string | "You're offline. Check your connection." | Text to display when the network is offline
| `onlineDuration` | number | 3000 | Duration (in milliseconds) to show the online message


## Customization

You can customize the appearance of the Network Status Indicator by overriding the default CSS classes. The following classes are available:

- `.vnsi-container`: The container of the indicator
- `.vnsi-bar`: The main bar of the indicator
- `.vnsi-icon`: The status icon
- `.vnsi-online`: Applied when the network is online
- `.vnsi-offline`: Applied when the network is offline


## Browser Support

Network Status Indicator works in all modern browsers that support the [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Mannan Ansari ([GitHub Profile](https://github.com/Mannan-Ansari))

## Acknowledgments

- Thanks to all contributors who have helped to improve this package.
- Inspired by the need for a simple, cross-framework network status indicator.
```