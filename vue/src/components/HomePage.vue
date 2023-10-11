import ProductCarousel from './ProductCarousel.vue'; import MainCarousel from './MainCarousel.vue'; import TheNavbar from
'./TheNavbar.vue'; import TheHeader from './TheHeader.vue';
<template>
  <TheHeader></TheHeader>
  <hr />
  <TheNavbar />
  <hr />
  <MainCarousel />
  <ProductCarousel :products="products" :itemCount="5" :center="false" />
</template>

<script>
import wildXL from "../assets/wild-xl-80x30-cm-oyuncu-gaming-mouse-p-0-40a8.jpg";
import wild2XL from "../assets/wild-2xl-90x50-cm-oyuncu-gaming-mouse--bb6-9e.jpg";
import wild2XL_ from "../assets/wild-2xl-110x55-cm-oyuncu-gaming-mouse--45bf-.jpg";
import wild3XL from "../assets/wild-3xl-125x60-cm-oyuncu-gaming-mouse--9acf-.jpg";
import wild4XL from "../assets/wild-4xl-135x70-cm-oyuncu-gaming-mouse--a2eb-.jpg";

export default {
  data() {
    return {
      products: [
        {
          id: Math.random().toString(),
          favorited: false,
          img: wild4XL,
          title: "Wild 4XL 135x70 cm Oyuncu Gaming Mouse Pad",
          price: 322.15,
        },
        {
          id: Math.random().toString(),
          favorited: false,
          img: wild3XL,
          title: "Wild 3XL 125x60 cm Oyuncu Gaming Mouse Pad",
          price: 302.0,
        },
        {
          id: Math.random().toString(),
          favorited: false,
          img: wild2XL_,
          title: "Wild 2XL 110x55 cm Oyuncu Gaming Mouse Pad",
          price: 213.39,
        },
        {
          id: Math.random().toString(),
          favorited: false,
          img: wild2XL,
          title: "Wild 2XL 90x50 cm Oyuncu Gaming Mouse Pad",
          price: 158,
        },
        {
          id: Math.random().toString(),
          favorited: false,
          img: wildXL,
          title: "Wild XL+ 80x30 cm Oyuncu Gaming Mouse Pad",
          price: 88.2,
        },
      ],
    };
  },
};
</script>
