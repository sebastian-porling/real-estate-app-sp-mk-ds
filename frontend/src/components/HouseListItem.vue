<template>
    <div v-cloak>
        <div class="v-cloak--inline"></div>
        <div class="v-cloak--hidden row no-gutters">
            <div class="col-12 col-md-4">
                <router-link :to="{ name: 'House', params: { id: house.id } }">
                    <div
                        class="card-img test"
                        v-bind:style="{
                            'background-image': 'url(' + parseURL(house.images[0]) + ')'
                        }"
                    ></div>
                </router-link>
            </div>
            <div class="col-12 col-md-8 row">
                <div class="col-8 card-body d-flex align-items-center">
                    <div>
                        <router-link
                            :to="{ name: 'House', params: { id: house.id } }"
                        >
                            <h5 class="card-title pl-2">{{ house.address }}</h5>
                        </router-link>
                        <p class="card-text pl-2">{{ house.description }}</p>
                    </div>
                </div>
                <div
                    class="col-4 d-flex justify-content-center align-items-center"
                >
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HouseListItem",
    props: ["house"],
    methods: {
        parseURL(url) {
            const URL_REGEX = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gi;
            return url.match(URL_REGEX) ? url : `${this.$server}${url}`;
        }
    },
};
</script>

<style scoped>
.test {
    min-height: 12rem;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
[v-cloak] .v-cloak--inline {
    display: inline;
}
[v-cloak] .v-cloak--hidden {
    display: none;
}
</style>
