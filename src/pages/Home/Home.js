/**
 * 首页
 */
import './Home.css';
import Base from "../Base/Base";

export default class Home extends Base {

  renderContent() {
    return (
      <div className={'app-home'}>
        首页
      </div>
    );
  }
}