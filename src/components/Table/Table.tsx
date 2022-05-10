import { Thead, Tr, Th, Tbody, Td, Table as TableWrap } from '@chakra-ui/react';

interface ITable {
  headers: string[];
  rows: string[][];
  handleRowClick?: (rowId: string) => void;
}

const Table = ({ headers, rows, handleRowClick }: ITable) => {
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
            <Tr
              key={row[index] + Math.random()}
              cursor={handleRowClick ? 'pointer' : 'default'}
              onClick={() => handleRowClick && handleRowClick(row[0])}
              _hover={{ backgroundColor: 'teal.400' }}
            >
              {handleRowClick
                ? row.slice(1).map((rowContent) => {
                    return (
                      <Td key={rowContent + Math.random()}>{rowContent}</Td>
                    );
                  })
                : row.map((rowContent) => {
                    return (
                      <Td key={rowContent + Math.random()}>{rowContent}</Td>
                    );
                  })}
            </Tr>
          );
        })}
      </Tbody>
    </TableWrap>
  );
};

export default Table;
