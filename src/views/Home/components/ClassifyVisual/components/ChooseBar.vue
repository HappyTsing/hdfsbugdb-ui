<template>
  <el-select v-model="dataValue" class="m-2" placeholder="Select" size="small">
    <el-option
      v-for="item in dataOptions"
      :key="item.dataValue"
      :label="item.label"
      :value="item.dataValue"
    />
  </el-select>

  <el-select v-model="chartValue" class="m-2" placeholder="Select" size="small">
    <el-option
      v-for="item in chartOptions"
      :key="item.chartValue"
      :label="item.label"
      :value="item.chartValue"
    />
  </el-select>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const dataValue = computed({
  get() {
    return store.state.chooseBar.dataChoosed;
  },
  set(newVal) {
    store.commit("chooseBar/chooseDataSource", newVal);
  },
});

const chartValue = computed({
  get() {
    return store.state.chooseBar.chartChoosed;
  },
  set(newVal) {
    store.commit("chooseBar/chooseChartType", newVal);
  },
});

// let res = "";
// onMounted(async () => {
//   res = await getData();
//   console.log(res);
// });

// async function getchartValue(classtype) {
//   return await getEchartData()
// }
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
