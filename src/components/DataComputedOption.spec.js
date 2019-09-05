import {shallowMount} from '@vue/test-utils'

import DataComputedOption from './DataComputedOption.vue'

describe('DataComputedOption.vue', function() {
    beforeEach(() => {
        this.wrapper = shallowMount(DataComputedOption)
    })

    it('shows the number of workers', () => {
        this.wrapper.setData({workers: 1336})
        expect(this.wrapper.text()).toContain('There are 1336 workers available.')
    })
    it('appends bumblebee names to each other', () => {
        this.wrapper.setData({animals: {bumblebees: ['one', 'two']}})
        expect(this.wrapper.vm.bumblebeeNames).toBe('one & two')
        expect(this.wrapper.text()).toContain('They\'re called one & two.')
    })
    xit('counts the number of animals', () => {
        this.wrapper.setData({animals: {cats: ['one', 'two'], bumblebees: ['one', 'two', 'three'], dogs: ['one']}})
        expect(this.wrapper.vm.animalsCount).toBe(6)
    })
})
