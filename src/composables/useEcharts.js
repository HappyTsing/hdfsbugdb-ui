import { inject, onMounted, onUnmounted, computed, watch } from "vue";
import { getEchartData } from "@/api/echarts";
require("echarts/theme/macarons");
// chartType in ["Bar","Line","Pie"]
export default function useEchart(option, domID, chartType) {
  let chart, echartData;
  let $echarts = inject("echarts");

  function initChart(option) {
    let $echarts = inject("echarts");
    var chartDom = document.getElementById(domID);
    let chart = $echarts.init(chartDom, "macarons");

    chart.setOption(option);
    return chart;
  }
  function destoryChart(chart) {
    if (chart) {
      chart.dispose();
      chart = null;
    }
  }

  function initOption(option, dataSource, echartData) {
    /* 添加数据 */
    let typeData = echartData[dataSource.toLowerCase()];

    if (chartType === "Bar" || chartType === "Line") {
      let xAxisData = Object.keys(typeData);
      let seriesData = Object.values(typeData);
      option.xAxis.data = xAxisData;
      option.series[0].data = seriesData;
    } else if (chartType === "Pie") {
      let seriesData = [];
      for (let name in typeData) {
        seriesData.push({
          value: typeData[name],
          name: name,
        });
      }
      option.series[0].data = seriesData;
    }

    return option;
  }

  onMounted(() => {
    getEchartData().then((res) => {
      echartData = res.data;
      option = initOption(option, dataSource.value, res.data);
      let chartDom = document.getElementById(domID);
      chart = $echarts.init(chartDom, "macarons");
      chart.setOption(option);
    });
  });

  onUnmounted(() => {
    destoryChart(chart);
  });

  /* 计划是激活的时候，重新画一遍。但是似乎在这里拿不到变量，因此也无法重新画了。此处只能不开启 <keep-alvie></keep-alvie> 来实现这种功能了。坏处是每次都要请求数据。
  onActivated(() => {
    // option = initOption(option, dataSource.value, echartData);
    // chart.setOption(option);
  });
  */
  return { chart, initChart, destoryChart };
}
