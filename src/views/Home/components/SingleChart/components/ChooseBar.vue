<template>
  <div class="choose-bar" style="text-align: center">
    <div style="display: inline-block">
      <el-select
        v-model="dataValue"
        class="m-2"
        placeholder="Select"
        size="small"
      >
        <el-option
          v-for="item in dataOptions"
          :key="item.dataValue"
          :label="item.label"
          :value="item.dataValue"
        />
      </el-select>
    </div>

    <div style="display: inline-block; margin-left: 20px">
      <el-select
        v-model="chartValue"
        class="m-2"
        placeholder="Select"
        size="small"
      >
        <el-option
          v-for="item in chartOptions"
          :key="item.chartValue"
          :label="item.label"
          :value="item.chartValue"
        />
      </el-select>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const dataValue = computed({
  get() {
    return store.state.chooseBar.dataSource;
  },
  set(newVal) {
    // 修改数据源
    store.commit("chooseBar/chooseDataSource", newVal);
  },
});

const chartValue = computed({
  get() {
    return store.state.chooseBar.chartType;
  },
  set(newVal) {
    store.commit("chooseBar/chooseChartType", newVal);
  },
});

const dataOptions = [
  {
    dataValue: "Significance",
    label: "Significance",
  },
  {
    dataValue: "Quality",
    label: "Quality",
  },
  {
    dataValue: "Component",
    label: "Component",
  },
  {
    dataValue: "Consequence",
    label: "Consequence",
  },
  {
    dataValue: "Code",
    label: "Code",
  },
];

const chartOptions = [
  {
    chartValue: "Pie",
    label: "Pie",
  },
  {
    chartValue: "Line",
    label: "Line",
  },
  {
    chartValue: "Bar",
    label: "Bar",
  },
];
</script>
