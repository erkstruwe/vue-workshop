<template>
    <div>
        <h1>Instance lifecycle</h1>

        <h2>Info</h2>
        <p>You can register <a href="https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks">functions</a>
            that are executed at certain stages during the life of a vue instance/component. Please refer to the <a
                href="https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram">lifecycle diagram</a> from the guide
            for an overview.</p>
        <p>These come in handy if you need to load async data, make custom DOM manipulations, clean up after removing
            the component from the DOM, etc.</p>

        <p>Available lifecycle hooks are <code>created</code>, <code>mounted</code>, <code>updated</code>, and <code>destroyed</code>
            along with their "before" counterparts <code>beforeCreate</code>, <code>beforeMount</code>, <code>beforeUpdate</code>,
            and <code>beforeDestroy</code>, .</p>
        <p>Their main difference is the availability of certain values (e. g. props) and the DOM.</p>

        <h2>Examples</h2>

        <h3>Random dog breed</h3>
        <div v-if="!dogBreed">Loading</div>
        <div v-else>{{dogBreed}}</div>

        <h3>Clock</h3>
        <p>{{now}}</p>

        <h2>Exercise</h2>
        <h3>Dog image</h3>
        <DogImage breed="affenpinscher"></DogImage>
        <DogImage breed="use random dogBreed from API here"></DogImage>
    </div>
</template>

<script>
    import {sample, upperFirst} from "lodash"

    import DogImage from "./DogImage"

    let intervalId

    export default {
        components: {
            DogImage,
        },
        data() {
            return {
                dogBreed: null,
                now: new Date(),
            }
        },
        created() {
            this.getDogBreed()
            intervalId = setInterval(this.updateTime, 1000)
        },
        destroyed() {
            clearInterval(intervalId)
        },
        methods: {
            getDogBreed() {
                this.dogBreed = null
                fetch("https://dog.ceo/api/breeds/list/all")
                    .then((data) => data.json())
                    .then((dogBreeds) => this.dogBreed = upperFirst(sample(Object.keys(dogBreeds.message))))
                    .catch((error) => {
                        console.warn(error)
                        this.dogBreed = "Error"
                    })
            },
            updateTime() {
                console.log("updating time")
                this.now = new Date()
            },
        },
    }
</script>
