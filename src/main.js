import "./assets/css/tailwind.css";
import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import Unicon from "./uniIcons";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";
import BaseInput from "./components/ui/BaseInput.vue";
import BaseText from "./components/ui/BaseText.vue";

const app = createApp(App);

app.use(router);
app.use(Unicon);
app.use(store);
app.use(VueAxios, axios);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-input", BaseInput);
app.component("base-text", BaseText);
app.mount("#app");
