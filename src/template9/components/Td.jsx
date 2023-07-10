import {forwardRef} from "react";

export const Td = forwardRef(({outlineStyle, id, dataType, onClick, onMouseEnter, onMouseLeave, style, children, ...props}, refElement) => {
  return (
    <td {...props}
           id={id}
           style={{...style, outlineStyle}}
           ref={refElement}
           data-type={dataType}
           onClick={onClick}
           onMouseEnter={onMouseEnter}
           onMouseLeave={onMouseLeave}>
    {children}
    </td>
  )
})
