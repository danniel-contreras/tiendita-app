<template>
  <div class="grid grid-cols-2 w-full gap-9 mt-6">
    <div class="flex flex-col">
      <span class="text-gradient font-semibold text-lg text-center"
        >Nueva compra</span
      >
      <button
        @click="showModal"
        class="bg-green-500 text-sm font-semibold mt-4 py-2 rounded-lg text-white"
      >
        Seleccionar Productos
      </button>
      <div class="flex flex-col mt-4">
        <label class="text-gradient text-sm font-semibold">Proveedor</label>
        <select class="border rounded px-2 py-2 w-full"></select>
      </div>
      <div class="flex flex-col mt-3">
        <label class="text-gradient text-sm font-semibold"
          >Tipo de recibo</label
        >
        <input
          placeholder="Escribe el tipo de recibo"
          class="border rounded px-2 text-sm py-2 w-full"
        />
      </div>
      <div class="flex flex-col mt-3">
        <label class="text-gradient text-sm font-semibold"
          >Numero de recibo</label
        >
        <input
          placeholder="Escribe el numero de recibo"
          class="border rounded px-2 text-sm py-2 w-full"
        />
      </div>
      <div class="flex mt-4">
        <span class="text-gradient font-semibold">Usara dinero de caja? </span>
        <input
          @change="showModalBox"
          v-model="cashBox"
          class="w-5 h-5 ml-6 mt-1 pt-1"
          type="checkbox"
        />
      </div>
      <div v-show="cashBox" class="flex flex-col mt-5">
        <span class="text-gradient text-sm font-semibold"
          >Cantidad a dinero a usar
        </span>
        <input
          type="number"
          placeholder="Escribe la cantidad de dinero que usaras de caja"
          class="border rounded px-2 py-2 w-full"
        />
      </div>
      <modal-component
        @close="closeModalBox"
        v-show="boxModal && cashBox"
        title="Seleccionar Caja"
        ><select-box :boxes="boxes" /></modal-component
      >
    </div>
    <div class="flex flex-col">
      <span class="text-gradient font-semibold text-lg text-center"
        >Productos a comprar</span
      >
      <div
        class="inline-block min-w-full mt-4 border shadow-xl rounded-lg overflow-hidden"
      >
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th-table name="Producto" />
              <th-table name="Cantidad" />
            </tr>
          </thead>
          <tbody>
            <tr v-for="(p, index) in listProducts" v-bind:key="index">
              <td-table :name="p.name" />
              <td-table>
                <input
                  type="number"
                  class="border w-full py-1 text-xs px-3 rounded"
                  v-model="qt"
                  @change="sumQuantity(p.id)"
                />
              </td-table>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <modal-component
      @close="closeModal"
      title="Seleccionar los productos a comprar"
      v-show="modalVisible"
    >
      <shopping-table
        :currentPage="currentPage"
        :next="next"
        :prev="prev"
        :pages="pages"
        :totalPag="totalPag"
        @getProducts="getProducts"
        @setList="setListProducts"
        :products="products"
      />
    </modal-component>
    <button class="bg-blue-500 rounded py-3 text-white">Realizar Pedido</button>
  </div>
</template>

<script>
import ModalComponent from "../Global/ModalComponent.vue";
import ShoppingTable from "./ShoppingTable.vue";
import products from "../../api/products.api";
import { paginate } from "../../utils/utils";
import ThTable from "../Global/ThTable.vue";
import TdTable from "../Global/TdTable.vue";
import { getStore } from "../../api/token.api";
import { getOpen } from "../../api/box";
import SelectBox from './SelectBox.vue';

export default {
  components: { ModalComponent, ShoppingTable, ThTable, TdTable, SelectBox },
  data() {
    return {
      modalVisible: false,
      products: {},
      listProducts: [],
      pages: [],
      currentPage: 0,
      next: 0,
      prev: 0,
      totalPag: 0,
      qt: 1,
      cashBox: false,
      boxModal: false,
      boxes:[]
    };
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    showModalBox() {
      this.boxModal = true;
    },
    closeModalBox() {
      this.boxModal = false;
    },
    getProducts(page = 1) {
      products.getProducts(page, getStore(), "", "").then(({ data }) => {
        if (data.ok) {
          this.products = data.products;
          this.pages = paginate(data.curentPag, data.totalPag, 1);
          this.totalPag = data.totalPag;
          this.next = data.nextPag;
          this.prev = data.prevPag;
          this.currentPage = data.curentPag;
        }
      });
    },
    getBoxes() {
      getOpen().then(({ data }) => {
        this.boxes = data.box
      });
    },
    setListProducts(prods) {
      this.listProducts = prods;
      this.closeModal();
    },
    sumQuantity(id) {
      const fnd = this.listProducts.find((a) => a.id === id);
      const index = this.listProducts.indexOf(fnd);
      this.listProducts[index].qt = this.qt;
    },
  },
  mounted() {
    this.getProducts(1);
    this.getBoxes()
  },
};
</script>

<style></style>
