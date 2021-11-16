import { createApp } from "vue";
import App from "./App.vue";

import PrimeVue from "primevue/config";
import "primeflex/primeflex.css";

const app = createApp(App);
app.use(PrimeVue);

import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

createApp(App).mount("#app").use(require("vue-moment"));
