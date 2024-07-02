import Drawer from "@/components/DataDisplay/Drawer/index";
import Button from "@/components/Inputs/Buttons/index";
import React from "react";
import OptionCategory from "@/components/DataDisplay/Options/Category/index";
const Dashboard: React.FC = () => {
  return (
    <>
      <Drawer />
      <Button type="button" variant="save">
        Save
      </Button>
      <OptionCategory />
    </>
  );
};

export default Dashboard;
