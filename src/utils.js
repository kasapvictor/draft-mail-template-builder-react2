export const sortDataByOrder = (unsortedData) => {
  const copyUnsortedData = JSON.parse(JSON.stringify(unsortedData));
  const sortedData = copyUnsortedData.sort((a, b) => a.order - b.order);

  sortedData.forEach(item => {
    if (item.children && item.children.length) {
      item.children = sortDataByOrder(item.children);
    }
  });

  return sortedData;
}

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
