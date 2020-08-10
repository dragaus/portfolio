<template>
  <div @click="click" class="appbar-button">
    <p ref="text-display" :style="{ display: 'inline' }">{{ text }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import router from "@/router";

const AppbarButton = Vue.extend({
  name: "AppbarButton",
  props: {
    text: String,
    route: String
  },
  methods: {
    click: function() {
      router.push(this.route);
    }
  }
});

export default AppbarButton;
</script>

<style>
.appbar-button {
  display: inline;
  margin: 20px;
}
</style>
