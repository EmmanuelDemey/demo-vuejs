import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    total: 0
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products;
    },
    updateTotal(state, productPrice) {
      state.total += productPrice;
    }
  },
  actions: {}
});
