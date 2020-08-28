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
import {debounce} from "lodash";

export default {
  data() {
    return {
      houseData: [],
      page: 0
    };
  },
  components: {
    HouseList
  },
  async created() {
    this.houseData = await this.fetchHouses();
    this.handleDebouncedScroll = debounce(this.handleScroll, 500);
    window.addEventListener('scroll', this.handleDebouncedScroll);
  },
  mounted() {

  },
  methods: {
    async fetchHouses() {
      try {
        const res = await axios.get(`http://localhost:3000/api/houses/${this.page++}`)
        return res.data;
      } catch (e) {
        this.page = 0;
        return [];
      }
    },
    async handleScroll() {
      if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        const data = await this.fetchHouses();
        this.houseData.push(...data);
      }
    }
  },
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
</style>
