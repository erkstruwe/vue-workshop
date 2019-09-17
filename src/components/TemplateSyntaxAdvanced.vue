<template>
    <div>
        <h1>Template syntax advanced</h1>

        <h2>Info</h2>

        <h3>Conditional</h3>
        <p>Elements can be conditionally included in the DOM by using the <a
            href="https://vuejs.org/v2/guide/conditional.html#v-if"><code>v-if</code> directive</a>.</p>
        <p>You can also make them invisible (CSS <code>display: none</code>) using a falsy value for the <a
            href="https://vuejs.org/v2/guide/conditional.html#v-show"><code>v-show</code> directive</a>.</p>

        <p v-if="show">v-if</p>
        <p v-show="show">v-show</p>
        <button class="form-group btn btn-primary" @click="show = !show"> Toggle</button>

        <p>There's also an if-then-else version of <code>v-if</code>.</p>
        <p v-if="number < 10">Low</p>
        <p v-else-if="number >= 10 && number < 20">Medium</p>
        <p v-else>High</p>

        <p>Use the <code>template</code> element to toggle multiple elements at once.</p>
        <template v-if="show">
            <span>One</span>
            <span>Two</span>
            <span>Three</span>
        </template>

        <h3>Lists</h3>
        <p>You can <a href="https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for">iterate over
            arrays</a> or <a
            href="https://vuejs.org/v2/guide/list.html#v-for-with-an-Object">object properties</a> with a
            <code>v-for</code> loop. Make sure to use the <code>:key</code> directive
            to <a href="https://vuejs.org/v2/guide/list.html#Maintaining-State">maximize Vue's DOM node re-usage</a>.
        </p>
        <ul>
            <li v-for="species of speciesList" :key="species.name">{{ species.name }}, {{ species.class }}</li>
        </ul>
        <dl>
            <template v-for="(value, key) in speciesList[0]">
                <dt :key="`key-${key}`">{{ key }}</dt>
                <dd :key="`value-${key}`">{{ value }}</dd>
            </template>
        </dl>

        <h2>Exercise</h2>
        <h3>List of birds</h3>
        <ul id="template-syntax-advanced-birds">
            <li v-for="species of birds" :key="species.name">
                {{ species.name }}, {{ species.class }}
                <button class="btn btn-outline-primary" v-if="species.flying">Fly</button>
            </li>
        </ul>
        <h3>List of pantheras</h3>
        <ul id="template-syntax-advanced-pantheras">
            <li v-for="species of pantheras" :key="species.name" :class="className(species.name)">{{ species.name }} has {{ species.legs }} legs.</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true,
                number: 20,
                speciesList: [
                    {class: "Aves", name: "Parus major", legs: 2, flying: true},
                    {class: "Aves", name: "Aptenodytes forsteri", legs: 2, flying: false},
                    {class: "Aves", name: "Garrulus glandarius", legs: 2, flying: true},
                    {class: "Mammalia", name: "Hystrix brachyura", legs: 4, flying: false},
                    {class: "Mammalia", name: "Panthera leo", legs: 4, flying: false},
                    {class: "Mammalia", name: "Panthera tigris", legs: 4, flying: false},
                    {class: "Mammalia", name: "Panthera onca", legs: 4, flying: false},
                ],
            }
        },
        computed: {
            birds() {
                return this.speciesList.filter((species) => species.class === "Aves")
            },
            pantheras() {
                return this.speciesList.filter((species) => species.name.indexOf("Panthera ") === 0)
            },
        },
        methods: {
            className(speciesName) {
                return speciesName.replace("Panthera ", "")
            },
        },
    }
</script>
