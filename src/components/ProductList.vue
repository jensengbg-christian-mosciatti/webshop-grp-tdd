<template>
  <section>
    <section v-for="productData in productDataList" :key="productData.id" class="product-data">
      <section @click="goToDetails(productData.id)" id="button" class="product-stats detail-button">
        <section class="image">
          <img :src="productData.img" alt="products" />
        </section>
        <section class="product-info">
          <section class="brand size">
            <span class="gray font">{{ productData.brand }} | {{ productData.size }}</span>
          </section>
          <section class="type">
            <span class="font">{{ productData.type }}</span>
          </section>
          <section class="price">
            <span class="font color">{{ productData.price }} kr</span>
          </section>
        </section>
      </section>
    </section>
  </section>
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
    goToDetails(id) {
      this.$router.push({ name: 'productdetails', params: { id: Number(id) } })
    }
  },
}
</script>

<style lang="scss" scoped>
    .product-data {
        padding: 20px;
        cursor: pointer;
        line-height: 2em;
    }

    .product-stats {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    img {
        width: 10em;
    }

    .detail-button {
        background-color: #ffffff;
        color: #000000;
    }

    .gray {
        color: lightgray;
    }

    .font {
      font-size: 15px;
    }

    .color {
      color: #66c52b;
    }

    @media only screen and (min-width: 768px) {
      .product-data {
        line-height: 2.5em;
      }

      .product-stats {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        border-bottom: 2px solid lightgray;
      }

      .product-info {
        display: flex;
        flex-direction: column;
        padding: 5em;
      }

      img {
          width: 20em;
        }

      .font {
        font-size: 30px;
      }
    }
</style>
