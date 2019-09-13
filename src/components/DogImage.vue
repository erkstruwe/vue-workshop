<template>
    <img class="img-fluid" src="https://demo.tiny.pictures/main/example1.jpg" alt="River landscape">
</template>

<script>
    export default {
        props: {
            breed: {
                type: String,
                required: true,
            },
        },
        // use this endpoint to get an image URL: https://dog.ceo/api/breed/affenpinscher/images/random
    }
</script>
