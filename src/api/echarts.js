import request from "@/api/request.js";
// import axios from "axios";

export function getEchartData() {
  return request({
    url: "/echart",
    method: "get",
  });
}
