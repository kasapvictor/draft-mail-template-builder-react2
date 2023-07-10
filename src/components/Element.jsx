import React, {createElement, cloneElement, memo} from "react";
import {changedActiveIndexElement} from "../models/model-mock-data4.js";

const selfCloseElements = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

export const Element = ({ tag = 'div', content = null, childElement = null, ...props}) => {
  const selfCloseElement = selfCloseElements.has(tag.toLowerCase());

  return (
    createElement(tag, { ...props},
      selfCloseElement ? null :
        <>
          {content}
          {childElement}
        </>
    )
  );
};

const renderElement = (element) => {
  const { id, tag, content, attributes, children } = element;
  const childElement = (children && children.length) && children.map((child) => renderElement(child))

  return (
    <Element
      key={id}
      tag={tag}
      {...attributes}
      content={content}
      onClick={(event)=>changedActiveIndexElement({event, id})} childElement={childElement}
    />
  )
}

export const renderElements = (elements) => {
  return elements.map((element) => renderElement(element));
}
