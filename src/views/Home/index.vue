<template>
  <div class="dashboard-editor-container">
    <PanelGroup></PanelGroup>
    <!-- <el-row style="background: #fff; padding: 16px 16px 0; margin-bottom: 32px">
      <SingleChart></SingleChart>
    </el-row> -->

    <el-row :gutter="24">
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
  </div>
</template>
<script>
import PanelGroup from "./components/PanelGroup";
import SingleChart from "./components/SingleChart";
import ComplexChart from "./components/ComplexChart";
export default {
  name: "HomeView",
  components: { PanelGroup, SingleChart, ComplexChart },
};
</script>
<style lang="scss" scoped>
.dashboard-editor-container {
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
