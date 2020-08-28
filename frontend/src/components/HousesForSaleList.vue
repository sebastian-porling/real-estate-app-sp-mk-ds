<template>
  <div>
    <h1>Houses for sale!</h1>

    <div v-for="house in houseData" :key="house.id">
      <h3>Address</h3>
      <router-link :to="{name: 'House', params: {id: house.id}}"><p>{{ house.address }}</p></router-link>
      <img v-bind:src="house.images[0]"/>
      
      <h3>Real Estate Agent</h3>
      


      <router-link :to="{name: 'Agent', params: {id: house.agent.id}}">
        <p>{{ house.agent.first_name }} {{ house.agent.last_name }}</p>
        <img v-bind:src="house.agent.profile_image" class="agent-img"/>
      </router-link>
      <hr />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      houseData: [],
    };
  },
  async created() {
    let response = await axios.get("http://localhost:3000/api/houses");
    this.houseData = response.data;
    console.log(response.data);
  },
  mounted() {},
};
</script>

<style scoped>
hr {
  max-width: 250px;
}

.agent-img{
  border-radius: 50%;
  max-height: 150px;
  max-width: 150px;
}
</style>
