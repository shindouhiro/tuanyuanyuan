<template>
    <div class="wrap">
        <div class="header"></div>
        <div class="content">
            <router-view></router-view>
        </div>
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
import { useRouter } from "vue-router";
export default {
    setup() {
        const active = ref(0);
        const router = useRouter();
        const onChange = (index) => {
            console.log(index, "index");
            switch (index) {
                case 0:
                    router.push({ name: "home" });
                    break;
                case 1:
                    router.push({ name: "clues" });
                    break;
                case 2:
                    router.push({ name: "relative" });
                    break;
                case 3:
                    router.push({ name: "my" });
                    break;

                default:
                    break;
            }
        };
        return { active, onChange };
    },
};
</script>

<style>
.wrap {
    display: flex;
    height: 100vh;
    flex-direction: column;
}
.header {
    height: 80px;
}
.content {
    flex: 1;
}
</style>
