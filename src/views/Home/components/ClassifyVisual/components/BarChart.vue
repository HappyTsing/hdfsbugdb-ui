<template>
  <div id="bar-dom" class="chart"></div>
  <!-- <router-link to="/search">xxx</router-link> -->
</template>

<script>
// 组合式API
import useEcharts from "@/composables/useEcharts";

export default {
  name: "BarChart",
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
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
        },
      ],
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
