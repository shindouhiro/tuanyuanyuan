<template>
    <div class="wrap">
        <div class="header"></div>
        <div class="content"></div>
        <div class="footer">
            <van-tabbar v-model="active">
                <van-tabbar-item icon="home-o">标签11</van-tabbar-item>
                <van-tabbar-item icon="search">标签22</van-tabbar-item>
                <van-tabbar-item icon="friends-o">标签22</van-tabbar-item>
                <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup() {
        const active = ref(0);
        return { active };
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
