<template>
    <van-uploader :after-read="afterRead" />
</template>

<script>
import axios from "axios";
import { onMounted } from "vue";
export default {
    setup() {
        const afterRead = (file) => {
            // 此时可以自行将文件上传至服务器
            console.log(file);
            //对比人脸
            axios
                .post(
                    "/rest/2.0/face/v3/search?access_token=24.473261de13f861a4c3750aea458c1b34.2592000.1650892036.282335-25832019",
                    {
                        image: file.content.split(",")[1],
                        image_type: "BASE64",
                        group_id_list: "1",
                    }
                )
                .then((res) => {
                    console.log("对比", res);
                });
            //上传人脸
            // axios
            //     .post(
            //         "rest/2.0/face/v3/faceset/user/add?access_token=24.473261de13f861a4c3750aea458c1b34.2592000.1650892036.282335-25832019",
            //         {
            //             image: file.content.split(",")[1],
            //             image_type: "BASE64",
            //             group_id: "1",
            //             user_id: "abc_123",
            //         }
            //     )
            //     .then((res) => {
            //         console.log(res, "res");
            //     });
        };
        onMounted(() => {
            //获取人脸列表
            axios
                .post(
                    "/rest/2.0/face/v3/faceset/face/getlist?access_token=24.b75efa4932df949bac7e33c8bfcac584.2592000.1650893083.282335-25832019",
                    {
                        group_id: "1",
                        user_id: "abc_123",
                    }
                )
                .then((res) => {
                    console.log("人脸库列表", res);
                });
        });

        return {
            afterRead,
        };
    },
};
</script>
