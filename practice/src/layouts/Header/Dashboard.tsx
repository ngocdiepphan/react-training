import React from "react";

interface HeaderDashboardProps {
  handleShowDrawer: () => void;
}

const HeaderDashboard: React.FC<HeaderDashboardProps> = ({ handleShowDrawer }) => {
  return (
    <header>
      <div className="flex flex-row text-quaternary font-semibold w-full h-48 bg-primary p-20 sticky top-0">
        <div className="flex flex-row gap-20 items-center cursor-pointer">
          <span className="bg-menu w-24 h-24 lg:hidden" onClick={handleShowDrawer}></span>
          <h1 className="text-2xl font-sans">Dashboard</h1>
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
