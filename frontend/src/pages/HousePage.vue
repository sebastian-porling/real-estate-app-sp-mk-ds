<template>
    <div class="agentContainer p-2">
        <div v-if="house">
            <house-carousel :images="house.images" />
            <div class="z-depth-1 p-2 pb-4 mt-4">
                <div id="house-info" class="p-1 mt-2 mb-2">
                    <h2>{{ house.address }}</h2>
                    <div>{{ house.description }}</div>
                </div>

                <div class="d-flex justify-content-end">
                    <agent-full-info-card :agent="house.agent" />
                </div>
            </div>
            <house-google-map
                :position="{ lat: house.latitude, lng: house.longitude }"
            />
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "HouseForSale",
    data() {
        return {
            house: null,
            houseId: null
        };
    },
    components: {
        HouseGoogleMap: () => import("../components/HouseGoogleMap"),
        HouseCarousel: () => import("../components/HouseCarousel"),
        AgentFullInfoCard: () => import("../components/AgentFullInfoCard")
    },
    /**
     * Get the house id from the router
     * Get the house data
     */
    async created() {
        this.houseId = this.$route.params.id;
        await this.getHouseObject();
    },
    methods: {
        /**
         * Get the house data
         */
        getHouseObject: async function() {
            try {
                let response = await axios.get(
                    `${this.$server}/api/house/${this.houseId}`
                );
                this.house = response.data;
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

<style scoped>
header {
    margin: 10px;
}

.agent {
    margin-top: 5px;
}
.agentContainer {
    max-width: 850px;
    margin: 0 auto;
}
.maps {
    height: 360px;
    width: stretch;
}
</style>
