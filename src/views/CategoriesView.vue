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
          Listado de Categorias
        </li>
        <li class="text-gray-500 select-none md:text-xs lg:text-sm">&rsaquo;</li>
        <li
          @click="changeBread(2)"
          class="px-2 cursor-pointer text-gradient md:text-xs lg:text-sm"
          :class="bread === 2 && `font-bold`"
        >
          Agregar / Editar Categoria
        </li>
      </ol>
    </div>
    <template v-if="bread === 1">
      <categories-table @setEdit="setEdit" :categories="categories" />
      <pagination-component
        v-if="totalPag > 1"
        @method="getCategories"
        :currentPage="currentPage"
        :pages="pages"
        :totalPag="totalPag"
        :next="next"
        :prev="prev"
      />
    </template>
    <categories-form :categorie="categorie" :title="title" @getCategories="getCategories" v-if="bread === 2" />
  </layout-view>
</template>

<script>
import CategoriesForm from "../components/Categories/CategoriesForm.vue";
import CategoriesTable from "../components/Categories/CategoriesTable.vue";
import LayoutView from "../layout/LayoutView.vue";
import categories from "../api/categories.api";
import { paginate } from "../utils/utils";
import PaginationComponent from "../components/Global/PaginationComponent.vue";

export default {
  components: {
    LayoutView,
    CategoriesTable,
    CategoriesForm,
    PaginationComponent,
  },
  data() {
    return {
      bread: 1,
      title:"Agregar nueva Categoria",
      categories: {},
      categorie: {},
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
    setEdit(categorie) {
      this.changeBread(2);
      this.title ="Actualizar categoria"
      this.categorie = categorie;
    },
    getCategories(page = 1) {
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
