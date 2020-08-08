<template>
  <div>
    <h1 ref="name-renderer">{{ portfolioName }}</h1>
    <img :src="require('@/assets/Me.png')" ref="image-renderer" />
    <h4 ref="resume-renderer">{{ miniResume }}</h4>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const Present = Vue.extend({
  name: "Presentation",
  props: {
    portfolioName: String,
    miniResume: String
  }
});

export default Present;
</script>

<style>
</style>