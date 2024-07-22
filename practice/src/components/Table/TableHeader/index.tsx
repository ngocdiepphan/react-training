import React from "react";
import { TableColumn } from "type/table";

interface Props<T> {
  columns: TableColumn<T>[];
}

const TableHeader = <T,>({ columns }: Props<T>) => {
  return (
    <thead className="w-full items-start">
      <tr>
        {columns.map((column) => (
          <th key={column.key as string} className="text-left p-20">
            {column.header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
