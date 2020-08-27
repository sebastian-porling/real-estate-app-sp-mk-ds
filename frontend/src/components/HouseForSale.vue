<template>
  <div>
      <h1>HouseForSale</h1>

      <div>House</div>
      
      <img v-bind:src="getHouseImages()" class="img-thumbnail">
      <div>{{house.listings[0].address}}</div>
      <div>{{house.listings[0].description}}</div>
      <div>{{house.listings[0].latitude}}</div>
      <div>{{house.listings[0].longitude}}</div>

      <h2>Estate agent</h2>
      <img v-bind:src="getEstateAgentImageSrc()" class="img-thumbnail">
      <div>{{house.first_name}} {{house.last_name}}</div>
      <div>{{house.email}}</div>
  </div>
</template>

<script>
import house_data from '../assets/house_data.json';

export default {
    name: "HouseForSale",
    data(){
        return{
            house: house_data[0],
            n: 0,
            houseId: ""
        }
    },
    created(){
        this.houseId = this.$route.params.id;
    },
    mounted(){
        console.log(this.$route.params.id);
        console.log(this.house);
    },
    methods: {
        getHouseImages: function() {
            return this.house.listings[this.n].images[0];
        },
        getEstateAgentImageSrc: function(){
            return this.house.profile_image;
        },
        findObject: function(){

        }
    }
}
</script>

<style>
img{
    max-width: 100%;
    height: auto;
}
</style>
