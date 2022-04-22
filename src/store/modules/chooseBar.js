import { getEchartData } from "@/api/echarts";
export default {
  namespaced: true,
  state: {
    // 指定显示哪个类型的表
    chartChoosed: "",

    // 指定数据源
    dataChoosed: "",

    // 数据源的具体数据
    echartData: {},
  },
  mutations: {
    chooseChartType(state, chartType) {
      state.chartChoosed = chartType;
    },
    chooseDataSource(state, dataType) {
      state.dataChoosed = dataType;
    },
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
