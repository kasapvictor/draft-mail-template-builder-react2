import {Tr} from "./Tr";
import {Td} from "./Td";
import {Table} from "./Table";

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

export const Column = ({ size='1/1', align = 'center', children, style}) => {
  const columnCount = columnSize[size];
  const maxWidth = columnCount ? 600 / columnCount : '100%';

  const handleClick = () => {
    console.log('click')
  }

  return (
    <div onClick={handleClick} className={`column-1-${columnCount}`} style={{display: 'inline-block', maxWidth, verticalAlign: 'top', width: '100%', ...style}}>
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
