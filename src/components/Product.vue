<template>
  <div>
    <button @click="addToCart">Add To Cart</button>
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
  },
}
</script>

<style></style>
