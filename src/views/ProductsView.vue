<template>
  <layout-view>
    <div class="w-full">
      <ol
        class="flex justify-center text-gray-500 bg-gray-200 rounded py-2 px-2"
      >
        <li
          @click="changeBread(1)"
          class="px-2 cursor-pointer"
          :class="bread === 1 && `text-blue-500 font-semibold`"
        >
          Listado de Productos
        </li>
        <li class="text-gray-500 select-none">&rsaquo;</li>
        <li
          @click="changeBread(2)"
          class="px-2 cursor-pointer"
          :class="bread === 2 && `text-blue-500 font-semibold`"
        >
          Agregar / Editar Producto
        </li>
      </ol>
    </div>
    <template v-if="bread === 1">
      <div class="w-full flex mt-5">
        <span
          class="whitespace-nowrap font-semibold font-mono text-xs text-gray-500 mt-1"
          >Buscar sucursal</span
        >
        <div
          class="relative flex w-full text-gray-600 focus-within:text-gray-400"
        >
          <input-icon />
          <input
            type="text"
            class="border w-full rounded ml-3 text-xs py-1 px-2 pl-8 font-mono"
            placeholder="Escribe para buscar..."
          />
        </div>
      </div>
      <products-table :products="products" />
      <pagination-component
        v-if="totalPag > 1"
        @method="getProducts"
        :currentPage="currentPage"
        :pages="pages"
        :totalPag="totalPag"
        :next="next"
        :prev="prev"
      />
    </template>
    <products-form
      :categories="categories"
      :stores="stores"
      v-if="bread === 2"
    />
  </layout-view>
</template>

<script>
import ProductsForm from "../components/Products/ProductsForm.vue";
import ProductsTable from "../components/Products/ProductsTable.vue";
import LayoutView from "../layout/LayoutView.vue";
import stores from "../api/stores.api";
import categories from "../api/categories.api";
import products from "../api/products.api";
import { paginate } from "../utils/utils";

export default {
  name: "ProductsView",
  components: { LayoutView, ProductsTable, ProductsForm },
  data() {
    return {
      bread: 1,
      stores: {},
      categories: {},
      products: {},
      pages: [],
      currentPage: 0,
      next: 0,
      prev: 0,
      totalPag: 0,
    };
  },
  methods: {
    changeBread(op) {
      this.bread = op;
    },
    getStores() {
      stores.getStores(1, 100).then(({ data }) => {
        if (data.ok) {
          this.stores = data.stores;
        }
      });
    },
    getCategories() {
      categories.getCategories(1, 1000).then(({ data }) => {
        if (data.ok) {
          this.categories = data.categories;
        }
      });
    },
    getProducts(page = 1) {
      products.getProducts(page).then(({ data }) => {
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
  },
  mounted() {
    this.getStores();
    this.getCategories();
    this.getProducts()
  },
};
</script>

<style></style>
