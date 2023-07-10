import {forwardRef} from "react";

export const Canvas = forwardRef(({outlineStyle, id, dataType, onClick, onMouseEnter, onMouseLeave, style, children, ...props}, refElement) => {
  return (
    <div {...props}
         id={id}
         style={{...style, ...outlineStyle}}
         ref={refElement}
         data-type={dataType}
         onClick={onClick}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}>
      {children}
    </div>
  )
})
