import React from "react";
import PanelForm from "../Panel/PanelForm";
import { UserProps } from "type/user";
import { Recipe } from "type/recipe";
import { userColumns, recipeColumns } from "type/table";

interface PanelProps {
  selectedUser: UserProps | null;
  selectedRecipe: Recipe | null;
}

const Panel: React.FC<PanelProps> = ({ selectedUser, selectedRecipe }) => {
  return (
    <div>
      {selectedUser && <PanelForm columns={userColumns} data={selectedUser} />}
      {selectedRecipe && (<PanelForm columns={recipeColumns} data={selectedRecipe} />)}
    </div>
  );
};

export default Panel;
