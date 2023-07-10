import {createStore, createEvent, createApi} from "effector";
import produce from "immer";

import { data } from "./mock";

export const buildTree = (arr) => {
  const indexMap = arr.reduce((acc, item, index) => {
    acc[item.id] = index;
    return acc;
  }, {});

  function buildNode(id) {
    const index = indexMap[id];
    const item = arr[index];
    const children = item.children
      ?.map(buildNode)
      .sort((a, b) => arr[a[0]].order - arr[b[0]].order);
    return children ? [index, children] : [index];
  }

  return arr
    .filter((item) => item.parent === null)
    .sort((a, b) => a.order - b.order)
    .map((item) => buildNode(item.id));
};

export const $activeElementIndex = createStore(null);
export const $activeElementIndexSection = createStore(null);
const changeOrder = createEvent();

export const { setActiveIndex } = createApi($activeElementIndex, {
  setActiveIndex: (state, index) => {
    return index
  },
});

export const { setActiveIndexSection } = createApi($activeElementIndexSection, {
  setActiveIndexSection: (state, index) => {
    return index
  },
});

export const $elementsStores = data.map((element) => {
  return createStore(element);
});

const getStores = () => {
  return $elementsStores.map((store) => store.getState());
};

export const $elementsTree = createStore(buildTree(getStores()));

export const updateContent = (index) => (e) => {
  const store = $elementsStores[index];
  const storeData = store.getState();

  store.setState(
    produce(storeData, (draft) => {
      draft.content = e.target.value;
    })
  );
};

export const updateBackgroundColor = (index) => (e) => {
  const store = $elementsStores[index];
  const storeData = store.getState();

  store.setState(
    produce(storeData, (draft) => {
      draft.props.style.backgroundColor = e.target.value;
    })
  );
};

export const updateColor = (index) => (e) => {
  const store = $elementsStores[index];
  const storeData = store.getState();

  store.setState(
    produce(storeData, (draft) => {
      draft.props.style.color = e.target.value;
    })
  );
};

export const updateOrder = (index) => (e) => {
  console.log('index!!!', index, e.target.value)
  const store = $elementsStores[index];
  const storeData = store.getState();

  console.log('storeData', storeData)

  store.setState(
    produce(storeData, (draft) => {
      draft.order = Number(e.target.value);
    })
  );

  changeOrder();
};

$elementsTree.on(changeOrder, () => {
  console.log("order updated", getStores());
  return buildTree(getStores());
});
