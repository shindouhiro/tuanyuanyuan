<template>
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <!-- 这是姓名起始的代码，从这里复制哦^_^ -->
            <van-field
                v-model="username"
                name="姓名"
                label="姓名"
                placeholder="姓名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <!-- 从这里复制结束 -->
            <van-field
                v-model="username"
                name="性别"
                label="性别"
                placeholder="性别"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
             <van-field
                v-model="username"
                name="联系人"
                label="联系人"
                placeholder="联系人"
                :rules="[{ required: true, message: '请填写联系人' }]"
            />
        
            <van-field
            
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
        </van-cell-group>
        <div style="margin: 16px">
            <van-button round block type="primary" native-type="submit">
                提交
            </van-button>
        </div>
    </van-form>

<van-field name="uploader" label="疑似走失者照片">
  <template #input>
    <van-uploader v-model="value" />
  </template>
</van-field>

import { ref } from 'vue';

export default {
  setup() {
    const value = ref([{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }]);
    return { value };
  },
};





</template>
<script>
import { ref } from "vue";

export default {
    setup() {
        const username = ref("");
        const password = ref("");
        const onSubmit = (values) => {
            console.log("submit", values);
        };

        return {
            username,
            password,
            onSubmit,
        };
    },
};
</script>
