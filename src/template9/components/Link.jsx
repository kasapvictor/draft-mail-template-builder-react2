import {forwardRef} from "react";

export const Link = forwardRef(({id, dataType, onClick, onMouseEnter, onMouseLeave, style, content, ...props}, refElement) => {
  return (
    <a {...props}
      id={id}
      style={style}
      ref={refElement}
      onClick={onClick}
      data-type={dataType}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      {content}
    </a>
  )
})
