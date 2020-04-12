<template>
  <div>
    <HistoricOrders v-bind:key="order._id" v-for="order in historicOrders" :order="order" />

    <div v-if="historicOrders.length < 1" class="cart-item">
      <div class="p-2 d-flex justify-content-center align-items-center">
        <div class="d-flex align-items-center">Du har inga historiska ordrar</div>
      </div>
      <div class="dropdown-divider"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import HistoricOrders from "@/components/historicorders/HistoricOrders";

export default {
  name: "History",
  components: {
    HistoricOrders
  },
  methods: {
    ...mapActions(["getHistoricOrders"])
  },
  created() {
    this.getHistoricOrders();
  },
  computed: {
    ...mapGetters(["historicOrders"])
  }
};
</script>

<style>
</style>