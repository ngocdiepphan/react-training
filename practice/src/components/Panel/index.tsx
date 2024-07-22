import React, { useEffect } from "react";

// Component
import { PanelForm } from "components";

// Types
import { UserProps } from "type/user";
import { Recipe } from "type/recipe";
import { userColumns, recipeColumns } from "type/table";

// Services
import UserService from "services/user";
import RecipeService from "services/recipe";

interface PanelProps {
  selectedUser: UserProps | null;
  selectedRecipe: Recipe | null;
  onClosePanel?: () => void;
  onSaveUser: (editedUser: UserProps) => void;
  onSaveRecipe: (data: Recipe) => void;
  onDeleteUser: (deletedUser: UserProps) => void;
  onDeleteRecipe: (deletedRecipe: Recipe) => void;
}

const Panel = ({
  selectedUser,
  selectedRecipe,
  onClosePanel,
  onSaveUser,
  onSaveRecipe,
  onDeleteUser,
  onDeleteRecipe,
}: PanelProps) => {
  const userService = new UserService();
  const recipeService = new RecipeService();

  const handleUpdateUser = async (editedUser: UserProps) => {
    const response = await userService.updateUser(editedUser);
    if (response.error) {
      return;
    } else {
      alert("User edited successfully!");
      onSaveUser(editedUser);
      onClosePanel?.();
    }
  };
  useEffect(() => {}, [selectedUser]);

  const handleUpdateRecipe = async (editRecipe: Recipe) => {
    const response = await recipeService.updateRecipe(editRecipe);
    if (response.error) {
      return;
    } else {
      alert("Recipe updated successfully!");
      onSaveRecipe(editRecipe);
      onClosePanel?.();
    }
  };

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

  const handleDeleteRecipe = async (deletedRecipe: Recipe) => {
    const response = await recipeService.deleteRecipe(deletedRecipe.id);
    if (response.error) {
      return;
    }
    alert("Recipe deleted successfully!");
    onDeleteRecipe(deletedRecipe);
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
          onDelete={handleDeleteRecipe}
          onClosePanel={onClosePanel}
        />
      )}
    </aside>
  );
};

export default Panel;
