<template>
    <div v-cloak>
        <div class="v-cload--inline"></div>
        <div
            v-for="house in houses"
            :key="house.id"
            class="v-cload--hiden card mb-3"
        >
            <house-list-item :house="house">
                <agent-info-card
                    v-if="house.agent !== undefined"
                    :agent="house.agent"
                />
            </house-list-item>
        </div>
    </div>
</template>

<script>
export default {
    name: "HouseList",
    props: ["houses"],
    data() {
        return {
            loading: true
        };
    },
    mounted() {
        if (this.houses !== undefined && this.houses.length > 0) {
            this.loading = false;
        }
    },
    components: {
        HouseListItem: () => import("./HouseListItem"),
        AgentInfoCard: () => import("./AgentShortInfoCard.vue")
    }
};
</script>

<style scoped>
[v-cloak] .v-cloak--inline {
    display: inline;
}
[v-cloak] .v-cloak--hidden {
    display: none;
}
</style>
