import { getEchartData } from "@/api/echarts";
export default {
  namespaced: true,
  state: {
    // 指定显示哪个类型的表
    chartType: "Bar",

    // 指定数据源
    dataSource: "Code",

    // 数据源的具体数据
    echartData: {},

    // xAxisData: ["Mon", "Tue", "Wed"],
    // seriesData: [123, 222, 444],
  },
  mutations: {
    chooseChartType(state, chartType) {
      state.chartType = chartType;
    },
    chooseDataSource(state, dataSource) {
      state.dataSource = dataSource;
    },

    // 获取所有的数据
    storeData(state, data) {
      state.echartData = data;
    },
  },
  actions: {
    storeData(context) {
      return new Promise((resolve, reject) => {
        getEchartData()
          .then((res) => {
            context.commit("storeData", res.data);
            resolve(res);
          })
          .catch((err) => reject(err));
      });
    },
  },
};
