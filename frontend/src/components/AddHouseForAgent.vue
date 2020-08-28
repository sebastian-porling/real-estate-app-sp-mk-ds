<template>
  <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Add house for Agent  </div>
 
                    <div class="card-body">
                        <form @submit="addHouseForAgent">
                        <strong>Address:</strong>
                        <input type="text" class="form-control" v-model="house.address" required>
                        <strong>Description:</strong>
                        <textarea class="form-control" v-model="house.description" required></textarea>
                        <strong>Latitude:</strong>
                        <input type="number" class="form-control" v-model.number="house.latitude" required>
                        <strong>Longitude:</strong>
                        <input type="number" class="form-control" v-model.number="house.longitude" required>
                        <strong>Image URL:</strong>
                        <input type="text" class="form-control" v-model="image">
                        <button @click=addImage class="btn btn-primary">Add to images</button>
    
                        <button class="btn btn-success">Submit</button>
                        </form>
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
             latitude: 0,
             longitude: 0,
             images: [],
             agent_id: 0
        },
        image: "",
        agentName: "NAME"



    };
  },
    async created(){
        this.house.agent_id = parseInt(this.$route.params.id);        
        
    },
  methods: {
    addHouseForAgent(e) {
        e.preventDefault();
        console.log(this.house);
      
      axios
        .post("http://localhost:3000/api/house/", this.house)
        .then((response) =>{
            console.log(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addImage(e){
        e.preventDefault();
        this.house.images.push(this.image);
        this.image = ""
    }
  },
};
</script>

<style scoped></style>
