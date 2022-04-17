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
          Listado de Sucursales
        </li>
        <li class="text-gray-500 select-none">&rsaquo;</li>
        <li
          @click="changeBread(2)"
          class="px-2 cursor-pointer"
          :class="bread === 2 && `text-blue-500 font-semibold`"
        >
          Agregar / Editar Sucursal
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
      <stores-table :stores="stores" />
      <pagination-component
        v-if="totalPag > 1"
        @method="getStores"
        :currentPage="currentPage"
        :pages="pages"
        :totalPag="totalPag"
        :next="next"
        :prev="prev"
      />
    </template>
    <stores-form @getCategories="getStores" v-if="bread === 2" />
  </layout-view>
</template>

<script>
import LayoutView from "../layout/LayoutView.vue";
import stores from "../api/stores.api";
import StoresForm from "../components/Stores/StoresForm.vue";
import { paginate } from "../utils/utils";
import InputIcon from "../components/Global/InputIcon.vue";
import StoresTable from "../components/Stores/StoresTable.vue";
import PaginationComponent from "../components/Global/PaginationComponent.vue";

export default {
  name: "StoresView",
  components: {
    LayoutView,
    StoresForm,
    InputIcon,
    StoresTable,
    PaginationComponent,
  },
  data() {
    return {
      bread: 1,
      stores: {},
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
    getStores(page = 1) {
      stores.getStores(page).then(({ data }) => {
        if (data.ok) {
            console.log(data)
          this.stores = data.stores;
          this.pages = paginate(data.curentPag, data.totalPag, 1);
          this.totalPag = data.totalPag;
          this.next = data.nextPag;
          this.prev = data.prevPag;
          this.currentPage = data.curentPag;
        }
      });
    },
  },
  mounted(){
      this.getStores(1)
  }
};
</script>

<style></style>
