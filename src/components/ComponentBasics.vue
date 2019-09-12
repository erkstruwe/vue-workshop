<template>
    <div>
        <h1>Component basics</h1>

        <h2>Info</h2>
        <p>Components can be reused and nested.</p>
        <pre><code>{{nestedHtml}}</code></pre>
        <p>Data is passed down to child components using
            <router-link to="/component-props">props</router-link>
            .
        </p>
        <p>HTML is passed down to child components using slots.</p>
        <p>Since the data option of a component must be a function returning a data object, each component instance
            keeps its own independent state.</p>

        <p>Child components have to be <a href="https://vuejs.org/v2/guide/components-registration.html">registered</a>
            in the parent component (using the <code>components</code> option) or globally (using the <code>Vue.component</code>
            function).</p>
        <FancyAlert msg="Important message"></FancyAlert>
    </div>
</template>

<script>
    import FancyAlert from "./FancyAlert"

    export default {
        components: {
            FancyAlert,
        },
        data() {
            return {
                nestedHtml: "<template>\n\t<MyHeader></MyHeader>\n\t<BlogPost id=\"1\"></BlogPost>\n\t<BlogPost id=\"2\"></BlogPost>\n\t<MyFooter>&copy; Hullumullu Inc.</MyFooter>\n</template>",
            }
        },
    }
</script>
