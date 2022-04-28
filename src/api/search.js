import request from "@/api/request.js";

export function searchIssuesByTypeValue(
  pagesize,
  pagenum,
  searchType,
  searchValue
) {
  return request({
    url: `/issues/search/${pagesize}/${pagenum}/${searchType}/${searchValue}`,
    method: "get",
  });
}

// 返回单个数据
export function searchIssueByIssueKey(issueKeyValue) {
  return searchIssuesByTypeValue(1, 1, "IssueKey", issueKeyValue);
}
