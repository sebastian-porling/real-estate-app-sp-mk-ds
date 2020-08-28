<template>
  <div>
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
                <img v-bind:src="house.agent.profile_image" class="rounded">
                <div>{{house.agent.first_name}} {{house.agent.last_name}}</div>
                <p>{{house.agent.email}}</p>
            </div>
            <div class="col-6">
                <button class="btn btn-light">Maps</button>
            </div>
            <div class="col">
                
            </div>
        </div>
        <div>
            <h2>{{house.address}}</h2>
            <div>{{house.description}}</div>
        </div>
        
        <div class="maps">
            <div>{{house.latitude}}</div>
        <div>{{house.longitude}}</div>
        </div>
        
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
        console.log("Length: " + this.house.images.length);
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
    height:400px;
}
.rounded{
    height:100px;
    width: 100px;
}
.agent{
    background-color: antiquewhite;
}
</style>
