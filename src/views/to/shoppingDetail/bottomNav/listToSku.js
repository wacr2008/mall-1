import { deduplication } from "../../../../components/utils.js";

/**
 * 将sku的list表转为sku表
 * @param data
 * @returns {[]}
 *
 * 虽然我不觉得我以后会用到这段代码，但还是将列表可复用化了，只需要修改k_s的值，就能放N种商品类别
 * 用了很多的temp数组，感觉不太行，定义太多了，以后还是得改
 */

export function listToSku(data) {
  let tempId = []; //存放直接获得的id
  let tempVal = []; //存放直接获得的属性
  let id = []; // 存放格式重新修改过的id
  let val = []; // 存放格式重新修改过的val
  let temp = []; //临时存放数组元素，之后将整个数组结构放入id和val中，形成双数组，方便查询
  let tree = [];
  let name = "";
  const k_s = ["s1", "s2", "s3"];
  data.forEach(e => {
    tempId.push(e.goodsAttrIds.split(","));
    tempVal.push(e.goodsAttrVals.split(","));
  });
  for (let i = 0; i < tempId[0].length; i++) {
    temp = []; //temp一定要初始化清空，因为使用的是push来添加元素
    tempVal.forEach(e => {
      temp.push(e[i]);
    });
    val[i] = temp;
    temp = [];
    tempId.forEach(e => {
      temp.push(e[i]);
    });
    id[i] = temp;
  }
  id.forEach((e, i) => {
    id[i] = deduplication(e);
  });
  val.forEach((e, i) => {
    val[i] = deduplication(e);
  });
  const goodSelectName = data[0].goodsAttrName.split(",");
  goodSelectName.forEach((e, i) => {
    let v = []; //临时数组
    name = e; //把类名赋值给name
    val[i].forEach((t, j) => {
      let shoppingName = t;
      let shoppingId = id[i][j];
      v.push({
        name: shoppingName,
        id: shoppingId
      });
    });
    tree.push({
      k: name,
      v: v,
      k_s: k_s[i]
    });
  });
  return tree;
}

export function getName(idArr, valArr, num) {
  if (typeof num !== "string") {
    num += "";
  }
  for (let i = 0; i < idArr.length; i++) {
    if (num === idArr[i]) {
      return valArr[i];
    }
  }
}