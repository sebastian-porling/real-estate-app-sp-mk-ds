<template>
    <div>
        <div v-if="agent.id!==undefined">
            <h1>Agent Listing</h1>
            <div class="estateAgentInfo">
                <img v-bind:src="agent.profile_image"/>
                <div>
                    <h2>{{agent.first_name}} {{agent.last_name}}</h2>
                    <p>{{agent.email}}</p>
                    <p>{{agent.telephone}}</p>
                </div>
            </div>
        </div>
    <div class="list">
        <div class="card mb-3" v-for="house in agent.listings" :key="house.id">
            <div class="row no-gutters">
                    <div class="col-md-4">
                        <img v-bind:src="house.images[0]" class="card-img" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title"><router-link :to="{name: 'House', params: {id: house.id}}"><p>{{ house.address }}</p></router-link></h5>
                            <p class="card-text">{{house.description}}</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {

    name: 'AgentListing',
    data(){
        return{
            agent: {},
            agentId: ""
        }
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
</style>