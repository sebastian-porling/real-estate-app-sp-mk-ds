<template>
    <div>
        <div v-if="agent.id!==undefined">
            <h1>Agent Listing</h1>
            <div class="estateAgentInfo">
                <img v-bind:src="'http://localhost:3000' + agent.profile_image"/>
                <div>
                    <h2>{{agent.first_name}} {{agent.last_name}}</h2>
                    <p>{{agent.email}}</p>
                    <p>{{agent.telephone}}</p>
                </div>
            </div>
        
        </div>
        <div class="list">
            <div class="card mb-3" v-for="house in agent.listings" :key="house.id">
                <HouseList v-bind:house="house"></HouseList>
            </div>
        </div>
</div>
</template>

<script>
import axios from "axios";
import HouseList from './HouseList.vue';

export default {

    name: 'AgentListing',
    data(){
        return{
            agent: {},
            agentId: ""
        }
    },
    components: {
        HouseList
    },
    async created(){
        this.agentId = this.$route.params.id;
        await this.getAgentObject();
    },
    mounted(){

    },
    methods: {
        getAgentObject: async function(){
            let response = await axios.get(`http://localhost:3000/api/agent/${this.agentId}`);
            this.agent = response.data;
            console.log(this.agent);
        }
    }
}

</script>

<style scoped>
.list{
    margin-left: 100px;
    margin-right: 100px;
}
img{
  height: 240px;
  width: 240px;
  border-radius: 50%;
}
</style>