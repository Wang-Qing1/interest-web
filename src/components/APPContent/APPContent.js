/**
 * APP 内容
 */
import './APPContent.css';
import React from "react";
import {RoutesConfig} from "../../config/RoutesConfig";

export default class APPContent extends React.Component {

  render() {
    return (
      <div className={"app-content"}>
        {RoutesConfig}
      </div>
    );
  }
}