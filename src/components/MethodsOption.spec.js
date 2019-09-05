import {shallowMount} from '@vue/test-utils'

import MethodsOption from './MethodsOption.vue'

describe('MethodsOption.vue', function () {
    beforeEach(() => {
        this.wrapper = shallowMount(MethodsOption)
        this.wrapper.setData({animals: {cats: ['one', 'two'], dogs: ['one', 'two']}})
    })

    it('should add a species', () => {
        this.wrapper.vm.addSpecies()
        expect(Object.keys(this.wrapper.vm.animals).length).toBe(3)
    })
    // you should probably only have one of the following tow tests
    xit('should add animals when Lucy button is clicked', () => {
        this.wrapper.find('#lucy').trigger('click')
        expect(this.wrapper.vm.animals.cats.length).toBe(3)
        expect(this.wrapper.vm.animals.cats[2]).toBe('Lucy')
        expect(this.wrapper.vm.animals.dogs.length).toBe(3)
        expect(this.wrapper.vm.animals.dogs[2]).toBe('Lucy')
    })
    xit('should add one animal per species with a given name', () => {
        const name = 'Lucy'
        this.wrapper.vm.spawnAnimals(name)
        expect(this.wrapper.vm.animals.cats.length).toBe(3)
        expect(this.wrapper.vm.animals.cats[2]).toBe(name)
        expect(this.wrapper.vm.animals.dogs.length).toBe(3)
        expect(this.wrapper.vm.animals.dogs[2]).toBe(name)
    })
})
