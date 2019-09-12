<template>
    <div class="alert" :class="`alert-${type}`">
        <b v-if="prefix">Alert: </b>
        <span>{{ msg }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            msg: {
                type: String,
                required: true,
            },
            type: {
                type: String,
                validator(value) {
                    return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].includes(value)
                },
                default: "danger",
            },
            prefix: {
                type: Boolean,
                default: true,
            },
        },
    }
</script>
