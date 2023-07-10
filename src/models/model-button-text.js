import {createStore, createEvent} from "effector";

export const buttonTextChanged = createEvent();

export const $buttonText = createStore('I like it!');

$buttonText.on(buttonTextChanged, (_, e) => {
    return e.target.value.trim();
})
