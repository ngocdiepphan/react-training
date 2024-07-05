import React from "react";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import { Recipe } from "type/recipe";
import { TableColumn } from "type/table";

interface Props {
  data: Recipe[];
}

const columns: TableColumn<Recipe>[] = [
  { key: "img", header: "Image" },
  { key: "name", header: "Name" },
  { key: "category", header: "Category" },
  { key: "creator", header: "Creator" },
  { key: "createdAt", header: "Created At" },
  { key: "ratings", header: "Ratings" },
  { key: "description", header: "Description" },
];

const TableRecipe: React.FC<Props> = ({ data }) => {
  const formattedData = data.map((item) => ({
    ...item,
    createdAt: new Date(item.createdAt).toLocaleDateString(),
  }));

  return (
    <table className="w-full text-xl font-semibold text-quaternary font-sans">
      <thead className="table__head">
        <TableHeader columns={columns} />
      </thead>
      <tbody className="text-base font-normal" id="user-body">
        <TableRow columns={columns} data={formattedData} />
      </tbody>
    </table>
  );
};

export default TableRecipe;
