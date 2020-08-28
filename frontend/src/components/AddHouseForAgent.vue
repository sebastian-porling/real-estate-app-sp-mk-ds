<template>
  <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Add house for Agent</div>
    
                    <div class="card-body">
                        <form @submit="addHouseForAgent">
                        <strong>Address:</strong>
                        <input type="text" class="form-control" v-model="house.address">
                        <strong>Description:</strong>
                        <textarea class="form-control" v-model="house.description"></textarea>
                        <strong>Latitude:</strong>
                        <input type="text" class="form-control" v-model="house.latitude">
                        <strong>Longitude:</strong>
                        <input type="text" class="form-control" v-model="house.longitude">
                        <strong>Image URL:</strong>
                        <input type="text" class="form-control" v-model="house.image">
    
                        <button class="btn btn-success">Submit</button>
                        </form>
                        <pre>
                        {{this.$route.params.id}}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
        <a @click="$router.go(-1)" class="btn btn-info">Back</a>
    </div>
    
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
         house: {

             address: "",
             description: "",
             latitude: "",
             longitude: "",
             image: [],
             agent_id: ""
        }



    };
  },
    async created(){
        this.house.agent_id = this.$route.params.id;
        
    },
  methods: {
    addHouseForAgent(e) {
      e.preventDefault();
      
      axios
        .post("http://localhost:3000/api/house/", {
          params:{
              ...this.house
        }})
        .then((response) =>{
            console.log(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
