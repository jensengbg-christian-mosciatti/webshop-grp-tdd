<template>
  <div class="search-overlay">
    <button class="menu" v-on:click="showOrClose"></button>
    <input type="text" id="search-input" class="search-field" v-model="userInput" />
    <label id="shoe-size-category">
      <p> Storlekstyp: {{ shoeSizeClass }}</p>
      <input type="range" id="shoeSize-range" min="0" max="2" v-model="sizeClass" />
    </label>
    <label id="shoe-size">
      <p>Storlek: {{ shoeSize }}</p>
      <input type="range" id="kids-range" min="26" max="37" v-model="size" v-if="kidSize" />
      <input type="range" id="adults-range" min="36" max="47" v-model="size" v-else />
    </label>
    <label id="basis-type">
      <p> Underlag: {{ basis }}</p>
      <input type="range" id="basis-range" min="0" max="3" v-model="basisType"/>
    </label>
    <label id="shoe-brand">
      <p> Märke: {{ brand }}</p>
      <input type="range" id="brand-range" min="0" max="3" v-model="shoeBrand"/>
    </label>
    <button class="search" v-on:click="searched"></button>
  </div>
</template>

<script>
export default {
    data: function() {
    return {
        userInput: '',
        sizeClass: '',
        size: '',
        basisType: '',
        shoeBrand: '',
        filteredList: [],
    }
    },
    props: {
      products: Array
    },
    methods: {
        async showOrClose() {
        await this.$emit('showClose')
        },
        async searched() {
            let productsCopy = this.products
            //let brandList = []
            if (this.brand.length) {
              productsCopy = productsCopy.filter(el => {/*console.log();*/ return el.brand === this.brand})
              //console.log("In the brand if", productsCopy)
            }
            if (this.shoeSizeClass.length) {
              productsCopy = productsCopy.filter(el => el.size === this.shoeSizeClass)
              //console.log('In the size if', productsCopy)
            }
            //console.log(productsCopy)
          this.filteredList = productsCopy
          return this.$emit("filtered", this.filteredList)
        },
        kidSize() {
            if(this.sizeClass == "kids") {
                return true
            } else 
            return false
        }
    },
    computed: {
        shoeSizeClass() {
          let array = ['', 'adults', 'kids']
          if (this.sizeClass == '') {
            return ''
          }
          return array[this.sizeClass]
        },
        shoeSize() {
        // Edit bump
        return this.size
        },
        basis() {
        if (this.basisType == 1) {
            return 'Gräs'
        } else if (this.basisType == 2) {
            return 'Konstgräs'
        } else if (this.basisType == 3) {
            return 'Inomhus'
        } return ''
        },
        brand() {
        let array = ['', 'puma', 'adidas', 'nike']
        if (this.shoeBrand == '') {
          return ''
        }
        return array[this.shoeBrand]
        }
    }
}
</script>

<style>
.search-overlay {
  background-color: whitesmoke;
  position: fixed;
  width: 100vw;
  height: 100vh;
  margin: 0px;
  top: 0px;
  left: 0px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(8, 1fr);
}

.menu {
  grid-row: 1;
  grid-column: 1;
}

.search-field {
  grid-row: 2;
  grid-column: 2/5;
}

#shoe-size-category {
  grid-row: 3/4;
  grid-column: 2/5;
  display: flex;
  flex-direction: column;
}

#shoe-size {
  grid-row: 4/5;
  grid-column: 2/5;
  display: flex;
  flex-direction: column;
}

#basis-type {
  grid-row: 5/6;
  grid-column: 2/5;
  display: flex;
  flex-direction: column;
}

#shoe-brand {
  grid-row: 6/7;
  grid-column: 2/5;
  display: flex;
  flex-direction: column;
}

.search {
  grid-row: 7/8;
  grid-column: 2/5;
  display: flex;
  flex-direction: column;
}
</style>
