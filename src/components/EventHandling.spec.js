import {shallowMount} from '@vue/test-utils'

import EventHandling from './EventHandling.vue'

describe('EventHandling.vue', function () {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(EventHandling)
    })

    xdescribe('number', () => {
        let number
        beforeEach(() => {
            number = wrapper.find('#event-handling-number')
        })

        it('should get bigger on right-click', () => {
            const sizeBefore = parseInt(number.element.style.fontSize, 10)
            number.trigger('contextmenu')
            const sizeAfter = parseInt(number.element.style.fontSize, 10)
            expect(sizeAfter).toBeGreaterThan(sizeBefore)
        })
        it('should get smaller on left-click', () => {
            const sizeBefore = parseInt(number.element.style.fontSize, 10)
            number.trigger('click')
            const sizeAfter = parseInt(number.element.style.fontSize, 10)
            expect(sizeAfter).toBeLessThan(sizeBefore)
        })
    })
})
