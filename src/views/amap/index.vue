<template>
  <div class="map-container">
    <el-amap
      vid="amapContainer"
      lang="en"
      :zoom="zoom"
      :center="center"
      :events="events"
    >
    </el-amap>
  </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from "vue-amap";
// 在定制化程度较高的项目中，开发者可能只想通过 vue-amap 引入高德地图，
// 而部分实例化的操作直接基于高德地图的 sdk 完成。这个时候就需要 lazyAMapApiLoaderInstance
export default {
  name: "Home",
  data() {
    return {
      map: null,
      zoom: 12,
      center: [121.59996, 31.197646],
      events: {
        init(o) {
          // 高德地图原生SDK覆盖物
          let marker = new AMap.Marker({
            position: [121.59996, 31.197646],
          });
          marker.setMap(o);
          o.setMapStyle("amap://styles/macaron");
        },
      },
    };
  },
  // mounted() {
  //   lazyAMapApiLoaderInstance.load().then(() => {
  //     // your code ...
  //     this.map = new AMap.Map("amapContainer", {
  //       center: new AMap.LngLat(121.59996, 31.197646),
  //       // zoom: this.zoom,
  //     });
  //   });
  // },
};
</script>

<style lang="scss" scoped>
.map-container {
  height: 100vh;
  width: 20vw;
  border-radius: 30px;
  background-color: antiquewhite;
}
</style>
