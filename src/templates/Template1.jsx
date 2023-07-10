import {Mjml, MjmlBody, MjmlButton, MjmlColumn, MjmlHead, MjmlImage, MjmlPreview, MjmlSection, MjmlTitle,} from "@faire/mjml-react";
import {renderToMjml} from "@faire/mjml-react/utils/renderToMjml";
import mjml2html from "mjml-browser";
import DOMPurify from 'dompurify';
import {useStore} from "effector-react";
import {ColorPicker} from "@mantine/core";
import { createStyles, NumberInput, Slider, rem } from '@mantine/core';

import {$width} from "../models/model-width";
import {$buttonText, buttonTextChanged} from "../models/model-button-text";
import {$buttonsRadius, buttonChangedRadius} from "../models/model-button-radius";
import {$buttonsBackgroundColor, buttonChangedBackgroundColor} from "../models/model-button-backgroundColor";

import {TemplateHeaderBox} from "../components";

import {IMG_SRC, WIDTH} from "../constants";

const useStylesSlider = createStyles((theme) => ({
  slider: {
    position: 'relative',
    width: '100%',
  },

  thumb: {
    width: rem(16),
    height: rem(16),
  },

  track: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
  },
}));

const renderReactToMjml = (email) => {
  return mjml2html(renderToMjml(email));
}

const Content = () => {
  const buttonText = useStore($buttonText);
  const buttonBackgroundColor = useStore($buttonsBackgroundColor);
  const buttonRadius = useStore($buttonsRadius);

  const buttons = new Array(50).fill(0).map((b, index) => {
    return <MjmlButton key={index}
                       padding="20px"
                       backgroundColor={buttonBackgroundColor}
                       borderRadius={buttonRadius}
                       href="https://www.wix.com/"
    >
      {buttonText}
    </MjmlButton>
  })

  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>Last Minute Offer</MjmlTitle>
        <MjmlPreview>Last Minute Offer...</MjmlPreview>
      </MjmlHead>
      <MjmlBody>
        <MjmlSection fullWidth backgroundColor="#efefef">
          <MjmlColumn>
            <MjmlImage width="300px" src={IMG_SRC[0]}/>
          </MjmlColumn>
          <MjmlColumn>
            <MjmlImage width="300px" src={IMG_SRC[1]}/>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn>
            {buttons}
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  )
}

const EditPanel = () => {
  const { classes } = useStylesSlider();
  const buttonText = useStore($buttonText);
  const buttonRadius = useStore($buttonsRadius);
  const buttonBackgroundColor = useStore($buttonsBackgroundColor);

  return (
    <div className="edit-panel">
      <label className="label">
        <span>Button Text:</span>
        <input type="text" value={buttonText} onChange={buttonTextChanged}/>
      </label>

      <div className="label">
        <span>Button Background Color:</span>
        {/*<ColorPicker format="hex" value={buttonBackgroundColor} onChange={buttonChangedBackgroundColor}/>*/}
        <ColorPicker format="hex" value={buttonBackgroundColor} onChangeEnd={buttonChangedBackgroundColor}/>
      </div>

      <div className="label" style={{ position: 'relative', width: 150 }}>
        <span>Button Radius: {buttonRadius}</span>
        <Slider
          max={100}
          step={1}
          min={0}
          label={null}
          value={buttonRadius === '' ? 0 : buttonRadius}
          onChange={buttonChangedRadius}
          size={2}
          radius={0}
          className={classes.slider}
          classNames={{ thumb: classes.thumb, track: classes.track }}
        />
      </div>
    </div>
  )
}


const RawHtml = ({html, errors}) => {
  return (
    <div>
      <h2>Raw Code</h2>
      {Boolean(errors.length) &&
        <>
          <h4>Errors:</h4>
          <code className="bg-error">
            {errors.map((err, index) =>
              <p key={index} className="notice-err"> #{index + 1}: {err.message}</p>
            )}
          </code>
        </>
      }
      <code>
        <pre>{html}</pre>
      </code>
    </div>

  )
}

const RenderedContent = () => {
  const width = useStore($width);

  // Если удалить состояние кнопок то компоненты не будут обновляться
  // важно чтобы компонент в котором вызывается рендер превью обновлялся
  const buttonText = useStore($buttonText);
  const buttonRadius = useStore($buttonsRadius);
  const buttonBackgroundColor = useStore($buttonsBackgroundColor);

  const {html, errors} = renderReactToMjml(<Content/>, {
    keepComments: true, beautify: true, minify: false, validationLevel: 'strict'
  });

  return (
    <>
      <div>
        <div style={{display: "flex", justifyContent: "center", gap: '1rem'}}>
          {width > WIDTH.SM && <div style={{width}} dangerouslySetInnerHTML={{__html: html}}/>}
          {width <= WIDTH.SM && <div style={{width}} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(html)}}/>}
          {/*<div style={{width}} dangerouslySetInnerHTML={{__html: html}}/>*/}
          {/*<div style={{width}} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(html)}}/>*/}
          <iframe srcDoc={html} style={{width, minHeight: 600, border: 'none'}}/>
        </div>
      </div>

      <div>|</div>

      <RawHtml html={html} errors={errors}/>
    </>
  )
}


export const Template1 = () => {
  return (
    <div>
      <TemplateHeaderBox title="Template 1"/>

      <EditPanel/>

      <RenderedContent/>
    </div>
  );
};
