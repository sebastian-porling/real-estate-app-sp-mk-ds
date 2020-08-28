<template>
  <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Add house for Agent</div>
    
                    <div class="card-body">
                        <form @submit="addHouseForAgent">
                        <strong>Address:</strong>
                        <input type="text" class="form-control" v-model="address">
                        <strong>Description:</strong>
                        <textarea class="form-control" v-model="description"></textarea>
                        <strong>Latitude:</strong>
                        <input type="text" class="form-control" v-model="latitude">
                        <strong>Longitude:</strong>
                        <input type="text" class="form-control" v-model="longitude">
                        <strong>Image URL:</strong>
                        <input type="text" class="form-control" v-model="image">
    
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
      address: "",
      description: "",
      latitude: "",
      longitude: "",
      image: [],
      agentId: ""



    };
  },
    async created(){
        this.agentId = this.$route.params.id;
        
    },
  methods: {
    addHouseForAgent(e) {
        e.preventDefault();
      axios
        .post("http://localhost:3000/api/house/", {
          
            address: this.address,
            description: this.description,
            latitude: this.latitude,
            longitude: this.longitude,
            images: this.image,
            agent_id: this.agentId
        
        })
        .then((response) => (this.responseData = response.data))
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
