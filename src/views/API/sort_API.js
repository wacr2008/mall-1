import { SORT_URL_FIRST, SORT_URL_SECOND } from "./URLs.js";
import request from "./vender/request.js";

export const getSortData = () => {
  return request({ url: SORT_URL_FIRST }).then(data => {
    // console.log(data);
    return data.data.data;
  });
};

export function getSortDataSe(pidNum) {
  return request({ url: SORT_URL_SECOND(pidNum) }).then(data => {
    console.log(data);
    return data.data.data;
  });
};
