<template>
  <div class="home">
    <SearchFilter v-on:show-close="toggleSearch" v-if="showSearch"/>
    <img alt="Vue logo" src="../assets/logo.png" />
    <ul>
      <li v-for="item of productList" :key="item.id">{{ item.brand }} {{ item.type }}, {{ item.price }}</li>
    </ul>
  </div>
</template>

<script>
import SearchFilter from '../components/SearchFilter'

export default {
  name: 'Products',
  data() {
    return {
      productList: this.$store.state.productList,
      showSearch: true
    }
  },
  components: { SearchFilter },
  methods: {
    toggleSearch() {
      this.showSearch = !this.showSearch
    }
  }
}
</script>
