import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';

import HouseForSale from "./components/HouseForSale.vue";
import HousesForSaleList from './components/HousesForSaleList.vue';
import AgentListing from "./components/AgentListing.vue";

Vue.use(VueRouter);

Vue.config.productionTip = false


const routes = [
<<<<<<< HEAD
  {path: '/house/:id', name: 'House', component: HouseForSale},
  {path: '/', component: HousesForSaleList}
=======
  {path: '/house/:id',name:'House', component: HouseForSale},
  {path: '/', component: HousesForSaleList},
  {path: '/agent/:id', name:'Agent', component: AgentListing}
>>>>>>> 3d070d8145e6ac103451390d87a240b3218d661f
]

const router = new VueRouter({
  routes,
  mode:"history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
