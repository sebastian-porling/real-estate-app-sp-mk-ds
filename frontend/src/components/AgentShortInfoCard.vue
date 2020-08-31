<template>
    <router-link
        v-if="agent !== undefined"
        class="agentInfo text-center"
        :to="{
            name: 'Agent',
            params: { id: agent.id }
        }"
    >
        <div class="p-2">
            <img v-bind:src="parseURL(agent.profile_image)" class="z-depth-1" />
            <p class="mt-2">{{ agent.first_name }} {{ agent.last_name }}</p>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "AgentInfoCard",
    props: ["agent"],
    methods: {
        parseURL(url) {
            const URL_REGEX = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gi;
            return url.match(URL_REGEX) ? url : `${this.$server}${url}`;
        }
    },
};
</script>

<style scoped>
img {
    margin: 10 !important;
    height: 120px;
    width: 120px;
    border-radius: 50%;
}
</style>
