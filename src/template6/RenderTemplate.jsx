import {useStore, useStoreMap} from "effector-react";
import {$elements, $selectedElement, $tree, resetElementId, setElementId} from "./store.js";
import {createElement, memo, useCallback, useEffect, useMemo, useRef, useState} from "react";

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
const specialTypes = new Set([
  'canvas',
  'container',
  'table',
  'tbody',
  'tr',
  'td',
  'block',
  'row',
  'section',
])


const borderColor = '#007BFF';

const useUpdateLabelPosition = (ref, isSelected, isHovered) => {
  const [labelPosition, setLabelPosition] = useState({});

  useEffect(() => {
    if (ref.current) {
      const updateLabelPosition = () => {
        const rect = ref.current.getBoundingClientRect();
        setLabelPosition({ top: `${rect.top - 18}px`, left: `${rect.left}px` });
      };

      const handleResize = () => {
        requestAnimationFrame(updateLabelPosition);
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [ref.current]);

  return isSelected || isHovered ? labelPosition : null;
}

const RenderElementLabel = ({refElement, isSelected, isHovered, children}) => {
  const styles = {
    position: 'absolute',
    fontSize: 12,
    color: '#ffffff',
    fontWeight: 400,
    backgroundColor: '#007BFF',
    padding: '0px 4px',
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
  };

  const labelPosition = useUpdateLabelPosition(refElement, isSelected, isHovered);

  return labelPosition
    ? <span style={{ ...styles, ...labelPosition}}> {children} </span>
    : null
}

const useElementHandlers = ({type, isSelected, isSpecialType}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = useCallback((event) => {
    event.stopPropagation();
    event.preventDefault();

    if (type === 'canvas') {
      resetElementId()
    }

    if (!isSelected && !isSpecialType) {
      setElementId({id: event.currentTarget.id});
    }
  }, [type, isSelected, isSpecialType]);

  const handleMouseEnter = useCallback((event) => {
    if (!isSelected && !isSpecialType) {
      event.stopPropagation();
      setIsHovered(true);
    }
  }, [isSelected, isSpecialType]);

  const handleMouseLeave = useCallback((event) => {
    if (!isSpecialType) {
      event.stopPropagation();
      setIsHovered(false);
    }
  }, [isSpecialType]);

  return { isHovered, handleClick, handleMouseEnter, handleMouseLeave }
}

const RenderElement = memo(({ tag, type, elementId, content, children, props }) => {
  const isSelfCloseElement = tag ? selfCloseElements.has(tag.toLowerCase()) : false;
  const isSpecialType = type ? specialTypes.has(type.toLocaleString()) : false;

  // memorized store
  const isSelected = useStoreMap({
    store: $selectedElement,
    keys: [elementId],
    fn: (selectedElement, [id]) => selectedElement === id,
  });
  const refElement = useRef(null);
  const { isHovered, handleClick, handleMouseEnter, handleMouseLeave } = useElementHandlers({type, isSelected, isSpecialType})

  const { style, ...otherProps } = props;
  const elementStyles = {
    ...style,
    outline: isSelected || isHovered ? `1px solid ${borderColor}` : 'none',
    outlineOffset: '-1px',
    cursor: 'default',
  }

  return (
    <>
      {
        createElement(
          tag,
          {
            ...otherProps,
            ref: refElement,
            key: elementId,
            id: elementId,
            onClick: handleClick,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            style: {...elementStyles}
          },
          isSelfCloseElement
            ? null
            : <>
              {content}
              {children}
            </>
        )
      }
      <RenderElementLabel
        key={`${elementId}-label`}
        refElement={refElement}
        isSelected={isSelected}
        isHovered={isHovered}>
          {type}
      </RenderElementLabel>
    </>
  )
});

const RenderTree = ({ tree, elements }) => {
  return tree.children.map((node) => {
    const element = elements[node.id];
    const { tag, props = null, content } = element;

    return <RenderElement
      tag={tag}
      props={props}
      key={element.id}
      content={content}
      type={element.type}
      elementId={element.id}
      children={node.children && <RenderTree tree={node} elements={elements}/>}
    />
  });
}

export const RenderTemplate = () => {
  const tree = useStore($tree);
  const elements = useStore($elements);

  return (
    <RenderTree tree={tree} elements={elements}/>
  )
}

// FIXME
//  1 выбираются все элементы по дереву от последнего до первого
//  2 не подсвечивается тип для картинки, там спан некуда вставлять
//  3 перерендер при каждом клике из-за выбора элемента
