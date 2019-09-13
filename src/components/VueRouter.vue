<template>
    <div>
        <h1>Vue router</h1>

        <h2>Info</h2>
        <p>Frontend routing is used by single page applications (SPA) to alter the view based on the browser's URL.</p>
        <p>This demo project already implements routing with Vue's official <a href="https://router.vuejs.org/">vue-router</a> library.</p>
        <p>The documentation includes an <a href="https://router.vuejs.org/guide/#getting-started">excellent minimal example</a> of how to integrate the router.</p>
        <p>Please refer to <code>router.js</code>, <code>main.js</code>, and <code>App.vue</code> for details on how the router is implemented in this project.</p>
        <p>Please note that <a href="https://router.vuejs.org/guide/essentials/nested-routes.html">nested routes</a> and some other advanced routing features are not in the scope
            of this workshop. Please refer to the <a href="https://router.vuejs.org/">official documentation</a> instead.</p>

        <h3>This route</h3>
        <dl>
            <dt><code>$route.params</code></dt>
            <dd>{{$route.params}}</dd>
            <dt><code>$route.query</code></dt>
            <dd>{{$route.query}}</dd>
            <dt><code>$route.hash</code></dt>
            <dd>{{$route.hash}}</dd>
            <dt><code>propId</code></dt>
            <dd>{{propId}}</dd>
        </dl>

        <h3>Routes configuration</h3>
        <p>The route objects passed to <code>new Router()</code> has several <a href="https://router.vuejs.org/api/#route-object-properties">configuration options</a>. These are
            the most important ones.</p>

        <h4><code>path</code></h4>
        <p>This option defines the url path of the route. Among other, it can include placeholders (<code>/page-about-*</code>), named parameters (<code>/user/:userName</code>),
            and optional parts (<code>/page/:id?</code>).</p>
        <p>
            <router-link to="/vue-router/123" class="btn btn-primary">Go to page with id</router-link>
        </p>

        <h4><code>component</code></h4>
        <p>The component to render when the route is activated.</p>

        <h4><code>props</code></h4>
        <p>Among other syntaxes, a <a href="https://router.vuejs.org/guide/essentials/passing-props.html#function-mode">function returning a mapping object</a> from route
            parameters to the associated component's props.</p>
        <pre><code>props: (route) => ({ userName: route.params.userName, limit: route.query.limit })</code></pre>
        <p>This is very useful to make components work when used <a href="https://router.vuejs.org/guide/essentials/passing-props.html#passing-props-to-route-components">both with
            and without a router</a>.</p>

        <h4><code>meta</code></h4>
        <p>Object with arbitrary properties as the route's meta information: {{$route.meta}}</p>

        <h2>Exercise</h2>
        <p>Take a look at the list of <router-link to="/breed">dog breeds</router-link>. Please enhance the application:</p>
        <ol>
            <li>Create a new route <code>/breed/:breedName</code></li>
            <li>Create a new component <code>DogBreed</code> and use it on the created route</li>
            <li>Pass the <code>breedName</code> route parameter into the DogBreed component as a prop</li>
            <li>Make the DogBreed component show the breed's name and an image (reuse the DogImage component)</li>
        </ol>
    </div>
</template>

<script>
    export default {
        props: {
            propId: {
                type: Number,
                default: 1,
            },
        },
    }
</script>
