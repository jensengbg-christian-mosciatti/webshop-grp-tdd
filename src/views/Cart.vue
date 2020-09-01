<template>
  <div class="cart">
    <h1>This is an "add to cart" page</h1>
    <ul>
      <li v-for="(item, index) of cart" :key="index">{{ item.item }} {{ item.price }} {{ item.description }}</li>
    </ul>
    <button @click="addToCart">Add To Cart</button>
    <button @click="checkout">Checkout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
    }
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
      this.cart.push({ item: 'Banana', price: 123, description: 'Bla bla bla...' })
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
  },
}
</script>
