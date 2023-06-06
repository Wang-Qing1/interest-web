/**
 * APP 头部菜单栏-固定位置
 */
import './APPHeader.css';
import React from "react";
import {Modal, QRCode, Tooltip} from "antd";
import {GlobalConfig} from "../../config/GlobalConfig";
import {
  ExclamationCircleOutlined,
  GithubOutlined,
  QqOutlined,
} from "@ant-design/icons";

export default class APPHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      showInfoModal: false,
    }
  }

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
    let {showInfoModal} = this.state || {};
    return (
      <>
        <div id={'app-header'} className={'app-header'}>
          <div className={'app-logo'}>
            <div className={'app-title'}>{GlobalConfig.title}</div>
          </div>
          <div className={'app-other'}>
            <Tooltip title={"GitHub"}>
              {/* 新开页面 */}
              <GithubOutlined className={'app-other-icons'} onClick={() => window.open("https://www.baidu.com")}/>
            </Tooltip>
            <Tooltip color={"#FFFFFF"} title={() => this.renderQRCode("QQ", "https://img2.baidu.com/it/u=359402080,1075457947&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500")}>
              <QqOutlined className={'app-other-icons'}/>
            </Tooltip>
            <Tooltip title={"平台信息"}>
              <ExclamationCircleOutlined className={'app-other-icons'} onClick={() => this.setState({showInfoModal: !showInfoModal})} />
            </Tooltip>
          </div>
        </div>
        <Modal
          title="平台信息介绍"
          open={showInfoModal}
          footer={true}
          onCancel={() => this.setState({showInfoModal: !showInfoModal})}
        >
          <p>这是一个用于练手的前端平台应用</p>
        </Modal>
      </>
    );
  }
}