<template>
  <BContainer tag="header" class="d-flex align-items-center gap-4">
    <RouterLink to="/" :class="$style.logo">
      <img :src="logo" />
    </RouterLink>
    <form :class="$style.search" class="flex-fill mx-5 px-5" @submit.prevent="submitHandler">
      <BFormInput class="rounded-0" type="text" placeholder="Arama" />
      <BButton class="rounded-0 px-4 py-2 fw-bold" variant="primary" type="submit">Ara</BButton>
    </form>
    <div :class="$style['right-container']" class="d-flex gap-4 ms-auto">
      <div :class="$style.container + ' ' + $style['log-in']" class="d-flex align-items-center gap-2">
        <div :class="$style.icon" class="d-flex align-items-center justify-content-center border rounded-circle text-primary">
          <svg-icon type="mdi" :path="mdiAccount" size="1.875rem"></svg-icon>
        </div>
        <div class="d-flex flex-column align-items-start">
          <RouterLink to="/" class="fw-bold">ÜYE GİRİŞİ</RouterLink>
          <RouterLink to="/" class="fw-light">Üye ol</RouterLink>
        </div>
      </div>
      <div :class="$style.container + ' ' + $style.cart" class="d-flex align-items-center gap-2">
        <div :class="$style.icon" class="d-flex align-items-center justify-content-center border rounded-circle text-primary">
          <svg-icon type="mdi" :path="mdiCart" size="1.875rem"></svg-icon>
        </div>
        <RouterLink to="/" class="d-flex flex-column align-items-start">
          <span class="fw-bold">SEPET</span>
          <span class="fw-light">0 ürün</span>
        </RouterLink>
      </div>
    </div>
  </BContainer>
</template>

<script>
import { RouterLink } from "vue-router";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccount, mdiCart } from "@mdi/js";

import logo from "../assets/beam-new.png";

export default {
  components: {
    RouterLink,
    SvgIcon,
  },
  data() {
    return {
      logo: logo,
      mdiAccount: mdiAccount,
      mdiCart: mdiCart,
    };
  },
  methods:{
    submitHandler(){
        alert("submit");
    }
  }
};
</script>

<style module>
.logo {
  width: 80px;
}

.logo > img {
  width: 80px;
}

.search {
  display: flex;
}

.right-container {
  font-size: 14px;
}

.icon {
  width: 50px;
  height: 50px;
}

.container:hover > .icon {
  --bs-border-color: var(--bs-primary);
}

.container a:hover {
  color: var(--bs-primary);
}

.log-in {
}

.cart {
}

input:focus {
  box-shadow: unset !important;
  border-color: var(--bs-primary) !important;
}
</style>
