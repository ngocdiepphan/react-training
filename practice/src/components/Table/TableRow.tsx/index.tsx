import React from "react";
import TableCell from "./TableCell";
import { TableColumn } from "type/table";

interface Props<T> {
  item: T;
  columns: TableColumn<T>[];
  onRowClick: (rowData: T) => void;
}

const TableRow = <T,>({ item, columns, onRowClick }: Props<T>) => {
  return (
    <tr
      className="table__row border-b-2 h-50 hover:bg-blue-50 cursor-pointer hover:border-blue-200"
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
