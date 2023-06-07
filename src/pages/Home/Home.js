/**
 * 首页
 */
import './Home.css';
import Base from "../Base/Base";
import {Card, Col, Row} from "antd";

export default class Home extends Base {
  renderContent() {
    return (
      <div className={'app-home'}>
        <Row gutter={[16,16]} style={{marginBottom: 8}}>
          <Col span={6}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
        <Row gutter={[16,16]}>
          <Col span={6}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}