import {mount} from "@vue/test-utils"

import ComponentEvents from "./ComponentEvents.vue"

describe("ComponentEvents.vue", function() {
    let wrapper
    beforeEach(() => {
        wrapper = mount(ComponentEvents)
    })

    xit("should change the imageUrl when an image on the fancy card is clicked", () => {
        wrapper.setData({imageUrl: "https://demo.tiny.pictures/main/example1.jpg"})
        const imageWrapper = wrapper.find(".card img")
        imageWrapper.trigger("click")
        expect(wrapper.vm.imageUrl).toBe("https://demo.tiny.pictures/main/example2.jpg")
    })
})
