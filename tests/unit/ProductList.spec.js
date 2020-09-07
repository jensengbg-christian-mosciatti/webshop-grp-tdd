import { shallowMount } from '@vue/test-utils'
import Products from '@/components/ProductList.vue'
import productList from '@/assets/db/products/products.json'

describe('ProductList.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Products, {
      propsData: {
        productDataList: productList,
      },
    })
  })

  // Som användare vill jag kunna se produkterna tydligt med en gång
  it('should display all products in the productlist', () => {
    const expected = true;

    const allProducts = wrapper.findAll('.product-data').at(0).text();

    expect(allProducts.length > 0).toBe(expected);
  })

  // Som användare vill jag kunna se bild, märke, storlekstyp, namn och pris på produkten
  it('should display the image of the product in the productlist', () => {
    const image = wrapper.get(".image");

    expect(image.exists()).toBe(true);
  })

  it('should display the brand of the product in the productlist', () => {
    const brand = wrapper.get(".brand");

    expect(brand.exists()).toBe(true);
  })

  it('should display the size of the product in the productlist', () => {
    const size = wrapper.get(".size");

    expect(size.exists()).toBe(true);
  })

  it('should display the type of the product in the productlist', () => {
    const type = wrapper.get(".type");

    expect(type.exists()).toBe(true);
  })

  it('should display the price of the product in the productlist', () => {
    const price = wrapper.get(".price");

    expect(price.exists()).toBe(true);
  })

  // Som användare vill jag se detaljen på produkten i en separat sida
    it('should display details of the product on a new page when clicked on', async () => {
      const $route = {
        path: '/productdetails'
      }

      const wrapper = shallowMount(Products, {
        mocks: {
          $route
        }
      })

      //const detailButton = wrapper.findAll('.detail-button');

      //await detailButton.trigger('click');

      wrapper.vm.$route.productdetails
    })

    // Som användare vill jag kunna klicka på produkten för att se den i detalj
    //it('should display details of the product when clicked on', async () => {

      //wrapper.findAll('.detail-button').trigger('click');
      //const detailButton = await wrapper.findAll('.detail-button').trigger('click');

      //await detailButton.trigger('click');

      //expect(productList.called).toBe(true)
    //})










  // it('should display the brand of the product when rendered', () => {
  //   const wrapper = mount(Products, {
  //     mocks: {
  //       $store: {
  //         state: { productList: productList },
  //       },
  //     },
  //   })

  //   console.log(productList)
  //   const firstElement = wrapper.findAll('.product-data').at(0)

  //   expect(wrapper.find('.productList').text()).toBe('ProductList')

  //   expect(wrapper.exists()).toBe(true)
  //   expect(wrapper.find(item.brand).exists()).toBe(false)
  //   expect(wrapper.findAll('li').exists()).toBe(true)
  //   expect(wrapper.findAll(item.brand).exists()).toBe(false)
  // })

  /*it('should display the image of the product when rendered', () => {

    })

    it('should display the type of the product when rendered', () => {

    })

    it('should display the price of the product when rendered', () => {

    })

    it('should display details of the product when clicked on', () => {

    })*/
})