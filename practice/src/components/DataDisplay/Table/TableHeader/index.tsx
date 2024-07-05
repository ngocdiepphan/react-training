import React from "react";

export interface TableColumn<T> {
  key: keyof T;
  header: string;
}

interface Props<T> {
  columns: TableColumn<T>[];
}

const TableHeader = <T extends object>({ columns }: Props<T>) => {
  return (
    <tr className="w-full">
      {columns.map((column, index) => (
        <th
          key={`column-${index}`}
          className="font-semibold text-left text-primary bg-buttonPrimary p-20"
        >
          {column.header}
        </th>
      ))}
    </tr>
  );
};

export default TableHeader;
