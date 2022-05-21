<template>
  <layout-view>
    <p class="text-lg font-semibold text-gradient">Historial de ventas</p>
    <sales-table :sales="sales" />
    <span v-show="empty" class="text-gray-600 font-semibold"
      >No se an registrado ventas</span
    >
    <pagination-component
      v-if="totalPag > 1"
      @method="getAllSales"
      :currentPage="currentPage"
      :pages="pages"
      :totalPag="totalPag"
      :next="next"
      :prev="prev"
    />
  </layout-view>
</template>

<script>
import SalesTable from "../components/SalesHistory/SalesTable.vue";
import LayoutView from "../layout/LayoutView.vue";
import { getSales } from "../api/sale.api";
import { paginate } from "../utils/utils";
import PaginationComponent from "../components/Global/PaginationComponent.vue";

export default {
  name: "SalesHistoryView",
  components: { LayoutView, SalesTable, PaginationComponent },
  data() {
    return {
      sales: {},
      pages: [],
      currentPage: 0,
      next: 0,
      prev: 0,
      totalPag: 0,
      empty: false,
    };
  },
  methods: {
    getAllSales(page = 1) {
      getSales(page)
        .then(({ data }) => {
          this.sales = data.sales;
          this.pages = paginate(data.curentPag, data.totalPag, 1);
          this.totalPag = data.totalPag;
          this.next = data.nextPag;
          this.prev = data.prevPag;
          this.currentPage = data.curentPag;
        })
        .catch(({ data }) => {
          this.empty = true;
          if (!data.ok) {
            this.$toast.warning("No hay registros para mostrar");
            return;
          }
          this.$toast.error("Ah ocurrido un error inesperado");
        });
    },
  },
  mounted() {
    this.getAllSales(1);
  },
};
</script>

<style></style>
