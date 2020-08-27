import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';

import HouseForSale from "./components/HouseForSale.vue";

Vue.use(VueRouter);

Vue.config.productionTip = false


const routes = [
  {path: '/house/:id', component: HouseForSale}
]

const router = new VueRouter({
  routes
})
//render: h => h(App),
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
