<template>
    <img class="img-fluid" v-if="imageUrl" :src="imageUrl" :alt="breed">
</template>

<script>
    export default {
        props: {
            breed: {
                type: String,
                required: true,
            },
        },
        data() {
            return {
                imageUrl: null,
            }
        },
        created() {
            this.updateImageUrl()
        },
        methods: {
            updateImageUrl() {
                this.imageUrl = null
                fetch(`https://dog.ceo/api/breed/${this.breed}/images/random`)
                    .then((data) => data.json())
                    .then((dogBreed) => this.imageUrl = dogBreed.message)
                    .catch((error) => {
                        console.warn(error)
                    })
            },
        },
    }
</script>
