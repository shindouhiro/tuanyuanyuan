<template>
  <!-- 测试 -->
  <van-image
    width="100%"
    height="auto"
    fit="contain"
    src="../../static/images/banner.png"
  />

  <van-grid direction="horizontal" :column-num="2" style="margin-top: -10px">
    <van-grid-item icon="photo-o" text="我要提供线索" />
    <van-grid-item icon="photo-o" text="我要紧急寻人" />
  </van-grid>
  <van-grid direction="horizontal" :column-num="3">
    <van-grid-item icon="photo-o" text="一键报警" />
    <van-grid-item icon="photo-o" text="人贩子举报" />
    <van-grid-item icon="photo-o" text="AI寻亲" />
  </van-grid>
  <van-collapse v-model="activeNames">
    <van-collapse-item title="家人走失怎么办" name="1">
      <p>1.采取排除法来理清思路。回想最后看到亲人的位置。</p>
      <p>
        2.组织尽量多的人手，在老人最后走失的地点分为四个不同的方向(东南西北)去寻找，立即报警，利用警务资源进行查找。
      </p>
    </van-collapse-item>
    <van-collapse-item title="如遇小孩走失" name="2">
      <p>1.立即报警，无需等待24小时。</p>
      <p>2.标记孩子走失的地方，立即展开地毯式搜索。</p>
    </van-collapse-item>
  </van-collapse>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
export default {
  setup() {
    const activeNames = ref(['1', '2'])
    onMounted(() => {
      axios
        .get(
          'oauth/2.0/token?grant_type=client_credentials&client_id=S3lvngvp62XIeN7hIMnNM7G3&client_secret=06NBVzuWAe6uvTlyPDgaRfmhbAsH4fOS'
        )

        .then((res) => {
          console.log(res, 'res')
        })
    })
    return { activeNames }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
