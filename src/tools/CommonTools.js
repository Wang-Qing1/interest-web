/**
 * 公用工具类
 */
import {nanoid} from "nanoid";

/**
 * 获取UUID 【Nanoid 工具】
 * @param prefix 前缀
 * @param size   位数（默认为6位字符）
 * @returns {string}
 */
function getUUID(prefix, size) {
  if (!size || Number(size) <= 0) {
    size = 6;
  }
  if (prefix) {
    return `${prefix}_${nanoid(size)}`;
  }
  return nanoid(size);
}

export { getUUID }