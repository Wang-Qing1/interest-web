/**
 * APP 内容
 */
import './APPContent.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import EmptyError from "../../pages/EmptyError/EmptyError";
import Home from "../../pages/Home/Home";

export default class APPContent extends React.Component {
  render() {
    return (
      <div className={"app-content"}>
        {/* 路由出口：路由对应的组件会在这里进行渲染 */}
        <Routes>
          <Route index path={'/'} element={<Home />} />
          {/* 未匹配到path路径重定向到首页 */}
          {/*<Route path={'*'} element={<Navigate to={'/'}/>} />*/}
          {/* 未匹配到path路径重定向到空页面 */}
          <Route path={"*"} element={<EmptyError />} errorElement={<EmptyError />}/>
        </Routes>
      </div>
    );
  }
}