import { mount, shallowMount } from '@vue/test-utils'
import ProductDet from '@/views/ProductDetails'
import productList from '@/assets/db/products/products.json'

describe('Testing Product Details', () => {
  it('should return a "Product not found" text when no product was found', () => {
    const notExistingProductId = -2
    const wrapper = mount(ProductDet, {
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
    const wrapper = mount(ProductDet, {
      mocks: {
        $store: {
          state: { productList: productList },
        },
      },
      propsData: {
        id: existingProductId,
      },
    })

    const noProductsFound =
      wrapper.find('.fallback-section').element.style.display === 'none'

    expect(noProductsFound).toBe(true)
  })

  it('should not return a "Product not found" text when returning a product', () => {
    const existingProductId = 1
    const wrapper = mount(ProductDet, {
      mocks: {
        $store: {
          state: { productList: productList },
        },
      },
      propsData: {
        id: existingProductId,
      },
    })

    const noProductsFound =
      wrapper.find('.fallback-section').element.style.display === 'none'

    expect(noProductsFound).toBe(true)
  })
})
