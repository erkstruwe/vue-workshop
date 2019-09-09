<template>
    <div>
        <h1>Event handling</h1>

        <h2>Info</h2>
        <p>You can bind methods to DOM events by using the <code>v-on</code> directive or its <code>@</code> shorthand, e. g. <code>v-on:click</code> or <code>@click</code>.</p>
        <p>The directive's value can be one of the following:</p>
        <dl>
            <dt>a <a href="https://vuejs.org/v2/guide/events.html#Method-Event-Handlers">function reference</a></dt>
            <dd><code>@click="doSomething"</code></dd>
            <dt>a <a href="https://vuejs.org/v2/guide/events.html#Methods-in-Inline-Handlers">statement</a> to execute</dt>
            <dd><code>@click="show = !show"</code> or <code>@click="doSomething($event)"</code> (equivalent to the above) or <code>@click="doSomething('balloons')"</code></dd>
        </dl>
        <p>Event handlers can be <a href="https://vuejs.org/v2/guide/events.html#Event-Modifiers">modified</a> using a dot notation, e. g. <code>@click.left</code>, <code>@keyup.space</code>,
            or <code>@submit.prevent</code>.</p>

        <h2>Exercise</h2>
        <p>The following number should get larger when left-clicked and smaller when right-clicked.</p>
        <p id="event-handling-number" style="font-size: 12px"> 12 </p>
    </div>
</template>

<script>
    export default {}
</script>
