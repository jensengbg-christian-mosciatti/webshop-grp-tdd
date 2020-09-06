<template>
  <div class="cart">
    <h1>My Cart</h1>
    <main class="item-list-container">
      <div v-show="!cart.length">
        <h2>The shopping cart is empty</h2>
      </div>
      <ul v-show="cart.length">
        <li v-for="(item, index) of cart" :key="index" class="list-elem-container">
          <div class="item-top-container">
            <!-- <div class="item-right-cont"> -->
            <img class="item-image" :src="item.img" :alt="item.type" />
            <!-- </div> -->
            <div class="item-topright-cont">
              <span class="item-brand">{{ item.brand }}</span>
              <div class="item-right-group">
                <div class="item-qty-group">
                  <button class="btn-minus" @click="changeQty(item, -1)">-</button>
                  <span class="item-qty"> {{ item.qty }} </span>
                  <button class="btn-plus" @click="changeQty(item, 1)">+</button>
                </div>
                <span class="item-price"> {{ item.totalPrice }} </span>
              </div>
            </div>
          </div>
          <p class="item-type">{{ item.type }}</p>
        </li>
      </ul>
    </main>
    <div class="footer">
      <div class="footer__element footer__total-container">
        <h2>Total</h2>
        <span class="footer__line"></span>
        <h2 class="total-amount">{{ total }} Kr</h2>
      </div>
      <div class="footer__element footer__vat-amount-container" v-show="cart.length">
        <h4>Vat amount</h4>
        <span class="footer__line"></span>

        <h3 class="vat-amount">{{ vatAmount }} Kr</h3>
      </div>
      <div class="footer__element footer__shippingCost-container" v-show="cart.length">
        <h4>Shipping costs</h4>
        <span class="footer__line"></span>

        <h3 class="shipping">{{ defaultShippingCost }} Kr</h3>
      </div>
      <!-- <button @click="addToCart">Add To Cart</button> -->
      <button @click="checkout">CHECKOUT</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  height: 93.3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item-list-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
}

.item-list-container > ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.list-elem-container {
  border: 0.5px solid #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 10rem;
  width: 90vw;
  max-width: 60rem;
  padding: 0 0.6rem;
  margin: 0.2rem 0;
}
.item-top-container {
  display: flex;
  justify-content: space-between;
  height: 80%;
  width: 100%;
}

.item-topright-cont {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item-right-group {
  align-self: flex-end;
  display: flex;

  flex-direction: row;
  align-items: center;
  height: 100%;
}

.item-qty-group {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin: 1rem;
  border: 0.1px solid #2c3e50;
  border-style: inset;
  font-size: 1.2rem;
}

.item-qty-group > span {
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0 0.5rem;
  border-left: 1px solid #2c3e50;
  border-right: 1px solid #2c3e50;
}
.item-qty-group > button {
  font-family: monospace;
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  padding: 0.3rem 0.5rem;
}

.item-type {
  margin: 0;
  font-size: 1.2rem;
  overflow: hidden;
}

.item-image {
  height: 100%;
  width: auto;
}

.item-price {
  font-size: 1.3rem;
  font-weight: bold;
}

.item-brand {
  font-size: 1.3rem;
  align-self: flex-start;
}

.footer {
  background-color: rgb(218, 218, 218);
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0.5rem 0;
}

.footer__element {
  width: 90vw;
  max-width: 60rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.footer__line {
  margin: 0 0.5em;
  height: 1em;
  flex-grow: 1;
  border-bottom: 1px solid #2c3e50;
}

.footer__vat-amount-container > h4,
.footer__vat-amount-container > h3,
.footer__shippingCost-container > h4,
.footer__shippingCost-container > h3 {
  margin: 0.3rem 0;
}
.footer > button {
  font-family: uroobbold, sans-serif;
  // font-weight: 400;
  // font-style: normal;
  font-size: 2rem;
  color: rgb(238, 238, 238);
  padding: 0.7rem 1.5rem 0.1rem;
  background-color: #66c52b;
  border: 1px solid #2c3e50;
}
</style>

<script>
export default {
  data() {
    return {
      cart: [],
      defaultShippingCost: 299,
      defaultVat: 1.25,
    }
  },
  computed: {
    total() {
      if (!this.cart.length) return 0
      return (
        this.defaultShippingCost +
        this.cart.reduce((total, el) => {
          return total + Number(el.price) * Number(el.qty)
        }, 0)
      )
    },
    maxCartLineId() {
      if (!this.cart.length) return 0
      const arrayOfCartLinesId = this.cart.map(el => el.orderLineId)
      return Math.max(...arrayOfCartLinesId)
    },
    vatAmount() {
      if (!this.cart.length) return 0
      return (this.total - this.defaultShippingCost - (this.total - this.defaultShippingCost) / this.defaultVat).toFixed(2)
    },
  },
  mounted() {
    if (localStorage.getItem('cart')) {
      try {
        this.cart = JSON.parse(localStorage.getItem('cart'))
      } catch (e) {
        localStorage.removeItem('cart')
      }
    }
  },
  methods: {
    addToCart() {
      const arrayLength = this.cart.push({
        orderLineId: this.newOrderLineId(),
        id: 2,
        img: 'https://cdn.intersport.se/productimages/690x600/146564101000_10.jpg',
        brand: 'adidas',
        type: 'Predator Mutator 20+ FG M fotbollsskor',
        qty: 1,
        price: 2749,
        size: 'adult',
      })
      this.cart[arrayLength - 1].totalPrice = this.cart[arrayLength - 1].price
      this.saveToLocalStorage()
    },
    newOrderLineId() {
      return this.maxCartLineId + 1
    },
    saveToLocalStorage() {
      const parsed = JSON.stringify(this.cart)
      localStorage.setItem('cart', parsed)
    },
    checkout() {
      this.cart = []
      this.saveToLocalStorage()
    },
    changeQty(element, qty) {
      element.qty = element.qty + qty
      element.totalPrice = element.qty * element.price
      if (element.qty <= 0) {
        this.cart.splice(this.cart.indexOf(element), 1)
      }
      this.saveToLocalStorage()
    },
  },
}
/* { id: 1, img: 'adidas-predator', brand: 'adidas', type: 'Predator 20.3 LL FG J fotbollsskor', qty: 1, unitPrice: 699,
totalPrice: 699, size: 35, } */
</script>
