<template>
  <div class="container flex flex-col">
    <van-row class="flex justify-around items-center flex-1">
      <div style="font-1200">13800138000</div>
      <van-image
        display="block"
        round
        width="5rem"
        height="5rem"
        pr-0
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </van-row>
    <div class="nav">我们为万家团圆而努力</div>
  </div>
  <div class="wrap flex flex-row items-center">
    <div class="flex flex-1 flex-col justify-center items-center">
      <!-- 插入图片 -->
      <div class="a">
        <img src="../../static/images/xiansuo.png" />
      </div>
      <p>提供线索记录</p>
    </div>
    <div class="flex-1 flex flex-col justify-center items-center">
      <!-- 插入图片 -->
      <div class="a">
        <img src="../../static/images/fabujilu.png" />
      </div>
      <p>发布寻亲记录</p>
    </div>
  </div>
  <van-cell-group class="pt-2">
    <van-cell
      title="我的收藏"
      width="100%"
      height="100%"
      src="../../static/images/like.png"
      style="width: 50%"
    />

    <van-cell
      title="关于我们"
      is-link
      icon="friends-o"
      size="large"
      url="/about"
    />
  </van-cell-group>
</template>

<style scoped lang="scss">
.container {
  height: 260px;
  background: #eff3ff;
  .nav {
    width: 92%;
    margin: 0 auto;
    height: 53px;
    line-height: 53px;
    background: #4759ee;
    border-top-left-radius: 19px;
    border-top-right-radius: 19px;
    font-size: 18px;
    color: #ffffff;
    letter-spacing: 0;
    text-indent: 30px;
  }
}
.van-row {
  width: 100%;
  height: auto;
}
.wrap {
  height: 118px;
  .iconfont {
    font-size: 32px;
  }
  p {
    font-size: 18px;
    color: #333333;
    font-weight: 400;
  }
}
:deep(.a img) {
  width: 60%;
  display: block;
  padding-left: 30px;
}
</style>
