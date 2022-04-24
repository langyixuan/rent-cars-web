<template>
  <div class="top-search-bar">
    <img src="../../assets/logo.png" alt="网站logo" class="web-logo" />
    <div class="search-bar"></div>
  </div>
</template>

<script>
export default {
  name: "TopSearchBar",
};
</script>

<style lang="scss" scoped>
.top-search-bar {
  width: 60vw;
  padding: 30px;

  .web-logo {
    width: 80px;
    object-fit: cover;
  }
}
</style>
