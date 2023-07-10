import {createStore, createEvent} from "effector";

export const widthChanged = createEvent();

export const $width = createStore(600);

$width.on(widthChanged, (_, width) => {
    return width;
})
