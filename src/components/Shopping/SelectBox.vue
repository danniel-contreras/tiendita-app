<template>
  <div class="flex">
    <div
      class="mx-6 w-auto h-36 p-4 border rounded flex flex-col justify-center items-center"
      v-for="box in boxes"
      v-bind:key="box.id"
    >
      <span>Monto inicial: ${{ box.boxStart }}</span>
      <span>Usuario: {{ box.users.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    boxes: { type: Object },
  },
};
</script>

<style></style>
