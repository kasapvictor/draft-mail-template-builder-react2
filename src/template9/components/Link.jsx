import {forwardRef} from "react";

export const Link = forwardRef(({outlineStyle, id, dataType, onClick, onMouseEnter, onMouseLeave, style, content, ...props}, refElement) => {
  return (
    <a {...props}
      id={id}
      style={{...style, ...outlineStyle}}
      ref={refElement}
      onClick={onClick}
      data-type={dataType}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      {content}
    </a>
  )
})
