import { useState } from "react";
import { DailyCheckIn } from "./DailyCheckIn";
import { TodaysFocus } from "./TodaysFocus";
import { QuickShortcuts } from "./QuickShortcuts";
import { TeamPulse } from "./TeamPulse";
import { Button } from "@/components/ui/button";
import "./Dashboard.css";
import DashboardHeader from "./DashboardHeader";

const Dashboard = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (

    <>

    <div className="dashboard-container">

      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-date">{formattedDate}</p>
        </div>
        <div className="dashboard-actions">
          <Button>Add Task</Button>
        </div>
      </div>

      <div className="dashboard-grid">
        <DailyCheckIn />
        <TodaysFocus />
      </div>

      <QuickShortcuts />
      <TeamPulse />
    </div>
    </>
  );
};

export default Dashboard;