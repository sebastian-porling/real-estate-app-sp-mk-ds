<template>
    <div id="app">
        <back-button/>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
    components: {
        BackButton: () => import("./components/BackButton")
    }
};
</script>

<style>
.z-depth-1 {
    -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
}
</style>
