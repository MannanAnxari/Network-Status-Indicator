import { NetworkStatusIndicator as ReactComponent } from "./react.jsx";
import { NetworkStatusIndicator as NextComponent } from "./nextjs.jsx";
import VueComponent from "./vue.vue";
// import { init as vanillaInit } from "./vanilla.js";

export const NetworkStatusIndicator = {
  React: ReactComponent,
  Next: NextComponent,
  Vue: VueComponent,
  // init: vanillaInit,
};

export default NetworkStatusIndicator;
