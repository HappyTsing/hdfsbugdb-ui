import { inject, onMounted, onUnmounted } from "vue";
import { getEchartData } from "@/api/echarts";
require("echarts/theme/macarons");
export default function useEcharts(option, domID) {
  let chart;
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

  /** 该方法用于构建数组，由于不同的数据需要放在不同的数组的index上，如[0,0,0,10]。即为在index=3的那一列上的数据 */
  function addValueOnIndex(index, value) {
    let array = [];
    for (let step = 0; step < index; step++) {
      array.push(0);
    }
    array.push(value);
    return array;
  }
  function initOption(option, echartData) {
    /* 添加数据 */
    let typeData;

    let typeKeys = Object.keys(echartData);

    // 排序typeKeys，让Significance排在最前面
    // typeKeys = ["Significance", "Component", "Quality", "Consequence", "Code"];

    // 按字母顺序排序，此时Significance在最后一个
    typeKeys.sort();

    // 倒序，此时Significance在第一个
    typeKeys.reverse();
    option.xAxis[0].data = typeKeys;

    option.series = [];
    console.log(typeKeys);

    // 构建 option.series
    for (let typeKey of typeKeys) {
      // typeKey in ["Quality","Code" ... ]
      typeData = echartData[typeKey];

      let index = typeKeys.indexOf(typeKey);
      for (let name in typeData) {
        option.series.push({
          name: name,
          type: "bar",
          stack: "vistors",
          barWidth: "60%",
          animationDuration: 100,
          data: addValueOnIndex(index, typeData[name]),
        });
      }
    }
    return option;
  }

  onMounted(() => {
    getEchartData().then((res) => {
      option = initOption(option, res.data);
      let chartDom = document.getElementById(domID);
      chart = $echarts.init(chartDom, "macarons");
      console.log(option);
      chart.setOption(option);
    });
  });

  onUnmounted(() => {
    destoryChart(chart);
  });

  return { chart, initChart, destoryChart };
}
