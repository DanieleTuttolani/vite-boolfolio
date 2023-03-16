import { createApp } from "vue";
import { router } from "./route";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
