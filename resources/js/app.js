
import { createApp } from "vue";
import router from "./router";

import PrimeVue from "primevue/config";
import "primeicons/primeicons.css"; //icons  
import '@vueform/multiselect/themes/default.css'
import Aura from '@primeuix/themes/aura';
import App from "@/App.vue";
import Dialog from 'primevue/dialog';

const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
 });
 app.component("Dialog", Dialog);
app.mount("#app");

