<template>
  <div id="bar-dom" class="chart"></div>
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
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
        },
      ],
    };
    useEcharts(option, "bar-dom");
  },
};
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 300px;
}
</style>
