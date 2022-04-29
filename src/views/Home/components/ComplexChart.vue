<template>
  <div id="complex-dom" class="chart"></div>
</template>

<script>
import useEcharts from "@/composables/useEchartsForComplexChart.js";
export default {
  name: "ComplexChart",
  setup() {
    let option = {
      tooltip: {
        trigger: "axis",
        textStyle: {
          color: "white",
        },
        borderWidth: 0,
        backgroundColor: "rgba(152,152,152,0.7)",
        padding: [5, 10],

        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
        // 不显示值为零的内容
        formatter: function (params) {
          var res = `${params[0].name} <br/>`;
          for (const item of params) {
            if (item.value !== 0) {
              res += `<span style="background: ${item.color}; height:10px; width: 10px; border-radius: 50%;display: inline-block;margin-right:10px;"></span> ${item.seriesName} ：${item.value}<br/>`;
            }
          }
          return res;
        },
      },
      grid: {
        top: 10,
        left: "1%",
        right: "1%",
        bottom: "3%",
        containLabel: true,
      },

      xAxis: [
        {
          type: "category",
          axisLabel: {
            interval: 0,
          },
          //   data: ["Quality", "Component", "Consequence", "Code", "Significance"],
          data: [],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisTick: {
            show: false,
          },
        },
      ],
      series: [],

      /*
        series:[{
          name: "Availability",
          type: "bar",
          stack: "vistors",
          barWidth: "60%",
          data: [79],
          animationDuration,
        },
        {
          name: "Reliability",
          type: "bar",
          stack: "vistors",
          barWidth: "60%",
          data: [50],
          animationDuration,
        },]
        */
    };
    useEcharts(option, "complex-dom");

    return {};
  },
};
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 300px;
}
</style>
