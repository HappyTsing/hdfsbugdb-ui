import request from "@/api/request.js";

export function getTableDataAll(pagesize, pagenum) {
  return request({
    url: `/issues/all/${pagesize}/${pagenum}`,
    method: "get",
  });
}
