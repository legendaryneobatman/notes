import { createApp } from "vue";
import  { FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"
import components from "@/components/UI";
import App from "./App";
import store from './store'
library.add(fas);

const app = createApp(App).use(store);

components.forEach((component) => {
    app.component(component.name, component);
});

app
    .component('fa', FontAwesomeIcon)
    .mount("#app");
