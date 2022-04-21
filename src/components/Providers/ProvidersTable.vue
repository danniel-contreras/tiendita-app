<template>
  <div class="py-4 overflow-x-auto mt-6">
    <div
      class="inline-block min-w-full border shadow-xl rounded-lg overflow-hidden"
    >
      <table class="min-w-full leading-normal">
        <thead>
          <th-table name="ID" />
          <th-table name="Nombre" />
          <th-table name="Telefono" />
          <th-table name="Acciones" />
        </thead>
        <tbody>
          <tr v-for="prov in providers" v-bind:key="prov.id">
            <td-table :name="prov.id" />
            <td-table :name="prov.name" />
            <td-table :name="prov.phone" />
            <td-table>
            <div class="flex">
              <button>
                <font-awesome-icon
                  class="text-white bg-green-500 rounded-full w-3 h-3 p-2"
                  icon="pen"
                />
              </button>
              <button class="ml-3">
                <font-awesome-icon
                  class="text-white bg-red-500 rounded-full w-3 h-3 p-2"
                  icon="trash"
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
  name: "CategoriesTable",
  props: {
    providers: { type: Object },
  },
  components: {
    TdTable,
    ThTable,
  },
};
</script>

<style></style>
