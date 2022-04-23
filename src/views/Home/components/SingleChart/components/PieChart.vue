<template>
  <div id="pie-dom" class="chart"></div>
</template>

<script>
// 组合式API
import useEcharts from "../composables/useEchartsForSingleChart.js";
export default {
  name: "PieChart",
  setup() {
    let option = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
        borderWidth: 0,
        textStyle: {
          color: "white",
        },
      },
      series: [
        {
          name: "Area Mode",
          type: "pie",
          radius: [15, 95],
          center: ["50%", "38%"],
          top: "15%",
          roseType: "area",
          // data: [
          //   { value: 30, name: "rose 1" },
          //   { value: 28, name: "rose 2" },
          // ],
          data: [],
          animationEasing: "cubicInOut",
          animationDuration: 1000,
        },
      ],
    };
    useEcharts(option, "pie-dom", "Pie");
  },
};
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 300px;
}
</style>
