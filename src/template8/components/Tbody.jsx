import {forwardRef} from "react";

export const Tbody = forwardRef(({id, dataType, onClick, onMouseEnter, onMouseLeave, style, children, ...props}, refElement) => {
  return (
    <tbody {...props}
         id={id}
         style={style}
         ref={refElement}
         data-type={dataType}
         onClick={onClick}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}>
      {children}
    </tbody>
  )
})
