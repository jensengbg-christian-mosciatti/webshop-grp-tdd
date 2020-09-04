<template>
  <div class="search-overlay">
    <button class="menu" v-on:click="showOrClose"></button>
    <input type="text" id="search-input" class="search-field" v-model="userInput" />
    <label id="shoe-size-category">
      <p> Storlekstyp: {{ showSizeClass }}</p>
      <input type="range" id="shoeSize-range" min="0" max="2" v-model="sizeClass" />
    </label>
    <label id="shoe-size">
      <p>Storlek: {{ showSize }}</p>
      <input type="range" id="kids-range" min="26" max="37" v-model="shoeSize" v-if="kidSize" />
      <input type="range" id="adults-range" min="36" max="47" v-model="shoeSize" v-else />
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
        shoeSize: '',
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
            //console.log(this.products)
            //this.filteredList = this.products.filter(el => el.brand === this.shoeBrand && el.size === this.sizeClass)
            this.filteredList = this.products.filter(el => {
                let isIncluded = false
                if (this.brand.length) isIncluded = el.brand === this.brand
                if (this.showSizeClass != null && this.showSizeClass.length) isIncluded = el.size === this.showSizeClass
                return isIncluded
            })
            /*for(let x = 0; x < this.products.length; x++) {
                let obj = (this.products[x])
                if (obj.brand == this.shoeBrand) {
                    this.filteredList.push(obj)
                
                    }
                }*/
            //await this.$emit('searchAndClose')
        }
    },
    computed: {
        kidSize() {
            if(this.sizeClass == "kids") {
                return true
            } else 
            return false
        },
        showSizeClass() {
            let array = ['', 'adults', 'kids']
            return array[this.sizeClass]
        },
        showSize() {
        // Edit bump
        return this.shoeSize
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
