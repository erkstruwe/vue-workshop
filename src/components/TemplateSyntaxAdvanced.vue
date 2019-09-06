<template>
    <div>
        <h1>Template syntax advanced</h1>

        <h2>Info</h2>

        <h3>Conditional</h3>
        <p>Elements can be conditionally included in the DOM by using the <code>v-if</code> directive.</p>
        <p>You can also make them invisible (CSS <code>display: none</code>) using a falsy value for the <code>v-show</code> directive.</p>
        <p v-if="show">v-if</p>
        <p v-show="show">v-show</p>
        <button @click="show = !show">Toggle</button>
        <p>There's also an if-then-else version of <code>v-if</code>.</p>
        <p v-if="value < 10">Low</p>
        <p v-else-if="value >= 10 && value < 20">Medium</p>
        <p v-else>High</p>
        <p>Use the <code>template</code> element to toggle multiple elements at once.</p>
        <template v-if="show">
            <span>One</span>
            <span>Two</span>
            <span>Three</span>
        </template>

        <h3>Lists</h3>
        <p>You can iterate over arrays or object properties with a <code>v-for</code> loop.</p>
        <ul>
            <li v-for="species of speciesList" :key="species.name">{{species.name}}, {{species.class}}</li>
        </ul>
        <dl>
            <template v-for="(value, key) in speciesList[0]">
                <dt :key="`key-${key}`">{{key}}</dt>
                <dd :key="`value-${key}`">{{value}}</dd>
            </template>
        </dl>

        <h2>Exercise</h2>
        <h3>List of birds</h3>
        <ul id="template-syntax-advanced-birds">
        </ul>
        <h3>List of pantheras</h3>
        <ul id="template-syntax-advanced-pantheras">
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true,
                value: 15,
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
    }
</script>
