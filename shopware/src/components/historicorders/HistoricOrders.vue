<template>
  <div class="HistoricOrder">
    <h4>Ordernumber: {{order.ordernumber}}</h4>
    <div v-bind:key="product._id" v-for="product in order.products">
      <div class="cart-item">
        <div class="p-2 d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <img class="img-fluid bild" :src="product.image" alt />
            <div>
              <div>
                <strong>{{ product.name }}</strong>
              </div>
              <div>
                <small>{{ product.quantity }}</small>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div class="dropdown-divider"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["order"]
};
</script>

<style scooped>
.HistoricOrder {
  margin-bottom: 20px;
  border: solid black 2px;
}
.bild {
  width: 10vw;
}
h4 {
  margin-left: 10px;
}
</style>