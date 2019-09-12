<template>
    <div class="card">
        <div class="card-header bg-info text-white">Shiny new header</div>
        <img class="card-img-top" src="https://tiny.pictures/example1.jpg" alt="River landscape">
        <div class="card-body">
            <div class="h5 card-title">{{title}}</div>
        </div>
        <div class="card-footer">
            <div class="card-text">&copy; All rights reserved.</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "Title",
            }
        },
    }
</script>
