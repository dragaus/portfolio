<template>
  <div
    ref="image-renderer"
    class="image-renderer"
    :style="[imageStyle, getPos]"
  />
</template>

<script lang="ts">
import Vue from "vue";

const DivAnimation = Vue.extend({
  name: "DivAnimation",
  props: {
    imageSize: Number,
    image: String,
    rows: Number,
    columns: Number,
    animationSteps: Array,
    looping: Boolean,
    playing: Boolean
  },
  mounted: function() {
    this.animate(this.animationSteps as number[]);
  },
  updated: function() {
    if (!this.currentPlaying) {
      if (this.playing) {
        this.animate(this.animationSteps as number[]);
      }
    }
  },
  data: function() {
    return {
      imageStyle: {
        display: "inline-block",
        width: `${this.imageSize}px`,
        height: `${this.imageSize}px`,
        background: this.image
      },
      xPos: 0,
      yPos: 0,
      index: 0,
      currentPlaying: false
    };
  },
  computed: {
    getPos: function() {
      const x = this.xPos;
      const y = this.yPos;
      return {
        "background-position": `${x}px ${y}px`
      };
    }
  },
  methods: {
    animate: function(animationSteps: number[]) {
      if (this.index < animationSteps.length) {
        this.currentPlaying = true;
        const columnPos = animationSteps[this.index] % 4;
        const rowPos = Math.floor(animationSteps[this.index] / 4);
        this.xPos = -(columnPos * this.imageSize);
        this.yPos = -(rowPos * this.imageSize);
        setTimeout(() => this.animate(animationSteps), 83);
        this.index++;
      } else if (this.looping && this.playing) {
        this.index = 0;
        setTimeout(() => this.animate(animationSteps), 0);
      } else if (!this.looping || !this.playing) {
        this.currentPlaying = false;
        this.$emit("on-finish");
      }
    }
  }
});

export default DivAnimation;
</script>

<style></style>
