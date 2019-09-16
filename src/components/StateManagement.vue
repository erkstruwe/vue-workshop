<template>
    <div>
        <h1>State management with <a href="https://vuex.vuejs.org/guide/">vuex</a></h1>

        <h2>Info</h2>

        <h3><code>state</code></h3>
        <p>Using a vuex store, you can keep an application-wide object that stores your application's <a href="https://vuex.vuejs.org/guide/state.html">current state</a>.</p>
        <p>The store is reactive (components rerender when the state is changed) and cannot be mutated directly (you have to commit a track-able mutation to change it).</p>
        <p>In this application, we injected the store from <code>store.js</code> to every child component of our main application component in <code>main.js</code>. This makes
            <code>this.$store</code> available in every child component.</p>
        <p>We can therefore create computed properties that rely on <code>this.$store</code>: {{manuallyComputedCurrency}}, {{$store.state.currency}}</p>
        <p>The <code>mapState</code> function can save us many keystrokes: {{stateCurrencyString}}, {{stateCurrencyFunction}}</p>

        <h3><code>getters</code></h3>
        <p>If you need to handle a piece of the state in a certain way (like <code>computed</code> in a component), you can use <a href="https://vuex.vuejs.org/guide/getters.html">store
            getters</a>.</p>
        <p>Getters are exposed to a component as the <code>this.$store.getters</code> object: {{$store.getters.currencySymbol}}</p>
        <p>They can also be injected into a component's local state by using the <code>mapGetters</code> helper function: {{currencySymbol}}</p>

        <h3><code>mutations</code></h3>
        <p>The only way to change the state is by committing <a href="https://vuex.vuejs.org/guide/mutations.html">mutations</a>.</p>
        <button class="form-group btn btn-primary" @click="$store.commit('updateCurrency', 'USD')">Update currency to US Dollars</button>
        <p>Again, there is a helper function <code>mapMutations</code> to inject state mutations to the local state.</p>
        <button class="form-group btn btn-primary" @click="updateCurrency('EUR')">Update currency to Euros</button>

        <h3><code>actions</code></h3>
        <p><a href="https://vuex.vuejs.org/guide/actions.html">Actions</a> are used to carry out more complex tasks by combining several mutations. In contrast to mutations,
            actions can be asynchronous.</p>
        <button class="form-group btn btn-primary" @click="$store.dispatch('updateCurrencyTemp', 'USD')">Temporarily update currency to US Dollars</button>
        <p>Again, there is a helper function <code>mapActions</code> to inject state actions to the local state.</p>
        <button class="form-group btn btn-primary" @click="updateCurrencyTemp('USD')">Temporarily update currency to US Dollars</button>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapMutations, mapState} from "vuex"

    export default {
        computed: {
            manuallyComputedCurrency() {
                return this.$store.state.currency
            },
            ...mapState({
                stateCurrencyString: "currency",
                stateCurrencyFunction: (state) => state.currency,
            }),
            ...mapGetters({
                currencySymbol: "currencySymbol",
            }),
        },
        methods: {
            ...mapMutations({
                updateCurrency: "updateCurrency",
            }),
            ...mapActions({
                updateCurrencyTemp: "updateCurrencyTemp",
            }),
        },
    }
</script>
