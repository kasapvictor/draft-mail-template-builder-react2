import {forwardRef} from "react";
import sanitizeHtml from "sanitize-html-react";


export const Text = forwardRef(({outlineStyle, id, dataType, onClick, onMouseEnter, onMouseLeave, style, content, children, ...props}, refElement) => {
  return (
    <div {...props}
         id={id}
         style={{...style, ...outlineStyle}}
         ref={refElement}
         data-type={dataType}
         onClick={onClick}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}>
          <div style={{display: 'inline-block'}}
               dangerouslySetInnerHTML={{
                 __html: sanitizeHtml(
                   content,
                   {
                     allowedTags: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'a', 'img', 'p', 'ul', 'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div', 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre' ],
                     allowedAttributes: {
                       '*': ['style', 'align', 'width', 'height', 'alt', 'src', 'center', 'href', 'target'],
                       selfClosing: [ 'img', 'br', 'hr', 'basefont', 'input'],
                       allowedSchemes: [ 'data', 'https', 'mailto' ]
                     },
                     selfClosing: ['img'],
                   }
                 ),
               }}
          />
      {children}
    </div>
  )
})
