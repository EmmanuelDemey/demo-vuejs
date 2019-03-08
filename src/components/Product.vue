<template>
  <div class="col-md-3 col-sm-6 hero-feature">
    <div class="thumbnail">
      <img src="http://placehold.it/800x500" alt>
      <div class="caption">
        <h3>{{ item.label }} - {{item.price}}€</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>
          <button class="btn btn-primary" @click="addToBasket">Ajoutez au panier</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    addToBasket() {
      this.$emit("addTobasket", this.item);
    }
  }
};
</script>

<style>
</style>
