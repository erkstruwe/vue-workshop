<template>
    <div>
        <h1><code>methods</code> option</h1>
        <pre><code>{{animals}}</code></pre>
        <button type="button" @click="addSpecies">Create new species</button>
        <button type="button" id="lucy">Add Lucy animals</button>
        <button type="button" id="elizabeth">Add Elizabeth animals</button>
        <p>Timestamp: {{now()}}</p>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        data() {
            return {
                animals: {},
            }
        },
        methods: {
            addSpecies() {
                // this.animals['species' + (Object.keys(this.animals).length + 1)] = ['Peter', 'Paul']
                Vue.set(this.animals, 'species' + (Object.keys(this.animals).length + 1), ['Peter', 'Paul'])
            },
            spawnAnimals() {
                const name = 'Lucy'
                return name
            },
            now() {
                // this runs on each re-render, whereas computed properties are only run when relevant reactive data changes
                return new Date()
            },
        },
    }
</script>
