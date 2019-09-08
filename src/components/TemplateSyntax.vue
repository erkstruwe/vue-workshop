<template>
    <div>
        <h1>Template syntax</h1>

        <h2>Interpolation</h2>
        <p>You can make the values of props, data, computed properties, return values of methods, etc. render by using <a href="https://vuejs.org/v2/guide/syntax.html#Interpolations">double curly braces</a>: {{message}}</p>
        <p>HTML is inserted using the v-html directive: <span v-html="htmlMessage"></span></p>
        <p>
            HTML <a href="https://vuejs.org/v2/guide/syntax.html#Attributes">attributes</a> and properties can be bound with the v-bind directive (e. g. <code>v-bind:src="imageUrl"</code>) or its shorthand version (<code>:src="imageUrl"</code>).<br>
            <img :src="imageUrl" loading="lazy" width="200" height="200" alt="River landscape">
        </p>
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

        <h2>Classes</h2>
        <p>The most intuitive way to conditionally apply classes is by using the <a href="https://vuejs.org/v2/guide/class-and-style.html#Object-Syntax">object notation</a> (as in AngularJS).</p>
        <h3 class="favorite-color" :class="{'favorite-bg-color': true, 'italic': italic}">Striking headline</h3>

        <h2>Inline Styles</h2>
        <p><a href="https://vuejs.org/v2/guide/class-and-style.html#Object-Syntax-1">Inline styles</a> can be applied similar to how classes are (using the object notation).</p>
        <h3 style="color: deeppink" :style="{background: 'black', fontStyle: fontStyle}">Striking headline</h3>

        <button class="form-group btn btn-primary" @click="italic = !italic">Toggle italic</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "Simple interpolation.",
                htmlMessage: "<em>Caution:</em> raw HTML!",
                imageUrl: "https://demo.tiny.pictures/main/example1.jpg?width=200&height=200&resizeType=cover",
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
