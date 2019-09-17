<template>
    <div class="card">
        <div class="card-header" v-if="header" :class="header.class">{{header.text}}</div>
        <img class="card-img-top" v-if="imageUrl" :src="imageUrl" :alt="title" @click="$emit('image-click')">
        <div class="card-body">
            <div class="h5 card-title" v-if="title">{{title}}</div>
            <div class="card-text"><slot></slot></div>
        </div>
        <div class="card-footer">
            <div class="card-text"><slot name="footer"></slot></div>
            <div class="card-text">&copy; All rights reserved.</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
            },
            imageUrl: {
                type: String,
            },
            header: {
                type: Object,
            },
        },
    }
</script>
