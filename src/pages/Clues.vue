<template>
  <div class="introduction flex justify-center items-center p">
    <p class="px-3">
      线索提供注意事项：请保证线索的真实性，如恶搞等行为，一经发现，将
      进行永久封号，将追究法律责任。
    </p>
  </div>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <!-- 这是姓名起始的代码，从这里复制哦^_^ -->
      <van-field
        v-model="username"
        name="username"
        label="姓名"
        required
        placeholder="姓名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <!-- 从这里复制结束 -->
      <van-field
        name="sex"
        label="性别"
        required
        placeholder="性别"
        :rules="[{ required: true, message: '请填写用户名' }]"
      >
        <template #input>
          <van-radio-group v-model="sex" direction="horizontal">
            <van-radio name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <!-- 这是上传照片起始的代码 -->

      <van-field name="uploader" label="疑似走失者照片" required>
        <template #input>
          <van-uploader v-model="value" />
        </template>
      </van-field>
      <!-- 照片结束 -->
      <!-- 特征描述begin -->
      <van-field
        v-model="description"
        name="description"
        label="特征描述"
        required
        placeholder="特征描述"
        :rules="[{ required: true, message: '请输入特征描述' }]"
      />
      <!-- 特征描述end -->
      <!-- 发现时间begin -->
      <van-field
        v-model="findtime"
        is-link
        readonly
        name="datetimePicker"
        label="发现时间"
        required
        placeholder="发现时间"
        @click="showPicker = true"
      />
      <van-popup v-model:show="showPicker" position="bottom" required>
        <van-datetime-picker
          :formatter="formatter"
          v-model="currentDate"
          type="datetime"
          title="选择完整时间"
          :max-date="maxDate"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>

      <!-- 发现时间end -->
      <van-field
        v-model="areachoose"
        is-link
        readonly
        name="area"
        label="发现地区"
        required
        placeholder="点击选择省市区"
        @click="showArea = true"
      />
      <van-popup v-model:show="showArea" position="bottom">
        <van-area
          :area-list="areaList"
          @confirm="onAreaConfirm"
          @cancel="showArea = false"
        />
      </van-popup>
      <!-- 补充地址开始 -->
      <van-field
        v-model="detailed_address"
        name="detailed_address"
        label="详细地址"
        required
        placeholder="详细地址"
        :rules="[{ required: true, message: '请输入详细地址' }]"
      />

      <!-- 这是匿名开始 -->
      <van-field
        name="anonymous"
        label="是否匿名"
        required
        placeholder="是否匿名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      >
        <template #input>
          <van-radio-group v-model="anonymous" direction="horizontal">
            <van-radio name="1">是</van-radio>
            <van-radio name="2">否</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <!-- 这是匿名结束 -->

      <van-field
        v-model="contacts"
        name="contacts"
        label="联系人"
        required
        placeholder="联系人"
        :rules="[{ required: true, message: '请填写联系人' }]"
      />
      <!-- 这是联系电话开始 -->
      <van-field
        v-model="telephone"
        name="telephone"
        label="联系电话"
        required
        placeholder="联系电话"
        :rules="[{ required: true, message: '请填写联系电话' }]"
      />
      <!-- 这是联系电话结束 -->
      <!-- 这是是否已报警开始 -->
      <van-field
        name="callpolice"
        label="是否已报警"
        required
        placeholder="是否已报警"
        :rules="[{ required: true, message: '请填写用户名' }]"
      >
        <template #input>
          <van-radio-group v-model="callpolice" direction="horizontal">
            <van-radio name="1">是</van-radio>
            <van-radio name="2">否</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <!-- 这是是否已报警结束 -->
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit"
        >提交</van-button
      >
    </div>
  </van-form>
</template>
<script>
import { ref } from 'vue'
import { areaList } from '@vant/area-data'
import moment from 'moment '

export default {
  setup() {
    const contacts = ref('')
    const description = ref('')
    const callpolice = ref('1')
    const sex = ref('1')
    const telephone = ref('')
    const anonymous = ref('1')
    const username = ref('')
    const password = ref('')
    const detailed_address = ref('')
    const onSubmit = (values) => {
      console.log('submit', values)
    }
    const findtime = ref('')
    const areachoose = ref('')
    const showPicker = ref(false)
    const showArea = ref(false)
    const date = new Date()
    const currentDate = ref(new Date())

    const onAreaConfirm = (areaValues) => {
      showArea.value = false
      areachoose.value = areaValues
        .filter((item) => !!item)
        .map((item) => item.name)
        .join('/')
    }

    const onConfirm = (value) => {
      findtime.value = moment(value).format('YYYY-MM-DD HH:mm')
      showPicker.value = false
    }
    return {
      contacts,
      telephone,
      description,
      sex,
      anonymous,
      callpolice,
      currentDate,
      username,
      password,
      detailed_address,
      onSubmit,
      onConfirm,
      onAreaConfirm,
      showPicker,
      showArea,
      areaList,
      areachoose,
      findtime,
      maxDate: new Date()
    }
  }
}
</script>
<style lang="scss">
.introduction {
  background: #eaf6ff;
  height: 58px;
  font-size: 12px;
  font-weight: 400;
  color: #4759ee;
}
</style>
