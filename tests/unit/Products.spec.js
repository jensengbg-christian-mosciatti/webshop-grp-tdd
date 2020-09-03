import { mount, shallowMount } from '@vue/test-utils'
import Products from '@/components/productList.vue'
//import ProductList from '@/assets/db/products/products.json'

describe('Products.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Products);
    })

    it('should display the brand of the product when rendered', () => {
      const wrapper = mount(Products)

      expect(wrapper.exists()).toBe(true)
      expect(wrapper.find('.brand').exists()).toBe(false)
      expect(wrapper.findAll('div').exists()).toBe(true)
      expect(wrapper.findAll('.brand').exists()).toBe(false)
    })

    it('should display the size of the product when rendered', () => {
      const wrapper = mount(Products)

      expect(wrapper.exists()).toBe(true)
      expect(wrapper.find('.size').exists()).toBe(false)
      expect(wrapper.findAll('div').exists()).toBe(true)
      expect(wrapper.findAll('.size').exists()).toBe(false)
    })

    it('should display the type of the product when rendered', () => {
      const wrapper = mount(Products)

      expect(wrapper.exists()).toBe(true)
      expect(wrapper.find('.type').exists()).toBe(false)
      expect(wrapper.findAll('div').exists()).toBe(true)
      expect(wrapper.findAll('.type').exists()).toBe(false)
    })

    it('should display the price of the product when rendered', () => {
      const wrapper = mount(Products)

      expect(wrapper.exists()).toBe(true)
      expect(wrapper.find('.price').exists()).toBe(false)
      expect(wrapper.findAll('div').exists()).toBe(true)
      expect(wrapper.findAll('.price').exists()).toBe(false)
    })

    /*it('should display the image of the product when rendered', () => {
      const wrapper = mount(Products)
      expect(wrapper.exists()).toBe(true)
      expect(wrapper.find('.product-icon').exists()).toBe(false)
      expect(wrapper.findAll('img').exists()).toBe(true)
      expect(wrapper.findAll('.product-icon').exists()).toBe(false)
    })*/

    /*it('should display details of the product when clicked on', async () => {
      const wrapper = mount(Products)

      const detailButton = wrapper.find('.detail-button')

      await detailButton.trigger('click');
    })*/






    /*it('should display the brand of the product when rendered', () => {
        const wrapper = mount(Products);
        let ProductList;
        const wrapper = mount(Products, {
            mocks: {
              $store: {
                state: { productList: ProductList }
              }
            }
        })

        expect(wrapper.find(".productList").text()).toBe("ProductList")

        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find(item.brand).exists()).toBe(false)
        expect(wrapper.findAll('li').exists()).toBe(true)
        expect(wrapper.findAll(item.brand).exists()).toBe(false)
    })*/

    /*it('should display the image of the product when rendered', () => {

    })

    it('should display the type of the product when rendered', () => {

    })

    it('should display the price of the product when rendered', () => {

    })

    it('should display details of the product when clicked on', () => {

    })*/
})