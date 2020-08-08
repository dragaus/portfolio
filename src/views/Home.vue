<template>
  <div class="home">
    <Presentation
      portfolioName="Francisco C. C. Rovira"
      miniResume="Mobile Game Developer"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Presentation from "@/components/Presentation/Presentation.vue";

export default {
  name: "Home",
  components: {
    Presentation
  }
};
</script>
