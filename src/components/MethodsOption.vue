<template>
    <div>
        <h1><a href="https://vuejs.org/v2/api/#methods"><code>methods</code></a> option</h1>
        <pre><code>{{animals}}</code></pre>
        <button type="button" @click="addSpecies">Create new species</button>
        <button type="button" id="lucy">Add Lucy animals</button>
        <button type="button" id="elizabeth">Add Elizabeth animals</button>
        <p>Timestamp: {{now()}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                animals: {},
            }
        },
        methods: {
            addSpecies() {
                // this.animals['species' + (Object.keys(this.animals).length + 1)] = ['Peter', 'Paul']
                this.$set(this.animals, 'species' + (Object.keys(this.animals).length + 1), ['Peter', 'Paul'])
            },
            now() {
                // this runs on each re-render, whereas computed properties are only run when relevant reactive data changes
                return new Date()
            },
        },
    }
</script>
