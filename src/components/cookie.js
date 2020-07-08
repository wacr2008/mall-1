export function setCookie(key, value) {
  if (value) {
    document.cookie = key + "=" + value;
  }
}

export function getCookie(key) {
  const cookie = document.cookie.split(";");
  for (let i = 0; i < cookie.length; i++) {
    const temp = cookie[i].split("=");
    if (temp[0] === key) {
      return temp[1];
    }
  }
  return "未找到对应cookie";
}

export function removeCookie(key) {
  const cookie = document.cookie.split(";");
  for (let i = 0; i < cookie.length; i++) {
    const temp = cookie[i].split("=");
    if (temp[0] === key) {
      document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  }
}
