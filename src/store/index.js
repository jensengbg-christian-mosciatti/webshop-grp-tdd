import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import data from '../assets/db/products/products.json'
export default new Vuex.Store({
  state: {
    productList: data.products,
  },
  mutations: {},
  actions: {},
  modules: {},
})
