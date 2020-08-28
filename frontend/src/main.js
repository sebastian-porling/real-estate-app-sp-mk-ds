import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';

import HouseForSale from "./components/HouseForSale.vue";
import HousesForSaleList from './components/HousesForSaleList.vue';
import AgentListing from "./components/AgentListing.vue";

import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC4ORXbSRauP16RXMXzXc-dCysYrGW93hM'
  }
});

Vue.use(VueRouter);

Vue.config.productionTip = false


const routes = [

  {path: '/house/:id',name:'House', component: HouseForSale},
  {path: '/', component: HousesForSaleList},
  {path: '/agent/:id', name:'Agent', component: AgentListing}

]

const router = new VueRouter({
  routes,
  mode:"history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
