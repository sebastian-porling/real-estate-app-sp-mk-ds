<template>
    <div>
        <div v-if="agent.id!==undefined">
            <h1>Agent Listing</h1>

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