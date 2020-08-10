<template>
  <div class="presentation">
    <SpaceDiv width="100%" height="30px" />
    <Robot
      :action="currentAnimation"
      :looping="looping"
      :nextAction="actionToDo"
      :playing="playing"
      @start-talking="startTalking"
      @turn-happy="turnHappy"
    />
    <div
      class="nes-balloon from-left presentation-balloon"
      v-if="start && talking"
    >
      <h6 ref="name-renderer">{{ currentText }}</h6>
    </div>
    <button v-if="!start" type="button" class="nes-btn" @click="startChat">Start</button>
    <SpaceDiv width="100%" height="30px" />
    <div class="presentation-carrer">
      <div class="nes-container is-rounded presentation-square">
        <h4 ref="resume-renderer">{{ miniResume }}</h4>
      </div>
    </div>
    <SpaceDiv width="100%" height="30px" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SpaceDiv from "../UI/SpaceDiv/SpaceDiv.vue";
import Robot from "../Animation/Robot/Robot.vue";

const Present = Vue.extend({
  name: "Presentation",
  components: {
    SpaceDiv,
    Robot
  },
  props: {
    portfolioName: String,
    nickName: String,
    miniResume: String,
  },
  mounted: function() {
    this.$set(this, "currentAnimation", "off");
  },
  data: function() {
    return {
      messages: [
        `Hello my name is ${this.portfolioName}`,
        `But my friends call me ${this.nickName}!`,
        `Well actually I'm a bot in represenation of my master ${this.nickName}`,
        `He is a ${this.miniResume}`
      ],
      currentMessage: 0,
      currentText: "",
      index: 0,
      start: false,
      playing: false,
      talking: false,
      currentAnimation: "off",
      looping: false,
      actionToDo: "start-chat"
    };
  },
  methods: {
    changeText: function() {
      if (this.currentAnimation != "talking") {
        this.startTalking();
        return;
      }
      if (++this.index <= this.messages[this.currentMessage].length) {
        this.talking = true;
        this.playing = true;
        this.currentText = this.messages[this.currentMessage].substring(
          0,
          this.index
        );
        setTimeout(this.changeText, 50);
      } else {
        this.index = 0;
        this.currentMessage++;
        this.playing = false;
        if (this.currentMessage < this.messages.length) {
          setTimeout(this.changeText, 6000);
        }
      }
    },
    startChat: function() {
      this.currentAnimation = "turnOn";
      this.start = true;
      this.actionToDo = "start-talking";
    },
    startTalking: function() {
      this.currentAnimation = "talking";
      this.looping = true;
      this.playing = true;
      this.actionToDo = "turn-happy";
      this.changeText();
    },
    turnHappy: function() {
      this.currentAnimation = "goHappy";
      this.playing = true;
      this.looping = false;
    }
  }
});

export default Present;
</script>

<style>
.presentation {
  text-align: center;
  background-color: #06aed5;
}

.presentation-image {
  height: 256px;
  width: 256px;
}

.presentation-carrer {
  display: flex;
  text-align: center;
  justify-content: center;
}

.presentation-square {
  display: inline;
  margin: auto;
  background-color: #ff8811;
}

.presentation-balloon {
  vertical-align: text-bottom;
}
</style>
