import { mount, shallowMount } from '@vue/test-utils'
import ProductDet from '@/views/ProductDetails'
import productList from '@/assets/db/products/products.json'

// mocked localStorage on local mount in node.js
// global.window = {}
// global.window.localStorage = {
//   data: {},
//   getItem: function (key) {
//     const val = this.data[key]
//     if (val) {
//       return val
//     }
//     return null
//   },
//   setItem: function (key, value) {
//     this.data[key] = value
//   },
//   removeItem: function (key) {
//     delete this.data[key]
//   },
// }

describe('Testing Product Details', () => {
  it('should return a "Product not found" text when no product was found', () => {
    const notExistingProductId = -2
    const wrapper = shallowMount(ProductDet, {
      mocks: {
        $store: {
          state: { productList: productList },
        },
      },
      propsData: {
        id: notExistingProductId,
      },
    })

    const noProductsFound =
      wrapper.find('.fallback-section').element.style.display !== 'none'

    expect(noProductsFound).toBe(true)
  })

  it('should not return a "Product not found" text when the product was found', () => {
    const existingProductId = 1
    const wrapper = shallowMount(ProductDet, {
      mocks: {
        $store: {
          state: { productList: productList },
        },
      },
      propsData: {
        id: existingProductId,
      },
    })

    const noProductsFound = wrapper.find('.fallback-section')

    expect(noProductsFound.exists()).toBe(false)
  })

  it('should add the product to cart when clicking the Add to cart button', async () => {
    const expectedProductId = 3

    const wrapper = shallowMount(ProductDet, {
      mocks: {
        $store: {
          state: { productList: productList },
        },
      },
      propsData: {
        id: expectedProductId,
      },
    })

    const preInsertProductId = global.localStorage.getItem('cart')
      ? JSON.parse(global.localStorage.getItem('cart'))[0].id
      : null

    expect(preInsertProductId).toBe(null)

    const addToCartBtn = wrapper.find('.cart-btn-cont > button')
    await addToCartBtn.trigger('click')

    const actualProductId = global.localStorage.getItem('cart')
      ? JSON.parse(global.localStorage.getItem('cart'))[0].id
      : null

    // console.log(actualProductId)

    expect(actualProductId).toBe(expectedProductId)
  })

  it('should have more than one picture for the same product', () => {
    const existingProductId = 3
    const wrapper = shallowMount(ProductDet, {
      mocks: {
        $store: {
          state: { productList: productList },
        },
      },
      propsData: {
        id: existingProductId,
      },
    })

    const imageElements = wrapper.findAll('.img-thumbnails > img').length

    expect(imageElements).toBeGreaterThan(1)
  })

  it('should have a long description of the product in the detailed view', () => {
    const existingProductId = 3
    const wrapper = shallowMount(ProductDet, {
      mocks: {
        $store: {
          state: { productList: productList },
        },
      },
      propsData: {
        id: existingProductId,
      },
    })

    const textElementLength = wrapper.find('.long-info-cont > p').text().length

    expect(textElementLength).toBeGreaterThan(100)
  })
})
