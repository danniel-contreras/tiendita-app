<template>
  <div>
    <div
      v-show="!newBox"
      class="grid grid-cols-3 gap-6 justify-center items-center"
    >
      <div
        class="mx-6 h-36 p-4 border rounded flex flex-col justify-center items-center"
        v-for="box in boxes"
        v-bind:key="box.id"
      >
        <span class="text-gradient font-semibold text-xl"
          >Monto inicial: ${{ box.boxStart }}</span
        >
        <span class="text-gradient font-semibold text-xl"
          >Usuario: {{ box.users.name }}</span
        >
        <button
          @click="selectBox(box.id)"
          class="bg-blue-500 text-white font-semibold py-2 px-10 rounded mt-2"
        >
          Seleccionar
        </button>
      </div>
      <div
        @click="showForm"
        class="w-20 h-20 p-4 text-2xl flex flex-col justify-center items-center cursor-pointer border"
      >
        <font-awesome-icon icon="plus" />
      </div>
    </div>
    <new-box @close="closeModal" @cancel="hiddeForm" v-show="newBox" />
  </div>
</template>

<script>
import { saveBox } from "../../api/box";
import NewBox from "./NewBox.vue";
export default {
  components: { NewBox },
  props: {
    boxes: { type: Object },
    closeModalBox: { type: Function },
  },
  data() {
    return {
      newBox: false,
    };
  },
  methods: {
    showForm() {
      this.newBox = true;
    },
    closeModal() {
      this.$emit("closeModalBox");
    },
    hiddeForm() {
      this.newBox = false;
    },
    selectBox(id) {
      saveBox(id);
      this.closeModal();
    },
  },
};
</script>

<style></style>
