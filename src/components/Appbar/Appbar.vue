<template>
  <div>
    <h1 ref="portfolio-name">{{ userName }}</h1>
    <AppbarButton text="About Me" route="/about" />
    <AppbarButton text="Projects" router="/projects" />
    <AppbarButton text="Contact Me" router="/contact" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppbarButton from "./AppbarButton.vue";

const Appbar = Vue.extend({
  name: "Appbar",
  components: {
    AppbarButton
  },
  props: {
    userName: String
  }
});

export default Appbar;
</script>
