import {forwardRef} from "react";

export const Tr = forwardRef(({id, dataType, onClick, onMouseEnter, onMouseLeave, style, children, ...props}, refElement) => {
  return (
    <tr {...props}
           id={id}
           style={style}
           ref={refElement}
           data-type={dataType}
           onClick={onClick}
           onMouseEnter={onMouseEnter}
           onMouseLeave={onMouseLeave}>
    {children}
    </tr>
  )
})
