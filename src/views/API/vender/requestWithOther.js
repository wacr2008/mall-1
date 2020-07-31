import axios from "axios";

const baseOptions = {
  method: "post"
};

export default (options) => {
  return new Promise((resolve, reject) => {
    axios({
      ...baseOptions,
      ...options
    })
      .then(res => {
        const {
          status,
          data: { code }
        } = res;
        resolve(res);
        if (status == 200 && code == 0) {
          resolve(res);
        }
        // else if (status==200 && code == 200){
        //   console.log("查询失败");
        // } else {
        //   console.log("无此数据");
        // }
      })
      .catch(err => {
        reject(err);
      });
  })
    .then(data => data)
    .catch(err => console.log(err));
};
