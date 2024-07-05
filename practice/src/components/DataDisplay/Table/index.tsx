import React from "react";
import TableUser, { columnUser } from "./TableUser";
import { user } from "../../../mocks/user";
import TableRecipe from "./TableRecipe";
import { recipe } from "mocks/recipe";

const Table: React.FC = () => {
  return (
    <div>
      <TableUser data={user} />
      <TableRecipe data={recipe} />
    </div>
  );
};

export default Table;
