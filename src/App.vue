<template>
  <HeaderComp></HeaderComp>
  <ContentComp></ContentComp>
  <FooterComp></FooterComp>
</template>
<script>
import { provide } from "vue";
import * as echarts from "echarts";
import axios from "axios";
export default {
  name: "App",
  setup() {
    provide("echarts", echarts);
    provide("axios", axios);
  },
};
</script>
