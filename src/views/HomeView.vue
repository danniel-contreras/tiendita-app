<template>
  <layout-view>
    <div class="home">
      <p class="text-red-600 text-4xl">Hola Mundo</p>
    </div>
  </layout-view>
</template>

<script>
// @ is an alias to /src
import LayoutView from "../layout/LayoutView.vue";
export default {
  name: "HomeView",
  components: {
    LayoutView, 
  },
};
</script>
