import React from "react";
export const IFrame = (props) => {
  let iframe_ref = null;
  const writeHTML = (frame) => {
    if (!frame) {
      return;
    }
    iframe_ref = frame;
    let doc = frame.contentDocument;
    doc.open();
    doc.write(props.content);
    doc.close();
    doc.body.style.padding = 0;
    doc.body.style.margin = 0;
    frame.style.width = '100%';
    // frame.style.height = `${frame.contentWindow.document.body.scrollHeight}px`;
    frame.style.height = '100%';
  };
  return (
    <iframe src="about:blank" scrolling="no" frameBorder="0"  ref={writeHTML}/>
  );
};
