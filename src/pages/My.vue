<template>
  <van-row src="../../static/images/my_cetern.png">
    <!-- <van-image
      display="block"
      round
      width="5rem"
      height="5rem"
      pr-0
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    /> -->
    <div class="nav"></div>
  </van-row>
  <van-cell-group>
    <van-cell title="我的收藏" is-link icon="location-o" />
    <van-cell title="关于我们" is-link icon="location-o" />
  </van-cell-group>
</template>

<style scoped>
.van-row {
  width: 100%;
  height: auto;
}
.nav {
  width: 92%;
  margin: 0 auto;
  height: 53px;
  background: #4759ee;
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
}
</style>
