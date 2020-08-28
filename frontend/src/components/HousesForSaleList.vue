<template>
  <div>
    <h1>Houses for sale!</h1>

    <div v-for="house in houseData" :key="house.id">
      <h3>Address</h3>
      <router-link :to="{name: 'House', params: {id: house.id}}"><p>{{ house.address }}</p></router-link>
      <img v-bind:src="house.images[0]" />
      <h3>Real Estate Agent</h3>
      <a href="#"><p>{{ house.agent.first_name }} {{ house.agent.last_name }}</p>

        <img v-bind:src="house.agent.profile_image" />
      </a>

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
</style>
