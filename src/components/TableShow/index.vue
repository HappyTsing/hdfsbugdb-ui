<template>
  <el-table :data="tableData" @row-click="handleRowClick" style="width: 100%">
    <el-table-column
      v-for="{ prop, width } in columns_to_show"
      :prop="prop"
      :label="prop"
      :key="prop"
      :width="width"
    ></el-table-column>
  </el-table>

  <!-- 此处:total="total" 动态绑定他就会报错说已经废弃了这种用法（但功能正常）。 但是如果:total="100" 这样直接绑定数据是可以的 -->
  <!-- 但是也没找到其他方法，先这样吧，记个TODO -->
  <!-- TODO 消除[ElPagination] Deprecated usages detected提示 -->
  <el-pagination
    background
    hide-on-single-page
    v-model:current-page="currentPage"
    :page-size="pageSize"
    :total="total"
    layout="prev, pager,next"
  ></el-pagination>
</template>

<script>
import { ref, reactive, onMounted, watch } from "vue";
import { getTableDataAll } from "/src/api/table.js";
import {
  searchIssuesByTypeValue,
  searchIssueByIssueKey,
  searchIssueByResearchId,
} from "/src/api/search.js";
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";

export default {
  name: "TableShow",
  props: {
    columns_to_show: Object,
    pageSize: Number,
    dataSource: String,
  },
  setup(props) {
    /* 存放显示的变量*/
    // 让她变成响应式变量，这样分页的时候，重新获取数据，存放到tableData中，表格就会自动变化
    let tableData = reactive([]);
    const currentPage = ref(1);
    const total = ref();
    const loading = ref(true);
    const router = useRouter();
    const route = useRoute();
    let searchValue = route.params.SearchValue;

    // props传进来的是响应式的数据，不能直接用ES6的语法结构，会消除响应式。使用toRefs函数完成此操作
    // const { columns_to_show,pageSize } = toRefs(props);

    function getDataForAll() {
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

    function getDataForSearch(searchValue) {
      const Type_Value = {
        // ResearchId、IssueKey 使用正则来匹配
        Quality: [
          "Availability",
          "Reliability",
          "Security",
          "Efficiency",
          "Compatibility",
          "Usability",
        ],
        Component: [
          "Client",
          "Namenode",
          "Datanode",
          "HA",
          "SnapShot",
          "Cache",
          "LIBS",
          "DOCS",
          "FSCK",
          "HttpFS",
          "WebHDFS",
          "EC",
          "RBF",
          "Disk-Balancer",
        ],
        Consequence: [
          "Build-Error",
          "Runtime-Error",
          "Test-Error",
          "Data-Loss",
          "Data-Corruption",
          "Failure",
          "Performance",
          "Potential-Impact",
        ],
        Code: [
          "Logic",
          "Maintenance",
          "Config",
          "Interface",
          "Error-Handle",
          "Concurrent",
        ],
      };
      const regu_ResearchId = /^[1-9][0-9]*$/;
      const regu_IssueKey = /^(h|H)(D|d)(f|F)(S|s)-[0-9]{5}$/;

      if (regu_ResearchId.test(searchValue)) {
        searchIssueByResearchId(searchValue).then((res) => {
          tableData.length = 0;
          tableData.push(...res.data.data);
          total.value = res.data.total;
        });
      } else if (regu_IssueKey.test(searchValue)) {
        searchIssueByIssueKey(searchValue.toUpperCase()).then((res) => {
          tableData.length = 0;
          tableData.push(...res.data.data);
          total.value = res.data.total;
        });
      } else if (Type_Value.Quality.includes(searchValue)) {
        searchIssuesByTypeValue(
          props.pageSize,
          currentPage.value,
          "Quality",
          searchValue
        ).then((res) => {
          tableData.length = 0;
          tableData.push(...res.data.data);
          if (currentPage.value === 1) {
            total.value = res.data.total;
          }
        });
      } else if (Type_Value.Component.includes(searchValue)) {
        searchIssuesByTypeValue(
          props.pageSize,
          currentPage.value,
          "Component",
          searchValue
        ).then((res) => {
          tableData.length = 0;
          tableData.push(...res.data.data);
          if (currentPage.value === 1) {
            total.value = res.data.total;
          }
        });
      } else if (Type_Value.Consequence.includes(searchValue)) {
        searchIssuesByTypeValue(
          props.pageSize,
          currentPage.value,
          "Consequence",
          searchValue
        ).then((res) => {
          tableData.length = 0;
          tableData.push(...res.data.data);
          if (currentPage.value === 1) {
            total.value = res.data.total;
          }
        });
      } else if (Type_Value.Code.includes(searchValue)) {
        searchIssuesByTypeValue(
          props.pageSize,
          currentPage.value,
          "Code",
          searchValue
        ).then((res) => {
          tableData.length = 0;
          tableData.push(...res.data.data);
          if (currentPage.value === 1) {
            total.value = res.data.total;
          }
        });
      } else {
        tableData.length = 0;
        total.value = 0;
      }
    }

    function getData() {
      if (props.dataSource === "all") {
        getDataForAll();
      } else if (props.dataSource === "search") {
        getDataForSearch(searchValue);
      }
    }

    function handleRowClick(row) {
      router.push({ path: `/issues/detail/${row.IssueKey}` });
    }

    watch(currentPage, () => {
      getData();
    });

    // 路由更新时重新获取数据
    onBeforeRouteUpdate((to) => {
      searchValue = to.params.SearchValue;
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
      loading,
    };
  },
};
</script>
<style scoped>
body {
  margin: 0;
}
</style>
