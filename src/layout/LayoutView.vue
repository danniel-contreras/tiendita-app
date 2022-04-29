<template>
 <div class="w-screen h-screen flex">
    <div class="w-64 px-6 h-full bg-blue">
      <NavBar/>
    </div>
    <div class="fixed ml-64 p-14 w-9/12">
      <slot />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue"
export default {
  name:"LayoutView",
  components:{
    NavBar
  }
};
</script>

<style></style>
