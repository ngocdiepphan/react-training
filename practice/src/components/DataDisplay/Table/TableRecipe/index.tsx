import React from "react";
import Table from "../index";
import { TableColumn, RecipeRow } from "type/table";
import { recipe } from "mocks/recipe";

const recipeColumns: TableColumn<RecipeRow>[] = [
  { key: "img", header: "Image" },
  { key: "name", header: "Name" },
  { key: "category", header: "Category" },
  { key: "creator", header: "Creator" },
  { key: "createdAt", header: "Created At" },
  { key: "ratings", header: "Ratings" },
  { key: "description", header: "Description" },
];

const RecipeTable = () => <Table columns={recipeColumns} data={recipe} />;

export default RecipeTable;
