import {forwardRef} from "react";
import sanitizeHtml from "sanitize-html-react";


export const Image = forwardRef(({id, dataType, onClick, onMouseEnter, onMouseLeave, style, content, children, img, ...props}, refElement) => {

  return (
    <div style={{display: 'inline-block', width: '100%', height: '100%'}}>
      <img {...props}
           id={id}
           style={style}
           ref={refElement}
           data-type={dataType}
           onClick={onClick}
           onMouseEnter={onMouseEnter}
           onMouseLeave={onMouseLeave}/>
    </div>
  )
})
