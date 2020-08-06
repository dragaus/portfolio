<template>
  <v-app>
    <Appbar userName="Francisco C. C. Rovira"></Appbar>
    <v-content>
      <Home />
    </v-content>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Home from "./views/Home.vue";
import Appbar from "./components/Appbar/Appbar.vue";
import Footer from "./components/Footer/Footer.vue";

export default Vue.extend({
  name: "App",

  components: {
    Home,
    Appbar,
    Footer
  },

  data: () => ({
    //
  })
});
</script>
