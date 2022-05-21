<template>
  <div class="py-4 overflow-x-auto mt-6">
    <div
      class="inline-block min-w-full border shadow-xl rounded-lg overflow-hidden"
    >
      <table class="min-w-full leading-normal">
        <thead>
          <th-table name="ID" />
          <th-table name="Nombre" />
          <th-table name="Acciones" />
        </thead>
        <tbody>
          <tr v-for="cat in categories" v-bind:key="cat.id">
            <td-table :name="cat.id" />
            <td-table :name="cat.name" />
            <td-table>
              <div class="flex">
                <button @click="edit(cat)">
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
import categories from "../../api/categories.api";

export default {
  name: "CategoriesTable",
  props: {
    categories: { type: Object },
    setEdit: { type: Function },
  },
  components: {
    TdTable,
    ThTable,
  },
  data() {
    return {
      isModalVisible: false,
      categorie: {},
    };
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    edit(categorie) {
      this.$emit("setEdit", categorie);
    },
    onDelete() {
      categories.deleteCategorie(this.categorie.id).then(({ data }) => {
        console.log(data);
      });
    },
  },
};
</script>

<style></style>
