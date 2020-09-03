<template>
  <div class="home">
    <SearchFilter v-on:showClose="toggleSearch" v-on:searchAndClose="searched" v-if="showSearch"/>
    <ul>
      <!--<li class="productList" v-for="item of productList" :key="item.id"> <img class="images" :src="item.img" alt="images"> {{ item.brand }} {{ item.type }}, {{ item.price }} </li>-->
      <ProductList />
    </ul>
  </div>
</template>

<script>

import SearchFilter from '../components/SearchFilter'
import ProductList from '../components/ProductList';


export default {
  name: 'Products',
  data() {
    return {
      productList: this.$store.state.productList,
      showSearch: true
    }
  },
  components: { SearchFilter, ProductList },
  methods: {
    toggleSearch() {
      this.showSearch = !this.showSearch
    },
    searched() {
      this.showSearch = false
    }

      //productList: this.$store.state.productList

    }
}
</script>

<style scoped>
  .productList {
    background-color: white;
    color: black;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 2em;
  }

  .images {
    height: 100px;
    width: 100px;
    display: flex;
    margin: 5em;
    margin-bottom: 1em;
    margin-top: 1em;
  }
</style>