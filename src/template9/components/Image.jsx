import {forwardRef} from "react";
import sanitizeHtml from "sanitize-html-react";


export const Image = forwardRef(({outlineStyle, alt, src, id, style, dataType, onClick, onMouseEnter, onMouseLeave}, refElement) => {

  return (
    <div id={id}
         ref={refElement}
         onClick={onClick}
         data-type={dataType}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         style={{display: 'inline-block', width: '100%', height: '100%', ...outlineStyle}}>
      <img
        src={src}
        alt={alt}
        style={style}
        role='presentation'/>
    </div>

    // <div style={{display: 'inline-block', width: '100%', height: '100%'}}>
    //   <img
    //        id={id}
    //        src={src}
    //        alt={alt}
    //        style={style}
    //        ref={refElement}
    //        data-type={dataType}
    //        onClick={onClick}
    //        onMouseEnter={onMouseEnter}
    //        onMouseLeave={onMouseLeave}
    //        role='presentation'/>
    // </div>
  )
})
