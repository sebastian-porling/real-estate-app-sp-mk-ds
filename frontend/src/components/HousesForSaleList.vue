<template>
  <div>
    <h1>Houses for sale!</h1>
    <div class="list">
      <div v-for="house in houseData" :key="house.id" class="card mb-3">
        <house-list v-bind:house="house">
          <div class="agentInfo">
            <router-link :to="{name: 'Agent', params: {id: house.agent.id}}">
              <img v-bind:src="house.agent.profile_image" />
              <p>{{ house.agent.first_name }} {{ house.agent.last_name }}</p>
            </router-link>
          </div>
        </house-list>
      </div> 
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HouseList from "./HouseList.vue";

export default {
  data() {
    return {
      houseData: [],
    };
  },
  components: {
    HouseList
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
.list{
    margin-left: 100px;
    margin-right: 100px;
}
.agentInfo{
    position: absolute;
    right: 10px;
    bottom: 0; 
}
img{
  height: 120px;
  width: 120px;
  border-radius: 50%;
}

.agent-img{
  border-radius: 50%;
  max-height: 150px;
  max-width: 150px;
}
</style>
