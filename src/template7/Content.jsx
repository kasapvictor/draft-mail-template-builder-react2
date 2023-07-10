import React from "react";
import Frame from 'react-frame-component';

import {Styles} from "./Styles";
import {RenderTemplate} from "./RenderTemplate";
import {useStore} from "effector-react";
import {$width} from "../models/model-width.js";

/**
 * Frame: https://github.com/ryanseddon/react-frame-component
 * @returns {JSX.Element}
 * @constructor
 */
export const Content = () => {
  // const width = useStore($width);

  return (
    <>
      {/*<Frame id="frame" style={{width: '100%', maxWidth: width, height: '100%', padding: 0, margin: 0, border: 'none'}}>*/}
      <Styles/>
      <RenderTemplate/>
      {/*</Frame>*/}
    </>
  )
}
