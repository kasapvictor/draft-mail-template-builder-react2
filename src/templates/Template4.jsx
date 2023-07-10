// Examples templates
// https://github.com/rodriguezcommaj/principles-of-email-design
// 1 columns width 100%
// 2 columns width 300px
// 3 columns width 200px
// 4 columns width 150px

// react-virtualized или react-window

import React, {createElement} from "react";
import ReactDOMServer from 'react-dom/server';

// https://github.com/beautify-web/js-beautify
import beautify from 'js-beautify';

import {Column, Table, Td, TemplateHeaderBox, Tr} from '../components'
import {useStore} from "effector-react";
import {$width} from "../models/model-width";
import {Element, renderElements} from "../components/Element";
import {$activeElementIndex, $mockStore, changedActiveIndexElement, changedValue, findElementById} from "../models/model-mock-data4";

const Settings = () => {
  const activeElementIndex = useStore($activeElementIndex);
  const elements = useStore($mockStore);
  const activeElementData = findElementById(activeElementIndex, elements);

  return activeElementData.content !== null && (
    <div style={{ padding: 20 }}>
      <h3>Settings</h3>
      <div>
        <label style={{display: "flex", gap: 10, justifyContent: "center"}}>
          Content:
          <input type="text" value={activeElementData.content} onChange={changedValue}/>
        </label>
      </div>
    </div>
  )
};

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
  const mockData = useStore($mockStore);

  return (
    <>
      <Styles/>
      <div style={{height: '100%', wordSpacing: 'normal', backgroundColor: '#f8f9fc'}} className="wrapper">
        <div style={{margin: '0px auto', maxWidth: width}} className="wapper__table">
          <Table maxWidth={600}>
            <Tr>
              <Td>
                <Column>
                  <Element tag={mockData[0].tag} content={mockData[0].content} {...mockData[0].attributes}
                           onClick={(event)=>changedActiveIndexElement({event, path: '0', id:mockData[0].id})}/>
                </Column>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Column>
                  <Element tag={mockData[1].tag} content={mockData[1].content} {...mockData[1].attributes} onClick={(event)=>changedActiveIndexElement({event, path: '1', id: mockData[1].id})}/>
                </Column>
              </Td>
            </Tr>
            <Tr>
              <Td style={{background: '#ffffff'}}>
                <Column size="1/2">
                  <Element tag={mockData[2].tag} {...mockData[2].attributes} onClick={(event)=>changedActiveIndexElement({event,  path: '2', id: mockData[2].id})}/>
                </Column>
                <Column size="1/2" style={{ padding: 20}}>
                  <Element tag={mockData[3].tag} content={mockData[3].content} {...mockData[3].attributes}
                           onClick={(event)=>changedActiveIndexElement({event,  path: `3`, id: mockData[3].id})}
                           childElement={
                    <>
                      {mockData[3].children.map((element, elementIndex) => {
                        return  <Element key={element.id} tag={element.tag} content={element.content}   {...element.attributes} onClick={(event)=>changedActiveIndexElement({event, path: `3-${elementIndex}`, id: element.id})}/>
                      })}
                    </>
                  }
                  />
                </Column>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Column>
                  <Element tag={mockData[4].tag} content={mockData[4].content} {...mockData[4].attributes} onClick={(event)=>changedActiveIndexElement({event, path: '4', id: mockData[4].id})} childElement={
                    <>
                      {mockData[4].children.map((element, elementIndex) => {
                        return  <Element key={element.id} tag={element.tag} content={element.content} {...element.attributes} onClick={(event)=>changedActiveIndexElement({event, path: `4-${elementIndex}`, id: element.id})}/>
                      })}
                    </>
                  }/>
                </Column>
              </Td>
            </Tr>
          </Table>
        </div>
      </div>
    </>
  )
}
export const Template4 = () => {
  return (
    <div style={{height: "100%"}}>
      <TemplateHeaderBox title="Template 4"/>
      <Settings />
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
// console.log(['template4'])
// console.log(htmlFormatted())
