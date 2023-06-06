/**
 * 路由配置
 */
import Home from "../pages/Home/Home";
import EmptyError from "../pages/EmptyError/EmptyError";
import {Route, Routes} from "react-router-dom";
import React from "react";
import FormDemo from "../pages/SimpleElements/FormDemo/FormDemo";

const RoutesConfig = (
   // 路由出口：路由对应的组件会在这里进行渲染
  <Routes>
    <Route index path={'/'} element={<Home />} />
    <Route path={'/demo/form'} element={<FormDemo />} />
    {/* 未匹配到path路径重定向到首页 */}
    {/*<Route path={'*'} element={<Navigate to={'/'}/>} />*/}
    {/* 未匹配到path路径重定向到空页面 */}
    <Route path={"*"} element={<EmptyError />} errorElement={<EmptyError />}/>
  </Routes>
);

export {RoutesConfig}