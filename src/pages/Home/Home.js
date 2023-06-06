/**
 * 首页
 */
import './Home.css';
import Base from "../Base/Base";
import {Badge, Collapse, Tooltip} from "antd";
import Simple from "../../components/Simple/Simple";
import Complex from "../../components/Complex/Complex";
import Chart from "../../components/Chart/Chart";
import {ChartElements, ComplexElements, SimpleElements} from "../../config/HomeContentConfig";

export default class Home extends Base {

  renderHeaderTitle(title, desc, size) {
    return (
      <Tooltip title={desc} placement={"topLeft"}>
        <Badge count={size} size={"small"} offset={[10,4]}>
          {title}
        </Badge>
      </Tooltip>
    );
  }

  renderContent() {
    return (
      <div className={'app-home'}>
        <Collapse defaultActiveKey={"simple"} ghost={true} accordion>
          <Collapse.Panel key={"simple"} header={this.renderHeaderTitle("简单栗子", null, SimpleElements.length)}>
            <Simple />
          </Collapse.Panel>
          <Collapse.Panel key={"complex"} header={this.renderHeaderTitle("复杂栗子", null, ComplexElements.length)}>
            <Complex />
          </Collapse.Panel>
          <Collapse.Panel key={'chart'} header={this.renderHeaderTitle("图表栗子", null, ChartElements.length)}>
            <Chart />
          </Collapse.Panel>
        </Collapse>
      </div>
    );
  }
}