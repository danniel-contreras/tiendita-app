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
          Listado de categorias
        </li>
        <li class="text-gray-500 select-none">&rsaquo;</li>
        <li
          @click="changeBread(2)"
          class="px-2 cursor-pointer"
          :class="bread === 2 && `text-blue-500 font-semibold`"
        >
          Agregar / Editar Categoria
        </li>
      </ol>
    </div>
    <template v-if="bread === 1">
      <div class="w-full flex mt-5">
        <span
          class="whitespace-nowrap font-semibold font-mono text-xs text-gray-500 mt-1"
          >Buscar categoria</span
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
      <categories-table :categories="categories" />
      <pagination-component v-if="totalPag > 1"
      @method="getCategories"
      :currentPage="currentPage"
      :pages="pages"
      :totalPag="totalPag"
      :next="next"
      :prev="prev"/>
    </template>
    <categories-form @getCategories="getCategories" v-if="bread === 2" />
  </layout-view>
</template>

<script>
import CategoriesForm from "../components/Categories/CategoriesForm.vue";
import CategoriesTable from "../components/Categories/CategoriesTable.vue";
import InputIcon from "../components/Global/InputIcon.vue";
import LayoutView from "../layout/LayoutView.vue";
import categories from "../api/categories.api";
import { paginate } from "../utils/utils";
import PaginationComponent from '../components/Global/PaginationComponent.vue';

export default {
  components: { LayoutView, CategoriesTable, CategoriesForm, InputIcon, PaginationComponent },
  data() {
    return {
      bread: 1,
      categories: {},
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
    getCategories(page=1) {
      categories.getCategories(page).then(({ data }) => {
        if (data.ok) {
          this.categories = data.categories;
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
    this.getCategories();
  },
};
</script>

<style></style>
