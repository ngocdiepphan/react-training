import React from "react";

// Type
import { TableColumn } from "type/table";

interface Props<T> {
  column: TableColumn<T>;
  item: T[keyof T];
}

const TableCell = <T,>({ column, item }: Props<T>) => {
  return (
    <td key={column.key.toString()} className="align-middle p-20">
      {column.key === "img" ? (
        <div className="w-87 h-87 flex justify-center items-center">
          <img
            src={item as string}
            className="w-full h-full object-cover rounded-full"
            alt=""
          />
        </div>
      ) : (
        <p className="">{item as string}</p>
      )}
    </td>
  );
};

export default TableCell;
