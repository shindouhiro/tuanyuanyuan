<template>
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <!-- 这是姓名起始的代码，从这里复制哦^_^ -->
            <van-field
                v-model="username"
                name="username"
                label="姓名"
                placeholder="姓名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <!-- 从这里复制结束 -->
            <van-field
                name="sex"
                label="性别"
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

            <van-field name="uploader" label="疑似走失者照片">
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
                placeholder="发现时间"
                @click="showPicker = true"
            />
            <van-popup v-model:show="showPicker" position="bottom">
                <van-datetime-picker
                    type="time"
                    @confirm="onConfirm"
                    @cancel="showPicker = false"
                />
            </van-popup>
<van-datetime-picker
  v-model="currentDate"
  type="datetime"
  title="选择完整时间"
  :min-date="minDate"
  :max-date="maxDate"
/>
            <!-- 发现时间end -->
            <van-field
                v-model="areachoose"
                is-link
                readonly
                name="area"
                label="地区选择"
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

            <van-field
                v-model="contacts"
                name="contacts"
                label="联系人"
                placeholder="联系人"
                :rules="[{ required: true, message: '请填写联系人' }]"
            />

            <van-field
                v-model="password"
                type="password"
                name="password"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
        </van-cell-group>
        <div style="margin: 16px">
            <van-button round block type="primary" native-type="submit"
                >提交</van-button
            >
        </div>
    </van-form>
</template>
<script>
import { ref } from "vue";
import { areaList } from "@vant/area-data";

export default {
    setup() {
        const contacts = ref("");
        const description = ref("");
        const sex = ref("");
        const username = ref("");
        const password = ref("");
        const onSubmit = (values) => {
            console.log("submit", values);
        };
        const findtime = ref("");
        const areachoose= ref("");
        const showPicker = ref(false);
        const showArea = ref(false);
        const onAreaConfirm = (areaValues) => {
            showArea.value = false;
            areachoose.value = areaValues
                .filter((item) => !!item)
                .map((item) => item.name)
                .join("/");
        };

        const onConfirm = (value) => {
            findtime.value = value;
            showPicker.value = false;
        };
        return {
            contacts,
            description,
            sex,
            username,
            password,
           
            onSubmit,
            onConfirm,
            onAreaConfirm,
            showPicker,
            showArea,
            areaList,
            areachoose,
            findtime,
        };
    },
};
</script>
