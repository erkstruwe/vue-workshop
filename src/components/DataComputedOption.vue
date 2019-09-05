<template>
    <div>
        <h1><code>data</code> and <code>computed</code> option</h1>
        <p>There are {{workers}} workers available.</p>
        <p>There are {{animals.cats.length}} cats available.</p>
        <p>There are {{animals.bumblebees.length}} bumblebees available. They're called {{bumblebeeNames}}.</p>
        <p>There are {{animalsCount}} animals available.</p>
        <button type="button" @click="animals.bumblebees.push('Howard')">Spawn bumblebee</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                workers: 5,
                animals: {
                    cats: ['Theodore', 'Milly'],
                    bumblebees: ['Tinkerbell', 'Cleopatra'],
                },
            }
        },
        computed: {
            bumblebeeNames() {
                return this.animals.bumblebees.join(' & ')
            },
            animalsCount() {
                return 1000 // this might be wrong
            },
        },
    }
</script>
