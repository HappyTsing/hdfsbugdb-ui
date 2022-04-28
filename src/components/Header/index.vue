<template>
  <header>
    <!-- 当路径为 /home 或 /issues/HDFS-14222，都取根路径，即/home和/issues -->
    <el-menu
      :default-active="'/' + $route.path.split('/')[1]"
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
    </el-menu>
  </header>
</template>

<script>
import { Search } from "@element-plus/icons-vue";
import { ref, reactive } from "vue";
export default {
  name: "HeaderComp",
  setup() {
    let input = ref();
    let select = ref();
    const menu_data = reactive([
      {
        id: 1,
        title: "HOME",
        path: "/home",
      },
      {
        id: 2,
        title: "ISSUES",
        path: "/issues",
      },
    ]);

    // const handleSelect = (key, keyPath) => {
    //   console.log(key);
    //   console.log(keyPath);
    // };

    return { Search, input, select, menu_data };
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

.search {
  display: inline-block;
}
</style>
