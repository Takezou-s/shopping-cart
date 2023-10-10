import { RouterLink } from 'vue-router';
<template>
  <BNavbar toggleable="lg">
    <BContainer>
      <BNavbarToggle target="navbar-nav" />
      <BCollapse id="navbar-nav" is-nav>
        <BNavbarNav class="w-100 justify-content-between">
          <BNavItemDropdown text="Mouse Pad">
            <RouterLink to="/" className="dropdown-item">Beam S</RouterLink>
            <RouterLink to="/" className="dropdown-item">Beam XL</RouterLink>
            <RouterLink to="/" className="dropdown-item">Wild</RouterLink>
            <RouterLink to="/" className="dropdown-item">Beam Soft</RouterLink>
          </BNavItemDropdown>
          <RouterLink to="/" class="nav-link">Kupa Bardak</RouterLink>
          <BNavItemDropdown text="Patch & Yama">
            <RouterLink to="/" className="dropdown-item">Patch</RouterLink>
            <RouterLink to="/" className="dropdown-item">Back Patch</RouterLink>
          </BNavItemDropdown>
          <BNavItemDropdown text="Gamer Yastık">
            <RouterLink to="/" className="dropdown-item">Suni Deri</RouterLink>
            <RouterLink to="/" className="dropdown-item">Baskılı</RouterLink>
          </BNavItemDropdown>
          <RouterLink to="/" class="nav-link">Kulaklık Standı</RouterLink>
          <RouterLink to="/" class="nav-link">Ahşap Poster</RouterLink>
          <RouterLink to="/" class="nav-link">Kendin Tasarla</RouterLink>
        </BNavbarNav>
      </BCollapse>
    </BContainer>
  </BNavbar>
</template>

<script>
export default {};
</script>
