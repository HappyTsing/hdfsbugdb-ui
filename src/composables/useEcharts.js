import { inject, onMounted, onUnmounted } from "vue";
require("echarts/theme/macarons");
export default function useEchart(option, domID) {
  let chart;
  function initChart() {
    let $echarts = inject("echarts");
    var chartDom = document.getElementById(domID);
    chart = $echarts.init(chartDom, "macarons");

    chart.setOption(option);
  }
  function destoryChart(chart) {
    if (chart) {
      chart.dispose();
      chart = null;
    }
  }
  onMounted(() => {
    initChart();
  });

  onUnmounted(() => {
    destoryChart(chart);
  });

  return { initChart, destoryChart };
}
