import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    state: {
        currency: "EUR",
        booking: {
            form: {
                customer: {
                    children: [
                        {gender: "female"},
                        {gender: "male"},
                    ],
                },
            },
        },
    },
    getters: {
        currencySymbol(state) {
            switch (state.currency) {
                case "USD":
                    return "US$"
                case "EUR":
                    return "€"
            }
        },
        sons(state) {
            return state.booking.form.customer.children.filter((child) => child.gender === "male")
        },
    },
    mutations: {
        updateCurrency(state, currency) {
            state.currency = currency
        },
    },
    actions: {
        updateCurrencyTemp(context, currency) {
            const before = context.state.currency
            context.commit("updateCurrency", currency)
            setTimeout(() => context.commit("updateCurrency", before), 3000)
        },
    },
})
