<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="w-96 h-auto p-6 border shadow rounded">
      <span class="text-lg text-gradient font-semibold">
        Crear nueva caja
      </span>
      <div class="text-left mt-3">
        <label class="my-2 text-xs text-gradient font-semibold">
          Monto inicial
        </label>
        <input
          name="boxStart"
          type="number"
          v-model="data.boxStart"
          placeholder="Escribe el monto inicial"
          class="border w-full text-xs py-2 px-3 rounded"
        />
      </div>
      <div class="grid grid-cols-2 gap-6">
        <button
          @click="newBox"
          class="bg-blue-500 w-full text-white py-2 mt-4 text-lg font-semibold px-8 rounded-xl"
        >
          Guardar
        </button>
        <button
          @click="cancelM"
          type="button"
          class="bg-red-500 w-full text-white py-2 mt-4 text-lg font-semibold px-8 rounded-xl"
        >
          Cancelar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { addBox, saveBox } from "../../api/box";
export default {
  props: {
    cancel: { type: Function },
    close: { type: Function },
  },
  data() {
    return {
      data: { boxStart: 0 },
    };
  },
  methods: {
    cancelM() {
      this.$emit("cancel");
    },
    newBox() {
      addBox(this.data).then(({ data }) => {
        saveBox(data.expenses.id);
        this.$emit("close");
      });
    },
  },
};
</script>

<style></style>
