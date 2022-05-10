<template>
  <ul class="flex mt-6">
    <li>
      <button
        @click="changePage(prev)"
        class="mx-1 bg-gradient cursor-pointer rounded-full p-2 w-8 text-center text-xs text-white"
        :disabled="currentPage === 1"
      >
        <font-awesome-icon icon="chevron-left" />
      </button>
    </li>
    <li
      class="mx-1 border font-mono font-semibold border-blue text-white bg-white rounded-full p-2 w-8 text-center text-xs cursor-pointer"
      v-for="page in pages"
      :class="
        page === currentPage ? `bg-gradient` : ` text-gradient`
      "
      v-bind:key="page"
      @click="changePage(page)"
    >
      {{ page }}
    </li>
    <li>
      <button
        class="mx-1 bg-gradient rounded-full p-2 w-8 cursor-pointer text-center text-xs text-white"
        :disabled="currentPage === totalPag"
        @click="changePage(next)"
      >
        <font-awesome-icon icon="chevron-right" />
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "PaginationComponents",
  props: {
    method: {
      type: Function,
    },
    pages: {
      type: Array,
    },
    currentPage: {
      type: Number,
    },
    totalPag: {
      type: Number,
    },
    next: {
      type: Number,
    },
    prev: {
      type: Number,
    },
  },
  methods: {
    changePage(page) {
      this.$emit("method", page);
    },
  },
};
</script>

<style>
.purple {
  background: linear-gradient(180deg, #130121 0%, #000000 100%);
}
.purple-text {
  color: linear-gradient(180deg, #130121 0%, #000000 100%);
}
</style>
