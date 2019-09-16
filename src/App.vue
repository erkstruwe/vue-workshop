<template>
    <div class="container my-3">
        <div class="row">
            <div class="col-3">
                <nav class="nav nav-pills flex-column">
                    <router-link class="nav-link" exact to="/">Home</router-link>
                    <router-link class="nav-link" to="/data-computed-option"><code>data</code> and <code>computed</code> option</router-link>
                    <router-link class="nav-link" to="/methods-option"><code>methods</code> option</router-link>
                    <router-link class="nav-link" to="/template-syntax">Template syntax</router-link>
                    <router-link class="nav-link" to="/template-syntax-advanced">Template syntax advanced</router-link>
                    <router-link class="nav-link" to="/event-handling">Event handling</router-link>
                    <router-link class="nav-link" to="/form-input">Form input</router-link>
                    <router-link class="nav-link" to="/component-basics">Component basics</router-link>
                    <router-link class="nav-link" to="/component-props">Component props</router-link>
                    <router-link class="nav-link" to="/component-slots">Component slots</router-link>
                    <router-link class="nav-link" to="/component-events">Component events</router-link>
                    <router-link class="nav-link" to="/instance-lifecycle">Instance lifecycle</router-link>
                    <router-link class="nav-link" to="/vue-router">Vue router</router-link>
                    <router-link class="nav-link" to="/breed">Dog breeds (router exercise)</router-link>
                    <router-link class="nav-link" to="/state-management">State management</router-link>
                    <router-link class="nav-link" to="/about">About</router-link>
                </nav>
            </div>
            <div class="col-9">
                <transition name="fade" mode="out-in">
                    <router-view/>
                </transition>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "~bootstrap/scss/bootstrap";

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
