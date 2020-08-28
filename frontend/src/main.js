import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';

import HouseForSale from "./components/HouseForSale.vue";
import HousesForSaleList from './components/HousesForSaleList.vue';
Vue.use(VueRouter);

Vue.config.productionTip = false


const routes = [
  {path: '/house/:id', name: 'House', component: HouseForSale},
  {path: '/', component: HousesForSaleList}
]

const router = new VueRouter({
  routes,
  mode:"history"
})
//render: h => h(App),
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
