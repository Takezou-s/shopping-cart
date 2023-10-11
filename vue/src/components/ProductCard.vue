<template>
  <RouterLink to="/" :class="$style['product-card']" class="d-flex flex-column gap-2">
    <BButton variant="none" class="ms-auto">
      <SvgIcon
        type="mdi"
        :path="mdiHeart"
        size="1.5rem"
        :class="{ [$style['favorite-icon']]: true, [$style.favorited]: favorited }"
      />
    </BButton>
    <img :class="$style['product-img']" :src="img" />
    <div :class="$style['add-to-cart']">
      <BButton variant="dark" class="rounded-0 w-100"> SEPETE EKLE </BButton>
    </div>
    <span :class="$style['product-title']" class="fw-semibold text-center">{{ title }}</span>
    <span :class="$style['product-price']" class="fw-bolder text-center">₺{{ price.toFixed(2) }}</span>
  </RouterLink>
</template>

<script>
import { RouterLink } from "vue-router";
import SvgIcon from "@jamescoyle/vue-icon";

import { mdiHeart } from "@mdi/js";

export default {
  components: {
    RouterLink,
    SvgIcon,
  },
  props: {
    favorited: {
      type: Boolean,
      default: false,
    },
    img: {},
    title: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      mdiHeart,
    };
  },
};
</script>

<style module>
.product-card {
}

.product-card:hover .favorite-icon:not(.favorited) {
  color: var(--bs-primary);
}

.product-card:hover .product-title,
.product-card:hover .product-price {
  text-decoration: underline;
}

.product-card:hover .add-to-cart {
  opacity: 1;
}

.favorite-icon {
  color: var(--bs-gray-400);
}

.favorite-icon.favorited {
  color: var(--bs-red);
}

.product-img {
}

.add-to-cart {
  transition: opacity 0.2s ease 0s;
  opacity: 0;
}

.product-title {
}

.product-price {
}
</style>
