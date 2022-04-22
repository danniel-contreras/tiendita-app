<template>
  <div class="py-4 overflow-x-auto mt-6">
    <div
      class="inline-block min-w-full border shadow-xl rounded-lg overflow-hidden"
    >
      <table class="min-w-full leading-normal">
        <thead>
          <th-table name="ID" />
          <th-table name="Nombre" />
          <th-table name="DIRECCION" />
          <th-table name="TELEFONO" />
          <th-table name="Acciones" />
        </thead>
        <tbody>
          <tr v-for="store in stores" v-bind:key="store.id">
            <td-table :name="store.id" />
            <td-table :name="store.name" />
            <td-table :name="store.addres" />
            <td-table :name="store.phone" />
            <td-table>
              <div class="flex">
                <button @click="edit(store)">
                  <font-awesome-icon
                    class="text-white bg-green-500 rounded-full w-3 h-3 p-2"
                    icon="pen"
                  />
                </button>
                <button @click="deleteS(store)" class="ml-3">
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
    <modal-component
      @close="closeModal"
      v-show="isModalVisible"
      title="Eliminar Sucursal"
    >
      <div class="flex justify-center items-center text-center">
        <span class="font-mono font-semibold text-center"
          >¿Estas seguro de eliminar este registro?</span
        >
      </div>
      <div class="grid grid-cols-2 gap-3 mt-3">
        <button
          @click="onDelete"
          class="bg-blue-400 text-white rounded font-mono font-semibold text-xs py-2"
        >
          SI, Eliminar
        </button>
        <button
          @click="closeModal"
          class="bg-red-400 text-white rounded font-mono font-semibold text-xs py-2"
        >
          NO, Cancelar
        </button>
      </div>
    </modal-component>
  </div>
</template>

<script>
import ModalComponent from "../Global/ModalComponent.vue";
import TdTable from "../Global/TdTable.vue";
import ThTable from "../Global/ThTable.vue";

export default {
  name: "StoresTable",
  props: {
    stores: { type: Object },
    setEdit: {
      type: Function,
    },
  },
  components: {
    TdTable,
    ThTable,
    ModalComponent,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    edit(store) {
      this.$emit("setEdit", store);
    },
    deleteS() {
      this.openModal();
    },
  },
};
</script>

<style></style>
