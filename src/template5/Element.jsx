import React, {createElement, cloneElement, memo, useState} from "react";
import {useStore} from "effector-react";

import { Column } from "./Column";
import { Td } from "./Td";
import { Tr } from "./Tr";

import {$activeElementIndex, $elementsStores, setActiveIndex} from "./store";
import {Section} from "./Section.jsx";

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

const Component = ({component, children, ...props}) => {
  const components = {
    tr: Tr,
    td: Td,
    column: Column, // у нас будут секции а не колонки
    section: Section,
  }

  const ComponentElement = components[component];

  return <ComponentElement {...props}>{children}</ComponentElement>;
}

const styles = {
  wrapper: {
    position: 'relative',
    // boxShadow: '0 0 0px 1px rgb(0 13 255), 0 0 0px 1.15px rgb(255 255 255)',
  },
  name: {
    padding: '0px 8px 0px 8px',
    position: 'absolute',
    fontSize: '.75rem',
    lineHeight: 1.2,
    top: -14,
    left: 0,
    color: '#ffffff',
    backgroundColor: 'rgb(0 13 255)',
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
  }
}



export const Element = ({ element, treeComponent, onClick }) => {
  const Tree = treeComponent;
  const [index, children] = element;
  const item = useStore($elementsStores[index]);
  const activeElementIndex = useStore($activeElementIndex);
  const [isHovered, setIsHovered] = useState(false);

  const isActive = activeElementIndex === index;

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const wrapperStyle = {
    ...styles.wrapper,
    // boxShadow: isHovered || isActive ?  '0 0 0px 1px rgb(0 13 255), 0 0 0px 1.15px rgb(255 255 255)' : '',
    outline: isHovered || isActive ?  '1px solid rgb(0 13 255)' : '',
    outlineOffset: isHovered || isActive ?  '-1px' : '',
    zIndex: isHovered || isActive ? 10 : 5,
  };

  const nameStyle = {
    ...styles.name,
    opacity: isHovered || isActive ? 1 : 0,
    zIndex: isHovered || isActive ? 20 : -10,
  }

  // console.log(item);

  const { component, tag, props, content, type } = item;
  const selfCloseElement = tag ? selfCloseElements.has(tag.toLowerCase()) : false;

  if (component) {
    return (
      <Component component={component} {...props}>
        <Tree indexTree={children} />
      </Component>
    )
  }

  const node =
    createElement(tag, { ...props }, selfCloseElement ? null :
      <>
        {content}
        {children && <Tree indexTree={children} />}
      </>
    )

  const isNotSelectedNode = tag === 'tr' || tag === 'td';

  // FIXME этот элемент попадает в итоговый html, надо его удалить оттуда
  //  если бэкенд будет билдить на своей стороне шаблон то можно забить

  return isNotSelectedNode ? node :
        <div className="select-element"
             style={wrapperStyle}
             onClick={onClick}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
        >
          {node}
          <span style={nameStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
          >{type}</span>
        </div>

  // return isNotSelectedNode ? node : node;

};
