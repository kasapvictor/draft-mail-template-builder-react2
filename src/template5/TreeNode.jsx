import React, {memo} from "react";
import {Element} from "./Element.jsx";
import {setActiveIndex} from "./store.js";
import { useEventListener } from '@mantine/hooks';

export const TreeNode = memo(({ indexTree }) => {
  const handleClick = (index) => (e) => {
    e.stopPropagation();

    setActiveIndex(null);

    setTimeout(() => {
      setActiveIndex(index[0])
    }, 0)
  }

  return (
    <React.Fragment>
      {indexTree.map((elementIndex, index) => {
        return (
          <Element
            key={index}
            element={elementIndex}
            treeComponent={TreeNode}
            onClick={handleClick(elementIndex)}
          />
        );
      })}
    </React.Fragment>
  );
});
