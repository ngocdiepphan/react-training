import React from "react";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import { UserRow } from "type/table";
import { TableColumn } from "type/table";

export const columnUser: TableColumn<UserRow>[] = [
  { key: "img", header: "Image" },
  { key: "username", header: "Full name" },
  { key: "email", header: "Email" },
];

interface TableUserProps {
  data: UserRow[];
}

const TableUser: React.FC<TableUserProps> = ({ data }) => {
  return (
    <table className="w-full text-xl font-semibold text-quaternary font-sans">
      <thead className="table__head">
        <TableHeader columns={columnUser} />
      </thead>
      <tbody className="text-base font-normal" id="user-body">
        <TableRow columns={columnUser} data={data} />
      </tbody>
    </table>
  );
};

export default TableUser;
