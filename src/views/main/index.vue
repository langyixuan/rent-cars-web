<template>
  <div class="main-container">
    <TopSearchBar />
    <CarSwiper />
  </div>
</template>

<script>
import TopSearchBar from "@/components/topSearchBar";
import CarSwiper from "@/components/carSwiper";
export default {
  name: "Main",
  components: { TopSearchBar, CarSwiper },
};
</script>

<style lang="scss" scoped>
.main-container {
  width: 60vw;
  height: 100vh;
}
</style>
