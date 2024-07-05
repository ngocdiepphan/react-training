import React from "react";

interface TableColumn<T> {
  key: keyof T;
  header: string;
}

interface Props<T> {
  columns: TableColumn<T>[];
  data: T[];
}

const TableRow = <T extends object>({ columns, data }: Props<T>) => {
  return (
    <>
      {data.map((item, index) => (
        <tr
          key={index.toString()}
          className="table__row border-b-2 h-50 hover:bg-blue-50"
        >
          {columns.map((column) => (
            <td key={column.key.toString()} className="align-middle p-20">
              {column.key === "img" ? (
                <img
                  src={item[column.key as keyof T] as string}
                  className="w-87 h-87 rounded-full"
                />
              ) : (
                <p className="table__title">{item[column.key] as string}</p>
              )}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default TableRow;
