import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import DataComputedOption from './components/DataComputedOption'
import MethodsOption from './components/MethodsOption'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/data-computed-option',
            component: DataComputedOption,
        },
        {
            path: '/methods-option',
            component: MethodsOption,
        },
        {
            path: '/about',
            component: About,
        },
    ],
})
