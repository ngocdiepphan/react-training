import React from "react";
import { TableColumn } from "type/table";

interface Props<T> {
  columns: TableColumn<T>[];
  data: T[];
  onRowClick: (rowData: T) => void;
}

const Table = <T,>({ columns, data, onRowClick }: Props<T>) => {
  return (
    <table className="w-full text-xl font-semibold text-quaternary font-sans">
      <thead className="w-full">
        <tr>
          {columns.map((column) => (
            <th key={column.key as string}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody className="text-base font-normal" id="user-body">
        {data.map((item, index) => (
          <tr
            key={index.toString()}
            className="table__row border-b-2 h-50 hover:bg-blue-50 cursor-pointer"
            onClick={() => onRowClick(item)}
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
      </tbody>
    </table>
  );
};

export default Table;
