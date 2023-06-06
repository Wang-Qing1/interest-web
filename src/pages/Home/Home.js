/**
 * 首页
 */
import './Home.css';
import Base from "../Base/Base";
import {Card, Col, Collapse, Row, Tooltip} from "antd";

export default class Home extends Base {

  renderHeaderTitle(title, desc, size) {
    return (
      <Tooltip title={desc} placement={"topLeft"}>
        <div>{title}</div>
      </Tooltip>
    );
  }

  renderContent() {
    return (
      <div className={'app-home'}>
        <Collapse defaultActiveKey={"simple"} ghost={true}>
          <Collapse.Panel key={"simple"} header={this.renderHeaderTitle("简单页面", null, 1)}>
            <Row gutter={[8,8]} wrap={true}>
              <Col span={6}>
                <Card title="Card title" bordered={false} extra={"Go>>"}>
                  Card content
                </Card>
              </Col>
            </Row>
          </Collapse.Panel>
          <Collapse.Panel key={"complex"} header={this.renderHeaderTitle("复杂页面", null, 1)}>

          </Collapse.Panel>
          <Collapse.Panel key={'chart'} header={this.renderHeaderTitle("图表示例", null, 1)}>

          </Collapse.Panel>
        </Collapse>
      </div>
    );
  }
}