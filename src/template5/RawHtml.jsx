import React from "react";

export const RawHtml = ({content}) => {
  const top = `
    <!DOCTYPE html>
        <html
            lang="en"
            style="height: 100%"
            xmlns="http://www.w3.org/1999/xhtml"
            xmlns:v="urn:schemas-microsoft-com:vml"
            xmlns:o="urn:schemas-microsoft-com:office:office">
          <head>
            <title>The Elements of Email</title>

            <!--[if !mso]><!-->
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <!--<![endif]-->

            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <!--[if mso]>
              <noscript>
                <xml>
                  <o:OfficeDocumentSettings>
                    <o:AllowPNG />
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                  </o:OfficeDocumentSettings>
                </xml>
              </noscript>
            <![endif]-->
          </head>
          <body
            style="
                height: 100%;
                margin: 0 !important;
                padding: 0 !important;
               ">
  `;
  const bottom = `
      </body>
    </html>
  `;

  return (
    <>
      {top}
      {content}
      {bottom}
    </>
  )
}

