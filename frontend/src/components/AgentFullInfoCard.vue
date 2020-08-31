<template>
    <router-link
        v-if="agent !== undefined"
        class="estateAgentInfo"
        :to="{
            name: 'Agent',
            params: { id: agent.id }
        }">
        <div class="agentWrapper d-flex align-items-center">
            <img v-bind:src="parseURL(agent.profile_image)" class="agent-img z-depth-1" />
            <div class="p-4">
                <h2>{{ agent.first_name }} {{ agent.last_name }}</h2>
                <a :href="'mailto:' + agent.email">{{ agent.email }}</a>
                <p>{{ agent.telephone }}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "AgentFullInfoCard",
    props: ["agent"],
    methods: {
        parseURL(url) {
            const URL_REGEX = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gi;
            return url.match(URL_REGEX) ? url : `${this.$server}${url}`;
        }
    },
};
</script>

<style>
.agent-img {
    max-width: 10rem;
    width: 20vw;
    height: auto;
    border-radius: 50%;
}
.agent-img:hover {
    opacity: 0.8;
}
</style>
