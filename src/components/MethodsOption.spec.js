import {shallowMount} from "@vue/test-utils"

import MethodsOption from "./MethodsOption.vue"

describe("MethodsOption.vue", function() {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(MethodsOption)
        wrapper.setData({animals: {cats: ["one", "two"], dogs: ["one", "two"]}})
    })

    it("should add a species", () => {
        wrapper.vm.addSpecies()
        expect(Object.keys(wrapper.vm.animals).length).toBe(3)
    })
    // you should probably only have one of the following two tests
    xit("should add animals when Lucy button is clicked", () => {
        wrapper.find("#lucy").trigger("click")
        expect(wrapper.vm.animals.cats.length).toBe(3)
        expect(wrapper.vm.animals.cats[0]).toBe("one")
        expect(wrapper.vm.animals.cats[1]).toBe("two")
        expect(wrapper.vm.animals.cats[2]).toBe("Lucy")
        expect(wrapper.vm.animals.dogs.length).toBe(3)
        expect(wrapper.vm.animals.dogs[2]).toBe("Lucy")

        wrapper.find("#lucy").trigger("click")
        expect(wrapper.vm.animals.cats.length).toBe(4)
        expect(wrapper.vm.animals.cats[3]).toBe("Lucy")
    })
    xit("should add one animal per species with a given name", () => {
        const name = "Lucy"
        wrapper.vm.spawnAnimals(name)
        expect(wrapper.vm.animals.cats.length).toBe(3)
        expect(wrapper.vm.animals.cats[2]).toBe(name)
        expect(wrapper.vm.animals.dogs.length).toBe(3)
        expect(wrapper.vm.animals.dogs[2]).toBe(name)

        wrapper.vm.spawnAnimals(name)
        expect(wrapper.vm.animals.cats.length).toBe(4)
        expect(wrapper.vm.animals.cats[3]).toBe("Lucy")
    })
})
