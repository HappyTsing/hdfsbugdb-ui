import request from "@/api/request.js";

export function getTableDataAll(pagesize, pagenum) {
  return request({
    url: `/issues/${pagesize}/${pagenum}`,
    method: "get",
  });
}
