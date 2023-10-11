<template>
  <BContainer>
    <OwlCarousel
      :loop="true"
      :center="center"
      :items="itemCount"
      :margin="0"
      :autoplay="products.length > itemCount"
      :dots="false"
      :autoplay-timeout="2500"
      :smart-speed="450"
      :nav="false"
      :mouse-drag="products.length > itemCount"
      :touch-drag="products.length > itemCount"
    >
      <div class="item p-2" v-for="x in products" :key="x.id">
        <ProductCard :favorited="x.favorited" :img="x.img" :price="x.price" :title="x.title" />
      </div>
    </OwlCarousel>
  </BContainer>
</template>

<script>
import OwlCarousel from "./OwlCarousel/OwlCarousel.vue";
import ProductCard from "./ProductCard.vue";

export default {
  components: {
    OwlCarousel,
    ProductCard,
  },
  props: {
    products: { type: Array, required: true },
    itemCount: { type: Number, default: 1 },
    center: { type: Boolean, default: true },
  },
};
</script>
