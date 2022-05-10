<template>
  <div>
    <div
      class="inline-block min-w-full border shadow-xl rounded-lg overflow-hidden"
    >
      <table class="min-w-full leading-normal">
        <thead>
          <tr>
            <th-table name="Producto" />
            <th-table name="Stock" />
            <th-table name="Seleccionar" />
          </tr>
        </thead>
        <tbody>
          <tr v-for="(prod, index) in products" v-bind:key="prod.id">
            <td-table :name="prod.name" />
            <td-table :name="prod.stock" />
            <td-table>
              <input
                class="w-5 h-5 ml-6 pt-1"
                type="checkbox"
                :id="`input-sorbete` + index"
                :value="{ name: prod.name, id: prod.id, qt: 1 }"
                v-model="product"
              />
            </td-table>
          </tr>
        </tbody>
      </table>
    </div>
    <pagination-component
      v-if="totalPag > 1"
      @method="getProd"
      :currentPage="currentPage"
      :pages="pages"
      :totalPag="totalPag"
      :next="next"
      :prev="prev"
    />
    <div
      class="border-gradient-2 md:mt-4 lg:mt-5 flex justify-center items-center"
    >
      <button
        @click="setProducts"
        type="submit"
        class="w-full h-full button-gradient bg-white rounded-2xl py-1"
      >
        <span class="text-gradient font-semibold text-base font-mono"
          >Aceptar</span
        >
      </button>
    </div>
  </div>
</template>

<script>
import PaginationComponent from "../Global/PaginationComponent.vue";
import TdTable from "../Global/TdTable.vue";
import ThTable from "../Global/ThTable.vue";
export default {
  components: { ThTable, TdTable, PaginationComponent },
  props: {
    products: { type: Object },
    setList: { type: Function },
    totalPag: { type: Number },
    currentPage: { type: Number },
    pages: { type: Array },
    next: { type: Number },
    prev: { type: Number },
    getProducst: { type: Function },
  },
  data() {
    return {
      product: [],
    };
  },
  methods: {
    setProducts() {
      this.$emit("setList", this.product);
    },
    getProd(page) {
      this.$emit("getProducts", page);
    },
  },
};
</script>

<style></style>
