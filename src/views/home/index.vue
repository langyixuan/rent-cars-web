<template>
  <div class="home-container">
    <UserNav />
    <Main />
    <Amap />
  </div>
</template>

<script>
import Amap from "../amap";
import UserNav from "../userNav";
import Main from "../main";
export default {
  name: "Home",
  components: { Amap, UserNav, Main },
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
