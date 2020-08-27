<template>
  <div id="app">
<<<<<<< HEAD
  
        <router-view></router-view>
=======
    <HousesForSaleList></HousesForSaleList>
>>>>>>> 47ff299dc0f08c91583bb7cebc7ac256252f0d4a
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
