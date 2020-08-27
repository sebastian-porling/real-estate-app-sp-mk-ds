<template>
  <div id="app">
    <HousesForSaleList></HousesForSaleList>
  </div>
</template>

<script>
import HousesForSaleList from './components/HousesForSaleList.vue'
export default {
  name: 'App',
  components: {
     HousesForSaleList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
