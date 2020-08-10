<template>
  <div class="nes-container is-rounded footer">
    <h3>Contact me</h3>
    <br />
    <div class="icon-list">
      <IconButton
        :click="() => goToPage('https://github.com/dragaus')"
        iconName="github"
      />
      <IconButton
        :click="() => goToPage('https://www.linkedin.com/in/francisco-rovira/')"
        iconName="linkedin"
      />
      <IconButton
        :click="() => goToPage('https://www.google.com')"
        iconName="youtube"
      />
      <IconButton
        :click="() => goToPage('https://www.google.com')"
        iconName="gmail"
      />
    </div>
    <br />
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
.footer {
  text-align: center;
  background-color: #051014;
  color: #85cb33;
}
.icon-list {
  display: flex;
  justify-content: center;
}
</style>
