import React, { useEffect } from "react";
import PanelForm, { PanelFormProps } from "./PanelForm";
import { UserProps } from "type/user";
import { Recipe } from "type/recipe";
import { userColumns, recipeColumns } from "type/table";
import UserService from "services/user";

interface PanelProps {
  selectedUser: UserProps | null;
  selectedRecipe: Recipe | null;
  onClosePanel?: () => void;
  onSaveUser: (editedUser: UserProps) => void;
}

const Panel = ({
  selectedUser,
  selectedRecipe,
  onClosePanel,
  onSaveUser,
}: PanelProps) => {
  const userService = new UserService();

  const handleUserSave = async (editedUser: UserProps) => {
    const response = await userService.updateUser(editedUser);
    if (response.error) {
     return;
    } else {
      alert("Edit user successful!");
      onSaveUser(editedUser);
      onClosePanel?.();
    }
  };

  useEffect(() => {
  }, [selectedUser]);

  return (
    <aside
      className="panel hinder-panel lg:ml-10 content-dashboard bg-primary border border-gray-300 fixed h-full w-full top-0 left-0 m-0 md:right-auto lg:static"
      id="panel-details"
    >
      {selectedUser && (
        <PanelForm
          columns={userColumns}
          data={selectedUser}
          onSave={handleUserSave}
          onClosePanel={onClosePanel}
        />
      )}
      {selectedRecipe && (
        <PanelForm
          columns={recipeColumns}
          data={selectedRecipe}
          // onSave={handleRecipeSave}
          onClosePanel={onClosePanel}
        />
      )}
    </aside>
  );
};

export default Panel;
