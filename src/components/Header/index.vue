<template>
  <header>
    <!-- TODO 待添加 -->
    <div class="toadd">HDFSBUGDB</div>
    <div class="search">
      <el-input
        v-model="input"
        placeholder="Please input"
        class="input-with-select"
      >
        <template #prepend>
          <el-select v-model="select" placeholder="Select" style="width: 130px">
            <el-option label="Significance" value="1" />
            <el-option label="Quality" value="2" />
            <el-option label="Conponent" value="3" />
            <el-option label="Consequence" value="4" />
            <el-option label="Code" value="5" />
          </el-select>
        </template>
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>
    </div>
  </header>
</template>
<script>
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";
export default {
  name: "HeaderComp",
  setup() {
    const input = ref("");
    const select = ref("");
    return { Search, input, select };
  },
};
</script>
<style scoped>
/* layout */

* {
  margin: 0;
  padding: 0;
}

/* 输入框 */
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}

/* 导航外部 */
header {
  padding: 10px 0;
  background-color: #ffffff;
  border-bottom: 1px solid #dddfe5;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
}
.toadd {
  display: inline-block;
  width: 65vw;
}
.search {
  display: inline-block;
  width: 30vw;
}
</style>
