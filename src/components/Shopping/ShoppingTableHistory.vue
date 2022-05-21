<template>
  <div class="py-4 overflow-x-auto mt-6">
    <div
      class="inline-block min-w-full border shadow-xl rounded-lg overflow-hidden"
    >
      <table class="min-w-full leading-normal">
        <thead>
          <th-table name="Fecha" />
          <th-table name="Tipo de recibo" />
          <th-table name="N° de recibo" />
          <th-table name="Acciones" />
        </thead>
        <tbody>
          <tr v-for="shop in shoppings" :key="shop.id">
            <td-table :name="formatDate(shop.date)" />
            <td-table :name="shop.voucherType" />
            <td-table :name="shop.nVoucher" />
            <td-table>
              <div class="border-gradient-2 flex justify-center items-center">
                <button
                  @click="getDetails(shop.id)"
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
      @close="showModal"
      v-show="visible"
      title="Detalles de la compra"
    >
      <div
        class="inline-block min-w-full border shadow-xl rounded-lg overflow-hidden"
      >
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th-table name="Producto" />
              <th-table name="Precio Compra" />
              <th-table name="Precio Venta" />
              <th-table name="Cantidad" />
              <th-table name="Total" />
            </tr>
          </thead>
          <tbody>
            <tr v-for="shop in shopping" :key="shop.id">
              <td-table :name="shop.products.name" />
              <td-table :name="`$` + shop.purchasePrice" />
              <td-table :name="`$` + shop.salePrice" />
              <td-table :name="shop.quantity" />
              <td-table :name="`$` + shop.totalUnit" />
            </tr>
          </tbody>
        </table>
      </div>
    </modal-component>
  </div>
</template>

<script>
import TdTable from "../Global/TdTable.vue";
import ThTable from "../Global/ThTable.vue";
import { formatRelative, subDays } from "date-fns";
import { es } from "date-fns/locale";
import { getDetailsByShopping } from "../../api/shopping.api";
import ModalComponent from "../Global/ModalComponent.vue";

export default {
  components: { ThTable, TdTable, ModalComponent },
  props: {
    shoppings: { type: Array },
  },
  data() {
    return {
      shopping: [],
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
      getDetailsByShopping(id).then(({ data }) => {
        this.showModal();
        this.shopping = data.detailShopping;
      });
    },
  },
};
</script>

<style></style>
