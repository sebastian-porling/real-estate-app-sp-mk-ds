<template>
<div>
    <a class="btn btn-success z-depth-1" @click="showModal = true">
        <svg width="1.8em" height="2em" viewBox="3 2 10 10" class="bi bi-plus" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
    </a>
    <div class="container">
        
        <add-house-modal
            v-if="showModal"
            @click="showModal = false"
            v-on:close-modal="closeModal"
            v-on:add-house="addHouse"
            :agentName="agent.first_name"
            :agentId="agentId"
        ></add-house-modal>
        <div v-if="agent.id">
            <div class="d-flex justify-content-center">
                <agent-full-info-card :agent="agent" />
            </div>
        </div>
        <hr />
        <div class="list z-depth-1 p-2">
            <house-list
                v-if="agent.listings"
                :houses="agent.listings"
            ></house-list>
        </div>
    </div>
</div>
    
</template>

<script>
import axios from "axios";

export default {
    name: "AgentListing",
    data() {
        return {
            agent: {},
            agentId: "",
            showModal: false
        };
    },
    components: {
        HouseList: () => import("../components/HouseList.vue"),
        AddHouseModal: () => import("../components/AddHouseModal.vue"),
        AgentFullInfoCard: () => import("../components/AgentFullInfoCard")
    },
    /**
     * Get the agent id from the router
     * Fetch the agent data
     */
    async created() {
        this.agentId = this.$route.params.id;
        await this.getAgentObject();
        console.log(this.$route)
    },
    methods: {
        /**
         * Get agent data from the server
         */
        getAgentObject: async function() {
            let response = await axios.get(
                `${this.$server}/api/agent/${this.agentId}`
            );
            this.agent = response.data;
        },
        /**
         * Close the modal
         */
        closeModal() {
            this.showModal = false;
        },
        addHouse(house){
            this.agent.listings.push(house);
        }
    }
};
</script>

<style scoped>
.container {
    max-width: 850px;
    padding: 10px;
    margin: 0 auto;
}
.btn {
    z-index: 500;
    position: fixed;
    bottom: 35px;
    right: 35px;
    border-radius: 50%;
    color: white;
}
.btn a {
    color: white;
    
}
.agent-img {
    height: 5rem!important;
    width: auto!important;
}
</style>
