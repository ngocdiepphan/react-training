import React from "react";
import Drawer from "../../components/DataDisplay/Drawer";
import Button from "../../components/Inputs/Buttons";
import OptionCategory from "../../components/DataDisplay/Options/Category";
import OptionRating from "../../components/DataDisplay/Options/Rating";
import FormAdd from "../../components/DataDisplay/FormAdd";
import Panel from "../../components/DataDisplay/Panel";
import Toolbar from "../../components/DataDisplay/Toolbar";
import UserTable from "components/DataDisplay/Table/TableUser";
import RecipeTable from "components/DataDisplay/Table/TableRecipe";

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
      {/* <Table /> */}
      <UserTable />
      <RecipeTable />
    </>
  );
};

export default Dashboard;
