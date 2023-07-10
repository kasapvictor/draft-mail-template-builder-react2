import {forwardRef} from "react";

export const LinkImg = forwardRef(({id, dataType, onClick, onMouseEnter, onMouseLeave, style, img, ...props}, refElement) => {
  return (
    <a {...props}
      id={id}
      style={style}
      ref={refElement}
      onClick={onClick}
      data-type={dataType}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <img {...img.props} />
    </a>
  )
})
