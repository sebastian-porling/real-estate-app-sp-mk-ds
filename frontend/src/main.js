import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.prototype.$server = 'http://localhost:3000';
Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyC4ORXbSRauP16RXMXzXc-dCysYrGW93hM"
    }
});

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
