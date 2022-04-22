import Vue from "vue";
// 引入vue-amap
import VueAMap from "vue-amap";
Vue.use(VueAMap);

// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: "281cd0033c7856911dcaaf5576a902fd",
  // 插件集合
  plugin: [
    "AMap.Autocomplete",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor",
  ],
  // 高德 sdk 版本，默认为 1.4.4
  v: "1.4.4",
  uiVersion: "1.0.11", // ui版本号，也是需要写
});
