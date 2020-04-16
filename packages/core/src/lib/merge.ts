import { isObject } from './is-object'
type Obj = { [key: string]: any }

export function mergeDeep(leftValue: any, rightValue: any) {
  if (isObject(leftValue) && isObject(rightValue)) {
    return mergeWith(mergeDeep, leftValue, rightValue);
  } else {
    return rightValue
  }
}

function _has(key: string, value: any) {
  return Object.prototype.hasOwnProperty.call(value, key);
}

function mergeWith(fn: Function, leftObj: Obj, rightObj: Obj) {
  const result: Obj = {};
  let k: string;

  for (k in leftObj) {
    if (_has(k, leftObj)) {
      result[k] = _has(k, rightObj) ? fn(leftObj[k], rightObj[k]) : leftObj[k];
    }
  }

  for (k in rightObj) {
    if (_has(k, rightObj) && !(_has(k, result))) {
      result[k] = rightObj[k];
    }
  }

  return result;
}
