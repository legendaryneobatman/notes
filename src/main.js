import { createApp } from "vue";
import  { FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"
import App from "./App";
import store from './store'
library.add(fas);

const app = createApp(App).use(store);

app
    .component('fa', FontAwesomeIcon)
    .mount("#app");
