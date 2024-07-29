import React from "react";

// Type
import { TableColumn } from "type/table";

interface Props<T> {
  columns: TableColumn<T>[];
}

const TableHeader = <T,>({ columns }: Props<T>) => {
  return (
    <thead className="w-full items-start border-b-2 border-b-borderPrimary hover:border-b-hoverPrimary overflow-hidden ">
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
