<template>
  <div>
    <div v-show="productById == null">
      <h2>
        Product not found
      </h2>
    </div>
    <div v-show="productById != null">
      <h1>Product Details</h1>

      <p>{{ productById }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  props: {
    id: Number,
  },
  computed: {
    productById() {
      return this.$store.state.productList.find(el => el.id === this.id)
    },
  },
}
</script>

<style scoped></style>
