<template>
  <div class="cart">
    <h1>My Cart</h1>
    <main class="item-list-container">
      <div v-show="!cart.length">
        <h2>The shopping cart is empty</h2>
      </div>
      <ul v-show="cart.length">
        <li v-for="(item, index) of cart" :key="index">
          <div>
            <img class="item-image" :src="item.img" :alt="item.type" />
          </div>
          <div>
            <span class="item-brand">{{ item.brand }}</span>
            <span class="item-type">{{ item.type }}</span>
          </div>
          <div>
            <button class="btn-plus" @click="changeQty(item, 1)">+</button>
            <span class="item-qty"> {{ item.qty }} </span>
            <button class="btn-minus" @click="changeQty(item, -1)">-</button>
          </div>
          <span class="item-price"> {{ item.totalPrice }} </span>
        </li>
      </ul>
    </main>
    <div class="footer">
      <div class="footer__total-container">
        <h2>Total</h2>
        <h2 class="total-amount">{{ total }} Kr</h2>
      </div>
      <div class="footer__vat-amount-container" v-show="cart.length">
        <h2>Vat amount</h2>
        <h2 class="vat-amount">{{ vatAmount }} Kr</h2>
      </div>
      <div class="footer__shippingCost-container" v-show="cart.length">
        <h2>Shipping costs</h2>
        <h2 class="shipping">{{ shippingCost }} Kr</h2>
      </div>
    </div>
    <button @click="addToCart">Add To Cart</button>
    <button @click="checkout">Checkout</button>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
export default {
  data() {
    return {
      cart: [],
      shippingCost: 299,
    }
  },
  computed: {
    total() {
      if (!this.cart.length) return 0
      return (
        this.shippingCost +
        this.cart.reduce((total, el) => {
          return total + Number(el.unitPrice) * Number(el.qty)
        }, 0)
      )
    },
    vatAmount() {
      if (!this.cart.length) return 0
      return (this.total - this.shippingCost - (this.total - this.shippingCost) / 1.25).toFixed(2)
    },
  },
  mounted() {
    if (localStorage.getItem('cart')) {
      try {
        this.cart = JSON.parse(localStorage.getItem('cart'))
      } catch (e) {
        localStorage.removeItem('cart')
      }
    }
  },
  methods: {
    addToCart() {
      this.cart.push({
        id: 1,
        img: 'adidas-predator',
        brand: 'adidas',
        type: 'Predator 20.3 LL FG J fotbollsskor',
        qty: 1,
        unitPrice: 699,
        totalPrice: 699,
        size: 35,
      })
      this.saveToLocalStorage()
    },
    saveToLocalStorage() {
      const parsed = JSON.stringify(this.cart)
      localStorage.setItem('cart', parsed)
    },
    checkout() {
      this.cart = []
      this.saveToLocalStorage()
    },
    changeQty(el, qty) {
      el.qty = el.qty + qty
      el.totalPrice = el.qty * el.unitPrice
      if (el.qty <= 0) {
        this.cart.splice(this.cart.indexOf(el), 1)
      }
      this.saveToLocalStorage()
    },
  },
}
</script>
