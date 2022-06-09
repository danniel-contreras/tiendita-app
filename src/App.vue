<template>
  <router-view />
</template>
<script>
import { getBox } from "./api/box";

export default {
  data() {
    return {
      handler: null,
    };
  },
  created() {
    () => {
      //do we need to add?
      if (getBox()) {
        this.handler = function (e) {
          // Cancel the event
          e.preventDefault();
          // Chrome requires returnValue to be set
          e.returnValue = "";
        };
        window.addEventListener("beforeunload", this.handler);
        console.log("add watcher");
      } else if (!getBox()) {
        window.removeEventListener("beforeunload", this.handler);
        this.handler = null;
        console.log("remove watcher");
      }
    };
  },
  methods: {
    removeHandler() {
      if (this.handler)
        window.removeEventListener("beforeunload", this.handler);
      return true;
    },
  },
};
</script>
<style src="@vueform/toggle/themes/default.css"></style>
