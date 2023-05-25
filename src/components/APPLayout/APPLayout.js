/**
 * APP 主布局
 */
import './APPLayout.css';
import React from "react";
import APPHeader from "../APPHeader/APPHeader";
import APPContent from "../APPContent/APPContent";

export default class APPLayout extends React.Component {
  render() {
    return (
      <div className={'app-layout'}>
        <APPHeader />
        <APPContent />
      </div>
    );
  }
}