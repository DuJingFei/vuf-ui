/*
  @ description：数组通过Id检索，返回索引值，没有则返回 -1 
  @ arr ：目标数组
  @ queryObj 包含Id的查询对象
*/
export const kdfindIndexById = (arr, queryObj) => {
  if (!arr || !(arr instanceof Array)) return
  if (!queryObj || typeof queryObj !== 'object') return
  let attrId = Object.keys(queryObj).filter(attr => 
    attr.indexOf('id') > -1 || attr.indexOf('Id') > -1 || attr.indexOf('ID') > -1 || attr.indexOf('iD') > -1
  )[0];
  if (!attrId) return 
  let Index = -1;
  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i][attrId] !== null && arr[i][attrId] !== undefined && String(arr[i][attrId]) === String(queryObj[attrId]) ) {
      Index = i;
      break
    }
  }
  return Index
}

/*
  @ description：判定对象匹配 
  @ obj ：目标对象
  @ conObj 匹配条件对象
*/
export const kdObjectMatch = (obj, conObj) => {
  if (!obj || !conObj) return 
  if (typeof obj !== 'object' || typeof conObj !== 'object') return
  let match = true;
  for(let attr in conObj) {
    if (!obj[attr] || obj[attr] !== conObj[attr]) {
      match = false;
      break
    }
  }
  return match
}

/*
  @ description：判定对象匹配 
  @ obj ：目标对象
  @ conObj 匹配条件对象
*/
export const kdfindIndex = (arr, queryObj) => {
  if (!arr || !(arr instanceof Array)) return
  if (!queryObj || typeof queryObj !== 'object') return

  let Index = -1;
  for (let i = 0 ; i < arr.length ; i++) {
    if (kdObjectMatch(arr[i], queryObj)) {
      Index = i
      break
    }
  }
  return Index
}

export const cut = (value, max) => {
  if (!value) return '';
  if (typeof value !== 'string') return
  max = parseInt(max, 10);
  if (!max) {
    if (value.match('[图片]')) {
      return value + (' …');
    } else {
      return value;
    }
  }
  if (value.length <= max) return value;
  value = value.substr(0, max);
  return value + (' …');
}

