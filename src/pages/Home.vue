<template>
  <!-- 测试 -->
  <div style="text-align: center" height="auto">
    <van-image
      width="100%"
      height="auto"
      fit="contain"
      src="../../static/images/banner.png"
      style="z-index=1"
    />

    <van-image
      width="90%"
      height="auto"
      fit="contain"
      src="../../static/images/open_ai.png"
      style="margin-top: -40px"
    />
  </div>
  <div class="grid grid-cols-2 gap-2 pl-6 pr-6 pb-5">
    <div>
      <img src="../../static/images/want _to_ provide_ clues.png" />
    </div>
    <div>
      <img src="../../static/images/need_family.png" />
    </div>
  </div>
  <!-- <van-grid :column-num="2"  style="margin-top: -12px" width="100%" border="false">
    <van-grid-item icon="../../static/images/want _to_ provide_ clues.png" />

    <van-grid-item icon="../../static/images/need_family.png" />
     </van-grid> -->

  <!-- <van-grid direction="horizontal" :column-num="2">
    <van-grid-item icon="photo-o" text="我要提供线索" />
    <van-grid-item icon="photo-o" text="我要紧急寻人" />
  </van-grid>
  <van-grid direction="horizontal" :column-num="3">
    <van-grid-item icon="photo-o" text="一键报警" />
    <van-grid-item icon="photo-o" text="人贩子举报" />
    <van-grid-item icon="photo-o" text="AI寻亲" />
  </van-grid> -->
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
<style scoped>
:deep(.van-icon__image) {
  display: block;
  width: 6em;
  height: 3em;
  object-fit: contain;
}
/* 去除图片样式 */
img {
  vertical-align: top;
  border: none;
}
:deep(.van-grid) {
  display: block;
  border: ture;
}
</style>
