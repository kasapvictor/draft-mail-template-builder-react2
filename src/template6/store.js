import {createStore, createApi, createEffect} from "effector";

import { tree, elements} from './mock.js'


export const $tree = createStore(tree);

export const $elements = createStore(elements);

export const $selectedElement = createStore(null);
export const { setElementId, resetElementId } = createApi($selectedElement,{
  setElementId: (state, payload) => {
    return payload.id;
  },
  resetElementId: () => {
    return null;
  },
});

$selectedElement.watch((id) => {
  console.log('SELECTED ELEMENT ID::', id);
})


