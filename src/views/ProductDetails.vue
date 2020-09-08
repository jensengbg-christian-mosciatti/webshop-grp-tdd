<template>
  <main>
    <div class="fallback-section" v-show="productById == null">
      <h2>
        Product not found
      </h2>
    </div>
    <div class="grid-cont" v-show="productById != null">
      <div class="img-cont">
        <div>
          <img class="main-img" :src="currentImg.url ? currentImg.url : productById.img" :alt="productById.type" />
          <div class="img-thumbnails">
            <img
              @click="enlargeImage({ index: index, url: thumbnail })"
              v-for="(thumbnail, index) of productById.images"
              :key="index"
              :src="thumbnail"
              :alt="thumbnail"
              :class="{ 'img-selected': currentImg.thumbnailIndex === index }"
            />
          </div>
        </div>
      </div>

      <div class="short-info-cont">
        <!-- <div class="type-price-cont"> -->
        <h3 class="item-type">{{ productById.type }}</h3>
        <p class="item-brand">{{ productById.brand }}</p>
        <h2 class="item-price">{{ productById.price }} kr</h2>
        <!-- </div> -->
      </div>
      <div class="sizes-container"></div>
      <div class="cart-btn-cont">
        <button @click="addToCart">Add to cart</button>
      </div>
      <div class="long-info-cont">
        <h4>Product information:</h4>
        <p>{{ productById.info }}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ProductDetails',
  data() {
    return {
      currentImg: {
        url: null,
        thumbnailIndex: null,
      },
    }
  },
  props: {
    id: Number,
  },
  computed: {
    productById() {
      return this.$store.state.productList.find(el => el.id === this.id)
    },
  },
  methods: {
    enlargeImage(selectedThumbnail = {}) {
      this.currentImg.thumbnailIndex = selectedThumbnail.index
      this.currentImg.url = selectedThumbnail.url
    },

    getCart() {
      if (localStorage.getItem('cart')) {
        try {
          return JSON.parse(localStorage.getItem('cart'))
        } catch (e) {
          localStorage.removeItem('cart')
        }
      }
      return []
    },
    maxCartLineId() {
      const cart = this.getCart()
      if (!cart.length) return 0
      const arrayOfCartLinesId = cart.map(el => el.orderLineId)
      return Math.max(...arrayOfCartLinesId)
    },
    newOrderLineId() {
      return this.maxCartLineId() + 1
    },
    completeProductCartInfo(product) {
      return { ...product, orderLineId: this.newOrderLineId(), qty: 1, totalPrice: product.price }
    },
    addToCart() {
      const selectedProduct = this.productById
      const product = this.completeProductCartInfo(selectedProduct)
      const cart = this.getCart()
      cart.push(product)
      const parsed = JSON.stringify(cart)
      localStorage.setItem('cart', parsed)
    },
  },
}
</script>

<style scoped>
main {
  width: 90vw;
  max-width: 60rem;
  margin: auto;
}
.grid-cont {
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: auto;
  grid-template-areas:
    'pictures pictures'
    'shortinfo shortinfo'
    'cartbutton cartbutton'
    'longinfo longinfo';
}

.img-cont {
  grid-area: pictures;
  padding: 0.8rem;
}
.main-img {
  max-width: 70vw;
  max-height: 50vh;
}
.short-info-cont {
  padding: 3rem 1rem 0 1rem;
  grid-area: shortinfo;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
}
.item-price {
  align-self: center;
  font-family: uroobbold, sans-serif;
  font-size: 3rem;
  letter-spacing: 1px;
  margin-top: 2rem;
}
.cart-btn-cont {
  grid-area: cartbutton;
}

.cart-btn-cont > button {
  font-family: uroobbold, sans-serif;
  letter-spacing: 1px;
  font-size: 2rem;
  color: var(--button-text-color);
  padding: 0.7rem 1.5rem 0.1rem;
  background-color: var(--button-color);
  border: 1px solid #2c3e50;
}

.long-info-cont {
  grid-area: longinfo;

  text-align: left;
  margin: 1rem;
}

.img-thumbnails > img {
  height: 4rem;
  width: auto;
  margin: 0.3rem;
}

.img-selected {
  border: 1px solid grey;
  transform: scale(1.2);
}

/* .type-price-cont {
  display: flex;
  justify-content: center;
  align-items: center;
} */

@media only screen and (min-width: 880px) {
  .grid-cont {
    grid-template-areas:
      'pictures shortinfo'
      'pictures cartbutton'
      'pictures cartbutton'
      'longinfo longinfo';
  }
}
</style>
