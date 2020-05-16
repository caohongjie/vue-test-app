import { request } from "@network/request";

// 获取首页信息
export function getHomeInfo(params) {
  console.log(params);
  const config = {
    url: "/api/homeApi",
    method: "get",
    ...params,
  };
  return request(config);
}
