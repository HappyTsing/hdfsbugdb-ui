<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column
      v-for="c in columns"
      :prop="c"
      :label="c"
      :key="c"
    ></el-table-column>
    <!-- <el-table-column prop="id" label="ID" width="180" /> -->
  </el-table>
  <el-pagination
    background
    hide-on-single-page
    v-model:current-page="currentPage"
    :page-size="pageSize"
    :total="total"
    layout="prev, pager,next"
  />
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
    let total = ref(0);
    let pageSize = 20;
    let columns = [
      "id",
      "IssueKey",
      "Summary",
      "Cause",
      "Impact",
      "Significance",
      "Quality",
      "Component",
      "Consequence",
      "Code",
      "Link",
      "CreatedTime",
      "UpdateTime",
    ];

    function getData() {
      getTableDataAll(pageSize, currentPage.value).then((res) => {
        tableData.length = 0;
        // es6 扩展运算符
        tableData.push(...res.data.data);

        // 首次请求时，获取：①数据总条数 total ②data数据有哪些内容
        if (currentPage.value === 1) {
          total.value = res.data.total;
        }
      });
    }

    watch(currentPage, () => {
      getData();
    });

    function getPage() {
      console.log(currentPage);
    }
    onMounted(() => {
      getData();
    });
    return {
      getData,
      tableData,
      currentPage,
      getPage,
      pageSize,
      total,
      columns,
    };
  },
};
</script>
