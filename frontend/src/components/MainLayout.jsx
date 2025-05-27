import { useState } from "react";
import CustomSidebar from "./sidebar/CustomSidebar";
import Header from "./header/Header";
import "./MainLayout.css";

export default function MainLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="layout">
      <CustomSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      <main className={`main ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <div className="content">
          {children}
        </div>
      </main>
    </div>
  );
}