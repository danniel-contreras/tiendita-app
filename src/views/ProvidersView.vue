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
          Listado de Proveedores
        </li>
        <li class="text-gray-500 select-none md:text-xs lg:text-sm">
          &rsaquo;
        </li>
        <li
          @click="changeBread(2)"
          class="px-2 cursor-pointer text-gradient md:text-xs lg:text-sm"
          :class="bread === 2 && `font-bold`"
        >
          Agregar / Editar Proveedor
        </li>
      </ol>
    </div>
    <template v-if="bread === 1">
      <div class="w-full flex mt-5">
        <span
          class="whitespace-nowrap font-semibold font-mono text-xs text-gradient mt-1"
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
      <providers-table @setEdit="setEdit" :providers="providers" />
      <span v-show="empty" class="text-gray-600 font-semibold"
        >No se an registrado proveedores</span
      >
      <pagination-component
        v-if="totalPag > 1"
        @method="getProviders"
        :currentPage="currentPage"
        :pages="pages"
        :totalPag="totalPag"
        :next="next"
        :prev="prev"
      />
    </template>
    <providers-form
      :stores="stores"
      :provider="provider"
      :title="title"
      @getProviders="getProviders"
      v-if="bread === 2"
    />
  </layout-view>
</template>

<script>
import LayoutView from "../layout/LayoutView.vue";
import stores from "../api/stores.api";
import providers from "../api/providers.api";
import ProvidersForm from "../components/Providers/ProvidersForm.vue";
import { paginate } from "../utils/utils";
import InputIcon from "../components/Global/InputIcon.vue";
import ProvidersTable from "../components/Providers/ProvidersTable.vue";
import PaginationComponent from "../components/Global/PaginationComponent.vue";

export default {
  name: "ProvidersView",
  components: {
    LayoutView,
    ProvidersForm,
    InputIcon,
    ProvidersTable,
    PaginationComponent,
  },
  data() {
    return {
      bread: 1,
      stores: {},
      providers: {},
      provider: {},
      title: "Agregar nuevo Proveedor",
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
      this.title = "Agregar nuevo Proveedor";
      this.provider = {};
    },
    setEdit(provider) {
      this.changeBread(2);
      this.title = "Actualizar proveedor";
      this.provider = { ...provider, storeId: provider.storesId };
    },
    getStores(page = 1) {
      stores
        .getStores(page, 100)
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
    getProviders(page = 1) {
      providers
        .getProviders(page)
        .then(({ data }) => {
          if (data.ok) {
            this.providers = data.providers;
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
  },
  mounted() {
    this.getStores(1);
    this.getProviders(1);
  },
};
</script>

<style></style>
