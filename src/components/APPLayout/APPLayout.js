/**
 * APP 主布局
 */
import './APPLayout.css';
import React from "react";
import APPHeader from "../APPHeader/APPHeader";
import APPContent from "../APPContent/APPContent";
import {FloatButton} from "antd";
import {HomeOutlined} from "@ant-design/icons";

export default class APPLayout extends React.Component {
  render() {
    return (
      <div className={'app-layout'}>
        <APPHeader />
        <APPContent />
        <FloatButton  icon={<HomeOutlined />} href={'/'} tooltip={<div>回到首页</div>}/>
      </div>
    );
  }
}