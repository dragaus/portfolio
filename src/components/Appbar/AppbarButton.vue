<template>
  <div @click="click">
    <p ref="text-display">{{ text }}</p>
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
