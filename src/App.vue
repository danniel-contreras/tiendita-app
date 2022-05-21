<template>
  <router-view />
</template>
<script>
window.onbeforeunload = () => {
  alert("no papum");
};
export default {
  created(){
   window.onbeforeunload = function(){
    return "Are you sure you want to close the window?";
}
  },
  methods: {
    handler: function () {
      alert("Saliendo");
    },
  },
};
</script>
<style src="@vueform/toggle/themes/default.css"></style>
