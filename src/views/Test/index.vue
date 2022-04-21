<template>
  <!-- 高度默认为0，因此必须设置高度 -->
  <div ref="testref" id="myid"></div>
</template>

<script>
import { inject, ref, onMounted } from "vue";

export default {
  name: "TestView",
  setup() {
    const testref = ref();

    // let myChart = $echarts.init(testref.value);
    onMounted(() => {
      let $echarts = inject("echarts");
      let myChart = $echarts.init(testref.value);
      // console.log(this.$refs);
      // console.log($echarts);
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
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };
      myChart.setOption(option);
    });

    console.log(testref.value);
    return { testref };
  },
  // mounted() {
  //   this.init();
  // },
  // methods: {
  //   init() {
  //     let $echarts = inject("echarts");
  //     let myChart = $echarts.init(this.$refs.testref);
  //     // console.log(this.$refs);
  //     // console.log($echarts);
  //     let option = {
  //       xAxis: {
  //         type: "category",
  //         data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  //       },
  //       yAxis: {
  //         type: "value",
  //       },
  //       series: [
  //         {
  //           data: [150, 230, 224, 218, 135, 147, 260],
  //           type: "line",
  //         },
  //       ],
  //     };
  //     myChart.setOption(option);
  //   },
  // },
};
</script>

<style>
#myid {
  width: 500px;
  height: 500px;
}
</style>
