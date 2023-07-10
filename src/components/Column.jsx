import {Tr} from "./Tr.jsx";
import {Td} from "./Td.jsx";
import {Table} from "./Table.jsx";

const columnSize = {
  '1/1': 1,
  '1/2': 2,
  '1/3': 3,
  '1/4': 4,
  '1/5': 5,
  '1/6': 6,
  '1/7': 7,
  '1/8': 8,
  '1/9': 9,
  '1/10': 10,
  '1/11': 11,
  '1/12': 12,
}

export const Column = ({ size, align, children, style}) => {
  const columnCount = columnSize[size];
  const maxWidth = columnCount ? 600 / columnCount : '100%';

  return (
    <div className={`column-1-${columnCount}`} style={{display: 'inline-block', maxWidth, verticalAlign: 'top', width: '100%', ...style}}>
      <Table maxWidth={maxWidth}>
        <Tr>
          <Td align={align}>
            {children}
          </Td>
        </Tr>
      </Table>
    </div>
  )
};
