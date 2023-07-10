import {createStore, createApi, createEffect, createEvent} from "effector";

import { tree, elements} from './mock.js'
import produce from "immer";

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

export const {handleContainerWidth, handleContent, handleTextColor , handleBackgroundColor, handleFontSize, handlePadding} = createApi($elements, {
  handleContainerWidth: (state, payload) => {
    return produce(state, (draft) => {
      draft.container.props.style.maxWidth = payload; // FIXME сбросить размер (600) при сохранении/выгрузке в html
    });
  },
  handleContent: (state, payload) => {
    const {elementId, value} = payload;

    return produce(state, (draft) => {
      draft[elementId].content = value;
    });
  },
  handleTextColor: (state, payload) => {
    const {elementId, value} = payload;

    return produce(state, (draft) => {
      draft[elementId].props.style.color = value;
    });
  },
  handleBackgroundColor: (state, payload) => {
    const {elementId, value} = payload;

    return produce(state, (draft) => {
      draft[elementId].props.style.backgroundColor = value;
    });
  },
  handleFontSize: (state, payload) => {
    const {elementId, value} = payload;

    return produce(state, (draft) => {
      draft[elementId].props.style.fontSize = `${!value ? 0 :value}px`;
    });
  },
  handlePadding: (state, payload) => {
    const {elementId, value, side} = payload;

    return produce(state, (draft) => {

      draft[elementId].props.style[side] = `${value}px`;
    });
  }
});

$selectedElement.watch((id) => {
  console.log('SELECTED ELEMENT ID::', id);
});

// ROWS ORDER
export const updatedTree = createEvent('update tree');

$tree.on(updatedTree, (state, payload) => {
  const { source, destination } = payload;

  const sourceParent = state[state[source.id].parent];
  const destinationParent = state[state[destination.id].parent];

  const sourceIndex = sourceParent.children.findIndex(childId => childId === source.id);
  const destinationIndex = destinationParent.children.findIndex(childId => childId === destination.id);

  const newTree = { ...state };

  const newSourceParent = newTree[source.parent];
  const newDestinationParent = newTree[destination.parent];

  [newSourceParent.children[sourceIndex], newDestinationParent.children[destinationIndex]] =
    [newDestinationParent.children[destinationIndex], newSourceParent.children[sourceIndex]];

  return newTree;
});


// TO SHOW LABEL
export const $hoveredElementRef = createStore(null);
export const $selectedElementRef = createStore(null);
export const selectedElementRef = createEvent('select-element');
export const hoveredElementRef = createEvent('hover-element');

$selectedElementRef.on(selectedElementRef, (_, element) => {
  return element
});

$hoveredElementRef.on(hoveredElementRef, (_, element) => {
  return element
});
