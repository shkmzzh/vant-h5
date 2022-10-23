<template>
  <div class="container-layout">
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item replace to="/article" icon="fire-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/collect" icon="star-o">收藏</van-tabbar-item>
      <van-tabbar-item replace to="/like" icon="like-o">喜欢</van-tabbar-item>
      <van-tabbar-item replace to="/myuser" icon="friends-o">用户</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'container-layout'
}
</script>

<style></style>
