<template>
    <div class="list z-depth-1 p-2" v-if="houseData">
        <h1 class="display-3">Houses for sale!</h1>
        <house-list :houses="houseData"> </house-list>
    </div>
</template>

<script>
import axios from "axios";
import debounce from "lodash.debounce";
export default {
    data() {
        return {
            houseData: null,
            page: 0
        };
    },
    components: {
        HouseList: () => import("../components/HouseList")
    },
    /**
     * Get all house data
     * Setup event listener for scrolling
     * to fetch more houses
     */
    async created() {
        this.houseData = await this.fetchHouses();
        this.handleDebouncedScroll = debounce(this.handleScroll, 500);
        window.addEventListener("scroll", this.handleDebouncedScroll);
    },
    methods: {
        /**
         * Fetch houses at the page and increment page
         */
        async fetchHouses() {
            try {
                const res = await axios.get(
                    `${this.$server}/api/houses/${this.page++}`
                );
                return res.data;
            } catch (e) {
                this.page = 0;
                return [];
            }
        },
        /**
         * When the page is 15% at the bottom
         * fetch more houses
         */
        async handleScroll() {
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight * 0.85
            ) {
                const data = await this.fetchHouses();
                this.houseData.push(...data);
            }
        }
    }
};
</script>

<style scoped>
.list {
    max-width: 850px;
    padding: 20px;
    margin: 0 auto;
}

img {
    margin: 10 !important;
    height: 120px;
    width: 120px;
    border-radius: 50%;
}
</style>
