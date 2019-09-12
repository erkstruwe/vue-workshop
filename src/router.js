import Vue from "vue"
import Router from "vue-router"

import Home from "./components/Home.vue"
import About from "./components/About.vue"
import DataComputedOption from "./components/DataComputedOption"
import MethodsOption from "./components/MethodsOption"
import TemplateSyntax from "./components/TemplateSyntax"
import TemplateSyntaxAdvanced from "./components/TemplateSyntaxAdvanced"
import EventHandling from "./components/EventHandling"
import FormInput from "./components/FormInput"
import ComponentBasics from "./components/ComponentBasics"
import ComponentProps from "./components/ComponentProps"
import ComponentSlots from "./components/ComponentSlots"

Vue.use(Router)

export default new Router({
    linkActiveClass: "active",
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/data-computed-option",
            component: DataComputedOption,
        },
        {
            path: "/methods-option",
            component: MethodsOption,
        },
        {
            path: "/template-syntax",
            component: TemplateSyntax,
        },
        {
            path: "/template-syntax-advanced",
            component: TemplateSyntaxAdvanced,
        },
        {
            path: "/event-handling",
            component: EventHandling,
        },
        {
            path: "/form-input",
            component: FormInput,
        },
        {
            path: "/component-basics",
            component: ComponentBasics,
        },
        {
            path: "/component-props",
            component: ComponentProps,
        },
        {
            path: "/component-slots",
            component: ComponentSlots,
        },
        {
            path: "/about",
            component: About,
        },
    ],
})
