/**
 * APP 头部菜单栏-固定位置
 */
import './APPHeader.css';
import React from "react";
import {message, Tooltip} from "antd";
import {GlobalConfig} from "../../config/GlobalConfig";
import {
  ExclamationCircleOutlined,
  GithubOutlined,
  QqOutlined,
  WechatOutlined,
  WeiboCircleOutlined
} from "@ant-design/icons";

export default class APPHeader extends React.Component {
  render() {
    return (
      <div className={'app-header'}>
        <div className={'app-logo'}>
          <div className={'app-title'}>{GlobalConfig.title}</div>
        </div>
        <div className={'app-other'}>
          <Tooltip title={"GitHub"}>
            <GithubOutlined className={'app-other-icons'} onClick={() => message.info("GitHub")}/>
          </Tooltip>
          <Tooltip title={'WeiBo'}>
            <WeiboCircleOutlined className={'app-other-icons'} onClick={() => message.info("WeiBo")}/>
          </Tooltip>
          <Tooltip title={'WeChat'}>
            <WechatOutlined className={'app-other-icons'} onClick={() => message.info("WeChat")}/>
          </Tooltip>
          <Tooltip title={'QQ'}>
            <QqOutlined className={'app-other-icons'} onClick={() => message.info("QQ")}/>
          </Tooltip>
          <Tooltip title={"平台信息"}>
            <ExclamationCircleOutlined className={'app-other-icons'} onClick={() => message.info("Info")} />
          </Tooltip>
        </div>
      </div>
    );
  }
}