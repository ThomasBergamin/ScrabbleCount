import { Thead, Tr, Th, Tbody, Td, Table as TableWrap } from '@chakra-ui/react';

interface ITable {
  headers: string[];
  rows: string[][];
}

const Table = ({ headers, rows }: ITable) => {
  console.log(headers, rows);
  return (
    <TableWrap colorScheme="teal">
      <Thead>
        <Tr>
          {headers.map((header) => {
            return (
              <Th key={header + Math.random()} color="whiteAlpha.600">
                {header}
              </Th>
            );
          })}
        </Tr>
      </Thead>
      <Tbody color="whiteAlpha.900">
        {rows.map((row, index) => {
          return (
            <Tr key={row[index] + Math.random()} cursor="pointer">
              {row.map((rowContent) => (
                <Td key={rowContent + Math.random()}>{rowContent}</Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </TableWrap>
  );
};

export default Table;
