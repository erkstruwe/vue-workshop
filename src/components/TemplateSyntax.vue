<template>
    <div>
        <h1>Template syntax</h1>
        <h2>Interpolation</h2>
        <p>You can make the values of props, data, computed properties, return values of methods, etc. render by using double curly braces: {{message}}</p>
        <p>HTML is inserted using the v-html directive: <span v-html="htmlMessage"></span></p>
        <p>HTML attributes and properties can be bound with the v-bind directive (e. g. <code>v-bind:src="imageUrl"</code>) or its shorthand version (<code>:src="imageUrl"</code>): <img :src="imageUrl"></p>
        <h2>Classes</h2>
        <p>The most intuitive way to conditionally apply classes is by using the object notation (as in AngularJS).</p>
        <h3 class="favorite-color" :class="{'favorite-bg-color': true, 'italic': italic}">Striking headline</h3>
        <h2>Inline Styles</h2>
        <p>Inline styles can be applied similar to how classes are (using the object notation).</p>
        <h3 style="color: deeppink" :style="{background: 'black', fontStyle: fontStyle}">Striking headline</h3>
        <button @click="italic = !italic">Toggle italic</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "Simple interpolation.",
                htmlMessage: "<em>Caution:</em> raw HTML!",
                imageUrl: "https://demo.tiny.pictures/main/example1.jpg?width=200",
                italic: false,
            }
        },
        computed: {
            fontStyle() {
                return this.italic ? 'italic' : null
            }
        }
    }
</script>

<style scoped lang="scss">
    .favorite-color {
        color: deeppink;
    }
    .favorite-bg-color {
        background-color: black;
    }
    .italic {
        font-style: italic;
    }
</style>
