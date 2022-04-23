import { inject, onMounted, onUnmounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { getEchartData } from "@/api/echarts";
require("echarts/theme/macarons");
// chartType in ["Bar","Line","Pie"]
export default function useEchart(option, domID, chartType) {
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
  let chart;

  const store = useStore();
  const dataSource = computed(() => store.state.chooseBar.dataSource);
  const echartData = computed(() => store.state.chooseBar.echartData);

  function initOption(option, dataSource, echartData) {
    // 第一次初始化的时候，也就是mounted的时候，vuex还未被初始化，因此无法拿到echartData的数据，因此需要先备份一次option。
    // 这会造成，页面中的图一开始是空白的。
    let option_back = option;
    try {
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
    } catch (error) {
      return option_back;
    }
  }
  watch(dataSource, (newValue) => {
    // option = initOption(option, newValue, echartData.value);
    // TODO 删除echartDAta
    option = initOption(option, newValue, data_from_api);
    chart.setOption(option);
  });
  let $echarts = inject("echarts");
  let data_from_api;

  // 因为vuex在mounted之后才开始（似乎是这样），因此初始化时无法获取vuex的echartData，只能直接调用API获取。 其实每次都可以单独调用一次API，只是用vuex的话方便一点。
  // vuex中的数据在@/views/Home/ClassifyVisual/index.js 挂载的时候调用API获取
  onMounted(() => {
    getEchartData().then((res) => {
      data_from_api = res.data;
      option = initOption(option, dataSource.value, res.data);
      let chartDom = document.getElementById(domID);
      chart = $echarts.init(chartDom, "macarons");
      chart.setOption(option);
    });
  });

  onUnmounted(() => {
    destoryChart(chart);
  });
  return { chart, initChart, destoryChart };
}
