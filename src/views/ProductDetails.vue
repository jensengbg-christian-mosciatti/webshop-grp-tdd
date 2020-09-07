<template>
  <div>
    <div class="fallback-section" v-show="productById == null">
      <h2>
        Product not found
      </h2>
    </div>
    <div v-show="productById != null">
      <div>
        <div>
          <div class="img-container">
            <img :src="currentImg.url ? currentImg.url : productById.img" :alt="productById.type" />
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
        <div class="type-price-cont">
          <h3>{{ productById.type }}</h3>
          <h3>{{ productById.price }}</h3>
        </div>
        <p>{{ productById.brand }}</p>
      </div>
      <div class="sizes-container"></div>
      <div>
        <button>Add to cart</button>
      </div>
      <div>
        <h4>Product information:</h4>
        <p>{{ productById.info }}</p>
      </div>
    </div>
  </div>
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
  },
}
</script>

<style scoped>
.img-thumbnails > img {
  height: 4rem;
  width: auto;
  margin: 0.3rem;
}

.img-selected {
  border: 1px solid grey;
  transform: scale(1.2);
}

.type-price-cont {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
