/**
 * 首页
 */
import './Home.css';
import Base from "../Base/Base";
import {Collapse, Tooltip} from "antd";
import Simple from "../Simple/Simple";
import Complex from "../Complex/Complex";
import Chart from "../Chart/Chart";

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
          <Collapse.Panel key={"simple"} header={this.renderHeaderTitle("简单栗子", null, 1)}>
            <Simple />
          </Collapse.Panel>
          <Collapse.Panel key={"complex"} header={this.renderHeaderTitle("复杂栗子", null, 1)}>
            <Complex />
          </Collapse.Panel>
          <Collapse.Panel key={'chart'} header={this.renderHeaderTitle("图表栗子", null, 1)}>
            <Chart />
          </Collapse.Panel>
        </Collapse>
      </div>
    );
  }
}