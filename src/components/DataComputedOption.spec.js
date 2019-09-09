import {shallowMount} from '@vue/test-utils'

import DataComputedOption from './DataComputedOption.vue'

describe('DataComputedOption.vue', function() {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(DataComputedOption)
    })

    it('shows the number of workers', () => {
        wrapper.setData({workers: 1336})
        expect(wrapper.text()).toContain('There are 1336 workers available.')
    })
    it('appends bumblebee names to each other', () => {
        wrapper.setData({animals: {bumblebees: ['one', 'two']}})
        expect(wrapper.vm.bumblebeeNames).toBe('one & two')
        expect(wrapper.text()).toContain('They\'re called one & two.')
    })
    xit('counts the number of animals', () => {
        wrapper.setData({animals: {cats: ['one', 'two'], bumblebees: ['one', 'two', 'three'], dogs: ['one']}})
        expect(wrapper.vm.animalsCount).toBe(6)
    })
})
