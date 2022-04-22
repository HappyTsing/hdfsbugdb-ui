<template>
  <div>
    <h2>sss</h2>
    <h2>sss</h2>
    <h2>sss</h2>
    <h2>sss</h2>
    <h2>sss</h2>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
import { onMounted } from "vue";
export default {
  name: "testView",
  setup() {
    onMounted(() => {
      ElMessage.success("success");
    });

    return {};
  },
};
</script>

<style lang="scss" scoped></style>
