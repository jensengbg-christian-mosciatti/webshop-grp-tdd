<template>
  <div class="search-overlay">
    <button class="menu" v-on:click="showOrClose">
      <i id="exit-cross" class="far fa-times-circle"></i>
    </button>
     <!-- <input type="text" id="search-input" class="search-field" v-model="userInput" /> -->
    <label id="shoe-size-category">
      <p> Storlekstyp: {{ shoeSizeClass }}</p>
      <input type="range" id="shoeSize-range" min="0" max="2" v-model="sizeClass" />
    </label>
    <!-- <label id="shoe-size">
      <p>Storlek: {{ shoeSize }}</p> 
      <input type="range" id="kids-range" min="26" max="37" v-model="size" v-if="kids" />
      <input type="range" id="adults-range" min="36" max="47" v-model="size" v-else /> 
    </label> -->
    <label id="basis-type">
      <p> Underlag: {{ basis }}</p>
      <input type="range" id="basis-range" min="0" max="3" v-model="basisType"/>
    </label>
    <label id="shoe-brand">
      <p> Märke: {{ brand }}</p>
      <input type="range" id="brand-range" min="0" max="3" v-model="shoeBrand"/>
    </label>
    <button class="search" v-on:click="searched"> <h1> SÖK </h1> </button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
        userInput: '',
        sizeClass: '',
        kids: '',
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
        /*let obj = {
          size: this.size,
          basis: this.basis
        }*/
        this.filteredList = productsCopy
        return this.$emit("filtered", this.filteredList)
    },
    kidsSize() {
      if(this.sizeClass == 2) {
        this.kids = true
        return true
      } else 
        this.kids = false
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
      } 
      return ''
    },
    brand() {
      let array = ['', 'puma', 'adidas', 'nike']
      if (this.shoeBrand == '') {
        return ''
      }
      return array[this.shoeBrand]
    }
  },
  watch: {
    sizeClass: async function () {
      let promise = await this.kidsSize()
      console.log(promise)
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
  grid-template-rows: repeat(6, 1fr);
  padding: 0px;
}

.menu {
  grid-row: 1;
  grid-column: 1;
  background-color: black;
  height: 45px;
  width: 45px;
  border: 1px solid black;
  border-radius: 50%;
  margin: 10px 0px 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#exit-cross {
  color: white;
  font-size: 38px;
}

.search-field {
  grid-row: 2;
  grid-column: 2/5;
}

input[type=range] {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: black; /* Otherwise white in Chrome */
  border: 1px black solid;
  height: 10px;
  border-radius: 10px;
}

input[type=range]::-webkit-slider-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #66C52B;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: #66C52B;
  cursor: pointer;
}

/* All the same stuff for Firefox */
input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #66C52B;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: #66C52B;
  cursor: pointer;
}

/* All the same stuff for IE */
input[type=range]::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #66C52B;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: #66C52B;
  cursor: pointer;
}

label {
  font-weight: bold;
  font-size: 18px;
  flex-direction: column;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
  min-width: 250px;
}

p {
  margin: 0px 0px 30px 0px;
  border: 2px solid black;
  padding: 7px;
  border-radius: 2px;
  width: 93%;
  background-color: whitesmoke;
}

h1 {
  color: var(--button-text-color)
}

#shoe-size-category {
  grid-row: 2/3;
  grid-column: 2/5;
}

#shoe-size {
  grid-row: 2/3;
  grid-column: 2/5;
}

#basis-type {
  grid-row: 3/4;
  grid-column: 2/5;
}

#shoe-brand {
  grid-row: 4/5;
  grid-column: 2/5;
}

.search {
  grid-row: 5/6;
  grid-column: 2/5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--button-color);
  height: 50px;
  border: 1px solid black;
  border-radius: 2px;
  justify-self: center;
  align-self: center;
  min-width: 250px;
}

@media only screen and (min-width: 500px) {
  .search-overlay {
    justify-content: center;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }

  #shoe-size-category {
    grid-row: 3/4;
    grid-column: 2/5;
  }

  #basis-type {
    grid-row: 4/5;
    grid-column: 2/5;
  }

  #shoe-brand {
    grid-row: 5/6;
    grid-column: 2/5;
  }
  
  label {
    justify-self: center;
    min-width: 300px;
    justify-content: center
  }

  .search {
    min-width: 300px;
    align-self: center;
    justify-self: center;
    grid-row: 6/7;
  }
}
</style>
