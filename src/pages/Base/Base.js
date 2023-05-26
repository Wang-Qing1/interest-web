/**
 * 基础页面 - 全局页面配置
 */
import './Base.css';
import React from "react";

export default class Base extends React.Component {
  /**
   * 子页面展示内容
   * @returns {JSX.Element}
   */
  renderContent() {
    return (
      <div>
        基础页面
      </div>
    );
  }
  render() {
    return (
      <div className={'app-base-page'}>
        {this.renderContent()}
      </div>
    );
  }
}