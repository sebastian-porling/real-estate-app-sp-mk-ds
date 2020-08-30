<template>
    <a @click="$router.back()" class="btn btn-primary z-depth-1">
        <svg
            width="2em"
            height="2em"
            viewBox="1 0 16 15"
            class="bi bi-chevron-left"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
        </svg>
    </a>
</template>

<script>
export default {
    name: "BackButton"
};
</script>

<style scoped>
.btn {
    z-index: 10000;
    position: fixed;
    bottom: 35 !important;
    left: 35;
    border-radius: 50%;
}
</style>
