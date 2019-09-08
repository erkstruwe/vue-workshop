<template>
    <h1 class="display-1">{{ msg }}</h1>
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
