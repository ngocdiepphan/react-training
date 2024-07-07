import React from "react";
import { Props } from "type/table";

const Table = <T,>({ columns, data }: Props<T>) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key as string}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </table>
  );
};

export default Table;
