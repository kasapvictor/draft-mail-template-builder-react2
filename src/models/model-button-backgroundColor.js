import {createStore, createEvent} from "effector";

export const buttonChangedBackgroundColor = createEvent();

export const $buttonsBackgroundColor= createStore('#3b82f6');

$buttonsBackgroundColor.on(buttonChangedBackgroundColor, (_, color) => {
  return color
});

