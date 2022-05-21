<template>
  <layout-view>
    <div id="pdf-content" ref="testHtml" class="overflow-auto pr-24">
      <div class="grid grid-cols-4 gap-5 py-6">
        <div
          class="border h-auto py-3 rounded flex flex-col justify-center items-center"
        >
          <p class="text-gray-600 text-sm font-semibold">Monto Inicial</p>
          <p class="text-gray-600 text-sm font-semibold mt-1">
            ${{ Number(box.boxStart) }}
          </p>
        </div>
        <div
          class="border h-auto py-3 rounded flex flex-col justify-center items-center"
        >
          <p class="text-gray-600 text-sm font-semibold">Ingresos</p>
          <p class="text-gray-600 text-sm font-semibold mt-1">
            ${{ Number(box.income) }}
          </p>
        </div>
        <div
          class="border h-auto py-3 rounded flex flex-col justify-center items-center"
        >
          <p class="text-gray-600 text-sm font-semibold">Excesos</p>
          <p class="text-gray-600 text-sm font-semibold mt-1">
            ${{ Number(box.surplus) }}
          </p>
        </div>
        <div
          class="border h-auto py-3 rounded flex flex-col justify-center items-center"
        >
          <p class="text-gray-600 text-sm font-semibold">Perdidas</p>
          <p class="text-gray-600 text-sm font-semibold mt-1">
            ${{ Number(box.missing) }}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-5 py-2">
        <div
          class="border h-auto py-3 rounded flex flex-col justify-center items-center"
        >
          <p class="text-gray-600 text-sm font-semibold">Total de ventas</p>
          <p class="text-gray-600 text-sm font-semibold mt-1">
            ${{ Number(box.totalSales) }}
          </p>
        </div>
        <div
          class="border h-auto py-3 rounded flex flex-col justify-center items-center"
        >
          <p class="text-gray-600 text-sm font-semibold">Total de compras</p>
          <p class="text-gray-600 text-sm font-semibold mt-1">
            ${{ Number(box.expenses) }}
          </p>
        </div>
      </div>
      <p class="font-semibold text-sm text-gray-600 my-4">Listado de ventas</p>
      <div>
        <div
          class="inline-block min-w-full border shadow-xl rounded-lg overflow-hidden"
        >
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th-table name="Fecha" />
                <th-table name="Total" />
              </tr>
            </thead>
            <tbody>
              <tr v-for="sale in sales" v-bind:key="sale.id">
                <td-table :name="formatDate(sale.dateOfSale)" />
                <td-table :name="`$${sale.total}`" />
              </tr>
            </tbody>
          </table>
        </div>
        <span v-show="empty" class="text-gray-600 font-semibold"
          >No se an registrado ventas</span
        >
      </div>
      <div>
        <p class="font-semibold text-sm text-gray-600 my-8">
          Listado de compras
        </p>
        <div
          class="inline-block min-w-full border shadow-xl rounded-lg overflow-hidden"
        >
          <table class="min-w-full leading-normal">
            <thead>
              <th-table name="Fecha" />
              <th-table name="Tipo de recibo" />
              <th-table name="N° de recibo" />
              <th-table name="Total" />
            </thead>
            <tbody>
              <tr v-for="shop in shoppings" :key="shop.id">
                <td-table :name="formatDate(shop.date)" />
                <td-table :name="shop.voucherType" />
                <td-table :name="shop.nVoucher" />
                <td-table :name="`$${shop.total}`" />
              </tr>
            </tbody>
          </table>
        </div>
        <span v-show="empty" class="text-gray-600 font-semibold"
          >No se an registrado ventas</span
        >
      </div>
    </div>
    <button
      @click="generateReport"
      class="bg-blue-500 text-white px-16 py-2 mt-5"
    >
      Guardar
    </button>
  </layout-view>
</template>

<script>
import { getById } from "../api/box";
import { getSalesByBox } from "../api/sale.api";
import { getShoppingByBox } from "../api/shopping.api";
import LayoutView from "../layout/LayoutView.vue";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { formatRelative, subDays } from "date-fns";
import { es } from "date-fns/locale";
import ThTable from "../components/Global/ThTable.vue";
import TdTable from "../components/Global/TdTable.vue";

export default {
  components: {
    LayoutView,
    ThTable,
    TdTable,
  },
  data() {
    return {
      sales: {},
      empty: false,
      emptyS: false,
      shoppings: [],
      box: {},
    };
  },
  methods: {
    generateReport() {
      window.html2canvas = html2canvas;
      let doc = new jsPDF("p", "pt", "a3");
      doc.html(document.querySelector("#pdf-content"), {
        margin: [40, 60, 40, 60],
        callback: (pdf) => {
          pdf.save("Hello.pdf");
        },
      });
    },
    formatDate(date) {
      return formatRelative(subDays(new Date(date), 0), new Date(), {
        locale: es,
      });
    },
    getSales(page = 1) {
      getSalesByBox(page, 999999, this.$route.params.id)
        .then(({ data }) => {
          console.log(data);
          this.sales = data.sales;
        })
        .catch(() => {
          this.empty = true;
        });
    },
    getShoppings(page = 1) {
      getShoppingByBox(page, 999999, this.$route.params.id)
        .then(({ data }) => {
          this.shoppings = data.shopping;
        })
        .catch(() => {
          this.emptyS = true;
        });
    },
    getInfoBox() {
      getById(this.$route.params.id).then(({ data }) => {
        this.box = data.box;
      });
    },
  },
  mounted() {
    this.getSales(1);
    this.getInfoBox();
    this.getShoppings();
  },
};
</script>

<style></style>
