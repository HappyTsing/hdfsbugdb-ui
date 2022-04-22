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
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
          smooth: "false",
        },
      ],
    };
    useEcharts(option, "line-dom");
  },
};
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 300px;
}
</style>
