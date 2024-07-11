import React, { useState } from "react";
import PanelForm from "../Panel/PanelForm";
import { UserProps } from "type/user";
import { Recipe } from "type/recipe";
import { userColumns, recipeColumns } from "type/table";

interface PanelProps {
  selectedUser: UserProps | null;
  selectedRecipe: Recipe | null;
  onClosePanel?: () => void;
}

const Panel: React.FC<PanelProps> = ({
  selectedUser,
  selectedRecipe,
  onClosePanel,
}) => {
  return (
    <aside
      className="panel hinder-panel lg:ml-10 content-dashboard bg-primary border border-gray-300 fixed h-full w-full top-0 left-0 m-0 md:right-auto lg:static "
      id="panel-details"
    >
      {selectedUser && (
        <PanelForm
          columns={userColumns}
          data={selectedUser}
          onClosePanel={onClosePanel}
        />
      )}
      {selectedRecipe && (
        <PanelForm
          columns={recipeColumns}
          data={selectedRecipe}
          onClosePanel={onClosePanel}
        />
      )}
    </aside>
  );
};

export default Panel;
