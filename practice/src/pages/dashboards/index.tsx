import Drawer from "@/components/DataDisplay/Drawer";
import Button from "@/components/Inputs/Buttons";
import React from "react";

const Dashboard: React.FC = () => {
return(
  <>
  <Drawer />
  <Button type="button" variant="save">Save</Button>
    </>
)
}

export default Dashboard;
