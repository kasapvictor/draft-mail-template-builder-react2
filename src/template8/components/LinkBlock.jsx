import {forwardRef} from "react";
import sanitizeHtml from "sanitize-html-react";

export const LinkBlock = forwardRef(({id, dataType, onClick, onMouseEnter, onMouseLeave, style, content, ...props}, refElement) => {
  return (
    <a {...props}
      id={id}
      style={style}
      ref={refElement}
      onClick={onClick}
      data-type={dataType}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>

      <div style={{display: 'inline-block'}}
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(
            content,
            {
              allowedTags: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'img', 'p', 'ul', 'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div', 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre' ],
              allowedAttributes: {
                '*': ['style', 'align', 'width', 'height', 'alt', 'src', 'center'],
                selfClosing: [ 'img', 'br', 'hr', 'basefont', 'input'],
                allowedSchemes: [ 'data', 'https' ]
              },
              selfClosing: ['img'],
            }
          ),
        }}
      />
    </a>
  )
})
