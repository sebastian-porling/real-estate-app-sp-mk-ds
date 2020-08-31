<template>
    <div
        class="mask d-flex justify-content-center align-items-center"
        v-if="house"
    >
        <div class="card">
            <div class="card-header">
                <span>Add a house for {{ agentName }}</span>
                <button
                    type="button"
                    class="close"
                    aria-label="Close"
                    @click="closeModal"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="card-body">
                <form @submit="addHouseForAgent">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1"
                                >address</span
                            >
                        </div>
                        <input
                            type="text"
                            class="form-control"
                            v-model="house.address"
                            aria-describedby="basic-addon1"
                            placeholder="6th Square Avenue"
                            required
                        />
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Description</span>
                        </div>
                        <textarea
                            class="form-control"
                            v-model="house.description"
                            placeholder="Has great sigths of the sea..."
                            required
                        ></textarea>
                    </div>
                    <div class="d-flex justify-content-around mb-3">
                        <div class="col input-group mr-4 ml-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Latitude</span>
                            </div>
                            <input
                                type="number"
                                class="form-control"
                                v-model.number="house.latitude"
                                placeholder="13.21421"
                                step="any"
                                required
                            />
                        </div>
                        <div class="col input-group ml-4 mr-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Longitude</span>
                            </div>
                            <input
                                type="number"
                                class="form-control"
                                v-model.number="house.longitude"
                                placeholder="-34.31231"
                                step="any"
                                required
                            />
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Image URL</span>
                        </div>
                        <input
                            type="url"
                            class="form-control"
                            placeholder="https://www.website.com/image.jpg"
                            aria-describedby="basic-addon2"
                            pattern="https?://.*"
                            v-model="image"
                        />
                        <div class="input-group-append">
                            <button
                                class="btn btn-outline-secondary"
                                type="button"
                                @click="addImage"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                    <div>
                        <div
                            class="alert alert-primary"
                            role="alert"
                            v-for="(image, key) in house.images"
                            :key="key"
                        >
                            > <a :href="image" class="alert-link">{{ image }}</a
                            >.
                            <button
                                type="button"
                                class="close"
                                aria-label="Close"
                                @click="removeImage(key)"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "AddHouseModal",
    props: ["agentName", "agentId"],
    data() {
        return {
            house: {
                address: "",
                description: "",
                latitude: 0,
                longitude: 0,
                images: [],
                agent_id: 0
            },
            image: ""
        };
    },
    /**
     * Get the agent id prop and parse
     */
    async created() {
        this.house.agent_id = parseInt(this.agentId);
    },
    methods: {
        /**
         * Add a house at the given agent id
         */
        async addHouseForAgent(e) {
            e.preventDefault();
            try {
                const res = await axios.post(
                    `${this.$server}/api/house/`,
                    this.house
                );
                if (res.data === undefined) throw Error("Didn't add!");
                this.house = null;
                this.$emit("add-house", res.data);
                this.closeModal();
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * Add a image to the image list
         * reset the field after
         */
        addImage(e) {
            e.preventDefault();
            const URL_REGEX = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gi;
            if (this.image !== "" && this.image.match(URL_REGEX)) {
                this.house.images.push(this.image);
                this.image = "";
            }
        },
        /**
         * Remove the image at the given index
         */
        removeImage(index) {
            this.house.images.splice(index, 1);
        },
        /**
         * Close the component
         */
        closeModal() {
            this.$emit("close-modal");
        }
    }
};
</script>

<style scoped>
.card {
    max-width: 700px;
    margin: 0 auto;
}
.mask {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.5s ease;
}
</style>
