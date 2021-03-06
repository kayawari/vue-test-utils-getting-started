import YesNoComponent from './components/YesNoComponent.vue'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'

describe('Click event', () => {
    it('Click on yes button calls our method with argument "yes"', () => {
        const spy = sinon.spy()
        const wrapper = mount(YesNoComponent, {
            propsData: {
                callMe: spy
            }
        })
        wrapper.find('button.yes').trigger('click')

        spy.should.have.been.calledWith('yes')
    })
})