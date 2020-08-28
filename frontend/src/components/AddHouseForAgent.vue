<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="form-group">
        <label for="fname">Address</label>
        <input type="text" class="form-control" value="" v-model="address" />
      </div>
      <div class="form-group">
        <label for="lname">Description</label>
        <input
          type="text"
          class="form-control"
          value=""
          v-model="description"
        />
      </div>
      <div class="form-group">
        <label for="age">Longitude</label>
        <input type="text" class="form-control" value="" v-model="longitude" />
      </div>
      <div class="form-group">
        <label for="age">Latitude</label>
        <input type="text" class="form-control" value="" v-model="latitude" />
      </div>
      <div class="form-group">
        <label for="age">Image Url</label>
        <input type="text" class="form-control" value="" v-model="image" />
      </div>
    </div>
    <div class="col-sm-12">
      <a href="#" class="btn btn-success" @click="addHouseForAgent">Submit</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      address: "",
      description: "",
      longitude: "",
      latitude: "",
      image: [],
      agentId: ""



    };
  },
    async created(){
        this.agentId = this.$route.params.id;
        await this.getAgentObject();
    },
  methods: {
    addHouseForAgent() {
      axios
        .post("http://localhost:8080/house/", {
          params: {
            address: this.address,
            description: this.description,
            longitude: this.longitude,
            latitude: this.latitude,
            image: this.image,
            agent_id: this.agentId
          },
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
