/**
 * 简单栗子 归集处
 */
import './Simple.css';
import React from "react";
import {Card, Col, Row} from "antd";
import {SimpleElements} from "../../config/HomeContentConfig";
import {NavLink} from "react-router-dom";
import {DoubleRightOutlined} from "@ant-design/icons";

export default class Simple extends React.Component {
  renderContent(data) {
    if (!data || !Array.isArray(data)) {
      return null;
    }
    return data.map((item, index) => {
      return (
        <Col span={6} key={index}>
          <Card
            title={item.title}
            bordered={false}
            extra={<NavLink to={item.path}>Go<DoubleRightOutlined /></NavLink>}
          >
            {item.desc}
          </Card>
        </Col>
      );
    })
  }

  render() {
    return (
      <Row gutter={[8,8]} wrap={true}>
        {this.renderContent(SimpleElements)}
      </Row>
    );
  }
}