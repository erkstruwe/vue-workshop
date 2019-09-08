<template>
    <h1>{{ msg }}</h1>
</template>

<script>
    export default {
        props: {
            msg: {
                type: String,
            },
        },
    }
</script>

<style scoped lang="scss">
    h1 {
        color: deeppink;
    }
</style>
