<template>
    <div class="container">
        <add-house-modal
            v-if="showModal"
            @click="showModal = false"
            v-on:close-modal="closeModal"
            :agentName="agent.first_name"
            :agentId="agentId"
        ></add-house-modal>
        <div v-if="agent.id">
            <div class="d-flex justify-content-between">
                <a @click="$router.back()" class="btn btn-info">Back</a>
                <a class="btn btn-primary" @click="showModal = true"
                    >Add House</a
                >
            </div>
            <div class="d-flex justify-content-center">
                <agent-full-info-card :agent="agent" />
            </div>
        </div>
        <hr />
        <div class="list">
            <house-list
                v-if="agent.listings"
                :houses="agent.listings"
            ></house-list>
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
img {
    max-height: 9rem;
    max-width: 9rem;
    width: 100%;
    height: auto;
    border-radius: 50%;
}
</style>
