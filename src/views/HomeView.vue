<template>
  <layout-view>
    <div class="home">
      <p class="text-red-600 text-4xl mb-6">FINANZAS DEL SISTEMA</p>
      <chart-component :sales="all" />
    </div>
    <div class="grid grid-cols-2 gap-9 mt-9">
      <div
        class="border shadow-lg h-40 rounded-lg flex justify-center items-center"
      >
        <span class="text-gradient text-xl font-semibold"
          >Ventas Totales: {{ sales.length }}</span
        >
      </div>
      <div
        class="border shadow-lg h-40 rounded-lg flex justify-center items-center"
      >
        <span class="text-gradient text-xl font-semibold"
          >Efectivo Total: ${{ total }}</span
        >
      </div>
    </div>
  </layout-view>
</template>

<script>
import ChartComponent from "../components/ChartComponent.vue";
import { getSales } from "../api/sale.api";
// @ is an alias to /src
import LayoutView from "../layout/LayoutView.vue";
import { dataFilter, reduceTotal } from "../utils/filters";
export default {
  name: "HomeView",
  components: {
    LayoutView,
    ChartComponent,
  },
  data() {
    return {
      sales: [],
      all: [],
      total: 0,
    };
  },
  methods: {
    getAllSales() {
      getSales(1, 100000000).then(({ data }) => {
        this.sales = data.sales;
        this.all = dataFilter(data.sales);
        this.total = reduceTotal(data.sales);
      });
    },
  },
  mounted() {
    this.getAllSales();
  },
};
</script>
