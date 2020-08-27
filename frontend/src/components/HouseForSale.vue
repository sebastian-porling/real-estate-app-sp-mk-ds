<template>
  <div>
      <h1>HouseForSale</h1>

      <div>House</div>
      <div v-if="house.id!==undefined">

      
      <div v-for="image in house.images" v-bind:key="image.id">
          <img v-bind:src="image" class="img-thumbnail">
      </div>
      
      <div>{{house.address}}</div>
      <div>{{house.description}}</div>
      <div>{{house.latitude}}</div>
      <div>{{house.longitude}}</div>

      <h2>Estate agent</h2>
      <img v-bind:src="house.agent.profile_image" class="img-thumbnail">
      <div>{{house.agent.first_name}} {{house.agent.last_name}}</div>
      <div>{{house.agent.email}}</div>
      </div>
  
  </div>
</template>
<script>
import axios from 'axios';
//gzH6AQwUg
//AJMgtqi-hB - 2 images
export default {
    name: "HouseForSale",
    data(){
        return{
            house: {},
            houseId: ""
             }
    },
    async created(){
        this.houseId = this.$route.params.id;
        await this.getHouseObject();
    },
    mounted(){
        
    },
    methods: {
        getHouseObject: async function(){
            let response = await axios.get(`http://localhost:3000/api/house/${this.houseId}`);
            this.house = response.data;
            console.log(this.house);
        }
    }
}
</script>

<style scoped>
img{
    max-width: 100%;
    height: auto;
}
</style>
