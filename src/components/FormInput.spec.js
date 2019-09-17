import {shallowMount} from "@vue/test-utils"

import FormInput from "./FormInput.vue"

describe("FormInput.vue", () => {
    let wrapper, heading, backgroundColor, style
    beforeEach(() => {
        wrapper = shallowMount(FormInput)
        heading = wrapper.find("#form-input-heading")
        backgroundColor = wrapper.find("#form-input-background-color")
        style = wrapper.find("#form-input-style")
    })

    it("should change the background color", () => {
        backgroundColor.setValue("green")
        expect(heading.element.style.backgroundColor).toBe("green")
    })
    it("should apply a pre-defined style", () => {
        expect(heading.element.style.color).toBe("")
        expect(heading.element.style.border).toBe("")
        style.setValue(wrapper.vm.availableStyles.blackPink)
        expect(heading.element.style.color).toBe("deeppink")
        expect(heading.element.style.border).toBeDefined()
    })
    it("should award priority to background color", () => {
        backgroundColor.setValue("purple")
        style.setValue(wrapper.vm.availableStyles.macaw)
        expect(heading.element.style.backgroundColor).toBe("purple")
    })
})
