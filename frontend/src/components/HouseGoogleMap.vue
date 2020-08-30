<template>
    <GmapMap :center="position" :zoom="10" class="maps z-depth-1">
        <GmapMarker :position="position" />
    </GmapMap>
</template>

<script>
export default {
    name: "HouseGoogleMap",
    props: ["position"]
};
</script>

<style></style>
