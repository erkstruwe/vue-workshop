<template>
    <section>
        <h1>{{name}}</h1>
        <DogImage :breed="name"></DogImage>
    </section>
</template>

<script>
    import DogImage from "./DogImage"

    export default {
        components: {
            DogImage,
        },
        props: {
            name: {
                type: String,
                required: true,
            },
        },
    }
</script>
