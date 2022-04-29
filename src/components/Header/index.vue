<template>
  <header>
    <!-- 当路径为 /home 或 /issues/HDFS-14222，都取根路径，即/home和/issues -->
    <el-menu
      :default-active="'/' + this.$route.path.split('/')[1]"
      class="el-menu-demo"
      mode="horizontal"
      router
    >
      <el-menu-item
        v-for="{ id, title, path } in menu_data"
        :key="id"
        :index="path"
        >{{ title }}</el-menu-item
      >
      <el-input class="input" v-model="input" placeholder="Please input" />
      <el-button
        class="button"
        @click="handleSearch"
        type="primary"
        :icon="Search"
        >Search</el-button
      >
    </el-menu>
  </header>
</template>

<script>
import { Search } from "@element-plus/icons-vue";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

// 使用ElMessage需要手动导入样式
import { ElMessage } from "element-plus";
import "element-plus/es/components/message/style/css";
export default {
  name: "HeaderComp",
  setup() {
    let input = ref("");
    const router = useRouter();

    function handleSearch() {
      if (input.value.length === 0) {
        ElMessage({
          message: "Please enter your search content!",
          type: "warning",
          duration: 1000,
        });
      } else {
        router.push({
          path: `/issues/search/${input.value}`,
          // query: { searchValue: input.value },
        });
      }
    }

    const menu_data = reactive([
      {
        id: 1,
        title: "HOME",
        path: "/home",
      },
      {
        id: 2,
        title: "ISSUES",
        path: "/issues/all",
      },
    ]);

    return { Search, input, menu_data, handleSearch };
  },
};
</script>
<style scoped>
/* layout */

/* 输入框 */
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}

/* 导航外部 */
header {
  background-color: #ffffff;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
}

.input {
  margin: auto 0;
  display: inline-block;
  width: 200px;
  margin-left: 65vw;
}
.button {
  margin: auto 0;
}
</style>
