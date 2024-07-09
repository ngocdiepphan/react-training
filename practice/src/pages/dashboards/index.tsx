import React, { useState } from "react";
import Button from "../../components/Inputs/Buttons";
import FormAdd from "../../components/DataDisplay/FormAdd";
import Panel from "../../components/DataDisplay/Panel";
import Toolbar from "../../components/DataDisplay/Toolbar";
import Table from "../../components/DataDisplay/Table";
import { userColumns, recipeColumns } from "../../type/table";
import { user } from "../../mocks/user";
import { recipe } from "../../mocks/recipe";
import { UserProps } from "../../type/user";
import { Recipe } from "../../type/recipe";

const Dashboard: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<UserProps | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleUserRowClick = (rowData: UserProps) => {
    setSelectedUser(rowData);
    setSelectedRecipe(null);
  };

  const handleRecipeRowClick = (recipeData: Recipe) => {
    setSelectedRecipe(recipeData);
    setSelectedUser(null);
  };

  return (
    <>
      <Button type="button" variant="confirm">
        Save
      </Button>
      <FormAdd />
      <Toolbar />
      <div className="flex gap-4">
        <Table
          columns={userColumns}
          data={user}
          onRowClick={handleUserRowClick}
        />
        <Table
          columns={recipeColumns}
          data={recipe}
          onRowClick={handleRecipeRowClick}
        />
      </div>
      <Panel selectedUser={selectedUser} selectedRecipe={selectedRecipe} />
    </>
  );
};

export default Dashboard;
