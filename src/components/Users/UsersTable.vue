<template>
  <div class="py-4 overflow-x-auto mt-6">
    <div
      class="inline-block min-w-full border shadow-xl rounded-lg overflow-hidden"
    >
      <table class="min-w-full leading-normal">
        <thead>
          <th-table name="ID" />
          <th-table name="Nombre" />
          <th-table name="Apellido" />
          <th-table name="Email" />
          <th-table name="Acciones" />
        </thead>
        <tbody>
          <tr v-for="us in users" v-bind:key="us.id">
            <td-table :name="us.id" />
            <td-table :name="us.name" />
            <td-table :name="us.lastname" />
            <td-table :name="us.email" />
            <td-table>
            <div class="flex">
              <button @click="edit(us)">
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
  name: "UsersTable",
  props: {
    users: { type: Object },
    setEdit:{type:Function}
  },
  components: {
    TdTable,
    ThTable,
  },
  methods: {
    edit(us){
      this.$emit("setEdit",us)
    }
  },
};
</script>

<style></style>
