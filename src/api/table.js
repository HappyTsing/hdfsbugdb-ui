import request from "@/api/request.js";

export function getTableDataAll() {
  return request({
    url: "/table/all",
    method: "get",
  });
}
