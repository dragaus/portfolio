<template>
  <div @click="click">
    <img :src="require(`@/assets/${iconDir}`)" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const IconButton = Vue.extend({
  name: "IconButton",
  props: {
    iconDir: String,
    click: Function
  }
});

export default IconButton;
</script>
