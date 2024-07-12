import React, { useState,  useEffect } from "react";
import FormAdd from "../components/FormAdd";
import Panel from "../components/Panel";
import Toolbar from "../components/Toolbar";
import Table from "../components/Table";
import { userColumns, recipeColumns } from "../type/table";
import { user } from "../mocks/user";
import { recipe } from "../mocks/recipe";
import { UserProps } from "../type/user";
import { Recipe } from "../type/recipe";
import Drawer from "components/Drawer";

const Dashboard: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<UserProps | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [showPanel, setShowPanel] = useState(false);


  // const [userData, setUserData] = useState<UserProps[]>([]);
  // const [recipeData, setRecipeData] = useState<Recipe[]>([]);
  // useEffect(() => {
  //   // Fetch user data
  //   APIHelper.fetchUsers()
  //     .then((response) => {
  //       if (response.data) {
  //         setUserData(response.data);
  //       } else {
  //         console.error("Failed to fetch users:", response.error?.message);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching users:", error.message);
  //     });

  //   // Fetch recipe data
  //   APIHelper.fetchRecipes()
  //     .then((response) => {
  //       if (response.data) {
  //         setRecipeData(response.data);
  //       } else {
  //         console.error("Failed to fetch recipes:", response.error?.message);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching recipes:", error.message);
  //     });
  // }, []);

  const handleClosePanel = () => {
    setShowPanel(!showPanel);
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

  return (
    <>
      {/* -- START HEADER -- */}
      <header>
        <div className="navbar-user__wrapper flex flex-row text-quaternary font-semibold w-full h-48 bg-primary p-20">
          <div className="navbar-user__item flex flex-row gap-20 items-center cursor-pointer">
            <span className="bg-menu w-24 h-24 lg:hidden"></span>
            <h1 className="navbar-user__title text-2xl font-sans">Dashboard</h1>
          </div>
        </div>
      </header>
      {/* -- END HEADER -- */}

      {/* -- START MAIN -- */}
      <main className=" main-body flex lg:pl-0 lg:p-10 flex-row font-sans text-sm bg-dashboardPrimary">
        <div className="drawer">
          <Drawer />
          {/* <FormAdd /> */}
        </div>

        <div className="content flex flex-row font-sans bg-dashboardPrimary w-full">
          <div className="content__wrapper content-hinder lg:pl-10 w-full">
            <Toolbar />
            <div
              className="show w-full overflow-auto bg-primary border border-borderPrimary "
              id="table-wrapper"
            >
              <div className="flex gap-4">
                <Table
                  columns={userColumns}
                  data={user}
                  onRowClick={handleUserRowClick}
                />
                {/* <Table
                  columns={recipeColumns}
                  data={recipe}
                  onRowClick={handleRecipeRowClick}
                /> */}
              </div>
            </div>
          </div>
          {showPanel && (
            <Panel
              selectedUser={selectedUser}
              selectedRecipe={selectedRecipe}
              onClosePanel={handleClosePanel}
            />
          )}
        </div>
      </main>
      {/* -- END MAIN -- */}
    </>
  );
};

export default Dashboard;
