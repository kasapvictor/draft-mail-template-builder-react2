import {IMG_SRC} from "../constants";

export const tree = {
  id: 'root',
  children: [
    {
      id: 'canvas',
      children: [
        {
          id: 'container',
          children: [
            {
              id: 'table',
              children: [
                {
                  id: 'tbody',
                  children: [
                    {
                      id: 'tr1',
                      children: [
                        {
                          id: 'td1',
                          children: [
                            {
                              id: 'row1',
                              children: [
                                {
                                  id: 'block1',
                                  children: [
                                  { id: 'title1' },
                                  { id: 'subtitle1' }
                                ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: 'tr2',
                      children: [
                        {
                          id: 'td2',
                          children: [
                            {
                              id: 'row2',
                              children: [
                                {
                                  id: 'block2',
                                  children: [
                                    { id: 'text1' },
                                    { id: 'link1' }
                                  ]
                                },
                                {
                                  id: 'block3',
                                  children: [
                                    { id: 'img1' }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export const elements = {
  canvas: {
    id: 'canvas',
    tag: 'div',
    type: 'canvas',
    props: {
      className: "canvas",
      style: {
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
  tr1: {
    id: 'tr1',
    tag: 'tr',
    type: 'tr', // TODO добавить отдельный див с типом row
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
  row1: {
    id:"row1",
    tag:"div",
    type: 'row',
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
    props: {
      style: {
        fontSize: 16,
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
  tr2: {
    id: 'tr2',
    tag: 'tr',
    type: 'tr',
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
  row2: {
    id:"row2",
    tag:"div",
    type: 'row',
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


