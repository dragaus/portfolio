<template>
  <div>
    <IconButton :click="() => goToPage('https://www.google.com')" iconDir="icon.png" />
    <IconButton :click="() => goToPage('https://www.google.com')" iconDir="icon.png" />
    <IconButton :click="() => goToPage('https://www.google.com')" iconDir="icon.png" />
    <h6>Made by Francisco C. C. Rovira All rights reserved</h6>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import IconButton from "../UI/IconButton/IconButton.vue";

const Footer = Vue.extend({
  name: "Footer",
  components: {
    IconButton
  },
  methods: {
    goToPage: function(direction: string) {
      window.open(direction, "_blank");
    }
  }
});

export default Footer;
</script>

<style>
</style>