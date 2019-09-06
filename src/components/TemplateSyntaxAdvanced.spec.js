import {shallowMount} from '@vue/test-utils'

import TemplateSyntaxAdvanced from './TemplateSyntaxAdvanced.vue'

describe('TemplateSyntaxAdvanced.vue', function () {
    beforeEach(() => {
        this.wrapper = shallowMount(TemplateSyntaxAdvanced)
    })

    xdescribe('bird list', () => {
        it('should filter speciesList down to birds (aves)', () => {
            const animals = this.wrapper.findAll('#template-syntax-advanced-birds > li')
            expect(animals.length).toBe(3)
            expect(animals.at(0).text()).toContain('Aves')
            expect(animals.isVisible()).toBe(true)
        })
    })
    xdescribe('panthera list', () => {
        it('should filter speciesList down to pantheras', () => {
            const animals = this.wrapper.findAll('#template-syntax-advanced-pantheras > li')
            expect(animals.length).toBe(3)
            expect(animals.at(0).text()).toContain('Panthera')
            expect(animals.isVisible()).toBe(true)
        })
        it('should show a text about an animal', () => {
            const animal = this.wrapper.find('#template-syntax-advanced-pantheras > li')
            expect(animal.text()).toBe('Panthera leo has 4 legs.')
        })
        it('should set css classes according to the species name', () => {
            const animal = this.wrapper.find('#template-syntax-advanced-pantheras > li')
            expect(animal.classes('leo')).toBe(true)
        })
    })
    xdescribe('animal lists', () => {
        it('should display a "fly" button for all flying species', () => {
            const birds = this.wrapper.findAll('#template-syntax-advanced-birds > li')
            expect(birds.at(0).contains('button')).toBe(true)
            expect(birds.at(1).contains('button')).toBe(false)
            expect(birds.at(2).contains('button')).toBe(true)
        })
    })
})
