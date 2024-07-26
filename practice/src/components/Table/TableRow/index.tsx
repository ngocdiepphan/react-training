import React from "react";

// Component
import TableCell from "components/Table/TableRow/TableCell";

// Type
import { TableColumn } from "type/table";

interface Props<T> {
  item: T;
  columns: TableColumn<T>[];
  onRowClick: (rowData: T) => void;
}

const TableRow = <T,>({ item, columns, onRowClick }: Props<T>) => {
  return (
    <tr
      className="table__row h-50 border hover:bg-blue-50 cursor-pointer hover:border-hoverPrimary"
      onClick={() => onRowClick(item)}
    >
      {columns.map((column) => (
        <TableCell
          key={column.key.toString()}
          column={column}
          item={item[column.key]}
        />
      ))}
    </tr>
  );
};

export default TableRow;
