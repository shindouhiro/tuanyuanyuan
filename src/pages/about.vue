<template>
<van-nav-bar
  title="关于我们"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>

<div class="van-multi-ellipsis--l8" style="text-4xl">
  我们是一群热爱梦想的年轻人，为失踪亲友、被拐卖的妇女儿童搭建最大的网络寻亲平台，提供最专业的寻人服务，帮助走失、被拐、被遗弃儿童寻找亲人，同时帮助因各种原因流浪、乞讨、卖艺街头的儿童回归正常生活。人相认、家庭团聚是对中国寻亲网的最大鼓舞，也是中国寻亲网的最大期盼。
</div>
</template>

<script>
export default {
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
};



</script>

<style>

</style>

