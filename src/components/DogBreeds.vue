<template>
    <p v-if="loading">Loading</p>
    <p v-else-if="error">Error: {{error}}</p>
    <ul v-else-if="data">
        <li v-for="breed of breeds" :key="breed">{{breed}}</li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
                error: null,
                data: null,
            }
        },
        computed: {
            breeds() {
                return Object.keys(this.data.message)
            },
        },
        created() {
            this.fetchData()
        },
        watch: {
            $route: "fetchData",
        },
        methods: {
            fetchData() {
                this.loading = true
                this.error = null
                this.data = null
                fetch("https://dog.ceo/api/breeds/list/all")
                    .then((response) => response.json())
                    .then((data) => this.data = data)
                    .catch((error) => this.error = error)
                    .finally(() => this.loading = false)
            },
        },
    }
</script>
