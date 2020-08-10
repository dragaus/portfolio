<template>
  <div :style="divStyle" />
</template>

<script lang="ts">
import Vue from "vue";
const SpaceDiv = Vue.extend({
  name: "SpaceDiv",
  props: {
    width: String,
    height: String
  },
  data: function() {
    return {
      divStyle: {
        display: "block",
        width: this.width,
        height: this.height
      }
    };
  }
});

export default SpaceDiv;
</script>
