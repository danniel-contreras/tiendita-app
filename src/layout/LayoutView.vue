<template>
 <div class="w-screen h-screen flex">
    <div class="w-80 md:w-64 lg:w-80 px-2 h-full bg-blue">
      <NavBar/>
    </div>
    <div class="fixed ml-80 md:ml-64 lg:ml-80 p-8 pr-14 w-9/12">
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
