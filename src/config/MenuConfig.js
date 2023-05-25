import {getUUID} from "../tools/CommonTools";

/**
 * 头部菜单栏配置
 */
const HeaderMenu = [
  {
    key: getUUID("menu", 6),
    title: '简单',
  },
  {
    key: getUUID("menu", 6),
    title: '复杂',
  },
  {
    key: getUUID("menu", 6),
    title: '图表',
  },
];

export {HeaderMenu};