export function checkAll(checkGroup) {
  const childrenLength = checkGroup.children.length;
  for (let i = 0; i < childrenLength; i++) {
    if (checkGroup.children[i].$el.ariaChecked === "false") {
      checkGroup.toggleAll(true);
      break;
    } else if (i === childrenLength - 1) {
      //如果到最后仍没有跳出循环则已为全选
      checkGroup.toggleAll();
    }
  }
} //  全选，如果已全选则全部取消全选

export function checkTrueAll(checkGroup, judge) {
  const childrenLength = checkGroup.children.length;
  for (let i = 0; i < childrenLength; i++) {
    if (checkGroup.children[i].$el.ariaChecked === "false") {
      judge.toggle(false);
      break;
    } else if (i === childrenLength - 1) {
      judge.toggle(true);
    }
  }
} //与底部复选框进行绑定，若全选则自动勾选，否则取消勾选
