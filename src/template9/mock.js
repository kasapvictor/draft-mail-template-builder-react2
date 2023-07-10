import {IMG_SRC} from "../constants";

// TODO !возможно есть смысл переделать все на проценты и медиазапросы
//  1) добавить еще один компонент link-image
//  2) добавить компонент link-block
//  3) отцентровать элементы в мобильной версии

const nav1 = {
  tree: {
    nav1row1: { id: 'nav1row1', parent: 'tbody', name: 'nav1', children: ['nav1td1'] },
    nav1td1: { id: 'nav1td1', parent: 'nav1row1', children: ['nav1section1'] },
    nav1section1: { id: 'nav1section1', parent: 'nav1td1',  children: ['nav1block1', 'nav1block2'] },

    nav1block1: { id: 'nav1block1', parent: 'nav1section1', children: ['nav1Logo1', 'nav1Link1','nav1Link2','nav1Link3'] },
    nav1Logo1: { id: 'nav1Logo1', parent: 'nav1block1' },
    nav1Link1: { id: 'nav1Link1', parent: 'nav1block1' },
    nav1Link2: { id: 'nav1Link2', parent: 'nav1block1' },
    nav1Link3: { id: 'nav1Link3', parent: 'nav1block1' },

    nav1block2: { id: 'nav1block2', parent: 'nav1section1', children: ['nav1Button1','nav1Button2'] },
    nav1Button1: { id: 'nav1Button1', parent: 'nav1block2' },
    nav1Button2: { id: 'nav1Button2', parent: 'nav1block2' },
  },
  elements: {
    nav1row1: {
      id: 'nav1row1',
      tag: 'tr',
      type: 'row',
      props: {
        style: {},
      },
    },
    nav1td1: {
      id: "nav1td1",
      tag: 'td',
      type: 'td',
      props: {
        width:"100%",
        height:"100%",
        align:"center",
        valign:"top",
        style: {
          fontSize: '0px'
        },
      },
    },
    nav1section1: {
      id:"nav1section1",
      tag:"div",
      type: 'section',
      props: {
        style: {
          width: '100%',
          backgroundColor: '#ffffff',
          textAlign: 'center',
        }
      }
    },

    nav1block1: {
      id:"nav1block1",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          maxWidth: '300px',
          display: 'inline-block',
          paddingTop: '16px',
          paddingBottom: '16px',
          paddingLeft: '16px',
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          textAlign: 'left',
        }
      }
    },
    nav1Logo1: {
      id:"nav1Logo1",
      tag:"a",
      type:"link-img",
      content: '', // сделать необязательным
      img: {
        props: {
          alt: "img",
          src: IMG_SRC[2],
          role:"presentation",
          style: {
            width: '100%',
          }
        }
      },
      props:{
        href: '#',
        target: "_blank",
        style:{
          display:'inline-block',
          width:'48px',
          height:'48px',
          marginRight: '10px',
          verticalAlign: 'middle',
        },
      }
    },
    nav1Link1: {
      id:"nav1Link1",
      tag:"a",
      type: "link-block", // link-block
      content:"<strong style='color: #2756ff;'>Price</strong>",
      props:{
        href:"#",
        target: "_blank",
        style: {
          display: 'inline-block',
          paddingRight: '10px',
          paddingLeft: '10px',
          fontWeight: 400,
          fontSize: 14,
          color: '#273033',
          verticalAlign: 'middle',
        }
      }
    },
    nav1Link2: {
      id:"nav1Link2",
      tag:"a",
      type: "link",
      content:"Sales",
      props:{
        href:"#",
        target: "_blank",
        style: {
          display: 'inline-block',
          paddingTop: '0px',
          paddingRight: '10px',
          paddingLeft: '10px',
          fontWeight: 400,
          fontSize: 14,
          color: '#273033',
          verticalAlign: 'middle',
        }
      }
    },
    nav1Link3: {
      id:"nav1Link3",
      tag:"a",
      type: "link",
      content:"Home",
      props:{
        href:"#",
        target: "_blank",
        style: {
          display: 'inline-block',
          paddingRight: '10px',
          paddingLeft: '10px',
          fontWeight: 400,
          fontSize: 14,
          color: '#273033',
          verticalAlign: 'middle',
        }
      }
    },

    nav1block2: {
      id:"nav1block2",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          maxWidth: '300px',
          display: 'inline-block',
          paddingTop: '16px',
          paddingLeft: '16px',
          paddingBottom: '16px',
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          textAlign: 'left',
        }
      }
    },
    nav1Button1: {
      id:"nav1Button1",
      tag:"a",
      type: "link",
      content:"Watch Demo",
      props:{
        href:"#",
        target: "_blank",
        style: {
          display: 'inline',
          marginRight: '10px',
          paddingTop: '8px',
          paddingRight: '16px',
          paddingBottom: '8px',
          paddingLeft: '16px',
          fontWeight: 400,
          fontSize: 14,
          textDecoration: 'none',
          color: '#69848D',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: '#69848D',
          borderTopLeftRadius: '4px',
          borderTopRightRadius: '4px',
          borderBottomRightRadius: '4px',
          borderBottomLeftRadius: '4px',
        }
      }
    },
    nav1Button2: {
      id:"nav1Button2",
      tag:"a",
      type: "link",
      content:"Buy Template",
      props:{
        href:"#",
        target: "_blank",
        style: {
          display: 'inline',
          paddingTop: '8px',
          paddingRight: '16px',
          paddingBottom: '8px',
          paddingLeft: '16px',
          fontWeight: 400,
          fontSize: 14,
          color: '#FFFFFF',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: '#69848D',
          backgroundColor: '#69848D',
          borderTopLeftRadius: '4px',
          borderTopRightRadius: '4px',
          borderBottomRightRadius: '4px',
          borderBottomLeftRadius: '4px',
          textDecoration: 'none',
        }
      }
    },
  }
};

const hero1 = {
  tree: {
    hero1row1: { id: 'hero1row1', parent: 'tbody', name: 'hero1', children: ['hero1td1'] },
    hero1td1: { id: 'hero1td1', parent: 'hero1row1', children: ['hero1section1'] },
    hero1section1: { id: 'hero1section1', parent: 'hero1td1',  children: ['hero1block1', 'hero1block3'] },

    hero1block1: { id: 'hero1block1', parent: 'hero1section1', children: ['hero1text1', 'hero1title1', 'hero1text2', 'hero1block2'] },
    hero1text1: { id: 'hero1text1', parent: 'hero1block1' },
    hero1title1: { id: 'hero1title1', parent: 'hero1block1' },
    hero1text2: { id: 'hero1text2', parent: 'hero1block1' },

    hero1block2: { id: 'hero1block2', parent: 'hero1block1', children: ['hero1Button1', 'hero1Button2'] },
    hero1Button1: { id: 'hero1Button1', parent: 'hero1block2' },
    hero1Button2: { id: 'hero1Button2', parent: 'hero1block2' },

    hero1block3: { id: 'hero1block3', parent: 'hero1section1', children: ['hero1image1'] },
    hero1image1: { id: 'hero1image1', parent: 'hero1block3' },
  },
  elements: {
    hero1row1: {
      id: 'hero1row1',
      tag: 'tr',
      type: 'row',
      props: {
        style: {},
      },
    },
    hero1td1: {
      id: "hero1td1",
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
    hero1section1: {
      id:"hero1section1",
      tag:"div",
      type: 'section',
      props: {
        style: {
          width: '100%',
          textAlign: 'center',
        }
      }
    },

    hero1block1: {
      id:"hero1block1",
        tag:"div",
        type: 'block',
        props: {
        style: {
          width: '100%',
            maxWidth: '300px',
            display: 'inline-block',
            paddingTop: '10px',
            paddingBottom: '20px',
            paddingLeft: '20px',
            verticalAlign: 'middle',
            boxSizing: 'border-box',
            textAlign: 'left',
        }
      }
    },
    hero1text1: {
      id:"hero1text1",
      tag:"div",
      type: 'text',
      content:"Service software",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          width: '100%',
          paddingBottom: '10px',
          fontSize: '12px',
          fontWeight: 100,
          lineHeight: 1.5,
          color: '#69848D',
          textAlign: 'left',
        }
      }
    },
    hero1title1: {
      id:"hero1title1",
      tag:"h1",
      type: 'title',
      content:"Customer service software for customer-first teams",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          width: '100%',
          paddingBottom: '10px',
          fontSize: '24px',
          fontWeight: 600,
          lineHeight: 1.2,
          color: '#273033',
          textAlign: 'left',
        }
      }
    },
    hero1text2: {
      id:"hero1text2",
      tag:"div",
      type: 'text',
      content:"The best customer service software for customer-first teams. Industry-leading email and live chat support.",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          width: '100%',
          paddingBottom: '15px',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: 1.5,
          color: '#667085',
          textAlign: 'left',
        }
      }
    },

    hero1block2: {
      id:"hero1block1",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          maxWidth: '300px',
          display: 'inline-block',
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          textAlign: 'left',
        }
      }
    },
    hero1Button1: {
      id:"hero1Button1",
      tag:"a",
      type: "link",
      content:"Buy Template",
      props:{
        href:"#",
        target: "_blank",
        style: {
          display: 'inline-block',
          marginRight: '10px',
          paddingTop: '8px',
          paddingRight: '16px',
          paddingBottom: '8px',
          paddingLeft: '16px',
          fontWeight: 400,
          fontSize: 14,
          color: '#FFFFFF',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: '#69848D',
          backgroundColor: '#69848D',
          borderTopLeftRadius: '4px',
          borderTopRightRadius: '4px',
          borderBottomRightRadius: '4px',
          borderBottomLeftRadius: '4px',
          textDecoration: 'none',
        }
      }
    },
    hero1Button2: {
      id:"hero1Button2",
      tag:"a",
      type: "link",
      content:"Watch Demo",
      props:{
        href:"#",
        target: "_blank",
        style: {
          display: 'inline-block',

          paddingTop: '8px',
          paddingRight: '16px',
          paddingBottom: '8px',
          paddingLeft: '16px',
          fontWeight: 400,
          fontSize: 14,
          textDecoration: 'none',
          color: '#69848D',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: '#69848D',
          borderTopLeftRadius: '4px',
          borderTopRightRadius: '4px',
          borderBottomRightRadius: '4px',
          borderBottomLeftRadius: '4px',
        }
      }
    },

    hero1block3: {
      id:"hero1block3",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          maxWidth: '300px',
          display: 'inline-block',
          paddingTop: '20px',
          paddingRight: '20px',
          paddingBottom: '20px',
          paddingLeft: '20px',
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          textAlign: 'left',
        }
      }
    },
    hero1image1: {
      id:"hero1image1",
      tag:"img",
      type:"img",
      props:{
        src:IMG_SRC[1],
        alt:"img",
        style:{
          display:'block',
          width:'100%',
          height:'auto',
          verticalAlign: 'middle',
          borderRadius: '8px',
        },
      }
    },
  },
}

const reviews1 = {
  tree: {
    reviews1row1: { id: 'reviews1row1', parent: 'tbody', name: 'reviews1', children: ['reviews1td1'] },
    reviews1td1: { id: 'reviews1td1', parent: 'reviews1row1', children: ['reviews1section1'] },
    reviews1section1: { id: 'reviews1section1', parent: 'reviews1td1',  children: ['reviews1block1', 'reviews1block2'] },

    reviews1block1: { id: 'reviews1block1', parent: 'reviews1section1', children: ['reviews1text1', 'reviews1title1', 'reviews1text2'] },
    reviews1text1: { id: 'reviews1text1', parent: 'reviews1block1' },
    reviews1title1: { id: 'reviews1title1', parent: 'reviews1block1' },
    reviews1text2: { id: 'reviews1text2', parent: 'reviews1block1' },

    reviews1block2: { id: 'reviews1block2', parent: 'reviews1section1', children: ['reviews1block3', 'reviews1block5', 'reviews1block7', 'reviews1block9'] },

    reviews1block3: { id: 'reviews1block3', parent: 'reviews1block2', children: ['reviews1block4'] },
    reviews1block4: { id: 'reviews1block4', parent: 'reviews1block3', children: ['reviews1image1', 'reviews1text3', 'reviews1image2', 'reviews1text4'] },
    reviews1image1: { id: 'reviews1image1', parent: 'reviews1block4', children: [] },
    reviews1text3: { id: 'reviews1text3', parent: 'reviews1block4' },
    reviews1image2: { id: 'reviews1image2', parent: 'reviews1block4', children: [] },
    reviews1text4: { id: 'reviews1text4', parent: 'reviews1block4' },


    reviews1block5: { id: 'reviews1block5', parent: 'reviews1block2', children: ['reviews1block6'] },
    reviews1block6: { id: 'reviews1block4', parent: 'reviews1block5', children: ['reviews1image3', 'reviews1text5', 'reviews1image4', 'reviews1text6'] },
    reviews1image3: { id: 'reviews1image3', parent: 'reviews1block6', children: [] },
    reviews1text5: { id: 'reviews1text5', parent: 'reviews1block6' },
    reviews1image4: { id: 'reviews1image4', parent: 'reviews1block6', children: [] },
    reviews1text6: { id: 'reviews1text6', parent: 'reviews1block6' },

    reviews1block7: { id: 'reviews1block7', parent: 'reviews1block2', children: ['reviews1block8'] },
    reviews1block8: { id: 'reviews1block8', parent: 'reviews1block7', children: ['reviews1image5', 'reviews1text7', 'reviews1image6', 'reviews1text8'] },
    reviews1image5: { id: 'reviews1image5', parent: 'reviews1block8', children: [] },
    reviews1text7: { id: 'reviews1text7', parent: 'reviews1block8' },
    reviews1image6: { id: 'reviews1image6', parent: 'reviews1block8', children: [] },
    reviews1text8: { id: 'reviews1text8', parent: 'reviews1block8' },

    reviews1block9: { id: 'reviews1block9', parent: 'reviews1block2', children: ['reviews1block10'] },
    reviews1block10: { id: 'reviews1block10', parent: 'reviews1block9', children: ['reviews1image7', 'reviews1text9', 'reviews1image8', 'reviews1text10'] },
    reviews1image7: { id: 'reviews1image7', parent: 'reviews1block10', children: [] },
    reviews1text9: { id: 'reviews1text9', parent: 'reviews1block10' },
    reviews1image8: { id: 'reviews1image8', parent: 'reviews1block10', children: [] },
    reviews1text10: { id: 'reviews1text10', parent: 'reviews1block10' },
  },
  elements: {
    reviews1row1: {
      id: 'reviews1row1',
      tag: 'tr',
      type: 'row',
      props: {
        style: {},
      },
    },
    reviews1td1: {
      id: "reviews1td1",
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
    reviews1section1: {
      id:"reviews1section1",
      tag:"div",
      type: 'section',
      props: {
        style: {
          width: '100%',
          backgroundColor: '#ffffff',
          textAlign: 'center',
        }
      }
    },

    reviews1block1: {
      id:"reviews1block1",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          maxWidth: '600px',
          display: 'inline-block',
          paddingTop: '20px',
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          textAlign: 'center',
        }
      }
    },
    reviews1text1: {
      id:"reviews1text1",
      tag:"div",
      type: 'text',
      content:"Service software",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          width: '100%',
          paddingBottom: '10px',
          fontSize: '12px',
          fontWeight: 100,
          lineHeight: 1.5,
          color: '#69848D',
          textAlign: 'center',
        }
      }
    },
    reviews1title1: {
      id:"reviews1title1",
      tag:"div",
      type: 'title',
      content:"Latest blog posts",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          width: '100%',
          paddingBottom: '10px',
          fontSize: '28px',
          fontWeight: 600,
          lineHeight: 1.2,
          color: '#273033',
          textAlign: 'center',
        }
      }
    },
    reviews1text2: {
      id:"reviews1text2",
      tag:"div",
      type: 'text',
      content:"Join over 4,000+ startups already growing with Untitled.",
      contentEditable: true,
      props: {
        style: {
          display: 'block',
          width: '100%',
          maxWidth: '300px',
          paddingBottom: '15px',
          fontSize: '20px',
          fontWeight: 400,
          lineHeight: 1.5,
          color: '#667085',
          textAlign: 'center',
          marginTop: '0px',
          marginBottom: '0px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }
      }
    },

    reviews1block2: {
      id:"reviews1block2",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          maxWidth: '600px',
          display: 'inline-block',
          paddingTop: '20px',
          paddingBottom: '20px',
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          textAlign: 'center',
        }
      }
    },

    reviews1block3: {
      id:"reviews1block3",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          maxWidth: '300px',
          display: 'inline-block',
          paddingRight: '10px',
          paddingLeft: '10px',
          paddingBottom: '20px',
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          textAlign: 'center',
        }
      }
    },
    reviews1block4: {
      id:"reviews1block3",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          maxWidth: '300px',
          display: 'inline-block',
          paddingTop: '20px',
          paddingRight: '20px',
          paddingBottom: '20px',
          paddingLeft: '20px',
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          textAlign: 'center',
          backgroundColor: '#F9FAFB',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
          borderBottomLeftRadius: '8px',
        }
      }
    },
    reviews1image1: {
      id:"reviews1image1",
      tag:"img",
      type:"img",
      props:{
        src:IMG_SRC[6],
        alt:"img",
        style:{
          display:'inline-block',
          width:'48px',
          height:'48px',
          marginBottom: '16px',
          verticalAlign: 'middle',
          objectFit: 'cover',
          borderRadius: '50%',
        },
      }
    },
    reviews1text3: {
      id:"reviews1text3",
      tag:"div",
      type: 'text',
      content:"Olivia Rhye",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          width: '100%',
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: 1,
          color: '#101828',
          textAlign: 'center',
        }
      }
    },
    reviews1image2: {
      id:"reviews1image2",
      tag:"img",
      type:"img",
      props:{
        src:IMG_SRC[7],
        alt:"img",
        style:{
          display:'inline-block',
          width:'100px',
          marginBottom: '8px',
          verticalAlign: 'middle',
        },
      }
    },
    reviews1text4: {
      id:"reviews1text4",
      tag:"div",
      type: 'text',
      content:"We can’t imagine working without it. Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          width: '100%',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: 1.5,
          color: '#475467',
          textAlign: 'center',
        }
      }
    },

    reviews1block5: {
      id:"reviews1block5",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          maxWidth: '300px',
          display: 'inline-block',
          paddingRight: '10px',
          paddingLeft: '10px',
          paddingBottom: '20px',
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          textAlign: 'center',
        }
      }
    },
    reviews1block6: {
      id:"reviews1block6",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          maxWidth: '300px',
          display: 'inline-block',
          paddingTop: '20px',
          paddingRight: '20px',
          paddingBottom: '20px',
          paddingLeft: '20px',
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          textAlign: 'center',
          backgroundColor: '#F9FAFB',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
          borderBottomLeftRadius: '8px',
        }
      }
    },
    reviews1image3: {
      id:"reviews1image3",
      tag:"img",
      type:"img",
      props:{
        src:IMG_SRC[6],
        alt:"img",
        style:{
          display:'inline-block',
          width:'48px',
          height:'48px',
          marginBottom: '16px',
          verticalAlign: 'middle',
          objectFit: 'cover',
          borderRadius: '50%',
        },
      }
    },
    reviews1text5: {
      id:"reviews1text5",
      tag:"div",
      type: 'text',
      content:"Olivia Rhye",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          width: '100%',
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: 1,
          color: '#101828',
          textAlign: 'center',
        }
      }
    },
    reviews1image4: {
      id:"reviews1image4",
      tag:"img",
      type:"img",
      props:{
        src:IMG_SRC[7],
        alt:"img",
        style:{
          display:'inline-block',
          width:'100px',
          marginBottom: '8px',
          verticalAlign: 'middle',
        },
      }
    },
    reviews1text6: {
      id:"reviews1text6",
      tag:"div",
      type: 'text',
      content:"We can’t imagine working without it. Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          width: '100%',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: 1.5,
          color: '#475467',
          textAlign: 'center',
        }
      }
    },

    reviews1block7: {
      id:"reviews1block7",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          maxWidth: '300px',
          display: 'inline-block',
          paddingRight: '10px',
          paddingLeft: '10px',
          paddingBottom: '20px',
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          textAlign: 'center',
        }
      }
    },
    reviews1block8: {
      id:"reviews1block8",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          maxWidth: '300px',
          display: 'inline-block',
          paddingTop: '20px',
          paddingRight: '20px',
          paddingBottom: '20px',
          paddingLeft: '20px',
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          textAlign: 'center',
          backgroundColor: '#F9FAFB',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
          borderBottomLeftRadius: '8px',
        }
      }
    },
    reviews1image5: {
      id:"reviews1image5",
      tag:"img",
      type:"img",
      props:{
        src:IMG_SRC[6],
        alt:"img",
        style:{
          display:'inline-block',
          width:'48px',
          height:'48px',
          marginBottom: '16px',
          verticalAlign: 'middle',
          objectFit: 'cover',
          borderRadius: '50%',
        },
      }
    },
    reviews1text7: {
      id:"reviews1text7",
      tag:"div",
      type: 'text',
      content:"Olivia Rhye",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          width: '100%',
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: 1,
          color: '#101828',
          textAlign: 'center',
        }
      }
    },
    reviews1image6: {
      id:"reviews1image6",
      tag:"img",
      type:"img",
      props:{
        src:IMG_SRC[7],
        alt:"img",
        style:{
          display:'inline-block',
          width:'100px',
          marginBottom: '8px',
          verticalAlign: 'middle',
        },
      }
    },
    reviews1text8: {
      id:"reviews1text8",
      tag:"div",
      type: 'text',
      content:"We can’t imagine working without it. Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          width: '100%',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: 1.5,
          color: '#475467',
          textAlign: 'center',
        }
      }
    },

    reviews1block9: {
      id:"reviews1block9",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          maxWidth: '300px',
          display: 'inline-block',
          paddingRight: '10px',
          paddingLeft: '10px',
          paddingBottom: '20px',
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          textAlign: 'center',
        }
      }
    },
    reviews1block10: {
      id:"reviews1block10",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          maxWidth: '300px',
          display: 'inline-block',
          paddingTop: '20px',
          paddingRight: '20px',
          paddingBottom: '20px',
          paddingLeft: '20px',
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          textAlign: 'center',
          backgroundColor: '#F9FAFB',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
          borderBottomLeftRadius: '8px',
        }
      }
    },
    reviews1image7: {
      id:"reviews1image7",
      tag:"img",
      type:"img",
      props:{
        src:IMG_SRC[6],
        alt:"img",
        style:{
          display:'inline-block',
          width:'48px',
          height:'48px',
          marginBottom: '16px',
          verticalAlign: 'middle',
          objectFit: 'cover',
          borderRadius: '50%',
        },
      }
    },
    reviews1text9: {
      id:"reviews1text9",
      tag:"div",
      type: 'text',
      content:"Olivia Rhye",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          width: '100%',
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: 1,
          color: '#101828',
          textAlign: 'center',
        }
      }
    },
    reviews1image8: {
      id:"reviews1image8",
      tag:"img",
      type:"img",
      props:{
        src:IMG_SRC[7],
        alt:"img",
        style:{
          display:'inline-block',
          width:'100px',
          marginBottom: '8px',
          verticalAlign: 'middle',
        },
      }
    },
    reviews1text10: {
      id:"reviews1text10",
      tag:"div",
      type: 'text',
      content:"We can’t imagine working without it. Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          width: '100%',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: 1.5,
          color: '#475467',
          textAlign: 'center',
        }
      }
    },
  }
}

const quote1 = {
  tree: {
    quote1row1: { id: 'quote1row1', parent: 'tbody', name: 'quote1', children: ['quote1td1'] },
    quote1td1: { id: 'quote1td1', parent: 'quote1row1', children: ['quote1section1'] },
    quote1section1: { id: 'quote1section1', parent: 'quote1td1',  children: ['quote1block1'] },
    quote1block1: { id: 'quote1block1', parent: 'quote1section1', children: ['quote1Text1','quote1block2','quote1block3'] },
    quote1Text1: { id: 'quote1Text1', parent: 'quote1block1', },
    quote1block2: { id: 'quote1block2', parent: 'quote1section1', children: ['quote1Avatar1'] },
    quote1Avatar1: { id: 'quote1Avatar1', parent: 'quote1block1',},
    quote1block3: { id: 'quote1block3', parent: 'quote1block1', children: ['quote1Name1', 'quote1Position1'] },
    quote1Name1: { id: 'quote1Name1', parent: 'quote1block3',},
    quote1Position1: { id: 'quote1Position1', parent: 'quote1block3', },
  },
  elements: {
    quote1row1: {
      id: 'quote1row1',
      tag: 'tr',
      type: 'row',
      props: {
        style: {},
      },
    },
    quote1td1: {
      id: "quote1td1",
      tag: 'td',
      type: 'td',
      props: {
        width:"100%",
        height:"100%",
        align:"center",
        valign:"top",
        style: {
          fontSize: '0px'
        },
      },
    },
    quote1section1: {
      id:"quote1section1",
      tag:"div",
      type: 'section',
      props: {
        style: {
          width: '100%',
          paddingTop: '16px',
          paddingRight: '16px',
          paddingBottom: '16px',
          paddingLeft: '16px',
          backgroundColor: '#ffffff',
        }
      }
    },

    quote1block1: {
      id:"quote1block1",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          backgroundColor: 'transparent',
          textAlign: 'left',
          borderLeftWidth: '2px',
          borderLeftStyle: 'solid',
          borderLeftColor: '#69848D',
        }
      }
    },
    quote1Text1: {
      id:"quote1Text1",
      tag:"div",
      type: 'text',
      content:"“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          paddingBottom: '32px',
          paddingLeft: '16px',
          fontSize: '20px',
          fontWeight: 400,
          lineHeight: 1.5,
          color: '#273033',
          textAlign: 'left',
        }
      }
    },

    quote1block2: {
      id:"quote1block2",
      tag:"div",
      type: 'block',
      props: {
        style: {
          display:'inline-block',
        }
      }
    },
    quote1Avatar1: {
      id:"quote1Avatar1",
      tag:"img",
      type:"img",
      props:{
        src: IMG_SRC[5],
        alt: "img",
        style:{
          display:'inline-block',
          width:'35px',
          height:'35px',
          marginLeft: '16px',
          borderRadius: '50%',
          textAlign: 'left'
        },
      }
    },

    quote1block3: {
      id:"quote1block3",
      tag:"div",
      type: 'block',
      props: {
        style: {
          display: 'inline-block',
          width: '50%',
          paddingLeft: '12px',
          backgroundColor: 'transparent',
          textAlign: 'left',
          verticalAlign: 'top',
        }
      }
    },
    quote1Name1: {
      id:"quote1Name1",
      tag:"div",
      type: 'text',
      content:"Olivia Rhye",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          width: '100%',
          fontSize: '12px',
          fontWeight: 600,
          lineHeight: 1.5,
          color: '#273033',
          textAlign: 'left',
          verticalAlign: 'top',
        }
      }
    },
    quote1Position1: {
      id:"quote1Position1",
      tag:"div",
      type: 'text',
      content:"Product Designer",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          width: '100%',
          fontSize: '10px',
          fontWeight: 400,
          lineHeight: 1.5,
          color: '#475467',
          textAlign: 'left',
          verticalAlign: 'top',
        }
      }
    },
  }
}

const footer1 = {
  tree: {
    footer1row1: { id: 'footer1row1', parent: 'tbody', name: 'footer1', children: ['footer1td1'] },
    footer1td1: { id: 'footer1td1', parent: 'footer1row1', children: ['footer1section1'] },
    footer1section1: { id: 'footer1section1', parent: 'footer1td1',  children: ['footer1block1','footer1block2', 'footer1text2'] },

    footer1block1: { id: 'footer1block1', parent: 'footer1section1', children: ['footer1Link1', 'footer1Link2', 'footer1Link3', 'footer1text1'] },

    footer1Link1: { id: 'footer1Link1', parent: 'footer1block1' },
    footer1Link2: { id: 'footer1Link2', parent: 'footer1block1' },
    footer1Link3: { id: 'footer1Link3', parent: 'footer1block1' },

    footer1text1: { id: 'footer1text1', parent: 'footer1block1' },

    footer1block2: { id: 'footer1block2', parent: 'footer1section1', children: ['footer1Link4'] },
    footer1Link4: { id: 'footer1Link4', parent: 'footer1block2' },

    footer1text2: { id: 'footer1text2', parent: 'footer1block1' },

  },
  elements: {
    footer1row1: {
      id: 'footer1row1',
      tag: 'tr',
      type: 'row',
      props: {
        style: {},
      },
    },
    footer1td1: {
      id: "footer1td1",
      tag: 'td',
      type: 'td',
      props: {
        width:"100%",
        height:"100%",
        align:"center",
        valign:"top",
        style: {
          fontSize: '0px'
        },
      },
    },
    footer1section1: {
      id:"footer1section1",
      tag:"div",
      type: 'section',
      props: {
        style: {
          width: '100%',
          backgroundColor: '#ffffff',
          textAlign: 'center',
        }
      }
    },

    footer1block1: {
      id:"footer1block1",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          maxWidth: '600px',
          display: 'inline-block',
          paddingTop: '20px',
          paddingBottom: '20px',
          verticalAlign: 'top',
          boxSizing: 'border-box',
          textAlign: 'center',
        }
      }
    },

    footer1Link1: {
      id:"footer1Link1",
      tag:"a",
      type: "link-img",
      content:`instagram`,
      props:{
        href:"#",
        target: "_blank",
        style: {
          display: 'inline-block',
          width: '40px',
          height:'40px',
          verticalAlign: 'middle'
        }
      },
      img: {
        props: {
          alt: "img",
          src: IMG_SRC[8],
          role:"presentation",
          style: {
            width: '100%',
            borderRadius: '50%',
          }
        }
      },
    },
    footer1Link2: {
      id:"footer1Link2",
      tag:"a",
      type: "link-img",
      content:`facebook`,
      props:{
        href:"#",
        target: "_blank",
        style: {
          display: 'inline-block',
          width: '40px',
          height:'40px',
          marginLeft: '10px',
          marginRight: '10px',
          verticalAlign: 'middle'
        }
      },
      img: {
        props: {
          alt: "img",
          src: IMG_SRC[9],
          role:"presentation",
          style: {
            width: '100%',
            borderRadius: '50%',
          }
        }
      },
    },
    footer1Link3: {
      id:"footer1Link3",
      tag:"a",
      type: "link-img",
      content:`twitter`,
      props:{
        href:"#",
        target: "_blank",
        style: {
          display: 'inline-block',
          width: '40px',
          height:'40px',
          verticalAlign: 'middle'
        }
      },
      img: {
        props: {
          alt: "img",
          src: IMG_SRC[10],
          role:"presentation",
          style: {
            width: '100%',
            borderRadius: '50%',
          }
        }
      },
    },

    footer1text1: {
      id:"footer1text1",
      tag:"div",
      type: 'text',
      content:"You recieved this email beacuse you subscribed Craftwork newsletter or downloaded our products",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          width: '100%',
          maxWidth: '500px',
          paddingTop: '30px',
          paddingBottom: '15px',
          fontSize: '20px',
          fontWeight: 400,
          lineHeight: 1.5,
          color: '#667085',
          textAlign: 'center',
        }
      }
    },

    footer1block2: {
      id:"nav1block1",
      tag:"div",
      type: 'block',
      props: {
        style: {
          width: '100%',
          maxWidth: '100px',
          display: 'inline-block',
          paddingRight: '16px',
          paddingBottom: '16px',
          paddingLeft: '16px',
          verticalAlign: 'middle',
          boxSizing: 'border-box',
        }
      }
    },

    footer1Link4: {
      id:"footer1Link4",
      tag:"a",
      type: "link-img",
      content:"company",
      props:{
        href:"#",
        target: "_blank",
        style: {
          display: 'inline-block',
          verticalAlign: 'middle'
        }
      },
      img: {
        props: {
          alt: "img",
          src: IMG_SRC[2],
          role:"presentation",
          style: {
            width: '100%',
            borderRadius: '50%',
          }
        }
      },

    },

    footer1text2: {
      id:"footer1text2",
      tag:"div",
      type: 'text',
      content:"© craftwork.design 2020",
      contentEditable: true,
      props: {
        style: {
          display: 'inline-block',
          width: '100%',
          maxWidth: '600px',
          paddingTop: '30px',
          paddingBottom: '15px',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: 1.5,
          color: '#667085',
          textAlign: 'center',
        }
      }
    },
  }
}

export const tree = {
  root: { id: 'root', parent: null, children: ['canvas'] },
  canvas: { id: 'canvas', parent: 'root', children: ['container'] },
  container: { id: 'container', parent: 'canvas', children: ['table'] },
  table: { id: 'table', parent: 'container', children: ['tbody'] },
  // tbody: { id: 'tbody', parent: 'table', children: ['nav1row1', 'hero1row1', 'reviews1row1', 'quote1row1', 'footer1row1'] },
  tbody: { id: 'tbody', parent: 'table', children: ['nav1row1', 'hero1row1', 'reviews1row1', 'quote1row1', 'footer1row1'] },

  ...nav1.tree,
  ...hero1.tree,
  ...reviews1.tree,
  ...quote1.tree,
  ...footer1.tree,
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
        backgroundColor: '#ffffff',
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

  ...nav1.elements,
  ...hero1.elements,
  ...reviews1.elements,
  ...quote1.elements,
  ...footer1.elements,
};



