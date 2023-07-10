import {IMG_SRC} from "../constants";


export const tree = {
  root: { id: 'root', parent: null, children: ['canvas'] },
  canvas: { id: 'canvas', parent: 'root', children: ['container'] },
  container: { id: 'container', parent: 'canvas', children: ['table'] },
  table: { id: 'table', parent: 'container', children: ['tbody'] },
  tbody: { id: 'tbody', parent: 'table', children: ['row1', 'row2'] },
  row1: { id: 'row1', parent: 'tbody', name: 'header', children: ['td1'] },
  row2: { id: 'row2', parent: 'tbody', name: 'cta', children: ['td2'] },
  td1: { id: 'td1', parent: 'td1', children: ['section1'] },
  td2: { id: 'td2', parent: 'row2', children: ['section2'] },
  section1: { id: 'section1', parent: 'td1',  children: ['block1'] },
  section2: { id: 'section2', parent: 'td2', children: ['block2', 'block3'] },
  block1: { id: 'block1', parent: 'section1', children: ['title1', 'subtitle1'] },
  block2: { id: 'block2', parent: 'section2', children: ['text1', 'link1'] },
  block3: { id: 'block3', parent: 'section2', children: ['img1'] },
  title1: { id: 'title1', parent: 'block1', },
  subtitle1: { id: 'subtitle1', parent: 'block1', },
  text1: { id: 'text1', parent: 'block2', },
  link1: { id: 'link1', parent: 'block2', },
  img1: { id: 'img1', parent: 'block3', }
}

export const elements = {
  canvas: {
    id: 'canvas',
    tag: 'div',
    type: 'canvas',
    props: {
      className: "canvas",
      style: {
        height: '100%',
        wordSpacing: 'normal',
        backgroundColor: '#f8f9fc',
        fontSize: 0,
      }
    },
  },
  container: {
    id: 'container',
    tag: 'div',
    type: 'container',
    props: {
      className: 'container',
      style: {
        margin: '0px auto',
        maxWidth: 600,
        fontSize: 0,
      }
    },
  },
  table: {
    id: 'table',
    tag: 'table',
    type: 'table',
    props: {
      cellPadding: 0,
      cellSpacing: 0,
      border: 0,
      align: 'center',
      style: {
        width: '100%',
        maxWidth: 600,
      }
    },
  },
  tbody: {
    id: 'tbody',
    tag: 'tbody',
    type: 'tbody',
    props: {
      style: {},
    },
  },
  row1: {
    id: 'row1',
    tag: 'tr',
    type: 'row',
    props: {
      style: {},
    },
  },
  td1: {
    id: "td1",
    tag: 'td',
    type: 'td',
    props: {
      width:"100%",
      height:"100%",
      align:"center",
      valign:"top",
      style: {
        fontSize: 0
      },
    },
  },
  section1: {
    id:"section1",
    tag:"div",
    type: 'section',
    props: {
      style: {
        width: '100%',
        backgroundColor: '#4a93db',
      }
    }
  },
  block1: {
    id:"block1",
    tag:"div",
    type: 'block',
    props: {
      style: {
        width: '50%',
        backgroundColor: '#4ADB7E',
      }
    }
  },
  title1: {
    id:"title1",
    tag:"h1",
    type: 'title',
    content:"Заголовок",
    contentEditable: true,
    props: {
      style: {
        fontSize: 24,
      }
    }
  },
  subtitle1: {
    id:"subtitle1",
    tag:"h2",
    type: 'title',
    content:"Подзаголовок",
    props: {
      style: {
        fontSize: 16,
      }
    }
  },
  row2: {
    id: 'row2',
    tag: 'tr',
    type: 'row',
    props: {
      style: {},
    },
  },
  td2: {
    id: "td2",
    tag: 'td',
    type: 'section',
    props: {
      width:"100%",
      height:"100%",
      align:"center",
      valign:"top",
      style: {
        fontSize: 0
      },
    },
  },
  section2: {
    id:"section2",
    tag:"div",
    type: 'section',
    props: {
      style: {
        width: '100%',
        backgroundColor: '#ffe26c',
      }
    }
  },
  block2: {
    id:"block2",
    tag:"div",
    type: 'block',
    props: {
      style: {
        width: '100%',
        maxWidth: '300px',
        verticalAlign: 'top',
        display: 'inline-block',
        backgroundColor: '#cd4adb',
      }
    }
  },
  text1: {
    id:"text1",
    tag:"div",
    type: "text",
    content:"Текст с призывом",
    props: {
      style: {
        fontSize: 16,
      }
    }
  },
  link1: {
    id:"link1",
    tag:"a",
    type: "link",
    content:"Кнопка",
    props:{
      href:"#",
      target: "_blank",
      style: {
        display: 'inline-block',
        fontSize: 16,
        color: '#3bff00'
      }
    }
  },
  block3: {
    id:"block3",
    tag:"div",
    type: 'block',
    props: {
      style: {
        width: '100%',
        maxWidth: '300px',
        verticalAlign: 'top',
        display: 'inline-block',
        backgroundColor: '#cd4adb',
      }
    }
  },
  img1: {
    id:"img1",
    tag:"img",
    type:"img",
    props:{
      src:IMG_SRC[0],
      alt:"img",
      style:{
        display:'block',
        width:'100%',
        height:'auto',
        margin:0,
      },
    }
  }
};


