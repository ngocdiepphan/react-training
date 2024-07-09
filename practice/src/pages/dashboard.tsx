import React, { useState } from "react";
import FormAdd from "../components/DataDisplay/FormAdd";
import Panel from "../components/DataDisplay/Panel";
import Toolbar from "../components/DataDisplay/Toolbar";
import Table from "../components/DataDisplay/Table";
import { userColumns, recipeColumns } from "../type/table";
import { user } from "../mocks/user";
import { recipe } from "../mocks/recipe";
import { UserProps } from "../type/user";
import { Recipe } from "../type/recipe";
import Drawer from "components/DataDisplay/Drawer";

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
      <main className=" main-body flex lg:p-10 flex-row font-sans text-sm bg-dashboardPrimary">
        <div className="drawer">
          <Drawer />
          <FormAdd />
        </div>

        <div className="content flex flex-row font-sans bg-dashboardPrimary w-full">
          <div className="content__wrapper content-hinder w-full">
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
                <Table
                  columns={recipeColumns}
                  data={recipe}
                  onRowClick={handleRecipeRowClick}
                />
              </div>
            </div>
          </div>
          <aside
            className="panel hinder-panel content-dashboard bg-primary border border-gray-300 fixed h-full w-full top-0 left-0 m-0 md:right-auto lg:static "
            id="panel-details"
          >
            <Panel
              selectedUser={selectedUser}
              selectedRecipe={selectedRecipe}
            />
          </aside>
        </div>
      </main>
      {/* -- END MAIN -- */}
    </>
  );
};

export default Dashboard;
