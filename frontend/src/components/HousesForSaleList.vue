<template>
  <div>
      <h1>Houses for sale!</h1>

    <div v-for="agent in houseData" :key="agent.id">
       
        <img v-bind:src="agent.profile_image" /> 
        <a href="#"><h3>{{agent.first_name}} {{agent.last_name}}</h3></a>
        <img v-bind:src="agent.listings[0].images[0]" /> 
        
        <p>{{agent.listings[0].address}}</p>
        <a href="#"></a>
        <hr>
    </div>

    <img src="https://thispersondoesnotexist.com/" alt="">Image
   


      
      
  
  </div>
  
</template>

<script>
// eslint-disable-next-line no-unused-vars
import HouseData from "../../public/house_data.json";
export default {
    data() {
        return {
            
            houseData: []
    };
  },
  mounted(){
      this.houseData=HouseData
           
    }
};
</script>

<style scoped>
hr{
    max-width: 250px;
}
</style>
