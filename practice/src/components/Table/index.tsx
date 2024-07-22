import React from "react";
import { TableColumn } from "type/table";

// Components
import TableHeader from "components/Table/TableHeader";
import TableRow from "components/Table/TableRow";

export interface Props<T> {
  columns: TableColumn<T>[];
  data: T[];
  onRowClick: (rowData: T) => void;
}

const Table = <T,>({ columns, data, onRowClick }: Props<T>) => {
  return (
    <div className="w-full overflow-y-auto max-h-650">
      <table className="w-full text-xl font-semibold text-quaternary font-sans overflow-auto">
        <TableHeader columns={columns} />
        <tbody className="text-base font-normal" id="user-body">
          {data.map((item, index) => (
            <TableRow
              key={index.toString()}
              item={item}
              columns={columns}
              onRowClick={onRowClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
