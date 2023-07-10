// Examples templates
// https://github.com/rodriguezcommaj/principles-of-email-design
// 1 columns width 100%
// 2 columns width 300px
// 3 columns width 200px
// 4 columns width 150px

import ReactDOMServer from 'react-dom/server';

// https://github.com/beautify-web/js-beautify
import beautify from 'js-beautify';

import {Column, Table, Td, TemplateHeaderBox, Tr} from '../components'
import {useStore} from "effector-react";
import {$width} from "../models/model-width.js";

const Styles = () => {
  const rawStyles = `
   <style type="text/css">
      #outlook a {
        padding: 0;
      }

      body,
      .wrapper table,
      .wrapper td,
      .wrapper a {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }

      .wrapper table,
      .wrapper td {
        border-collapse: collapse !important;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }

      .wrapper img {
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
        .wrapper table {
          max-width: 100%!important;
        }
        .wrapper td {
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

const Content = () => {
  const width = useStore($width);

  return (
    <>
      <Styles/>
      <div style={{height: '100%', wordSpacing: 'normal', backgroundColor: '#f8f9fc'}} className="wrapper">
        <div style={{margin: '0px auto', maxWidth: width}} className="wapper__table">
          <Table maxWidth={600}>
            <Tr>
              <Td>
                <Column>
                  <p style={{
                    backgroundColor: '#0ba788',
                    color: '#ffffff',
                    font: '16px Helvetica, sans-serif, normal',
                    margin: 0,
                    padding: '10px'
                  }}>
                    COL 1
                  </p>
                </Column>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Column size="1/5">
                  <div style={{backgroundColor: '#fefefe', font: '16px Helvetica, sans-serif, normal', margin: 0, padding: '10px'}}>
                    <a style={{color: '#ef4444'}} href="#">Hello Link</a>
                  </div>
                </Column>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Column size="1/2">
                  <p style={{
                    backgroundColor: '#2A4DA7',
                    color: '#ffffff',
                    font: '16px Helvetica, sans-serif, normal',
                    margin: 0,
                    padding: '10px'
                  }}>
                    LEFT COL 1
                  </p>
                </Column>
                <Column size="1/2">
                </Column>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Column size="1/2">
                </Column>
                <Column size="1/2">
                  <p style={{
                    backgroundColor: '#5740a7',
                    color: '#ffffff',
                    font: '16px Helvetica, sans-serif, normal',
                    margin: 0,
                    padding: '10px'
                  }}>
                    RIGHT COL 1
                  </p>
                </Column>

              </Td>
            </Tr>
            <Tr>
              <Td>
                <Column size="1/3">
                  <p style={{
                    backgroundColor: '#0ba788',
                    color: '#ffffff',
                    font: '16px Helvetica, sans-serif, normal',
                    margin: 0,
                    padding: '10px'
                  }}>
                    COL 1
                  </p>
                </Column>
                <Column size="1/3">
                  <p style={{
                    backgroundColor: '#0ba788',
                    color: '#ffffff',
                    font: '16px Helvetica, sans-serif, normal',
                    margin: 0,
                    padding: '10px'
                  }}>
                    COL 2
                  </p>
                </Column>
                <Column size="1/3">
                  <p style={{
                    backgroundColor: '#0ba788',
                    color: '#ffffff',
                    font: '16px Helvetica, sans-serif, normal',
                    margin: 0,
                    padding: '10px'
                  }}>
                    COL 3
                  </p>
                </Column>
              </Td>
            </Tr>
          </Table>
        </div>
      </div>
    </>
  )
}
export const Template3 = () => {
  return (
    <div style={{height: "100%"}}>
      <TemplateHeaderBox title="Template 3"/>
      <Content/>
    </div>
  )
};

const RawHTML = () => {
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
      <Content/>
      {bottom}
    </>
  )
}

const htmlFormatted = () => {
  const rawHtml = ReactDOMServer.renderToStaticMarkup(<RawHTML/>)
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"');

  return beautify.html_beautify(rawHtml, { indent_size: 2, space_in_empty_paren: true })
}

// console.log(htmlFormatted());
