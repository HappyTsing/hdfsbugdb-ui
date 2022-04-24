<template>
  <el-button @click="resetDateFilter">reset date filter</el-button>
  <el-button @click="clearFilter">reset all filters</el-button>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="cause" label="Cause" width="180" />
    <el-table-column prop="impact" label="Impact" />
    <el-table-column prop="significance" label="significance" />
    <el-table-column prop="quality" label="quality" />
    <el-table-column prop="component" label="quality" />
    <el-table-column prop="consequence" label="consequence" />
    <el-table-column prop="code" label="code" />
  </el-table>
  <el-pagination
    background
    hide-on-single-page
    v-model:current-page="currentPage"
    :page-size="pageSize"
    :total="220"
    layout="prev, pager,
  next"
  />
  <el-button @click="getData">获取数据</el-button>
  <button @click="getPage">获取页码</button>
  <!-- <h1>{{ tableData.array }}</h1> -->
</template>

<script>
import { ref, reactive, onMounted, watch } from "vue";
import { getTableDataAll } from "/src/api/table.js";
export default {
  setup() {
    /* 存放显示的变量*/
    // 让她变成响应式变量，这样分页的时候，重新获取数据，存放到tableData中，表格就会自动变化
    let tableData = reactive([]);
    let currentPage = ref(1);
    const pageSize = 50;

    function getData() {
      getTableDataAll().then((res) => {
        // es6 扩展运算符
        tableData.push(...res.data);
      });
      // 调用后端接口，此处是否要与搜索结合？
    }
    function getPage() {
      console.log(currentPage);
    }
    onMounted(() => {
      getData();
    });
    watch(currentPage, (newVal, oldVal) => {
      // 从后端请求数据，并修改currentPage
    });
    return { getData, tableData, currentPage, pageSize, getPage };
  },
};
</script>
