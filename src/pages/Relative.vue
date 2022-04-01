<template>
  <!-- <div class="flex justify-around">
    <div class="w-1/3 bg-green-300 flex flex-col h-40">
      <div>图片</div>
      <div class="text-sm mt-10">
        在人民广场附近，经常会看到沿街乞讨，怀疑是拐卖来
      </div>
    </div>
    <div class="w-1/3 bg-blue-300 h-40">
      <div>图片</div>
      <div class="text-sm mt-10">
        在人民广场附近，经常会看到沿街乞讨，怀疑是拐卖来
      </div>
    </div>
  </div> -->
  <van-dropdown-menu>
    <van-dropdown-item v-model="value" :options="options" />
    <van-dropdown-item title="筛选" ref="item">
      <van-cell center title="包邮">
        <template #right-icon>
          <van-switch v-model="switch1" size="24" active-color="#ee0a24" />
        </template>
      </van-cell>
      <van-cell center title="团购">
        <template #right-icon>
          <van-switch v-model="switch2" size="24" active-color="#ee0a24" />
        </template>
      </van-cell>
      <div style="padding: 5px 16px">
        <van-button type="danger" block round @click="onConfirm">
          确认
        </van-button>
      </div>
    </van-dropdown-item>
  </van-dropdown-menu>

  <van-swipe-cell>
    <van-card
      price="双眼皮女孩"
      currency
      desc=""
      title="在人民广场南侧的垃圾桶发现，湖南口音皮肤比较黑，长头发眼睛大"
      class="goods-card"
      thumb="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    />
    <van-card
      price="双眼皮女孩"
      currency
      desc=""
      title="在人民广场南侧的垃圾桶发现，湖南口音皮肤比较黑，长头发眼睛大"
      class="goods-card"
      thumb="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    />
    <van-card
      price="双眼皮女孩"
      currency
      desc=""
      title="在人民广场南侧的垃圾桶发现，湖南口音皮肤比较黑，长头发眼睛大"
      class="goods-card"
      thumb="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    />
    <van-card
      price="双眼皮女孩"
      currency
      desc=""
      title="在人民广场南侧的垃圾桶发现，湖南口音皮肤比较黑，长头发眼睛大"
      class="goods-card"
      thumb="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    />
    <template #right>
      <van-button square text="删除" type="danger" class="delete-button" />
    </template>
  </van-swipe-cell>
</template>

<script>
import { createApp } from 'vue'
import { SwipeCell } from 'vant'
import { ref } from 'vue'

export default {
  setup() {
    const item = ref(null)
    const value = ref(0)
    const switch1 = ref(false)
    const switch2 = ref(false)
    const options = [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 }
    ]
    const onConfirm = () => {
      item.value.toggle()
    }

    return {
      item,
      value,
      switch1,
      switch2,
      options,
      onConfirm
    }
  }
}

const app = createApp()
app.use(SwipeCell)
</script>

<style>
.goods-card {
  margin: 0;
  background-color: @white;
}

.delete-button {
  height: 100%;
}
</style>
