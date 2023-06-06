/**
 * 简单栗子 归集处
 */
import './Simple.css';
import React from "react";
import {Card, Col, Row} from "antd";

export default class Simple extends React.Component {
  render() {
    return (
      <Row gutter={[8,8]} wrap={true}>
        <Col span={6}>
          <Card title="Card title" bordered={false} extra={"Go>>"}>
            Card content
          </Card>
        </Col>
      </Row>
    );
  }
}