import { HOME_POSITION } from "./URLs.js";
import request from "./vender/request.js";

export function getPosition() {
  return request({ url: HOME_POSITION }).then(data => {
    return data;
  });
}
