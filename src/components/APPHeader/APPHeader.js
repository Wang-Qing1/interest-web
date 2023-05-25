/**
 * APP 头部菜单栏-固定位置
 */
import './APPHeader.css';
import React from "react";
import {message, QRCode, Tooltip} from "antd";
import {GlobalConfig} from "../../config/GlobalConfig";
import {
  ExclamationCircleOutlined,
  GithubOutlined,
  QqOutlined,
  WechatOutlined,
  WeiboCircleOutlined
} from "@ant-design/icons";

export default class APPHeader extends React.Component {
  /**
   * 返回二维码
   */
  renderQRCode(value, icon) {
    return (
      <QRCode
        value={value || "-"}
        errorLevel={"H"}
        icon={icon || undefined}
      />
    );
  }

  render() {
    return (
      <div className={'app-header'}>
        <div className={'app-logo'}>
          <div className={'app-title'}>{GlobalConfig.title}</div>
        </div>
        <div className={'app-other'}>
          <Tooltip title={"GitHub"}>
            {/* 新开页面 */}
            <GithubOutlined className={'app-other-icons'} onClick={() => window.open("https://www.baidu.com")}/>
          </Tooltip>
          <Tooltip color={"#FFFFFF"} title={() => this.renderQRCode("WebBo", "https://img0.baidu.com/it/u=3336255710,1936944088&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500")}>
            <WeiboCircleOutlined className={'app-other-icons'} onClick={() => message.info("WeiBo")}/>
          </Tooltip>
          <Tooltip color={"#FFFFFF"} title={() => this.renderQRCode("WeChat", "https://img1.baidu.com/it/u=3582852405,4232068154&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500")}>
            <WechatOutlined className={'app-other-icons'} onClick={() => message.info("WeChat")}/>
          </Tooltip>
          <Tooltip color={"#FFFFFF"} title={() => this.renderQRCode("QQ", "https://img2.baidu.com/it/u=359402080,1075457947&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500")}>
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