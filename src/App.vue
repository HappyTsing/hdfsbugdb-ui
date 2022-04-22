<template>
  <HeaderComp></HeaderComp>
  <ContentComp></ContentComp>
  <FooterComp></FooterComp>
</template>

<script>
import { provide } from "vue";
import * as echarts from "echarts";
export default {
  name: "App",
  setup() {
    provide("echarts", echarts);
  },
};
</script>
