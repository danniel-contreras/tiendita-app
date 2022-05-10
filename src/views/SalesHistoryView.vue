<template>
  <layout-view>
    <p class="text-lg font-semibold text-gradient">Historial de ventas</p>
    <sales-table :sales="sales"/>
  </layout-view>
</template>

<script>
import SalesTable from "../components/SalesHistory/SalesTable.vue";
import LayoutView from "../layout/LayoutView.vue";
import { getSales } from "../api/sale.api";
import { paginate } from "../utils/utils";

export default {
  name: "SalesHistoryView",
  components: { LayoutView, SalesTable },
  data() {
    return {
      sales: {},
      pages: [],
      currentPage: 0,
      next: 0,
      prev: 0,
      totalPag: 0,
    };
  },
  methods: {
    getAllSales(page = 1) {
      getSales(page).then(({ data }) => {
        this.sales = data.sales;
        this.pages = paginate(data.curentPag, data.totalPag, 1);
        this.totalPag = data.totalPag;
        this.next = data.nextPag;
        this.prev = data.prevPag;
        this.currentPage = data.curentPag;
      });
    },
  },
  mounted() {
    this.getAllSales(1);
  },
};
</script>

<style></style>
