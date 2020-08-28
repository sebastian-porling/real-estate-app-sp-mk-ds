import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';

import HouseForSale from "./components/HouseForSale.vue";
import HousesForSaleList from './components/HousesForSaleList.vue';
import AgentListing from "./components/AgentListing.vue";
import AddHouseForAgent from "./components/AddHouseForAgent.vue";

Vue.use(VueRouter);

Vue.config.productionTip = false


const routes = [

  {path: '/house/:id',name:'House', component: HouseForSale},
  {path: '/', component: HousesForSaleList},
  {path: '/agent/:id', name:'Agent', component: AgentListing},
  {path: '/agent/:id/addHouse', name:'AddHouse', component: AddHouseForAgent}

]

const router = new VueRouter({
  routes,
  mode:"history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
