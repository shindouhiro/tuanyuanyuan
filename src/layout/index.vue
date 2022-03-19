<template>
    <div class="wrap">
        <div class="header">
            <van-nav-bar :title="title" />
        </div>
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
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
    setup() {
        const active = ref(0);
        const title = ref("");
        const router = useRouter();
        const route = useRoute();

        watch(
            () => route.meta.title,
            (val) => {
                title.value = val;
            }
        );
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
        return { active, onChange, title };
    },
};
</script>

<style>
.wrap {
    display: flex;
    height: 100vh;
    flex-direction: column;
}

.content {
    flex: 1;
}
</style>
