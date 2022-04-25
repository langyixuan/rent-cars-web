<template>
  <div class="userNav-container">
    <div class="user-info">
      <div class="avatar">
        <img src="~@/assets/avatar.png" alt="个人头像" class="avatar" />
      </div>
      <div class="user-account">
        <span class="email">langyixuan890@gmail.com</span>
        <span class="drive-sort">文明驾驶得分 0</span>
      </div>
    </div>
    <div class="nav-list">
      <router-link to="/safe" class="list-item">
        <i class="iconfont icon-wodezhanghu"></i>
        <span>我的账户</span>
      </router-link>
      <router-link to="/safe" class="list-item">
        <i class="iconfont icon-dingdan"></i>
        <span>租车订单</span>
      </router-link>
      <router-link to="/safe" class="list-item">
        <i class="iconfont icon-renzheng"></i>
        <span>实名认证</span>
      </router-link>
      <router-link to="/safe" class="list-item">
        <i class="iconfont icon-anquanfanghu"></i>
        <span>安全设置</span>
      </router-link>
      <router-link to="/safe" class="list-item">
        <i class="iconfont icon-bangzhu"></i>
        <span>帮助中心</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
};
</script>

<style lang="scss" scoped>
.userNav-container {
  @include navbar;

  .user-info {
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;

    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #fff;
      img {
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      }
    }
    .user-account {
      margin-right: 15px;
      span {
        display: block;
      }
      .email {
        margin-bottom: 5px;
        color: #fff;
      }
      .drive-sort {
        font-size: 12px;
        background-image: linear-gradient(
          to right,
          $dark-orange 0%,
          $light-orange 100%
        );
        display: inline-block;
        padding: 5px 10px;
        border-radius: 20px;
        color: #fff;
      }
    }
  }

  .nav-list {
    margin-top: 40px;
    .list-item {
      display: block;
      text-decoration: none;
      color: #000;
      margin-bottom: 25px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      i {
        font-size: 18px;
        font-weight: 700;
        margin-right: 20px;
        color: $dark-orange;
      }
      span {
        font-weight: 700;
        color: #fff;
        font-size: 12px;
      }
    }
  }
}
</style>
