import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "./css/main.css";
import filters from "./views/filter.js/filters"; //global filter
const app = createApp(App);
app.config.globalProperties.$filters = filters; // global filerter
//Make bold custom directive global
app.directive("font", (el, binding) => {
    el.style.fontSize = binding.value + "px";
    // pour ajouter plus de modification on utulise cette methode
    if (binding.modifiers.yellow) {
        el.style.color = "yellow";
    }
});



app.directive("color", (el, binding) => {
    // en tplate "''" on n oubli pas les '' dans "" pour ecrire le colr
    el.style.color = binding.value;
});
app.use(router);
app.mount("#app");
import "bootstrap/dist/js/bootstrap.js";
