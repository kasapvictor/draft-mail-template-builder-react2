import beautify from "js-beautify";
import ReactDOMServer from "react-dom/server";

import {Button} from "@mantine/core";

import {RawHtml} from "./RawHtml";
import {Styles} from "./Styles";
import {RenderTemplateRaw} from "./RenderTemplateRaw";
import {Prism} from "@mantine/prism";
import {useState} from "react";

/**
 * js-beautify https://www.npmjs.com/package/js-beautify
 * @param content
 * @returns {*}
 */
const htmlFormatted = (content) => {
  const rawHtml = ReactDOMServer.renderToStaticMarkup(content)
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"');

  return beautify.html_beautify(rawHtml, {
    indent_size: 2,
    indent_inner_html: true,
    wrap_attributes: 'force-aligned', // "auto","force","force-aligned","force-expand-multiline","aligned-multiple","preserve","preserve-aligned"
    end_with_newline: true,
    wrap_line_length: 80,
    indent_empty_lines: true,
    inline: [],
  })
}

const BuildToHtmlButton = ({onClick}) => {

  const handleBuildHtml = () => {
    const html = htmlFormatted(
      <RawHtml content={
        <>
          <Styles/>
          <RenderTemplateRaw/>
        </>
      }/>
    );
    onClick(html);
    console.log(html)
  };


  return (<Button onClick={handleBuildHtml}>Build to HTML</Button>)
};

export const BuildRawHtml = () => {
  const [html, setHtml] = useState(null)
  return (
    <div style={{ textAlign: 'left'}}>
      <BuildToHtmlButton onClick={setHtml}/>
      <br/><br/>
      {html &&
        <Prism language="html"
               radius="md"
               colorScheme="dark"
               withLineNumbers={true}
               copyLabel="Copy code to clipboard"
               copiedLabel="Code copied to clipboard">
          { html }
        </Prism>
      }
    </div>
  )
}
