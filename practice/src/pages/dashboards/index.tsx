import React from 'react';
import Drawer from '../../components/DataDisplay/Drawer';
import Button from '../../components/Inputs/Buttons';
import OptionCategory from '../../components/DataDisplay/Options/Category';
import OptionRating from '../../components/DataDisplay/Options/Rating';
import FormAdd from '../../components/DataDisplay/FormAdd';
import Panel from '../../components/DataDisplay/Panel';
import Toolbar from '../../components/DataDisplay/Toolbar';
import Table from "components/DataDisplay/Table";

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
      <Table />
    </>
  );
};

export default Dashboard;
