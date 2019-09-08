<template>
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/data-computed-option"><code>data</code> and <code>computed</code> option</router-link> |
            <router-link to="/methods-option"><code>methods</code> option</router-link> |
            <router-link to="/template-syntax">Template syntax</router-link> |
            <router-link to="/template-syntax-advanced">Template syntax advanced</router-link> |
            <router-link to="/event-handling">Event handling</router-link> |
            <router-link to="/about">About</router-link>
        </nav>
        <router-view/>
    </div>
</template>
