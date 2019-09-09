<template>
    <div>
        <h1><a href="https://vuejs.org/v2/guide/instance.html#Data-and-Methods"><code>data</code></a> and <a
            href="https://vuejs.org/v2/guide/computed.html#Computed-Properties"><code>computed</code></a> option </h1>
        <p>There are {{ workers }} workers available.</p>
        <p>There are {{ animals.cats.length }} cats available.</p>
        <p>There are {{ animals.bumblebees.length }} bumblebees available. They're called {{ bumblebeeNames }}.</p>
        <p>There are {{ animalsCount }} animals available.</p>
        <button type="button" class="form-group btn btn-primary" @click="animals.bumblebees.push('Howard')">Spawn bumblebee</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                workers: 5,
                animals: {
                    cats: ["Theodore", "Milly"],
                    bumblebees: ["Tinkerbell", "Cleopatra"],
                },
            }
        },
        computed: {
            bumblebeeNames() {
                return this.animals.bumblebees.join(" & ")
            },
            animalsCount() {
                return 1000 // this might fail
            },
        },
    }
</script>
