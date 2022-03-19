<template>
    <div class="wrap">
        <div class="header"></div>
        <div class="content"></div>
        <div class="footer">
            <van-tabbar v-model="active" @change="onChange">
                <van-tabbar-item icon="home-o">首页</van-tabbar-item>
                <van-tabbar-item icon="search">线索大厅</van-tabbar-item>
                <van-tabbar-item icon="friends-o">寻亲大厅</van-tabbar-item>
                <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { Toast } from "vant";

export default {
    setup() {
        const active = ref(0);
        const onChange = (index) => Toast(`标签 ${index}`);
        return { active, onChange };
    },
};
</script>

<style>
.wrap {
    display: flex;
    height: 100vh;
    flex-direction: column;
    background-color: blue;
}
.header {
    height: 80px;
    background-color: lightpink;
}
.content {
    flex: 1;
    background-color: lightyellow;
}
.footer {
    height: 100px;
    background-color: lightblue;
}
</style>
