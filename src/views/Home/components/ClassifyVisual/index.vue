<template>
  <ChooseBar></ChooseBar>

  <template v-if="chartValue === 'Pie'">
    <PieChart></PieChart>
  </template>
  <template v-else-if="chartValue === 'Line'">
    <LineChart></LineChart>
  </template>
  <template v-else-if="chartValue === 'Bar'">
    <BarChart></BarChart>
  </template>
</template>

<script>
// 传参进入
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import ChooseBar from "./components/ChooseBar";

import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  components: { PieChart, LineChart, BarChart, ChooseBar },
  name: "ClassifyVisual",
  setup() {
    const store = useStore();
    const dataValue = computed(() => store.state.chooseBar.dataChoosed);
    const chartValue = computed(() => store.state.chooseBar.chartChoosed);

    onMounted(() => {
      store.dispatch("chooseBar/storeData");
    });
    return { chartValue, dataValue };
  },
};
</script>

<style lang="scss" scoped></style>
