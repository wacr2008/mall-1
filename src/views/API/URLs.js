export const SORT_URL_FIRST =
  "./api/chenzw_fxsc/goods/selfirstlist.action?page=1&limit=10"; //分类页面最左側的一級

export function SORT_URL_SECOND(pid) {
  const url = `./api/chenzw_fxsc/goods/selsecondlist.action?page=1&limit=10&pid=${pid}`;
  return url;
}//分类页面二级目录
