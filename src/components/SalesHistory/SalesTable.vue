<template>
  <div class="py-4 overflow-x-auto mt-6">
    <div
      class="inline-block min-w-full border shadow-xl rounded-lg overflow-hidden"
    >
      <table class="min-w-full leading-normal">
        <thead>
          <tr>
            <th-table name="Fecha" />
            <th-table name="Total" />
            <th-table name="Acciones" />
          </tr>
        </thead>
        <tbody>
          <tr v-for="sale in sales" v-bind:key="sale.id">
            <td-table :name="formatDate(sale.dateOfSale)" />
            <td-table :name="`$${sale.total}`" />
            <td-table>
              <div class="border-gradient-2 flex justify-center items-center">
                <button
                  @click="getDetails(sale.id)"
                  class="w-full h-full button-gradient bg-white rounded-2xl py-1 px-3"
                >
                  <span
                    class="text-gradient whitespace-nowrap font-semibold text-xs font-mono"
                    >Ver detalle</span
                  >
                </button>
              </div>
            </td-table>
          </tr>
        </tbody>
      </table>
    </div>
    <modal-component
      v-show="visible"
      @close="showModal"
      title="Detalles de la venta"
    >
      <div
        class="inline-block min-w-full border shadow-xl rounded-lg overflow-hidden"
      >
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th-table name="Producto" />
              <th-table name="Cantidad" />
              <th-table v-show="!report" name="Total" />
            </tr>
          </thead>
          <tbody>
            <tr v-for="sal in sale" :key="sal.id">
              <td-table :name="sal.products.name" />
              <td-table :name="sal.quantity" />
              <td-table v-show="!report" :name="`$` + sal.totalUnit" />
            </tr>
          </tbody>
        </table>
      </div>
    </modal-component>
  </div>
</template>

<script>
import ThTable from "../Global/ThTable.vue";
import { formatRelative, subDays } from "date-fns";
import { es } from "date-fns/locale";
import TdTable from "../Global/TdTable.vue";
import { getDetailsSale } from "../../api/sale.api";
import ModalComponent from "../Global/ModalComponent.vue";

export default {
  components: { ThTable, TdTable, ModalComponent },
  props: {
    sales: { type: Object },
    report: { type: Boolean },
  },
  data() {
    return {
      sale: [],
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = !this.visible;
    },
    formatDate(date) {
      return formatRelative(subDays(new Date(date), 0), new Date(), {
        locale: es,
      });
    },
    getDetails(id) {
      getDetailsSale(id).then(({ data }) => {
        this.sale = data.sales;
        this.showModal();
      });
    },
  },
};
</script>

<style></style>
