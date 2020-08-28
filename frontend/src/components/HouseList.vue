<template>
    <div>
        <div class="row no-gutters">
            <div class="col-md-4">
                        <img v-bind:src="house.images[0]" class="card-img" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title"><router-link :to="{name: 'House', params: {id: house.id}}"><p>{{ house.address }}</p></router-link></h5>
                            <p class="card-text">{{house.description}}</p>

                            <slot></slot>
                        </div>
                    </div>
                </div>
        </div>
</template>

<script>
export default {
    name: 'HouseList',
    props: ['house']
}
</script>

