import {IMG_SRC} from "../constants";

const blocks1 = [
  {
    id: 1,
    parent: null,
    children: [2],
    order: 1,
    tag: 'tr',
    props: {
      style: {}
    }
  }, // 0
  {
    id: 2,
    parent: 1,
    children: [3],
    order: 1,
    tag: 'td',
    props: {
      width: '100%',
      height: '100%',
      align: 'center',
      valign: 'top',
      style: {
        fontSize: 0,
      }
    },
  }, // 1
  {
    id: 3,
    parent: 2,
    children: [4, 7],
    rowIndex: 0,
    order: 1,
    type: 'row',
    tag: 'div',
    props: {
      style: {
        backgroundColor: '#bebebe'
      }
    },
  }, // 2

  {
    id: 4,
    parent: 3,
    children: [5, 6],
    order: 1,
    component: 'section',
    props: {
      size: '1/3',
      align: 'center',
      style: {}
    },
  }, // 3
  {
    id: 5,
    parent: 4,
    parentIndex: 3,
    rowIndex: 0,
    children: null,
    order: 1,
    tag: 'h1',
    content: 'Title',
    type: 'text',
    props: {
      style: {
        display: 'block',
        margin: 0,
        padding: 20,
        fontSize: 20,
        color: '#ffffff',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#5533c9',
      },
    }
  }, // 4
  {
    id: 6,
    parent: 4,
    parentIndex: 3,
    rowIndex: 0,
    children: null,
    order: 1,
    tag: 'p',
    content: 'text',
    type: 'text',
    props: {
      style: {
        display: 'block',
        margin: 0,
        padding: 20,
        fontSize: 20,
        color: '#ffffff',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#2f1b75',
      },
    }
  }, // 5

  {
    id: 7,
    parent: 3,
    children: [8, 9],
    order: 1,
    component: 'section',
    props: {
      size: '1/3',
      align: 'center',
      style: {}
    },
  }, // 6
  {
    id: 8,
    parent: 7,
    parentIndex: 6,
    rowIndex: 0,
    children: null,
    order: 1,
    tag: 'h1',
    content: 'Title',
    type: 'text',
    props: {
      style: {
        display: 'block',
        margin: 0,
        padding: 20,
        fontSize: 20,
        color: '#000000',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#eae313',
      },
    }
  }, // 7
  {
    id: 9,
    parent: 7,
    parentIndex: 6,
    rowIndex: 0,
    children: null,
    order: 1,
    tag: 'p',
    content: 'text',
    type: 'text',
    props: {
      style: {
        display: 'block',
        margin: 0,
        padding: 20,
        fontSize: 20,
        color: '#000000',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#b9b40e',
      },
    }
  }, // 8
];

const blocks2 = [
  {
    id: 10,
    parent: null,
    children: [11],
    order: 2,
    tag: 'tr',
    props: {
      style: {}
    }
  }, // 9
  {
    id: 11,
    parent: 10,
    children: [12],
    order: 1,
    tag: 'td',
    props: {
      width: '100%',
      height: '100%',
      align: 'center',
      valign: 'top',
      style: {
        fontSize: 0,
      }
    },
  }, // 10
  {
    id: 12,
    parent: 10,
    children: [13],
    rowIndex: 9,
    order: 1,
    type: 'row',
    tag: 'div',
    props: {
      style: {
        backgroundColor: '#838383'
      }
    },
  }, // 11

  {
    id: 13,
    parent: 12,
    children: [14, 15],
    order: 1,
    component: 'section',
    props: {
      size: '1/3',
      align: 'center',
      style: {}
    },
  }, // 12
  {
    id: 14,
    parent: 4,
    parentIndex: 12,
    rowIndex: 9,
    children: null,
    order: 1,
    tag: 'h1',
    content: 'Title',
    type: 'text',
    props: {
      style: {
        display: 'block',
        margin: 0,
        padding: 20,
        fontSize: 20,
        color: '#ffffff',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#ff4300',
      },
    }
  }, // 13
  {
    id: 15,
    parent: 13,
    parentIndex: 12,
    rowIndex: 9,
    children: null,
    order: 1,
    tag: 'p',
    content: 'text',
    type: 'text',
    props: {
      style: {
        display: 'block',
        margin: 0,
        padding: 20,
        fontSize: 20,
        color: '#ffffff',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#b12f00',
      },
    }
  }, // 14
]


const header = [
  {
    id: 1,
    parent: null,
    children: [2],
    order: 3,
    component: 'tr',
    props: {
      style: {}
    },
  },
  {
    id: 2,
    component: 'td',
    order: 1,
    parent: 1,
    props: {
      width: '100%',
      height: '100%',
      valign: 'top',
      style: {
        backgroundColor: '#000000'
      }
    },
    children: [3],
  },
  {
    id: 3,
    component: 'column',
    parent: 2,
    order: 1,
    props: {
      size: '1/1',
      align: 'center',
      style: {}
    },
    children: [4],
  },
  {
    id: 4,
    order: 1,
    tag: 'h1',
    parent: 3,
    children: null,
    content: 'Hello, John Doe!',
    props: {
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
];

const cta = [
  {
    id: 5,
    parent: null,
    component: 'tr',
    children: [6],
    order: 4,
    props: {
      style: {}
    },
  },
  {
    id: 6,
    component: 'td',
    order: 1,
    parent: 5,
    props: {
      width: '100%',
      height: '100%',
      align: 'center',
      valign: 'top',
      style: {}
    },
    children: [7],
  },
  {
    id: 7,
    component: 'column',
    parent: 6,
    order: 1,
    props: {
      size: '1/1',
      align: 'center',
      style: {}
    },
    children: [8],
  },
  {
    id: 8,
    order: 1,
    tag: 'div',
    parent: 7,
    children: null,
    content: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    props: {
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
];

const content = [
  {
    id: 9,
    parent: null,
    children: [10],
    order: 5,
    component: 'tr',
    props: {
      style: {
        backgroundColor: '#47daff' // фон секции
      }
    },
  },
  {
    id: 10,
    component: 'td',
    order: 1,
    parent: 9,
    props: {
      width: '100%',
      height: '100%',
      align: 'center',
      valign: 'top',
    },
    children: [11, 13],
  },
  {
    id: 11,
    component: 'column',
    parent: 10,
    order: 1,
    props: {
      size: '1/2',
      align: 'center',
    },
    children: [24],
  },
  {
    id: 24,
    order: 1,
    tag: 'div',
    content: null,
    parent: 11,
    children: [12],
    props: {
      style: {
        display: 'block',
        padding: '20px',
        fontSize: 16,
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#ff6347'
      },
    },
  },
  {
    id: 12,
    order: 1,
    tag: 'img',
    content: null,
    parent: 11,
    children: null,
    props: {
      src: IMG_SRC[0],
      alt: "img",
      style: {
        display: 'block',
        width: '100%',
        height: 'auto',
        margin: 0,
      },
    },
  },
  {
    id: 13,
    component: 'column',
    parent: 10,
    order: 2,
    props: {
      size: '1/2',
      align: 'center',
      style: {
        backgroundColor: '#fefefe', // фон колонки
      }
    },
    children: [14],
  },
  {
    id: 14,
    order: 1,
    tag: 'div',
    content: null,
    parent: 13,
    children: [15, 16],
    props: {
      style: {
        display: 'block',
        fontSize: 16,
        color: '#333333',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#fefefe',
      },
    },
  },
  {
    id: 15,
    order: 1,
    tag: 'div',
    parent: 14,
    children: null,
    content: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised',
    props: {
      style: {
        display: 'block',
        margin: '0 0 15px 0',
        padding: '20px',
        fontSize: 16,
        color: '#333333',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#fefefe',
      },
    },
  },
  {
    id: 16,
    order: 2,
    tag: 'a',
    parent: 14,
    children: null,
    content: 'Check this out!',
    props: {
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
]

const footer = [
  {
    id: 17,
    parent: null,
    children: [18],
    order: 6,
    component: 'tr',
    props: {
      style: {}
    },
  },
  {
    id: 18,
    component: 'td',
    order: 1,
    parent: 17,
    props: {
      width: '100%',
      height: '100%',
      valign: 'top',
      style: {}
    },
    children: [19],
  },
  {
    id: 19,
    component: 'column',
    parent: 18,
    order: 1,
    props: {
      size: '1/1',
      align: 'center',
      style: {}
    },
    children: [20],
  },
  {
    id: 20,
    order: 1,
    tag: 'div',
    content: null,
    parent: 19,
    children: [21, 22, 23],
    props: {
      style: {
        display: 'block',
        margin: '0px',
        padding: '20px',
        fontSize: 16,
        color: '#ffffff',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#676767',
      },
    },
  },
  {
    id: 21,
    order: 2,
    parent: 20,
    tag: 'div',
    content: 'Child 8',
    props: {
      style: {
        display: 'inline-block',
        margin: 0,
        padding: '20px',
        fontSize: '18px',
        color: '#3b82f6',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#000000'
      },
    },
  },
  {
    id: 22,
    order: 3,
    parent: 20,
    tag: 'div',
    content: 'Child 10',
    props: {
      style: {
        display: 'inline-block',
        margin: 0,
        padding: '20px',
        fontSize: '18px',
        color: '#ef4444',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#000000'
      },
    },
  },
  {
    id: 23,
    order: 1,
    parent: 20,
    tag: 'div',
    content: 'Child 9',
    props: {
      style: {
        display: 'inline-block',
        margin: 0,
        padding: '20px',
        fontSize: '18px',
        color: '#4ade80',
        fontFamily: 'Helvetica, sans-serif, normal',
        backgroundColor: '#000000'
      },
    },
  },
]

export const data = [
  ...blocks1,
  ...blocks2,
  // ...blocks3,
  // ...header,
  // ...cta,
  // ...content,
  // ...footer,
]
