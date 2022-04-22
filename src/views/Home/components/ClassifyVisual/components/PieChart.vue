<template>
  <div id="pie-dom" class="chart"></div>
</template>

<script>
// 组合式API
import useEcharts from "@/composables/useEcharts";
export default {
  name: "PieChart",
  setup() {
    let option = {
      title: {
        text: "Quality",
        left: "center",
      },
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
          top: "25%",
          roseType: "area",
          data: [
            { value: 30, name: "rose 1" },
            { value: 28, name: "rose 2" },
            { value: 26, name: "rose 3" },
            { value: 24, name: "rose 4" },
            { value: 22, name: "rose 5" },
            { value: 20, name: "rose 6" },
            { value: 18, name: "rose 7" },
            { value: 16, name: "rose 8" },
          ],
          animationEasing: "cubicInOut",
          animationDuration: 2600,
        },
      ],
    };
    useEcharts(option, "pie-dom");
  },
};
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 300px;
}
</style>
