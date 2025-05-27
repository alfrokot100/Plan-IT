import React, { useState } from 'react';
import DailyCheckIn from '../components/dashboardPage/DailyCheckIn';
import TodaysFocus from '../components/dashboardPage/TodaysFocus';
import QuickShortcuts from '../components/dashboardPage/QuickShortcuts';
import TeamPulse from '../components/dashboardPage/TeamPulse';
import '../components/dashboardPage/DashboardLayout.css';
import CustomSidebar from '../components/navbar/CustomSidebar';
import Navbar from '../components/navbar/Navbar';
import DashboardHeader from '../components/dashboardPage/DashboardHeader';




const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (

    <>
    <Navbar />
    <DashboardHeader />


    <div className="dashboard-layout">
      <CustomSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div
        className={`dashboard-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}
      >
        <div className="dashboard-row">

          <DailyCheckIn />
          <TodaysFocus />
        </div>
        <QuickShortcuts />
        <TeamPulse />
      </div>
    </div>
    </>
  );
};

export default Dashboard;