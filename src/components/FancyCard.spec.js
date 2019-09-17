import {shallowMount} from "@vue/test-utils"

import FancyCard from "./FancyCard.vue"

describe("FancyCard.vue", function () {
    let wrapper
    describe("props", () => {
        beforeEach(() => {
            wrapper = shallowMount(FancyCard)
        })

        it("should use the title prop as the card's title", () => {
            const title = "Whoop, whoop: Dad's da sound of da police"
            wrapper.setProps({title})
            expect(wrapper.find(".card-body .card-title").text()).toMatch(title)
        })

        it("should show an image if the imageUrl prop is set", () => {
            const imageUrl = "https://demo.tiny.pictures/main/example1.jpg"
            wrapper.setProps({imageUrl})
            expect(wrapper.find("img.card-img-top").attributes("src")).toMatch(imageUrl)
        })
        it("should not show an image if the imageUrl prop is not set", () => {
            expect(wrapper.contains("img")).toBe(false)
        })

        it("should display a header if the header prop is set", () => {
            const header = {text: "Header", class: "text-white bg-primary"}
            wrapper.setProps({header})
            const headerWrapper = wrapper.find(".card-header")
            expect(headerWrapper.text()).toMatch(header.text)
            expect(headerWrapper.classes("text-white")).toBe(true)
            expect(headerWrapper.classes("bg-primary")).toBe(true)
        })
        it("should not display a header if the header prop is not set", () => {
            expect(wrapper.contains(".card-header")).toBe(false)
        })
    })

    describe("slots", () => {
        it("should display the default slot's content in the card's body", () => {
            const text = "Whoop"
            const wrapper = shallowMount(FancyCard, {
                slots: {
                    default: text,
                },
            })
            const bodyWrapper = wrapper.find(".card-body")
            expect(bodyWrapper.text()).toContain(text)
        })

        it("should display the footer slot's content", () => {
            const footerHtml = "<div class=\"card-text\">Yay!</div>"
            const wrapper = shallowMount(FancyCard, {
                slots: {
                    footer: footerHtml,
                },
            })
            const footerWrapper = wrapper.find(".card-footer")
            expect(footerWrapper.html()).toMatch(footerHtml)
        })
    })
})
