<template>
  <div id="line-dom" class="chart"></div>
  <!-- <router-link to="/search">xxx</router-link> -->
</template>

<script>
// 组合式API
import useEcharts from "../composables/useEchartsForSingleChart.js";

export default {
  name: "LineChart",
  setup() {
    let option = {
      xAxis: {
        type: "category",
        data: [],
        // data: ["Mon","Tue"],
        axisLabel: {
          interval: 0,
        },
      },

      yAxis: {
        axisTick: {
          show: false,
        },
      },
      series: [
        {
          data: [],
          // data: [100,200],
          type: "line",
          smooth: "false",
          animationDuration: 1200,
          animationEasing: "cubicInOut",
          itemStyle: {
            normal: {
              color: "#3888fa",
              lineStyle: {
                color: "#3888fa",
                width: 2,
              },
              areaStyle: {
                color: "#f3f8ff",
              },
            },
          },
        },
      ],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
        padding: [5, 10],
        borderWidth: 0,
        backgroundColor: "rgba(152,152,152,0.9)",
        textStyle: {
          color: "white",
        },
      },
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
