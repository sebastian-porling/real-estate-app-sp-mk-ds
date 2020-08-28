<template>
  <div class="agentContainer">
      <div v-if="house.id!==undefined">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item" v-for="(image, index) in house.images" v-bind:index="index" v-bind:key="image.id" :class="index==0 ? 'active' :''">
                    <img v-bind:src="image" class="d-block w-100" alt="...">
                </div>
            </div>
            <div v-if="house.images.length > 1">
                <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        <div class="row agent">
            <div class="col">
                <img v-bind:src="house.agent.profile_image" class="agentPicture">
                <div>{{house.agent.first_name}} {{house.agent.last_name}}</div>
                <p>{{house.agent.email}}</p>
            </div>
            <!-- <div class="col-6">
            </div>
            <div class="col"></div> -->
        </div>
        <div>
            <h2>{{house.address}}</h2>
            <div>{{house.description}}</div>
        </div>
            <GmapMap
                :center="{lat:house.latitude, lng:house.longitude}"
                :zoom="10"
                class="maps">
                <GmapMarker 
                :position="{lat:house.latitude, lng:house.longitude}"/>
                </GmapMap>
      </div>

  </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "HouseForSale",
    data(){
        return{
            house: {},
            houseId: "",
             }
    },
    async created(){
        this.houseId = this.$route.params.id;
        await this.getHouseObject();
    },
    methods: {
        getHouseObject: async function(){
            let response = await axios.get(`http://localhost:3000/api/house/${this.houseId}`);
            this.house = response.data;
        }
    }
}
</script>

<style scoped>
img{
    height:600px;
}
.agentPicture{
    height:120px;
    width: 120px;
    border-radius: 50%;
}
.agent{
    margin-top: 5px;
}
.agentContainer{
    margin-left: 100px;
    margin-right: 100px;
}
.maps{
    height:360px;
    width: stretch;
}
</style>
