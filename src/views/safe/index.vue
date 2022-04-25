<template>
  <div class="safe-container">
    <Back title="安全设置" />
    <ul class="group-links">
      <router-link to="/password" tag="a" class="link">
        <i class="iconfont icon-tuichudenglu"></i>
        <span class="title">修改登录密码</span>
      </router-link>
      <router-link to="/capital" tag="a" class="link">
        <i class="iconfont icon-walletY-fill"></i>
        <span class="title">设置资金密码</span>
      </router-link>
      <router-link to="/phone" tag="a" class="link">
        <i class="iconfont icon-shouji"></i>
        <span class="title">绑定手机号</span>
      </router-link>
      <router-link to="/bank" tag="a" class="link">
        <i class="iconfont icon-yinxingqia"></i>
        <span class="title">绑定银行号</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Safe",
};
</script>

<style lang="scss" scoped>
.safe-container {
  @include navbar;
  /* background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%); */
  .group-links {
    .link {
      display: block;
      margin-bottom: 32px;
      display: flex;
      align-items: center;
      .iconfont {
        font-size: 16px;
        color: $dark-orange;
        margin-right: 30px;
      }
      .title {
        color: #fff;
        font-size: 13px;
        font-weight: 700;
      }
    }
  }
}
</style>
