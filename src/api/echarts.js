import request from "@/api/request.js";

export function getEchartData() {
  return request({
    url: "/echart",
    method: "get",
  });
}
