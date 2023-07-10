import {forwardRef} from "react";
import sanitizeHtml from "sanitize-html-react";


export const Title = forwardRef(({tag, id, dataType, onClick, onMouseEnter, onMouseLeave, style, content, ...props}, refElement) => {
  const Tag = tag;

  return (
    <Tag {...props}
         id={id}
         style={style}
         ref={refElement}
         data-type={dataType}
         onClick={onClick}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}>
        {content}
    </Tag>
  )
})
