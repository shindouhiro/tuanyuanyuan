<template>
  <div class="container">
    <div class="description mt-20 pr-8">手机号登录</div>
    <h1 class="title pl-8 pb-20 pt-10">密码登录</h1>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="tel"
          name="tel"
          placeholder="用户名"
          :rules="[{ required: true, message: '请输入手机号' }]"
        />
        <van-field
          v-model="sms"
          name="sms"
          center
          clearable
          :rules="[{ required: true, message: '请输入验证码' }]"
          placeholder="请输入短信验证码"
        >
          <template #button>
            <van-button
              size="small"
              type="primary"
              class="btn"
              @click="handleCount"
              :disabled="smsDisabled"
              >{{ smsContent }}</van-button
            >
          </template>
        </van-field>
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'

export default {
  setup() {
    const value = ref('')
    const tel = ref('')
    const sms = ref('')
    const smsDisabled = ref(false)
    const smsContent = ref('获取验证码')
    let timer = null
    const handleCount = () => {
      smsContent.value = 60
      smsDisabled.value = true
      timer = setInterval(() => {
        if (smsContent.value == 0) {
          clearInterval(timer)
          smsContent.value = '获取验证码'
          smsDisabled.value = false
        } else {
          smsContent.value--
        }
      }, 1000)
    }
    onBeforeMount(() => {
      clearInterval(timer)
    })
    return { value, tel, sms, smsContent, handleCount, smsDisabled }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 30px;
  width: 96%;
  margin: 0 auto;
}
.title {
  height: 42px;
  font-size: 30px;
  color: #333333;
  letter-spacing: 0;
  font-weight: 400;
}
.description {
  height: 25px;
  font-size: 18px;
  color: #a3a3a3;
  letter-spacing: 0;
  text-align: right;
  font-weight: 400;
}

.btn {
  width: 80px;
  border-radius: 23.5px;
  font-size: 12px;
}
</style>
