// Examples templates
// https://github.com/rodriguezcommaj/principles-of-email-design
// 1 columns width 100%
// 2 columns width 300px
// 3 columns width 200px
// 4 columns width 150px

import ReactDOMServer from 'react-dom/server';

import {Column, TemplateHeaderBox, Td, Table, Tr} from '../components'

const Styles = () => {
  const rawStyles = `
   <style type="text/css">
      body { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
      .wrapper table, .wrapper td, .wrapper a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
      .wrapper table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
      .wrapper img { -ms-interpolation-mode: bicubic; }

      .wrapper img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
      .wrapper table { border-collapse: collapse !important; }
      body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }

      /* iOS BLUE LINKS */
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }

      /* Gmail mobile not is supported @media */
      @media (max-width: 479px) {
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
  return (
    <>
      <Styles/>
      <div style={{height: '100%', wordSpacing: 'normal', backgroundColor: '#f8f9fc'}} className="wrapper">
        <div style={{margin: '0px auto', maxWidth: 600}}>
          <Table maxWidth={600}>
            <Tr>
              <Td>
                <Column>
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 1
                  </p>
                </Column>
              </Td>
            </Tr>
            <Tr>
              <Td align="left">
                <Column size="1/2">
                  <p style={{backgroundColor: '#2A4DA7', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    LEFT COL 1
                  </p>
                </Column>
              </Td>
            </Tr>
            <Tr>
              <Td align="right">
                <Column size="1/2">
                  <p style={{backgroundColor: '#5740a7', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    RIGHT COL 1
                  </p>
                </Column>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Column size="1/2">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 1
                  </p>
                </Column>
                <Column size="1/2">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 2
                  </p>
                </Column>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Column size="1/3">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 1
                  </p>
                </Column>
                <Column size="1/3">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 2
                  </p>
                </Column>
                <Column size="1/3">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 3
                  </p>
                </Column>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Column size="1/4">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 1
                  </p>
                </Column>
                <Column size="1/4">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 2
                  </p>
                </Column>
                <Column size="1/4">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 3
                  </p>
                </Column>
                <Column size="1/4">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 4
                  </p>
                </Column>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Column size="1/5">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 1
                  </p>
                </Column>
                <Column size="1/5">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 2
                  </p>
                </Column>
                <Column size="1/5">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 3
                  </p>
                </Column>
                <Column size="1/5">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 4
                  </p>
                </Column>
                <Column size="1/5">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 5
                  </p>
                </Column>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Column size="1/6">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 1
                  </p>
                </Column>
                <Column size="1/6">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 2
                  </p>
                </Column>
                <Column size="1/6">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 3
                  </p>
                </Column>
                <Column size="1/6">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 4
                  </p>
                </Column>
                <Column size="1/6">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 5
                  </p>
                </Column>
                <Column size="1/6">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 6
                  </p>
                </Column>
              </Td>
            </Tr>
            <Tr>
              <Td align="center">
                <Column size="1/6">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 1
                  </p>
                </Column>
                <Column size="1/6">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 2
                  </p>
                </Column>
                <Column size="1/6">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 3
                  </p>
                </Column>
              </Td>
            </Tr>
            <Tr>
              <Td align="left">
                <Column size="1/6">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 1
                  </p>
                </Column>
                <Column size="1/6">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 2
                  </p>
                </Column>
                <Column size="1/6">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 3
                  </p>
                </Column>
              </Td>
            </Tr>
            <Tr>
              <Td align="right">
                <Column size="1/6">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 1
                  </p>
                </Column>
                <Column size="1/6">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 2
                  </p>
                </Column>
                <Column size="1/6">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 3
                  </p>
                </Column>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Column size="1/6">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 1
                  </p>
                </Column>
                <Column size="1/6">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 2
                  </p>
                </Column>
                <Column size="1/6">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 3
                  </p>
                </Column>
                <Column size="1/2">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 4
                  </p>
                </Column>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Column size="1/6">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 1
                  </p>
                </Column>
                <Column size="1/6">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 2
                  </p>
                </Column>
                <Column size="1/6">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 3
                  </p>
                </Column>
                <Column size="1/6">
                  <p style={{backgroundColor: '#0ba788', color: '#ffffff',font: '16px Helvetica, sans-serif, normal',margin: 0,padding: '10px'}}>
                    COL 4
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
export const Template2 = () => {
  return (
    <div>
      <TemplateHeaderBox title="Template 2"/>

      <Content/>
    </div>
  )
};

const RawHTML = () => {
  const top = `
    <!DOCTYPE html>
        <html style="height: 100%" lang="">
          <head>
            <meta charset="utf-8">
            <title>The Elements of Email</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
          </head>
           <body style="margin: 0 !important; padding: 0 !important;">
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

const html = ReactDOMServer.renderToStaticMarkup(<RawHTML/>)
  .replaceAll('&lt;', '<')
  .replaceAll('&gt;', '>')
  .replaceAll('&quot;', '"');

// console.log(html)
