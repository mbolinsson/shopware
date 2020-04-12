<template>
  <div class="cart-item">
    <div class="p-2 d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <img :src="item.product.image" alt class="img-fluid image-width" />
        <div>
          <div>
            <strong>{{ item.product.name }}</strong>
          </div>
          <div>
            <small>{{ item.quantity }} x {{ item.product.price }} SEK</small>
          </div>
        </div>
      </div>
      <div>
        <div class="btn-group btn-group-sm" role="group" aria-label="quantity">
          <button type="button" class="btn btn-grey px-3" v-on:click.stop="decrementProduct(item)">-</button>
          <button type="button" class="btn btn-grey px-3" v-on:click.stop="incrementProduct(item)">+</button>
        </div>

        <div class="btn-group btn-group-sm" role="group" aria-label="trash">
          <button
            class="btn btn-danger px-3"
            v-on:click.stop="deleteProductFromCart(item.product._id)"
          >
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="dropdown-divider"></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["item"],
  methods: {
    ...mapActions([
      "deleteProductFromCart",
      "decrementProduct",
      "incrementProduct"
    ])
  }
};
</script>

<style scoped>
.image-width {
  width: 90px;
}
</style>