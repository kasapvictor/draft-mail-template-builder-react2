import {Children} from "react";
import {Td} from "./Td.jsx";

export const Tr = ({ style, children }) => {
  return (
    <tr style={style}>
      {Children.map(children, (el) => {
        if (el.type === Td) return el;

        return <Td>{el}</Td>;
      })}
    </tr>
  );
}
