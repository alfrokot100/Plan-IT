import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Target, 
  Calendar, 
  Users, 
  Settings
} from "lucide-react";
import "./CustomSidebar.css";

const CustomSidebar = () => {
  const location = useLocation();

  const navItems = [
    { to: "/dashboard", icon: <Home />, label: "Dashboard" },
    { to: "/tasks", icon: <Target />, label: "Uppgifter" },
    { to: "/calendar", icon: <Calendar />, label: "Kalender" },
    { to: "/team", icon: <Users />, label: "Team" },
    { to: "/settings", icon: <Settings />, label: "Inställningar" }
  ];

  return (
    <div className="custom-sidebar open"> {/* Always open */}
      <nav className="custom-sidebar-nav">
        {navItems.map((item) => (
          <Link 
            key={item.to} 
            to={item.to}
            className={`custom-nav-item ${location.pathname === item.to ? "active" : ""}`}
          >
            <div className="custom-nav-icon">{item.icon}</div>
            <span className="label">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="custom-sidebar-footer">
        <p className="custom-sidebar-info-title">BuildBoard</p>
        <p className="custom-sidebar-info-subtitle">Building stronger teams</p>
      </div>
    </div>
  );
};

export default CustomSidebar;