<template>
  <div @click="click" class="icon-button">
    <i :class="`nes-icon ${iconName} is-medium`"></i>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const IconButton = Vue.extend({
  name: "IconButton",
  props: {
    iconName: String,
    click: Function
  }
});

export default IconButton;
</script>

<style>
.icon-button {
  display: inline;
  margin: 0px 10px;
}
</style>
