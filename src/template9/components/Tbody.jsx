import {forwardRef} from "react";

export const Tbody = forwardRef(({outlineStyle, id, dataType, onClick, onMouseEnter, onMouseLeave, style, children, ...props}, refElement) => {
  return (
    <tbody {...props}
         id={id}
         style={{...style, ...outlineStyle}}
         ref={refElement}
         data-type={dataType}
         onClick={onClick}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}>
      {children}
    </tbody>
  )
})
