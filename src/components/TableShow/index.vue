<template>
  <el-table :data="tableData" @row-click="handleRowClick" style="width: 100%">
    <el-table-column
      v-for="{ prop, width } in columns_to_show"
      :prop="prop"
      :label="prop"
      :key="prop"
      :width="width"
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
import { useRouter } from "vue-router";
export default {
  name: "TableShow",
  props: {
    columns_to_show: Object,
    pageSize: Number,
  },
  setup(props) {
    /* 存放显示的变量*/
    // 让她变成响应式变量，这样分页的时候，重新获取数据，存放到tableData中，表格就会自动变化
    let tableData = reactive([]);
    const currentPage = ref(1);
    let total = ref();
    const router = useRouter();

    // props传进来的是响应式的数据，不能直接用ES6的语法结构，会消除响应式。使用toRefs函数完成此操作
    // const { columns_to_show,pageSize } = toRefs(props);

    function getData() {
      getTableDataAll(props.pageSize, currentPage.value).then((res) => {
        tableData.length = 0;
        // es6 扩展运算符
        tableData.push(...res.data.data);
        // 首次请求时，获取：①数据总条数 total ②data数据有哪些内容
        if (currentPage.value === 1) {
          total.value = res.data.total;
        }
      });
    }

    function handleRowClick(row) {
      router.push({ path: `/issues/${row.IssueKey}` });
    }

    watch(currentPage, () => {
      getData();
    });

    onMounted(() => {
      getData();
    });
    return {
      handleRowClick,
      tableData,
      currentPage,
      total,
    };
  },
};
</script>
