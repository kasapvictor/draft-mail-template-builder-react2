import {Children} from "react";
import {Tr} from "./Tr.jsx";
import {Td} from "./Td.jsx";

export const Table = ({style, children, width = "100%", height = "100%", border = 0, align = "center", maxWidth = null, ...props}) => {
  return (
    <table {...props} style={{maxWidth, ...style}} cellPadding={0} cellSpacing={0} border={border} align={align} width={width}>
      <tbody>
      {
        Children.map(children, (el) => {
          if (!el) return;

          if (el.type === Tr) return el;

          if (el.type === Td) {
            return <Tr>{el}</Tr>;
          }

          return (
            <Tr>
              <Td>{el}</Td>
            </Tr>
          );
        })
      }
      </tbody>
    </table>);
}
