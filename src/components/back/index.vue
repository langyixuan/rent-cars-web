<template>
  <div class="back">
    <i class="iconfont icon-jiantou_xiangzuo_o"></i>
    <span class="title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "Back",
  props: ["title"],
};
</script>

<style lang="scss" scoped>
.back {
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  font-weight: 700;
  .iconfont {
    font-size: 30px;
    color: $dark-orange;
    margin-right: 30px;
  }
  .title {
    color: #fff;
  }
}
</style>
