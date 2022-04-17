import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./tailwind.css";
import Toaster from "@meforma/vue-toaster";
import { FontAwesomeIcon } from "./plugins/fontawesome";

createApp(App)
  .use(store)
  .use(router)
  .use(Toaster)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
