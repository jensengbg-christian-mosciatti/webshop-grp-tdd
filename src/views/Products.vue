<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ul>
      <li v-for="item of productList" :key="item.id">{{ item.brand }} {{ item.type }}, {{ item.price }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      productList: this.$store.state.productList,
    }
  },

  components: {},
}
</script>
