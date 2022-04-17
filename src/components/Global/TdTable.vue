<template>
  <td
    class="px-5 py-3 border-b cursor-pointer border-gray-200 bg-white text-sm w-2/5"
  >
    <div class="flex items-center text-center">
      <div>
        <p
        v-if="name"
          class="text-gray-600 text-xs font-mono whitespace-nowrap text-center"
        >
          {{name}}
        </p>
        <slot/>
      </div>
    </div>
  </td>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style></style>
