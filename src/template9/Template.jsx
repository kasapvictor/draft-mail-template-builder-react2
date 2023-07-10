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
        <div style={{width: '100%', maxWidth: 250}}>
          <SettingsPanel />
        </div>
        <div style={{width: 720, margin: '0 auto'}}>
          <Content/>
        </div>

        <div style={{ width: '100%'}}>
          <BuildRawHtml />
        </div>
      </div>
    </div>
  )
}
