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
    <shopping-form v-if="bread === 2" />
  </layout-view>
</template>

<script>
import ShoppingForm from "../components/Shopping/ShoppingForm.vue";
// @ is an alias to /src
import LayoutView from "../layout/LayoutView.vue";
export default {
  name: "ShoppingHistoryView",
  components: {
    LayoutView,
    ShoppingForm,
  },
  data() {
    return {
      bread: 2,
    };
  },
  methods: {
    changeBread(op) {
      this.bread = op;
    },
  },
};
</script>
