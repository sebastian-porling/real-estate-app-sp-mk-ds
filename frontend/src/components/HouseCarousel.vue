<template>
    <div v-if="images">
        <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade z-depth-1"
            data-ride="carousel"
        >
            <div class="carousel-inner">
                <div
                    class="carousel-item"
                    v-for="(image, index) in images"
                    v-bind:index="index"
                    v-bind:key="image.id"
                    :class="index == 0 ? 'active' : ''"
                >
                    <img
                        v-bind:src="image"
                        class="d-block w-100 rounded"
                        alt="..."
                    />
                </div>
            </div>
            <div v-if="images.length > 1">
                <a
                    class="carousel-control-prev"
                    href="#carouselExampleFade"
                    role="button"
                    data-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a
                    class="carousel-control-next"
                    href="#carouselExampleFade"
                    role="button"
                    data-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HouseCarousel",
    props: {
        images: Array
    }
};
</script>

<style scoped>
img {
    height: 43vh;
    min-height: 20rem;
}
</style>
