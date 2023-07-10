import React from "react";

export const Styles = () => {
  const rawStyles = `
   <style type="text/css">
      #outlook a {
        padding: 0;
      }

      body,
      .canvas table,
      .canvas td,
      .canvas a {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      
      .canvas * {
        font-family: sans-serif;
      }

      .canvas table,
      .canvas td {
        border-collapse: collapse !important;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }

      .canvas img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }

      /* iOS BLUE LINKS */
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }

      @media only screen and (max-width: 479px) {
        .canvas table {
          max-width: 100%!important;
        }
        .canvas td {
          text-align: center!important;
        }
      }
   </style>
  `

  return (
    <>
      <div dangerouslySetInnerHTML={{__html: rawStyles}}/>
    </>
  )
}
