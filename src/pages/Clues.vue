<template>
    <div class="wrap"></div>
</template>
<style>
.wrap {
    background: red;
    font-size: 24px;
}
</style>
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
