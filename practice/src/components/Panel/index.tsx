import React, { useEffect } from "react";
import PanelForm from "./PanelForm";
import { UserProps } from "type/user";
import { Recipe } from "type/recipe";
import { userColumns, recipeColumns } from "type/table";
import UserService from "services/user";
import RecipeService from "services/recipe";

interface PanelProps {
  selectedUser: UserProps | null;
  selectedRecipe: Recipe | null;
  onClosePanel?: () => void;
  onSaveUser: (editedUser: UserProps) => void;
  onSaveRecipe: (data: Recipe) => void;
  onDeleteUser: (deletedUser: UserProps) => void;
}

const Panel = ({
  selectedUser,
  selectedRecipe,
  onClosePanel,
  onSaveUser,
  onSaveRecipe,
  onDeleteUser,
}: PanelProps) => {
  const userService = new UserService();
  const recipeService = new RecipeService();

  const handleUpdateUser = async (editedUser: UserProps) => {
    const response = await userService.updateUser(editedUser);
    if (response.error) {
      return;
    } else {
      alert("Edit user successful!");
      onSaveUser(editedUser);
      onClosePanel?.();
    }
  };
  useEffect(() => {}, [selectedUser]);

  const handleUpdateRecipe = async (editRecipe: Recipe) => {
    const response = await recipeService.updateRecipe (editRecipe);
    if (response.error) {
      return;
    } else {
      alert ("Recipe edit successful!");
      onSaveRecipe(editRecipe)
      onClosePanel?.();
    }
  }
  useEffect(() => {}, [selectedRecipe]);

  const handleDeleteUser = async (deletedUser: UserProps) => {
    const response = await userService.deleteUser(deletedUser.id);
    if (response.error) {
      return;
    }
    alert("User deleted successfully!");
    onDeleteUser(deletedUser);
    onClosePanel?.();
  };

  return (
    <aside
      className="panel hinder-panel lg:ml-10 content-dashboard bg-primary border border-gray-300 fixed h-full w-full top-0 left-0 m-0 md:right-auto lg:static"
      id="panel-details"
    >
      {selectedUser && (
        <PanelForm
          columns={userColumns}
          data={selectedUser}
          onSave={handleUpdateUser}
          onDelete={handleDeleteUser}
          onClosePanel={onClosePanel}
        />
      )}
      {selectedRecipe && (
        <PanelForm
          columns={recipeColumns}
          data={selectedRecipe}
          onSave={handleUpdateRecipe}
          onClosePanel={onClosePanel}
        />
      )}
    </aside>
  );
};

export default Panel;
