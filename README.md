I'll create an enhanced README.md for your NetworkStatusIndicator package and provide you with the steps to update GitHub and publish to npm. Here's the improved README.md:

```markdown
# NetworkStatusIndicator

[![npm version](https://badge.fury.io/js/network-status-indicator.svg)](https://badge.fury.io/js/network-status-indicator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

NetworkStatusIndicator is a lightweight, customizable component that elegantly displays the online/offline status of your web application. It supports vanilla JavaScript, React, Next.js, and Vue.js, making it versatile for various project types.

![NetworkStatusIndicator Demo](https://raw.githubusercontent.com/mannananxari/network-status-indicator/main/demo.gif)

## Features

- 🌐 Shows online/offline status with a sleek, animated indicator
- 💬 Customizable online/offline messages
- ⏱️ Adjustable display duration for the online status message
- 🔧 Easy integration with various JavaScript frameworks
- 🎨 Customizable styling to match your application's design
- 🚀 Lightweight and performant

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [CDN](#cdn)
  - [Vanilla JavaScript](#vanilla-javascript)
  - [React](#react)
  - [Next.js](#nextjs)
  - [Vue.js](#vuejs)
- [API](#api)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## Installation

### CDN

Include the following script tag in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/network-status-indicator@latest/dist/network-status-indicator.min.js"></script>
```

### npm

Install the package using npm:

```shellscript
npm install network-status-indicator
```

## Usage

### CDN

After including the script in your HTML file, initialize the NetworkStatusIndicator:

```html
<script>
  NetworkStatusIndicator.init({
    onlineText: "You're back online!",
    offlineText: "You're offline. Check your connection.",
    onlineDuration: 3000
  });
</script>
```

### Vanilla JavaScript

If you're using a module bundler, you can import and use the NetworkStatusIndicator like this:

```javascript
import { NetworkStatusIndicator } from 'network-status-indicator';

NetworkStatusIndicator.init({
  onlineText: "You're back online!",
  offlineText: "You're offline. Check your connection.",
  onlineDuration: 3000
});
```

### React

```javascriptreact
import { NetworkStatusIndicator } from 'network-status-indicator/react';

function App() {
  return (
    <div>
      <NetworkStatusIndicator 
        onlineText="You're back online!"
        offlineText="You're offline. Check your connection."
        onlineDuration={3000}
      />
      {/* Rest of your app */}
    </div>
  );
}
```

### Next.js

```javascriptreact
import { NetworkStatusIndicator } from 'network-status-indicator/nextjs';

export default function Layout({ children }) {
  return (
    <>
      <NetworkStatusIndicator 
        onlineText="You're back online!"
        offlineText="You're offline. Check your connection."
        onlineDuration={3000}
      />
      {children}
    </>
  );
}
```

### Vue.js

```vue
<template>
  <div>
    <NetworkStatusIndicator 
      onlineText="You're back online!"
      offlineText="You're offline. Check your connection."
      :onlineDuration="3000"
    />
    <!-- Rest of your app -->
  </div>
</template>

<script>
import { NetworkStatusIndicator } from 'network-status-indicator/vue';

export default {
  components: {
    NetworkStatusIndicator
  }
};
</script>
```

## API

### Props

| Prop | Type | Default | Description
|-----|-----|-----|-----
| onlineText | string | "You're back online!" | The message to display when the connection is restored
| offlineText | string | "You're offline. Check your connection." | The message to display when the connection is lost
| onlineDuration | number | 3000 | The duration (in milliseconds) to show the online message before hiding


### Styling

You can customize the appearance of the NetworkStatusIndicator by overriding the following CSS classes:

- `.nsi-container`: The container of the indicator
- `.nsi-bar`: The main bar of the indicator
- `.nsi-online`: Applied to the bar when online
- `.nsi-offline`: Applied to the bar when offline
- `.nsi-icon`: The status icon
- `.nsi-text`: The status text


Example:

```css
.nsi-bar {
  background-color: #333;
  color: #fff;
}

.nsi-online {
  background-color: #4caf50;
}

.nsi-offline {
  background-color: #f44336;
}
```

## Browser Support

NetworkStatusIndicator supports all modern browsers that are ES5-compliant (IE11 and above).

## Contributing

We welcome contributions to NetworkStatusIndicator! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## License

NetworkStatusIndicator is [MIT licensed](LICENSE).

## Author

Created and maintained by [Mannan Ansari](https://github.com/mannananxari).