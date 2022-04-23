<template>
  <div id="line-dom" class="chart"></div>
  <!-- <router-link to="/search">xxx</router-link> -->
</template>

<script>
// 组合式API
import useEcharts from "@/composables/useEcharts";

export default {
  name: "LineChart",
  setup() {
    let option = {
      xAxis: {
        type: "category",
        data: [],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [],
          type: "line",
          smooth: "false",
        },
      ],
    };
    useEcharts(option, "line-dom", "Line");
  },
};
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 300px;
}
</style>
