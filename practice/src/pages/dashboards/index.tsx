import Drawer from "@/components/DataDisplay/Drawer/index";
import Button from "@/components/Inputs/Buttons/index";
import React from "react";
import OptionCategory from "@/components/DataDisplay/Options/Category/index";
import OptionRating from "@/components/DataDisplay/Options/Rating";
import FormAdd from "@/components/DataDisplay/FormAdd";
import Panel from "@/components/DataDisplay/Panel";

const Dashboard: React.FC = () => {
  return (
    <>
      <Drawer />
      <Button type="button" variant="save">
        Save
      </Button>
      <OptionCategory />
      <OptionRating />
      <FormAdd />
      <Panel />
    </>
  );
};

export default Dashboard;
