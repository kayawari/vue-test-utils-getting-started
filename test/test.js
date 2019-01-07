// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Counter from '../counter'
import Vue from 'vue'

describe('Counter', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Counter)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('button should increment the count', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})

describe('test Vue.nextTick', () => {
  // エラーになるのでスキップ
  xit('will time out', (done) => {
    Vue.nextTick(() => {
      expect(true).toBe(false)
      done()
    })
  })

  // NOTE: nextTick内で発生したエラーを補足するには、
  //       一つはテストのはじめにvueのグローバルエラーハンドラーにdoneコールバックをセットする
  //       もう一つは引数無しでnextTickにして実行し、Promiseとしてテストランナーに返す。
  it('will catch the error using done', (done) => {
    Vue.config.errorHandler = done
    Vue.nextTick(() => {
      expect(true).toBe(true)
      done()
    })
  })

  it('will catch the error using a promie', () => {
    return Vue.nextTick()
      .then(function () {
        expect(true).toBe(true)
      })
  })
})