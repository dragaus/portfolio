<template>
  <DivAnimation
    :looping="looping"
    :rows="rows"
    :columns="columns"
    :animationSteps="arrayToPass"
    :imageSize="imageSize"
    :playing="playing"
    :image="`url(${require('@/assets/images/Robot.png')})`"
    @on-finish="onFinish"
    :key="action"
  />
</template>

<script lang="ts">
import Vue from "vue";
import DivAnimation from "../DivAnimation/DivAnimation.vue";

const Robot = Vue.extend({
  name: "Robot",
  components: {
    DivAnimation
  },
  props: {
    action: String,
    nextAction: String,
    looping: Boolean,
    playing: Boolean
  },
  updated: function() {
    if (this.action != this.currentAction) {
      this.currentAction = this.action;
      this.index = 0;
    }
  },
  computed: {
    arrayToPass: function() {
      switch (this.action) {
        case "off":
          return this.off;
        case "turnOn":
          return this.turnOn;
        case "turnOff":
          return this.turnOff;
        case "talk":
          return this.talk;
        case "goHappy":
          return this.goHappy;
        default:
          return this.talk;
      }
    }
  },
  data: function() {
    return {
      imageSize: 256,
      rows: 4,
      columns: 4,
      currentAction: 'off',
      off: [0],
      turnOn: [0, 1, 2, 3, 4, 5, 6],
      turnOff: [6, 5, 4, 3, 2, 1, 0],
      talk: [6, 7, 8, 9, 8, 7],
      goHappy: [6, 10, 11, 12]
    };
  },
  methods: {
    onFinish: function() {
      const action = this.nextAction;
      this.$emit(action);
    }
  }
});

export default Robot;
</script>

<style></style>
