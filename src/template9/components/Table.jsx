import {forwardRef} from "react";

export const Table = forwardRef(({outlineStyle, id, dataType, onClick, onMouseEnter, onMouseLeave, style, children, ...props}, refElement) => {
  return (
    <table {...props}
         id={id}
         style={{...style, ...outlineStyle}}
         ref={refElement}
         data-type={dataType}
         onClick={onClick}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}>
      {children}
    </table>
  )
})
