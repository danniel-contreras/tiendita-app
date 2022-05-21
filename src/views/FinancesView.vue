<template>
  <layout-view>
    <p class="text-red-600 text-2xl mb-6">FINANZAS DEL SISTEMA</p>
    <div class="flex my-6">
      <label
        class="pr-4 text-gradient mt-1 text-sm font-semibold whitespace-nowrap"
        >Buscar por fecha</label
      >
      <input
        @change="getByDate"
        class="border w-full py-2 text-sm px-2 rounded"
        v-model="dates"
        type="date"
      />
    </div>
    <finances-table :boxes="boxes" />
    <span v-show="empty" class="text-gray-600 font-semibold"
      >No se an registrado cajas</span
    >
    <pagination-component
      v-if="totalPag > 1"
      @method="getBoxes"
      :currentPage="currentPage"
      :pages="pages"
      :totalPag="totalPag"
      :next="next"
      :prev="prev"
    />
  </layout-view>
</template>

<script>
import FinancesTable from "../components/Finances/FinancesTable.vue";
import LayoutView from "../layout/LayoutView.vue";
import { getAllBoxes } from "../api/box";
import { paginate } from "../utils/utils";
import PaginationComponent from "../components/Global/PaginationComponent.vue";

export default {
  name: "FinancesView",
  components: { LayoutView, FinancesTable, PaginationComponent },
  data() {
    return {
      boxes: [],
      pages: [],
      currentPage: 0,
      next: 0,
      prev: 0,
      totalPag: 0,
      dates: "",
      empty: false,
    };
  },
  methods: {
    getBoxes(page = 1, dates = "") {
      getAllBoxes(page, dates)
        .then(({ data }) => {
          if (data.ok) {
            this.boxes = data.box;
            this.pages = paginate(data.curentPag, data.totalPag, 1);
            this.totalPag = data.totalPag;
            this.next = data.nextPag;
            this.prev = data.prevPag;
            this.currentPage = data.curentPag;
          }
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
    getByDate() {
      this.getBoxes(1, this.dates);
    },
  },
  mounted() {
    this.getBoxes(1);
  },
};
</script>

<style></style>
