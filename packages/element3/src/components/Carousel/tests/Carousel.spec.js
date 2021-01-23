import Carousel from '../src/Carousel.vue'
import { mount } from '@vue/test-utils'

describe('Carousel.vue', () => {
  describe('test that the Carousel components classes function', () => {
    it('test the component Carousel class amount when the property was direction', () => {
      const wrapper = mount(Carousel, {
        props: {
          direction: 'vertical'
        }
      })
      expect(wrapper.classes()).toContain('el-carousel--vertical')
      expect(wrapper.classes()).toHaveLength(2)
    })
  })
})
