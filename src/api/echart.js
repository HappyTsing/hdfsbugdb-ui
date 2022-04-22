import request from "@/api/request.js";
// import axios from "axios";

export function getData() {
  return request({
    url: "/test",
    method: "get",
  });
}
