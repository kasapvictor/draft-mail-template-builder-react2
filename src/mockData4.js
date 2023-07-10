import {IMG_SRC} from "./constants";

export const mockData4 = [
    {
    id: 5,
    order: 3,
    tag: 'img',
    content: null,
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
        content: 'Child 8',
        attributes: {
          style: {
            display: 'inline-block',
            margin: 0,
            padding: '20px',
            fontSize: '18px',
            color: '#3b82f6',
            fontFamily: 'Helvetica, sans-serif, normal',
          },
        },
      },
      {
        id: 10,
        order: 3,
        parentId: 7,
        tag: 'div',
        content: 'Child 10',
        attributes: {
          style: {
            display: 'inline-block',
            margin: 0,
            padding: '20px',
            fontSize: '18px',
            color: '#ef4444',
            fontFamily: 'Helvetica, sans-serif, normal',
          },
        },
      },
      {
        id: 9,
        order: 1,
        parentId: 7,
        tag: 'div',
        content: 'Child 9',
        attributes: {
          style: {
            display: 'inline-block',
            margin: 0,
            padding: '20px',
            fontSize: '18px',
            color: '#4ade80',
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

export const sortedMockData = sortDataByOrder(mockData4);

