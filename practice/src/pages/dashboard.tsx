import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import Panel from "../components/Panel";
import Toolbar from "../components/Toolbar";
import Table from "../components/Table";
import { userColumns, recipeColumns } from "../type/table";
import { UserProps } from "../type/user";
import { Recipe } from "../type/recipe";
import Drawer from "components/Drawer";
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
    setShowPanel(!showPanel);
  };
  const handleShowDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const handleShowFormAdd = () => {
    setShowFormAdd(!showFormAdd);
  };

  const handleUserRowClick = (rowData: UserProps) => {
    setSelectedUser(rowData);
    setSelectedRecipe(null);
    setShowPanel(true);
  };

  const handleRecipeRowClick = (recipeData: Recipe) => {
    setSelectedRecipe(recipeData);
    setSelectedUser(null);
    setShowPanel(true);
  };

  const handleDrawerItemClick = (itemType: string) => {
    setSelectedTable(itemType);
  };

  const handleOnSaveUserFromPanel = (data: UserProps) => {
    setUsers((prevUser) => {
      const index = prevUser.findIndex((item) => item.id === data.id);
      if (index !== -1) {
          const  updatedUsers = [...prevUser];
          updatedUsers[index] = data;
          return  updatedUsers;
      }
      return prevUser;
  });
  }

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
      {/* -- START HEADER -- */}
      <header>
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
      {/* -- END HEADER -- */}

      {/* -- START MAIN -- */}
      <main className=" main-body flex lg:pl-0 lg:p-10 flex-row font-sans text-sm bg-dashboardPrimary">
        <div className="drawer">
          <Drawer
            onShowDrawer={showDrawer}
            onShowFormAdd={handleShowFormAdd}
            onDrawerItemClick={handleDrawerItemClick}
          />
          {showFormAdd && <Modal />}
        </div>

        <div className="content flex flex-row font-sans bg-dashboardPrimary w-full">
          <div className="content__wrapper content-hinder lg:pl-10 w-full">
            <Toolbar title={selectedTable === "user" ? "User" : "Recipe"} />
            <div
              className="show w-full overflow-auto bg-primary border border-borderPrimary "
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
            />
          )}
        </div>
      </main>
      {/* -- END MAIN -- */}
    </>
  );
};

export default Dashboard;
