import {forwardRef} from "react";

export const Table = forwardRef(({id, dataType, onClick, onMouseEnter, onMouseLeave, style, children, ...props}, refElement) => {
  return (
    <table {...props}
         id={id}
         style={style}
         ref={refElement}
         data-type={dataType}
         onClick={onClick}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}>
      {children}
    </table>
  )
})
