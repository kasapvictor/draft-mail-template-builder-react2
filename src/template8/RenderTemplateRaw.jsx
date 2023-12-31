import {useStore, useStoreMap} from "effector-react";
import {
  $elements,
  $tree,
} from "./store.js";
import {createElement, } from "react";

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

import {Tr, Td, Div, Text, Title, Row, Link, Block, Table, Tbody, Image, Canvas, Section, LinkImg, LinkBlock, Container} from './components';

const buildNestedTree = (flatTree, nodeId) => {
  const node = flatTree[nodeId];
  const children = node.children;

  return {
    ...node,
    children: children ? children.map(childId => buildNestedTree(flatTree, childId)) : undefined
  };
};

const componentByType = {
  'tr': Tr,
  'td': Td,
  'div': Div,
  'row': Row,
  'text': Text,
  'link': Link,
  'img': Image,
  'block': Block,
  'title': Title,
  'table': Table,
  'tbody': Tbody,
  'canvas': Canvas,
  'section': Section,
  'link-img': LinkImg,
  'container': Container,
  'link-block': LinkBlock,
}

const RenderElement = ({ elementId, children }) => {
  const { tag, type, content, props, img } = useStoreMap({
    store: $elements,
    keys: [elementId],
    fn: (elements, [id]) => elements[id]
  });

  const isSelfCloseElement = tag ? selfCloseElements.has(tag.toLowerCase()) : false;
  const {style, ...otherProps} = props;

  const Component = componentByType[type];

  return (
    <Component
      {...otherProps}
      tag={tag}
      img={img}
      key={elementId}
      content={content}
      style={type === 'container' ? {...style, maxWidth: 600 } : style}>
      {children}
    </Component>
  )

  // return (
  //   <>
  //     {
  //       createElement(
  //         tag,
  //         {
  //           ...otherProps,
  //           key: elementId,
  //           // Для container по дефолту устанавливаем ширину 600px
  //           style: type === 'container' ? {...style, maxWidth: 600 } : style,
  //         },
  //         isSelfCloseElement
  //           ? null
  //           : <>
  //             {content}
  //             {children}
  //           </>
  //       )
  //     }
  //   </>
  // )
};

const RenderTree = ({ tree }) => {
  return tree.children.map((node) => {
    return <RenderElement
      key={node.id}
      elementId={node.id}
      children={node.children && <RenderTree tree={node}/>}
    />
  });
}

export const RenderTemplateRaw = () => {
  const tree = useStore($tree);
  const nestedTree = buildNestedTree(tree, 'root');

  return (<RenderTree tree={nestedTree}/>)
}

