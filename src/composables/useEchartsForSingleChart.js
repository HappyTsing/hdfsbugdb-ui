import { inject, onMounted, onUnmounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { getEchartData } from "@/api/echarts";
require("echarts/theme/macarons");
// chartType in ["Bar","Line","Pie"]
export default function useEcharts(option, domID, chartType) {
  let chart, echartData;
  let $echarts = inject("echarts");
  const store = useStore();
  const dataSource = computed(() => store.state.chooseBar.dataSource);

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
    let typeData = echartData[dataSource];

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

    /* 调整图片距离容器两边的距离 */
    option.grid = {
      left: "4%",
      right: "1%",
    };
    return option;
  }
  watch(dataSource, (newValue) => {
    option = initOption(option, newValue, echartData);
    chart.setOption(option);
  });

  // 因为vuex在mounted之后才开始（似乎是这样），因此初始化时无法获取vuex的echartData，只能直接调用API获取。 其实每次都可以单独调用一次API，只是用vuex的话方便一点。
  // vuex中的数据在@/views/Home/ClassifyVisual/index.js 挂载的时候调用API获取
  // update: 数据不存储到vuex中
  onMounted(() => {
    getEchartData().then((res) => {
      echartData = res.data;
      option = initOption(option, dataSource.value, res.data);
      let chartDom = document.getElementById(domID);
      try {
        chart = $echarts.init(chartDom, "macarons");
        chart.setOption(option);
      } catch (e) {
        // console.log("用户切换页面，无需继续init echart！");
        chart = null;
      }
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
