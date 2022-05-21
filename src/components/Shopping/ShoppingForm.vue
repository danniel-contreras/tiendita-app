<template>
  <div>
    <div class="flex w-full mt-6">
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
          <select
            v-model="data.providerId"
            class="border rounded px-2 py-2 w-full"
          >
            <option selected disabled>Selecciona el proveedor</option>
            <option v-for="prov in providers" :key="prov.id" :value="prov.id">
              {{ prov.name }}
            </option>
          </select>
        </div>
        <div class="flex flex-col mt-3">
          <label class="text-gradient text-sm font-semibold"
            >Tipo de recibo</label
          >
          <input
            v-model="data.voucherType"
            placeholder="Escribe el tipo de recibo"
            class="border rounded px-2 text-sm py-2 w-full"
          />
        </div>
        <div class="flex flex-col mt-3">
          <label class="text-gradient text-sm font-semibold"
            >Numero de recibo</label
          >
          <input
            v-model="data.nVoucher"
            placeholder="Escribe el numero de recibo"
            class="border rounded px-2 text-sm py-2 w-full"
          />
        </div>
        <div class="flex mt-4">
          <span class="text-gradient font-semibold"
            >Usara dinero de caja?
          </span>
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
            v-model="data.howMuch"
            type="number"
            placeholder="Escribe la cantidad de dinero que usaras de caja"
            class="border rounded px-2 py-2 w-full"
          />
        </div>
        <modal-component
          @close="closeModalBox"
          v-show="boxModal && cashBox"
          title="Seleccionar Caja"
        >
          <select-box @closeModalBox="closeModalBox" :boxes="boxes" />
        </modal-component>
      </div>
      <div class="flex flex-col ml-16">
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
                <th-table name="Precio Compra" />
                <th-table name="Precio Venta" />
              </tr>
            </thead>
            <tbody>
              <tr v-for="(p, index) in listProducts" v-bind:key="index">
                <td-table :name="p.name" />
                <td-table>
                  <input
                    type="number"
                    class="border w-full py-1 text-xs px-3 rounded"
                    :value="p.quantity"
                    @input="sumQuantity(p.id, $event.target.value)"
                  />
                </td-table>
                <td-table>
                  <input
                    :value="p.price"
                    class="border w-24 py-1 text-xs rounded px-2"
                    @input="setPShop(p.id, $event.target.value)"
                  />
                </td-table>
                <td-table>
                  <input
                    :value="p.price"
                    class="border w-24 py-1 text-xs rounded px-2"
                    @input="setPSale(p.id, $event.target.value)"
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
    </div>
    <button
      @click="realize"
      class="bg-blue-500 rounded py-3 px-16 mt-8 text-white"
    >
      Realizar Pedido
    </button>
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
import { getBox, getOpen } from "../../api/box";
import SelectBox from "./SelectBox.vue";
import providers from "../../api/providers.api";
import { saveShopping } from "../../api/shopping.api";

export default {
  props: {
    changeBread: { type: Function },
    getShopping: { type: Function },
  },
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
      boxes: [],
      providers: [],
      data: {
        voucherType: "",
        nVoucher: "",
        providerId: "",
        howMuch: 0,
      },
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
    getProviders() {
      providers.getProviders(1, 10000000).then(({ data }) => {
        this.providers = data.providers;
      });
    },
    getBoxes() {
      getOpen().then(({ data }) => {
        this.boxes = data.box;
      });
    },
    setListProducts(prods) {
      this.listProducts = prods;
      this.closeModal();
    },
    sumQuantity(id, value) {
      const fnd = this.listProducts.find((a) => a.id === id);
      const index = this.listProducts.indexOf(fnd);
      this.listProducts[index].quantity = Number(value);
    },
    setPSale(id, value) {
      const fnd = this.listProducts.find((a) => a.id === id);
      const index = this.listProducts.indexOf(fnd);
      this.listProducts[index].salePrice = Number(value);
    },
    setPShop(id, value) {
      const fnd = this.listProducts.find((a) => a.id === id);
      const index = this.listProducts.indexOf(fnd);
      this.listProducts[index].purchasePrice = Number(value);
    },
    realize() {
      const shop = {
        providerId: this.data.providerId,
        voucherType: this.data.voucherType,
        nVoucher: this.data.nVoucher,
        cashBox: this.cashBox,
        howMuch: this.data.howMuch,
        boxId: getBox(),
        products: this.listProducts,
      };
      saveShopping(shop)
        .then(({ data }) => {
          if (data.ok) {
            this.$toast.info("Se guardo la compra");
            this.$emit("changeBread", 2);
            this.$emit("getShopping");
          }
        })
        .catch(() => {
          this.$toast.error("Ah ocurrido un error inesperado");
        });
    },
  },
  mounted() {
    this.getProducts(1);
    this.getBoxes();
    this.getProviders();
  },
};
</script>

<style></style>
