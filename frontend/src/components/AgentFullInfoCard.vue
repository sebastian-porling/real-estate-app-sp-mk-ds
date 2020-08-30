<template>
    <router-link
        v-if="agent !== undefined"
        class="estateAgentInfo"
        :to="{
            name: 'Agent',
            params: { id: agent.id }
        }">
        <div class="agentWrapper d-flex align-items-center">
            <img v-bind:src="agent.profile_image" class="agent-img z-depth-1" />
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
    props: ["agent"]
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
