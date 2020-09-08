<template>

  <section class="home">
    <h1>Products</h1>
    <SearchFilter :products="productList" v-on:showClose="toggleSearch" v-on:searchAndClose="searched"
    v-on:filtered="example"
    v-if="showSearch" />

    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <button @click="toggleSearch">Filter</button>
    <!-- <ul> -->
    <!--<li class="productList" v-for="item of productList" :key="item.id"> <img class="images" :src="item.img" alt="images"> {{ item.brand }} {{ item.type }}, {{ item.price }} </li>-->
    <ProductList :productDataList="filteredList" />
    <!-- </ul> -->
  </section>
</template>

<script>
import SearchFilter from '../components/SearchFilter'
import ProductList from '../components/ProductList'

export default {
  name: 'Products',
  data() {
    return {
      productList: this.$store.state.productList,
      showSearch: false,
      filteredList: this.$store.state.productList
    }
  },
  computed: {
    /*filteredList() {
      return this.productList
    },*/
  },
  components: { SearchFilter, ProductList },
  methods: {
    toggleSearch() {
      this.showSearch = !this.showSearch
    },
    searched() {
      this.showSearch = false
    },
    example(param) {
      this.filteredList = param
      this.showSearch = !this.showSearch
    }
    //productList: this.$store.state.productList
  },
}
</script>

<style lang='scss' scoped>
h1 {
    font-family: uroobbold, sans-serif;
    font-size: 40px;
    margin-top: 1em;
    margin-bottom: 0.5em;
    color: black;
  }
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

button {
  font-family: uroobbold, sans-serif;
  font-size: 2rem;
  color: rgb(238, 238, 238);
  padding: 0.7rem 1.5rem 0.1rem;
  background-color: #66c52b;
  border: 1px solid #2c3e50;
  cursor: pointer;
}

@media only screen and (min-width: 768px) {
  h1 {
        font-size: 60px;
      }
}
</style>
