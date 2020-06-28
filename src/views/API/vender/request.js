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
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  })
    .then(data => data)
    .catch(err => console.log(err));
};
