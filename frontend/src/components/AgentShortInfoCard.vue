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
            <img v-bind:src="agent.profile_image" class="z-depth-1" />
            <p class="mt-2">{{ agent.first_name }} {{ agent.last_name }}</p>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "AgentInfoCard",
    props: ["agent"]
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
