import request from "@/api/request.js";

export function getEchartData() {
  return request({
    url: "/classify",
    method: "get",
  });
}
