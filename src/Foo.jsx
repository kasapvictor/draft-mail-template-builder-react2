import {IMG_SRC} from "./constants.js";
import React, {createElement} from "react";
import {changedActiveIdElement} from "./models/model-mock-data4.js";

export const mockData = [
  {
    id: 5,
    order: 3,
    tag: 'img',
    attributes: {
      src: IMG_SRC[0],
      alt: "img",
      style: {
        display: 'block',
        width: '100%',
        height: 'auto',
        margin: 0,
        padding: '20px',
        fontSize: 18,
        color: '#ffffff',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#ffffff',
      },
    },
  },
  {
    id: 2,
    order: 4,
    tag: 'div',
    content: null,
    attributes: {
      style: {
        display: 'block',
        padding: '0',
        fontSize: 16,
        color: '#333333',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#fefefe',
      },
    },
    children: [
      {
        id: 6,
        order: 2,
        tag: 'a',
        parentId: 4,
        content: 'Check this out!',
        attributes: {
          style: {
            display: 'inline-block',
            margin: '0 0 0px 0',
            padding: '10px',
            fontSize: 16,
            color: '#1e40af',
            fontFamily: 'Helvetica, sans-serif, normal',
            backgroundColor: '#dbeafe',
            border: '1px solid #1e40af'
          },
        }
      },
      {
        id: 5,
        order: 1,
        parentId: 4,
        tag: 'div',
        content: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised',
        attributes: {
          style: {
            display: 'block',
            margin: '0 0 15px 0',
            padding: '0',
            fontSize: 16,
            color: '#333333',
            fontFamily: 'Helvetica, sans-serif, normal',
            backgroundColor: '#fefefe',
          },
        },
      },
    ]
  },
  {
    id: 7,
    order: 5,
    tag: 'div',
    content: null,
    attributes: {
      style: {
        display: 'block',
        margin: '0px',
        padding: '20px',
        fontSize: 16,
        color: '#ffffff',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#111111',
      },
    },
    children: [
      {
        id: 8,
        order: 2,
        parentId: 7,
        tag: 'div',
        content: 'Footer Child 3',
        attributes: {
          style: {
            display: 'inline-block',
            margin: 0,
            padding: '20px',
            fontSize: '18px',
            color: '#ffffff',
            fontFamily: 'Helvetica, sans-serif, normal',
          },
        },
      },
      {
        id: 10,
        order: 3,
        parentId: 7,
        tag: 'div',
        content: 'Footer Child 2',
        attributes: {
          style: {
            display: 'inline-block',
            margin: 0,
            padding: '20px',
            fontSize: '18px',
            color: '#ffffff',
            fontFamily: 'Helvetica, sans-serif, normal',
          },
        },
      },
      {
        id: 9,
        order: 1,
        parentId: 7,
        tag: 'div',
        content: 'Footer Child 1',
        attributes: {
          style: {
            display: 'inline-block',
            margin: 0,
            padding: '20px',
            fontSize: '18px',
            color: '#ffffff',
            fontFamily: 'Helvetica, sans-serif, normal',
          },
        },
      },
    ]
  },
  {
    id: 4,
    order: 1,
    tag: 'h1',
    content: 'Hello, John Doe!',
    attributes: {
      style: {
        display: 'block',
        margin: 0,
        padding: 20,
        fontSize: 32,
        color: '#ffffff',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#333333',
      },
    }
  },
  {
    id: 1,
    order: 2,
    tag: 'div',
    content: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    attributes: {
      style: {
        display: 'block',
        margin: 0,
        padding: 40,
        fontSize: 18,
        color: '#ffffff',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#666666',
      },
    },
  },
]

const sortDataByOrder = (unsortedData) => {
  const copyUnsortedData = JSON.parse(JSON.stringify(unsortedData));
  const sortedData = copyUnsortedData.sort((a, b) => a.order - b.order);

  sortedData.forEach(item => {
    if (item.children && item.children.length) {
      item.children = sortDataByOrder(item.children);
    }
  });

  return sortedData;
}

export const sortedMockData = sortDataByOrder(mockData);

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
  const { id, tag, content, attributes } = element;

  return <Element key={id} tag={tag} content={content} {...attributes} onClick={(event)=>changedActiveIdElement({event, id})}/>
}

export const renderElements = (elements) => {
  return elements.map(element => {
    if (element.children && element.children.length) {
      return element.children.map((child) => renderElement(child));
    }

    return renderElement(element)
  });
}
