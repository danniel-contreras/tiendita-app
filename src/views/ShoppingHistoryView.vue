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
          Listado de Compra de Productos
        </li>
        <li class="text-gray-500 select-none md:text-xs lg:text-sm">
          &rsaquo;
        </li>
        <li
          @click="changeBread(2)"
          class="px-2 cursor-pointer text-gradient md:text-xs lg:text-sm"
          :class="bread === 2 && `font-bold`"
        >
          Agregar Compra de Productos
        </li>
      </ol>
    </div>
    <div>
      <shopping-table-history v-show="bread === 1" :shoppings="shoppings" />
       <span v-show="empty" class="text-gray-600 font-semibold"
          >No se an registrado compras</span
        >
      <pagination-component
        v-show="bread === 1"
        v-if="totalPag > 1"
        @method="getShoppingHistory"
        :currentPage="currentPage"
        :pages="pages"
        :totalPag="totalPag"
        :next="next"
        :prev="prev"
      />
    </div>
    <shopping-form
      v-if="bread === 2"
      @changeBread="changeBread"
      @getShopping="getShoppingHistory"
    />
  </layout-view>
</template>

<script>
import { getShopping } from "../api/shopping.api";
import ShoppingForm from "../components/Shopping/ShoppingForm.vue";
import ShoppingTableHistory from "../components/Shopping/ShoppingTableHistory.vue";
import { paginate } from "../utils/utils";
// @ is an alias to /src
import LayoutView from "../layout/LayoutView.vue";
import PaginationComponent from "../components/Global/PaginationComponent.vue";

export default {
  name: "ShoppingHistoryView",
  components: {
    LayoutView,
    ShoppingForm,
    ShoppingTableHistory,
    PaginationComponent,
  },
  data() {
    return {
      bread: 1,
      shoppings: [],
      pages: [],
      currentPage: 0,
      next: 0,
      prev: 0,
      totalPag: 0,
      empty: false,
    };
  },
  methods: {
    changeBread(op) {
      this.bread = op;
    },
    getShoppingHistory(page = 1) {
      getShopping(page)
        .then(({ data }) => {
          this.shoppings = data.shopping;
          this.pages = paginate(data.curentPag, data.totalPag, 1);
          this.totalPag = data.totalPag;
          this.next = data.nextPag;
          this.prev = data.prevPag;
          this.currentPage = data.curentPag;
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
  },
  mounted() {
    this.getShoppingHistory();
  },
};
</script>
