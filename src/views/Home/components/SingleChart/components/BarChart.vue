<template>
  <div id="bar-dom" class="chart"></div>
  <!-- <router-link to="/search">xxx</router-link> -->
</template>

<script>
// 组合式API
import useEcharts from "../composables/useEchartsForSingleChart.js";

export default {
  name: "BarChart",
  setup() {
    let option = {
      xAxis: {
        type: "category",
        data: [],
        // 解决下标间隔显示问题 0强制显示所有标签 1间隔显示
        axisLabel: {
          interval: 0,
        },
        // data: ["Mon","Tue"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [],
          // data: [100,200],
          type: "bar",
          stack: "vistors",
          barWidth: "50%",

          itemStyle: {
            normal: {
              color: "#61bca4",
            },
          },
        },
      ],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
        borderWidth: 0,
        backgroundColor: "rgba(152,152,152,0.9)",
        textStyle: {
          color: "white",
        },
      },
    };
    // 加一个参数，在画之前销毁。
    useEcharts(option, "bar-dom", "Bar");
  },
};
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 300px;
}
</style>
