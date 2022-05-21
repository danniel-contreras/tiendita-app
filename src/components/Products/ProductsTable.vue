<template>
  <div class="py-4 overflow-x-auto mt-6">
    <div
      class="inline-block min-w-full border shadow-xl rounded-lg overflow-hidden"
    >
      <table class="min-w-full leading-normal">
        <thead>
          <th-table name="ID" />
          <th-table name="Nombre" />
          <th-table name="Precio" />
          <th-table name="Stock" />
          <th-table name="Stock Minimo" />
          <th-table name="Estado" />
          <th-table name="Acciones" />
        </thead>
        <tbody>
          <tr v-for="(prod,index) in products" v-bind:key="prod.id">
            <td-table :name="prod.id" />
            <td-table :name="prod.name" />
            <td-table :name="prod.price" />
            <td-table :name="prod.stock" />
            <td-table :name="prod.minimunStock" />
            <td-table>
              <div className="flex">
                <div className="relative mt-1 ml-3 inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input
                    type="checkbox"
                    name="toggle"
                    :id="index"
                    :checked="prod.state"
                    @change="changeState(prod.state)"
                    class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  />
                  <label
                    :for="index"
                    class="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div>
              </div>
            </td-table>
            <td-table>
              <div class="flex">
                <button @click="edit(prod)">
                  <font-awesome-icon
                    class="text-white bg-green-500 rounded-full w-3 h-3 p-2"
                    icon="pen"
                  />
                </button>
              </div>
            </td-table>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import TdTable from "../Global/TdTable.vue";
import ThTable from "../Global/ThTable.vue";

export default {
  name: "ProductsTable",
  props: {
    products: { type: Object },
    setEdit: { type: Function },
  },
  components: {
    TdTable,
    ThTable,
  },
  data() {
    return {
      state: false,
    };
  },
  methods: {
    edit(store) {
      this.$emit("setEdit", store);
    },
    changeState(state){
      console.log(!state)
    }
  },
};
</script>

<style></style>
