import React from "react";
import Drawer from "../../components/DataDisplay/Drawer";
import Button from "../../components/Inputs/Buttons";
import OptionCategory from "../../components/DataDisplay/Options/Category";
import OptionRating from "../../components/DataDisplay/Options/Rating";
import FormAdd from "../../components/DataDisplay/FormAdd";
import Panel from "../../components/DataDisplay/Panel";
import Toolbar from "../../components/DataDisplay/Toolbar";
import Table from "components/DataDisplay/Table";
import { recipeColumns } from "type/table";
import { userColumns } from "type/table";
import { user } from "mocks/user";
import { recipe } from "mocks/recipe";

const Dashboard: React.FC = () => {
  return (
    <>
      <Drawer />
      <Button type="button" variant="confirm">
        Save
      </Button>
      <OptionCategory />
      <OptionRating />
      <FormAdd />
      <Panel />
      <Toolbar />
      {/* <UserTable />
      <RecipeTable /> */}
      <Table columns={userColumns} data={user} />
      <Table columns={recipeColumns} data={recipe} />
    </>
  );
};

export default Dashboard;
