<template>
  <div class="home">
    <PanelGroup></PanelGroup>
    <!-- <el-row style="background: #fff; padding: 16px 16px 0; margin-bottom: 32px">
      <SingleChart></SingleChart>
    </el-row> -->

    <el-row :gutter="24" class="visual-chart">
      <el-col :span="16">
        <div class="chart-wrapper">
          <SingleChart></SingleChart>
        </div>
      </el-col>

      <el-col :span="8"
        ><div class="chart-wrapper">
          <ComplexChart></ComplexChart></div
      ></el-col>
    </el-row>

    <TableShow
      :columns_to_show="columns_to_show"
      :pageSize="pageSize"
      :dataSource="dataSource"
    ></TableShow>
  </div>
</template>
<script>
import PanelGroup from "./components/PanelGroup";
import SingleChart from "./components/SingleChart";
import ComplexChart from "./components/ComplexChart";
export default {
  name: "HomeView",
  components: { PanelGroup, SingleChart, ComplexChart },
  data() {
    return {
      pageSize: 5,
      dataSource: "all",
      columns_to_show: [
        {
          prop: "id",
          width: "",
        },
        {
          prop: "IssueKey",
          width: "",
        },
        {
          prop: "Quality",
          width: "",
        },
        {
          prop: "Component",
          width: "",
        },
        {
          prop: "Consequence",
          width: "",
        },
        {
          prop: "Code",
          width: "",
        },
        {
          prop: "UpdateTime",
          width: "",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.home {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
    height: 320px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
