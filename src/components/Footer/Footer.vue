<template>
  <div>
    <IconButton :click="() => goToPage('https://www.youtube.com/')" iconDir="Youtube.png" />
    <IconButton :click="() => goToPage('https://www.linkedin.com/in/francisco-rovira/')" iconDir="Youtube.png" />
    <IconButton :click="() => goToPage('https://www.google.com')" iconDir="Youtube.png" />
    <h4>Made by Francisco C. C. Rovira All rights reserved</h4>
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