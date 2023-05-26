/**
 * 没有路由对应的页面
 */
import './EmptyError.css';
import React from "react";

export default class EmptyError extends React.Component {
  render() {
    return (
      <div className={'empty-error-info-parent'}>
        <div className={'empty-error-info empty-error-info-child'}>
          <span>这里什么都没有~(￣▽￣)~</span>
        </div>
      </div>
    );
  }
}