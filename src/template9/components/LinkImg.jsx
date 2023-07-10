import {forwardRef} from "react";

export const LinkImg = forwardRef(({outlineStyle, id, dataType, onClick, onMouseEnter, onMouseLeave, style, img, ...props}, refElement) => {
  return (
    <a {...props}
      id={id}
      style={{...style, ...outlineStyle}}
      ref={refElement}
      onClick={onClick}
      data-type={dataType}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <img {...img.props}  alt="" role='presentation'/>
    </a>
  )
})
