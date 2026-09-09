import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  CalendarDays,
  Wallet,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Megaphone,
  Settings,
} from "lucide-react";

import "./Sidebar.css";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Employees",
      path: "/employees",
      icon: Users,
    },
    {
      name: "Attendance",
      path: "/attendance",
      icon: CalendarCheck,
    },
    {
      name: "Leave",
      path: "/leave",
      icon: CalendarDays,
    },
    {
      name: "Payroll",
      path: "/payroll",
      icon: Wallet,
    },
    {
      name: "Recruitment",
      path: "/recruitment",
      icon: BriefcaseBusiness,
    },
    {
      name: "Performance",
      path: "/performance",
      icon: ChartNoAxesCombined,
    },
    {
      name: "Announcements",
      path: "/announcements",
      icon: Megaphone,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">
          HR
        </div>

        <div>
          <strong>HR Portal</strong>
          <span>Management System</span>
        </div>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-profile">
          <div className="sidebar-profile-avatar">
            JP
          </div>

          <div>
            <strong>Jeyapriya</strong>
            <span>HR Administrator</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;