import {createStore, createEvent} from "effector";

export const buttonChangedRadius = createEvent();

export const $buttonsRadius= createStore(4);

$buttonsRadius.on(buttonChangedRadius, (_, radius) => {
  return radius
});



