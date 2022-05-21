<template>
  <layout-view>
    <div id="pdf-content">
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
      <div class="w-full mt-2">
        <ol
          class="flex justify-center text-gray-500 bg-gray-100 rounded py-2 px-2"
        >
          <li
            @click="changeBread(1)"
            class="px-2 cursor-pointer text-gray-600 md:text-xs lg:text-sm"
            :class="bread === 1 && `font-bold`"
          >
            Listado de Ventas
          </li>
          <li class="text-gray-500 select-none md:text-xs lg:text-sm">
            &rsaquo;
          </li>
          <li
            @click="changeBread(2)"
            class="px-2 cursor-pointer text-gray-600 md:text-xs lg:text-sm"
            :class="bread === 2 && `font-bold`"
          >
            Listado de Compras
          </li>
        </ol>
      </div>
      <template v-if="bread === 1">
        <sales-table :sales="sales" />
        <span v-show="empty" class="text-gray-600 font-semibold"
          >No se an registrado ventas</span
        >
        <pagination-component
          v-if="totalPag > 1"
          @method="getSales"
          :currentPage="currentPage"
          :pages="pages"
          :totalPag="totalPag"
          :next="next"
          :prev="prev"
        />
      </template>
      <template v-if="bread === 2">
        <shopping-table-history :shoppings="shoppings" />
        <span v-show="empty" class="text-gray-600 font-semibold"
          >No se an registrado ventas</span
        >
        <pagination-component
          v-if="shoppingPag.totalPag > 1"
          @method="getShoppings"
          :currentPage="shoppingPag.currentPage"
          :pages="shoppingPag.pages"
          :totalPag="shoppingPag.totalPag"
          :next="shoppingPag.next"
          :prev="shoppingPag.prev"
        />
      </template>
    </div>
    

    <pie-chart :data_pie="data_pie"/>
    <div
      class="border-gradient-2 md:mt-4 lg:mt-5 flex justify-center items-center"
    >
      <button
        type="submit"
        class="w-full h-full button-gradient bg-white rounded-2xl py-1"
      >
        <span class="text-gradient font-semibold text-base font-mono"
          >Generar Reporte</span
        >
      </button>
    </div>
  </layout-view>
</template>

<script>
import { getById } from "../api/box";
import { getSalesByBox } from "../api/sale.api";
import { getShoppingByBox } from "../api/shopping.api";
import PaginationComponent from "../components/Global/PaginationComponent.vue";
import SalesTable from "../components/SalesHistory/SalesTable.vue";
import ShoppingTableHistory from "../components/Shopping/ShoppingTableHistory.vue";
import LayoutView from "../layout/LayoutView.vue";
import { paginate } from "../utils/utils";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import PieChart from '../components/Charts/PieChart.vue';

export default {
  components: {
    LayoutView,
    SalesTable,
    PaginationComponent,
    ShoppingTableHistory,
    PieChart,
  },
  data() {
    return {
      bread: 1,
      sales: {},
      pages: [],
      currentPage: 0,
      box: {},
      next: 0,
      prev: 0,
      totalPag: 0,
      empty: false,
      emptyS: false,
      shoppings: [],
      shoppingPag: {
        pages: [],
        currentPage: 0,
        box: {},
        next: 0,
        prev: 0,
        totalPag: 0,
      },
      data_pie: [],
    };
  },
  methods: {
    generateReport() {
      window.html2canvas = html2canvas;
      let doc = new jsPDF("p", "pt", "a4");
      doc.html(document.querySelector("#pdf-content"), {
        callback: (pdf) => {
          pdf.save("Hello.pdf");
        },
      });
    },
    changeBread(op) {
      this.bread = op;
    },
    getSales(page = 1) {
      getSalesByBox(page, 5, this.$route.params.id)
        .then(({ data }) => {
          console.log(data);
          this.sales = data.sales;
          this.pages = paginate(data.curentPag, data.totalPag, 1);
          this.totalPag = data.totalPag;
          this.next = data.nextPag;
          this.prev = data.prevPag;
          this.currentPage = data.curentPag;
        })
        .catch(() => {
          this.empty = true;
        });
    },
    getShoppings(page = 1) {
      getShoppingByBox(page, 5, this.$route.params.id)
        .then(({ data }) => {
          this.shoppings = data.shopping;
          this.shoppingPag = {
            pages: paginate(data.curentPag, data.totalPag, 1),
            totalPag: data.totalPag,
            next: data.nextPag,
            prev: data.prevPag,
            currentPage: data.curentPag,
          };
        })
        .catch(() => {
          this.emptyS = true;
        });
    },
    getInfoBox() {
      getById(this.$route.params.id).then(({ data }) => {
        this.box = data.box;
        this.data_pie = [
          {
            name: "Monto inicial",
            pl: Number(this.box.boxStart)
          },
          {
            name: "Ventas",
            pl: Number(this.box.totalSales)
          },
           {
            name: "Compras",
            pl: Number(this.box.expenses)
          },
           {
            name: "Excesos",
            pl: Number(this.box.surplus)
          },
          {
            name: "Perdidas",
            pl: Number(this.box.missing)
          },
           {
            name: "Ingresos",
            pl: Number(this.box.missing)
          },
        ];
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
