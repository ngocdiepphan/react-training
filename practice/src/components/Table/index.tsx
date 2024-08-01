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

const Table = <T extends { id: string }>({
  columns,
  data,
  onRowClick,
}: Props<T>) => {
  return (
    <div className="w-full overflow-y-auto">
      <table className="w-full text-xl font-semibold text-quaternary font-sans">
        <TableHeader columns={columns} />
        <tbody className="text-base font-normal">
          {data.map((item) => (
            <TableRow
              key={item.id}
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
