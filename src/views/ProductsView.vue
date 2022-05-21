<template>
  <layout-view>
    <div class="w-full">
      <ol
        class="flex justify-center text-gray-500 bg-gray-100 rounded py-2 px-2"
      >
        <li
          @click="changeBread(1)"
          class="px-2 cursor-pointer text-gradient md:text-xs lg:text-sm"
          :class="bread === 1 && `font-bold`"
        >
          Listado de Productos
        </li>
        <li class="text-gray-500 select-none md:text-xs lg:text-sm">
          &rsaquo;
        </li>
        <li
          @click="changeBread(2)"
          class="px-2 cursor-pointer text-gradient md:text-xs lg:text-sm"
          :class="bread === 2 && `font-bold`"
        >
          Agregar / Editar Producto
        </li>
      </ol>
    </div>
    <template v-if="bread === 1">
      <div class="w-full flex mt-5">
        <span v-show="getAll"
          class="whitespace-nowrap font-semibold font-mono text-xs text-gray-500 mt-1"
          >Buscar producto</span
        >
        <div v-show="getAll"
          class="relative flex w-full text-gray-600 focus-within:text-gray-400"
        >
          <input-icon />
          <input
            type="text"
            v-model="name"
            @keyup="changeName"
            class="border w-full rounded ml-3 text-xs py-1 px-2 pl-8 font-mono"
            placeholder="Escribe para buscar..."
          />
        </div>
        <div class="border-gradient-2 flex ml-20 justify-center items-center">
          <button
            @click="getProductByStock"
            class="w-full h-full button-gradient bg-white rounded-2xl py-1 px-10"
          >
            <span
              class="text-gradient whitespace-nowrap font-semibold text-base font-mono"
              >{{
                getAll ? "Productos sin stock" : "Todos los productos"
              }}</span
            >
          </button>
        </div>
      </div>
      <div v-show="getAll" class="grid grid-cols-2 gap-6 mt-6">
        <div class="flex flex-col">
          <span
            class="whitespace-nowrap font-semibold font-mono text-xs text-gray-500 mt-1"
            >Buscar por sucursal</span
          >
          <select
            v-model="store"
            @change="changeSearch"
            class="border w-full rounded text-xs py-1 px-2 font-mono"
          >
            <option disabled selected>Selecciona la sucursal</option>
            <option v-for="(cat, i) in stores" :key="i" :value="cat.name">
              {{ cat.name }}
            </option>
          </select>
        </div>
        <div class="flex flex-col">
          <span
            class="whitespace-nowrap font-semibold font-mono text-xs text-gray-500 mt-1"
            >Buscar por categoria</span
          >
          <select
            @change="changeSearch"
            v-model="categorie"
            class="border w-full rounded text-xs py-1 px-2 font-mono"
          >
            <option disabled selected>Selecciona la categoria</option>
            <option v-for="(cat, i) in categories" :key="i" :value="cat.name">
              {{ cat.name }}
            </option>
          </select>
        </div>
      </div>
      <products-table @setEdit="setEdit" :products="products" />
      <span v-show="empty" class="text-gray-600 font-semibold"
        >No se an registrado productos</span
      >
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
      :title="title"
      :product="product"
      v-if="bread === 2"
      @getProducts="getProducts"
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
import PaginationComponent from "../components/Global/PaginationComponent.vue";
import InputIcon from "../components/Global/InputIcon.vue";
import { getStore } from "../api/token.api";

export default {
  name: "ProductsView",
  components: {
    LayoutView,
    ProductsTable,
    ProductsForm,
    PaginationComponent,
    InputIcon,
  },
  data() {
    return {
      bread: 1,
      stores: {},
      categories: {},
      products: {},
      title: "Agregar nuevo producto",
      product: {},
      pages: [],
      currentPage: 0,
      next: 0,
      prev: 0,
      totalPag: 0,
      store: getStore(),
      name: "",
      categorie: "",
      empty: false,
      getAll: true,
    };
  },
  methods: {
    changeName() {
      this.getProducts(1, this.store, "", this.name);
    },
    changeSearch() {
      this.getProducts(1, this.store, this.categorie, this.name);
    },
    changeBread(op) {
      this.bread = op;
      this.title = "Agregar nuevo producto";
      this.product = {};
    },
    setEdit(prod) {
      this.changeBread(2);
      this.title = "Actualizar Producto";
      this.product = prod;
    },
    getStores() {
      stores
        .getStores(1, 100)
        .then(({ data }) => {
          if (data.ok) {
            this.stores = data.stores;
          }
        })
        .catch(({ data }) => {
          this.empty = true;
          if (!data.ok) {
            this.$toast.warning("No hay sucursales para mostrar");
            return;
          }
          this.$toast.error("Ah ocurrido un error inesperado");
        });
    },
    getCategories() {
      categories
        .getCategories(1, 1000)
        .then(({ data }) => {
          if (data.ok) {
            this.categories = data.categories;
          }
        })
        .catch(({ data }) => {
          if (!data.ok) {
            this.$toast.warning("No hay categorias para mostrar");
            return;
          }
          this.$toast.error("Ah ocurrido un error inesperado");
        });
    },
    getProducts(page = 1, store, categorie = "", name = "") {
      this.getAll = true
      products
        .getProducts(page, store, categorie, name)
        .then(({ data }) => {
          if (data.ok) {
            this.products = data.products;
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
    getProductByStock() {
      if (this.getAll) {
        this.getAll = false
        products
          .getProductsStock()
          .then(({ data }) => {
            if (data.ok) {
              this.products = data.products;
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
      }else{
        this.getProducts();
      }
    },
  },
  mounted() {
    this.getStores();
    this.getCategories();
    this.getProducts();
  },
};
</script>

<style></style>
