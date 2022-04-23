<template>
  <ChooseBar></ChooseBar>
  <!-- <keep-alive> -->
  <PieChart v-if="chartType === 'Pie'"></PieChart>
  <LineChart v-else-if="chartType === 'Line'"></LineChart>
  <BarChart v-else></BarChart>
  <!-- </keep-alive> -->
</template>

<script>
// 传参进入
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import ChooseBar from "./components/ChooseBar";

import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: { PieChart, LineChart, BarChart, ChooseBar },
  name: "ClassifyVisual",
  setup() {
    const store = useStore();
    const dataSource = computed(() => store.state.chooseBar.dataSource);
    const chartType = computed(() => store.state.chooseBar.chartType);
    const echartData = computed(() => store.state.chooseBar.echartData);

    return { chartType, dataSource, echartData };
  },
};
</script>

<style lang="scss" scoped></style>
