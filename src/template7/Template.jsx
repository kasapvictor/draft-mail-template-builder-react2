import React from "react";

import {Content} from './Content'
import {BuildRawHtml} from "./BuildRawHtml";
import {SettingsPanel} from "./SettingsPanel";

export const Template = () => {

  return (
    <div style={{height: "100%"}}>
      <div className="template-header">
        <h2>Template #7</h2>
      </div>
      <div style={{display: "flex", gap: 20, flexWrap: "wrap"}}>
        <div style={{flex: '15%'}}>
          <SettingsPanel />
        </div>
        <div style={{flex: '80%'}}>
          <Content/>
        </div>

        <div style={{flex: 1, width: '100%'}}>
          <BuildRawHtml />
        </div>
      </div>
    </div>
  )
}
