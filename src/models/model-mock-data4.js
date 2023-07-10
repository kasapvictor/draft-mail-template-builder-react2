import {createStore, createEvent} from "effector";
import { sortedMockData } from "../mockData4.js";
import produce from 'immer';

export const findElementById = ({path}, elements) => {
  const indexes = path.split("-");
  let result = elements;

  for (let i = 0; i < indexes.length; i++) {
    const index = indexes[i];
    result = result[index];

    if (!result) {
      return undefined; // если элемент по указанному пути не существует, вернуть undefined
    }

    if (i !== indexes.length - 1 && result.children) {
      result = result.children;
    }
  }

  return result;
};

export const changedValue = createEvent();
export const changedActiveIndexElement = createEvent();

export const $mockStore = createStore(sortedMockData);
export const $activeElementIndex = createStore({
  id: 4,
  path: '0'
});

$mockStore.on(changedValue, (state, e) => {
  return produce(state, (draft) => {
    const element = findElementById($activeElementIndex.getState(), draft);
    element.content = e.target.value;
  });
})

$activeElementIndex.on(changedActiveIndexElement, (_, payload) => {
  const {event, id, path} = payload;

  event.stopPropagation();

  return {id, path};
})


