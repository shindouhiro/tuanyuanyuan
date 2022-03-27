<template>
    <div class="wrap">
        <div class="header" v-if="title!='首页'">
            <van-nav-bar :title="title" />
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
        <div class="footer">
            <van-tabbar v-model="active" @change="onChange">
               
                <!-- 自定义icon开始 -->
                 <van-tabbar-item>
                    <span>首页</span>
                    <template #icon="props">
                        <img :src="props.active ? icon.my.active : icon.my.inactive" />
                    </template>
                 </van-tabbar-item>
                 <!-- 首页icon结束 -->
                  <van-tabbar-item>
                    <span>线索</span>
                    <template #icon="props">
                        <img :src="props.active ? icon.clues.active : icon.clues.inactive" />
                    </template>
                 </van-tabbar-item>
                 <!-- 线索结束 -->
                 <van-tabbar-item>
                    <span>寻亲</span>
                    <template #icon="props">
                        <img :src="props.active ? icon.findman.active : icon.findman.inactive" />
                    </template>
                 </van-tabbar-item>
                 <!-- 寻亲结束 -->
                 <van-tabbar-item>
                    <span>我的</span>
                    <template #icon="props">
                        <img :src="props.active ? icon.my.active : icon.my.inactive" />
                    </template>
                 </van-tabbar-item>
                <!-- 自定义icon结束 -->
  
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
        //自定义icon开始
        const icon = {
            first:{
                active: '../../static/icons/tab_first.png',
                inactive: '../../static/icons/un_first.png'
            },
            clues:{
                active: '../../static/icons/tab_clues.png',
                inactive: '../../static/icons/un_clues.png'
            },
            findman:{
                active: '../../static/icons/tab_findman.png',
                inactive: '../../static/icons/un_findman.png'
            },
            my:{
                active: '../../static/icons/tab_my.png',
                inactive: '../../static/icons/un_my.png'
            }
        };

        //icon结束

        const onChange = (index) => {
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
        return { active, onChange, title,icon };
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
    overflow-y: auto;
}
</style>
