<template>
  <div class="home-container">
    <div class="user-nav">
      <router-view></router-view>
    </div>
    <Main />
    <Amap />
  </div>
</template>

<script>
import Amap from "../amap";
import Main from "../main";
export default {
  name: "Home",
  components: { Amap, Main },
};
</script>

<style lang="scss" scoped>
.home-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
}
</style>
