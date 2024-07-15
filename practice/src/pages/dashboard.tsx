import React, { useState, useEffect } from "react";
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
  const [showDrawer, setShowDrawer] = useState(false);
  const [showFormAdd, setShowFormAdd] = useState(false);

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
          <Drawer onShowDrawer={showDrawer} onShowFormAdd={handleShowFormAdd} />
          {showFormAdd && <FormAdd />}
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
