<template>
  <BContainer>
    <OwlCarousel
      :loop="true"
      :center="true"
      :items="1"
      :margin="0"
      :autoplay="true"
      :dots="true"
      :autoplayTimeout="2500"
      :smartSpeed="450"
      :nav="false"
      class="main-carousel owl-carousel owl-theme"
    >
      <div class="item">
        <RouterLink to="/" class="w-100 d-block">
          <img class="w-100" :src="img1" />
        </RouterLink>
      </div>
      <div class="item">
        <RouterLink to="/" class="w-100 d-block">
          <img class="w-100" :src="img2" />
        </RouterLink>
      </div>
      <div class="item">
        <RouterLink to="/" class="w-100 d-block">
          <img class="w-100" :src="img3" />
        </RouterLink>
      </div>
    </OwlCarousel>
  </BContainer>
</template>

<script>
import OwlCarousel  from "./OwlCarousel/OwlCarousel.vue";
import { RouterLink } from "vue-router";

import img1 from "../assets/wild-serisi-oyuncu-mouse-pad-acf8.jpg";
import img2 from "../assets/oyunculara-ozel-mouse-padler-c2ff.jpg";
import img3 from "../assets/patch--yama-2605.jpg";

export default {
  components: {
    OwlCarousel,
    RouterLink,
  },
  data() {
    return {
      img1,
      img2,
      img3,
    };
  },
};
</script>
