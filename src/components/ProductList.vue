<template>
  <div>
    <h1>Products</h1>
    <!-- <button v-on:click="getProductData">Show Products</button> -->
    <div v-for="productData in productDataList" :key="productData.id" class="product-data">
      <div class="product-stats detail-button">
        <div class="product-icon">
          <img :src="productData.img" alt="products" />
        </div>
        <div class="brand size">
          <span>{{ productData.brand }} | {{ productData.size }}</span>
        </div>
        <div class="type">
          <span>{{ productData.type }}</span>
        </div>
        <div class="price">
          <span>{{ productData.price }} kr</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsList',
  data() {
    return {
      // productDataList: [],
    }
  },
  props: {
    productDataList: Array,
  },
  methods: {
    // getProductData() {
    //   fetch('products.json')
    //     .then(response => response.json())
    //     .then(data => (this.productDataList = data))
    // },
  },
}
</script>

<style scoped>
.product-data {
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  border-bottom: 2px solid #ccc;
  padding: 20px;
}

.product-icon {
  flex-grow: 1;
}

.product-stats {
  flex-grow: 8;
  text-align: left;
  padding-left: 20px;
}

.product-stats .brand .size .type .price {
  font-size: 30px;
}

img {
  width: 70px;
}

button {
  padding: 10px;
  background-color: #1aa832;
  color: white;
  border: 1px solid #ccc;
}
</style>