import { shallowMount } from '@vue/test-utils'
import Cart from '@/views/Cart.vue'

// const cartData1 = []
const cartData = [
  {
    id: 1,
    img: 'adidas-predator',
    brand: 'adidas',
    type: 'Predator 20.3 LL FG J fotbollsskor',
    qty: 2,
    price: 699,
    totalPrice: 699,
    size: 35,
  },
  {
    id: 2,
    img: 'adidas-mutator',
    brand: 'adidas',
    type: 'Predator Mutator 20+ FG M fotbollsskor',
    qty: 2,
    price: 2949,
    totalPrice: 2949,
    size: 40,
  },
]

describe('Test for shopping cart', () => {
  // it('products in shopping cart should be displayed in list format')
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Cart, {
      data: () => ({
        cart: cartData,
      }),
    })
  })
  it('should show products in shopping cart', () => {
    const expected = true

    const elementLi = wrapper.findAll('li').at(0).text()

    // console.log(element)
    // expect(elementLi.length > 0).toBe(expected)

    expect(elementLi.length > 0).toBe(expected)
  })

  it('products in shopping cart should include a picture, name, quantity, price', () => {
    const cartLine = wrapper.findAll('li').at(0)

    const hasImg = cartLine.find('.item-image').exists()
    const hasName = cartLine.find('.item-type').exists()
    const hasQty = cartLine.find('.item-qty').exists()
    const hasPrice = cartLine.find('.item-price').exists()

    expect(hasImg).toBe(true)
    expect(hasName).toBe(true)
    expect(hasQty).toBe(true)
    expect(hasPrice).toBe(true)
  })
  it('the shopping cart should display the total amount for the order, the shipping costs, and VAT', () => {
    const totalProducts = 2949 * 2 + 699 * 2
    const shippingCosts = 299
    const vat = 25
    let expectedTotal = totalProducts + shippingCosts
    expectedTotal = String(expectedTotal) + ' Kr'

    let expectedVat = (totalProducts - totalProducts / (1 + vat / 100)).toFixed(
      2
    )
    expectedVat = String(expectedVat) + ' Kr'

    const total = wrapper.find('.total-amount')

    // console.log(total.text())
    expect(total.exists()).toBe(true)
    expect(total.text().length > 2).toBe(true)
    expect(total.text()).toBe(expectedTotal)

    const vatAmount = wrapper.find('.vat-amount')
    expect(vatAmount.exists()).toBe(true)
    expect(vatAmount.text().length > 2).toBe(true)
    expect(vatAmount.text()).toBe(expectedVat)

    const expectedShipping = String(shippingCosts) + ' Kr'
    const shippingCostsEl = wrapper.find('.shipping')
    expect(shippingCostsEl.exists()).toBe(true)
    expect(shippingCostsEl.text().length > 2).toBe(true)
    expect(shippingCostsEl.text()).toBe(expectedShipping)
  })
  it('the shopping cart should allow to change quantity of a product, and remove it', async () => {
    const elementCountBefore = wrapper.findAll('li').length
    const element = wrapper.findAll('li').at(1)
    const originalQty = Number(element.find('.item-qty').text())
    // console.log('qty ', originalQty)

    const buttonMinus = element.find('.btn-minus')
    await buttonMinus.trigger('click')
    const newQty = Number(element.find('.item-qty').text())

    expect(originalQty).toBe(2)
    expect(newQty).toBe(1)

    await buttonMinus.trigger('click')

    const elementCountAfter = wrapper.findAll('li').length
    expect(elementCountBefore).toBe(2)
    expect(elementCountAfter).toBe(1)
  })
  it('the shopping cart should allow to checking out the order pushing a button', async () => {
    const elementCountBefore = wrapper.findAll('li').length

    const checkoutBtn = wrapper.find('.checkout-btn')
    await checkoutBtn.trigger('click')
    const elementCountAfter = wrapper.findAll('li').length

    expect(elementCountBefore).toBeGreaterThan(0)
    expect(elementCountAfter).toBe(0)
  })
})
