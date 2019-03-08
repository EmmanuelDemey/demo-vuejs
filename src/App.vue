<template>
  <div id="app">
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Zenika Ecommerce</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li>
              <a href="#">Voir mon Panier</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <header class="jumbotron hero-spacer">
        <h1>Bienvenue sur Zenika Ecommerce</h1>
        <p>Votre panier s'élève à {{total}}€</p>
        <p>
          <a class="btn btn-primary btn-large">Voir mon panier</a>
        </p>
      </header>

      <hr>

      <div class="row">
        <div class="col-lg-12">
          <h3>Derniers Produits</h3>
        </div>
      </div>

      <div class="row text-center">
        <Product
          v-for="(product, i) in strongBeers"
          :key="i"
          :item="product"
          @addTobasket="updateTotal"
        />
      </div>

      <hr>

      <footer>Copyright &copy; Your Website 2016</footer>
    </div>
  </div>
</template>

<script>
import ProductVue from "./components/Product.vue";

export default {
  name: "app",
  components: {
    Product: ProductVue
  },
  methods: {
    updateTotal(product) {
      this.$store.commit("updateTotal", product.price);
    }
  },
  created() {
    this.$store.commit("loadProducts", [
      { label: "IPA", price: 4 },
      { label: "Tripel", price: 3 },
      { label: "Lagger", price: 2 }
    ]);
  },
  computed: {
    strongBeers() {
      return this.products.filter(beer => beer.price >= 4);
    },
    total() {
      return this.$store.state.total;
    },
    products() {
      return this.$store.state.products;
    }
  }
};
</script>

<style lang="scss">
</style>
