import React, { useState, useEffect } from "react";

// Components
import {
  Modal,
  Panel,
  Toolbar,
  Table,
  Drawer
} from "components";

// Types
import { userColumns, recipeColumns } from "type/table";
import { UserProps } from "type/user";
import { Recipe } from "type/recipe";

// Services
import UserService from "services/user";
import RecipeService from "services/recipe";

const Dashboard: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<UserProps | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [showPanel, setShowPanel] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showFormAdd, setShowFormAdd] = useState(false);
  const [selectedTable, setSelectedTable] = useState<string>("");
  const [users, setUsers] = useState<UserProps[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const handleClosePanel = () => {
    setShowPanel(false);
    setSelectedUser(null);
    setSelectedRecipe(null);
  };

  const handleShowDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const handleShowFormAdd = () => {
    setShowFormAdd(!showFormAdd);
  };

  const handleUserRowClick = (rowData: UserProps) => {
    handleClosePanel();
    setSelectedUser(rowData);
    setShowPanel(true);
  };

  const handleRecipeRowClick = (recipeData: Recipe) => {
    handleClosePanel();
    setSelectedRecipe(recipeData);
    setShowPanel(true);
  };

  const handleDrawerItemClick = (itemType: string) => {
    handleClosePanel();
    setSelectedTable(itemType);
  };

  const handleOnSaveUserFromPanel = (data: UserProps) => {
    setUsers((prevUser) => {
      const index = prevUser.findIndex((item) => item.id === data.id);
      if (index !== -1) {
        const updatedUsers = [...prevUser];
        updatedUsers[index] = data;
        return updatedUsers;
      }
      return prevUser;
    });
  };

  const handleOnSaveRecipeFromPanel = (data: Recipe) => {
    setRecipes((prevRecipes) => {
      const index = prevRecipes.findIndex((item) => item.id === data.id);
      if (index !== -1) {
        const updatedRecipes = [...prevRecipes];
        updatedRecipes[index] = data;
        return updatedRecipes;
      }
      return prevRecipes;
    });
  };

  const handleDeleteUser = (data: UserProps) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== data.id));
  };

  const handleDeleteRecipe = (data: Recipe) => {
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.id !== data.id),
    );
  };

  const handleAddRecipe = (newRecipe: Recipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  const userService = new UserService();
  const recipeService = new RecipeService();

  useEffect(() => {
    const fetchUser = async () => {
      const userResponse = await userService.fetchUsers();
      if (userResponse.error) {
        return;
      }
      setUsers((userResponse.data as UserProps[]) || []);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchRecipe = async () => {
      const recipeResponse = await recipeService.fetchRecipes();
      if (recipeResponse.error) {
        return;
      }
      setRecipes((recipeResponse.data as Recipe[]) || []);
    };

    fetchRecipe();
  }, []);

  return (
    <>
      <header className="sticky top-0">
        <div className="navbar-user__wrapper flex flex-row text-quaternary font-semibold w-full h-48 bg-primary p-20">
          <div className="navbar-user__item flex flex-row gap-20 items-center cursor-pointer">
            <span
              className="bg-menu w-24 h-24 lg:hidden"
              onClick={handleShowDrawer}
            ></span>
            <h1 className="navbar-user__title text-2xl font-sans">Dashboard</h1>
          </div>
        </div>
      </header>

      <main className="main-body h-lvh flex lg:pl-0 lg:p-10 flex-row font-sans text-sm bg-dashboardPrimary">
        <div className="drawer">
          <Drawer
            onShowDrawer={showDrawer}
            onShowFormAdd={handleShowFormAdd}
            onDrawerItemClick={handleDrawerItemClick}
            selectedTable={selectedTable}
          />
          {showFormAdd && <Modal onAddRecipe={handleAddRecipe} />}
        </div>

        <div className="content flex flex-row font-sans bg-dashboardPrimary w-full overflow-x-auto">
          <div className="content__wrapper content-hinder lg:pl-10 w-full overflow-x-auto">
            <Toolbar
              title={selectedTable === "user" ? "User" : "Recipe"}
              showTitle={!!selectedTable}
            />
            <div
              className="bg-primary border border-borderPrimary"
              id="table-wrapper"
            >
              <div className="flex gap-4">
                {selectedTable === "user" && (
                  <Table
                    columns={userColumns}
                    data={users}
                    onRowClick={handleUserRowClick}
                  />
                )}
                {selectedTable === "recipe" && (
                  <Table
                    columns={recipeColumns}
                    data={recipes}
                    onRowClick={handleRecipeRowClick}
                  />
                )}
              </div>
            </div>
          </div>
          {showPanel && (
            <Panel
              selectedUser={selectedUser}
              selectedRecipe={selectedRecipe}
              onClosePanel={handleClosePanel}
              onSaveUser={handleOnSaveUserFromPanel}
              onSaveRecipe={handleOnSaveRecipeFromPanel}
              onDeleteUser={handleDeleteUser}
              onDeleteRecipe={handleDeleteRecipe}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default Dashboard;
