<template>
  <div class="nes-container is-rounded appbar">
    <h2 ref="portfolio-name">{{ userName }}</h2>
    <div class="appbar-button-list">
      <AppbarButton text="About Me" route="/about" />
      <AppbarButton text="Projects" router="/projects" />
      <AppbarButton text="Contact Me" router="/contact" />
    </div>
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

<style>
h2 {
  display: inline;
  margin: auto 0;
}

.appbar {
  display: flex;
  justify-content: space-between;
  color: #85cb33;
  background-color: #051014;
  vertical-align: middle;
}

.appbar-button-list {
  vertical-align: middle;
  display: flex;
}
</style>
