<template>
    <div>
        <h1>Template syntax</h1>
        <h2>Info</h2>
        <h3>Interpolation</h3>
        <p>You can make the values of props, data, computed properties, return values of methods, etc. render by using double curly braces: {{message}}</p>
        <p>HTML is inserted using the v-html directive: <span v-html="htmlMessage"></span></p>
        <p>HTML attributes and properties can be bound with the v-bind directive (e. g. <code>v-bind:src="imageUrl"</code>) or its shorthand version (<code>:src="imageUrl"</code>): <img :src="imageUrl" loading="lazy" alt="River landscape"></p>
        <p>
            Please note that everything in double curly braces or in directives will be evaluated as a <em>single expression</em>.
            The following elements are therefore rendered equivalently:
            <span>Fish</span>
            <span>{{fish}}</span>
            <span>{{'Fish'}}</span>
            <span>{{'Fi' + String.fromCharCode(115) + 'h'}}</span>
            <span v-html="fish"></span>
            <span v-html="'Fish'"></span>
        </p>
        <h3>Classes</h3>
        <p>The most intuitive way to conditionally apply classes is by using the object notation (as in AngularJS).</p>
        <h4 class="favorite-color" :class="{'favorite-bg-color': true, 'italic': italic}">Striking headline</h4>
        <h3>Inline Styles</h3>
        <p>Inline styles can be applied similar to how classes are (using the object notation).</p>
        <h4 style="color: deeppink" :style="{background: 'black', fontStyle: fontStyle}">Striking headline</h4>
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
                fish: 'Fish',
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
