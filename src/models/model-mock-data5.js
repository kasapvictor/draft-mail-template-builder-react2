import {createStore, createEvent} from "effector";
import { mockData1 } from "../mockData5";
import produce from 'immer';

export const changedValue = createEvent();
export const changedActiveIndexElement = createEvent();

export const elementsStores = mockData1.map((element) => {
  return createStore(element);
});

console.log('elementsStores', elementsStores);
