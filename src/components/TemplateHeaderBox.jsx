import {useStore} from "effector-react";

import {$width, widthChanged} from "../models/model-width.js";

import {WIDTH} from "../constants.js";

export const TemplateHeaderBox = ({title}) => {
  const width = useStore($width);

  return (
    <div className="template-header">
      <h2>{title}</h2>
      <div>/</div>
      <div className="edit-width">
        <label>
          <span>600</span>
          <input type="radio" name="width" checked={width === WIDTH.LG} onChange={() => widthChanged(WIDTH.LG)}/>
        </label>
        <label>
          <span>320</span>
          <input type="radio" name="width" checked={width === WIDTH.SM} onChange={() => widthChanged(WIDTH.SM)}/>
        </label>
      </div>
    </div>
  );
};
