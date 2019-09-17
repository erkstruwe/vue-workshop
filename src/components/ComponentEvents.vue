<template>
    <div>
        <h1>Component events</h1>

        <h2>Info</h2>
        <p><a href="https://vuejs.org/v2/guide/components-custom-events.html">Events</a> are used to tell a parent component that something happened in a child component. Events may include a payload of any data type.</p>
        <p>Child components can emit an event using the following syntax: <code>this.$emit('my-event', 'my payload')</code></p>
        <p>Parent components can register event listeners like so (using the <code>v-on</code> directive): <code>{{html}}</code></p>
        <p>Event names should always be kebab-case.</p>

        <h2>Exercise</h2>
        <div class="card-deck">
            <FancyCard title="One" :imageUrl="imageUrl" @image-click="toggleImage">Hi there!</FancyCard>
        </div>
    </div>
</template>

<script>
    import FancyCard from "./FancyCard"

    export default {
        components: {
            FancyCard,
        },
        data() {
            return {
                html: "<MyComponent @my-event=\"handleEvent\"></MyComponent>",

                imageUrl: "https://demo.tiny.pictures/main/example1.jpg",
            }
        },
        methods: {
            toggleImage() {
                if (this.imageUrl === "https://demo.tiny.pictures/main/example1.jpg") {
                    this.imageUrl = "https://demo.tiny.pictures/main/example2.jpg"
                } else {
                    this.imageUrl = "https://demo.tiny.pictures/main/example1.jpg"
                }
            },
        },
    }
</script>
