import { shallowMount, mount } from '@vue/test-utils'
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
    const expected = true

    const allProducts = wrapper.findAll('.product-data').at(0).text()

    expect(allProducts.length > 0).toBe(expected)
  })

  // Som användare vill jag kunna se bild, märke, storlekstyp, namn och pris på produkten
  it('should display the image of the product in the productlist', () => {
    const image = wrapper.get('.image')

    expect(image.exists()).toBe(true)
  })

  it('should display the brand of the product in the productlist', () => {
    const brand = wrapper.get('.brand')

    expect(brand.exists()).toBe(true)
  })

  it('should display the size of the product in the productlist', () => {
    const size = wrapper.get('.size')

    expect(size.exists()).toBe(true)
  })

  it('should display the type of the product in the productlist', () => {
    const type = wrapper.get('.type')

    expect(type.exists()).toBe(true)
  })

  it('should display the price of the product in the productlist', () => {
    const price = wrapper.get('.price')

    expect(price.exists()).toBe(true)
  })

  // Som användare vill jag se detaljen på produkten i en separat sida
  // Som användare vill jag kunna klicka på produkten för att se den i detalj
  // it('should display details of the product on a new page when clicked on', async () => {
  //   const $route = {
  //     name: '/productdetails',
  //   }

  //   const wrapper = shallowMount(Products, {
  //     mocks: {
  //       $route,
  //     },
  //     propsData: {
  //       productDataList: productList,
  //     },
  //   })

  //   const detailButton = wrapper.find('.detail-button')

  //   await detailButton.trigger('click')

  //   wrapper.emitted()
  //   expect(wrapper.emitted()).toBeTruthy()

  //   wrapper.vm.$route.productdetails
  // })
})
