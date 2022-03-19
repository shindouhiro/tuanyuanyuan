import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "vant/lib/index.css";

import Vant from "vant";

createApp(App).use(router).use(Vant).mount("#app");
