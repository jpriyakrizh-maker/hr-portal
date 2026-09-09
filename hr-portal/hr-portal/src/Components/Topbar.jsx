import React from "react";
import {
  Search,
  Bell,
  Menu,
  CalendarDays,
  ChevronDown,
} from "lucide-react";
import "./Topbar.css";


function Topbar({ onMenuClick }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="mobile-menu-button" onClick={onMenuClick}>
          <Menu size={22} />
        </button>

        <div className="page-heading">
          <h1>HR Dashboard</h1>
          <p>Manage your workforce efficiently</p>
        </div>
      </div>

      <div className="topbar-right">
        <div className="topbar-search">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search anything..."
          />
          <span>⌘ K</span>
        </div>

        <div className="today-date">
          <CalendarDays size={18} />
          <span>Sep 09, 2026</span>
        </div>

        <button className="notification-button">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        <div className="profile-menu">
          <div className="profile-avatar">
            JP
          </div>

          <div className="profile-info">
            <strong>Jeyapriya</strong>
            <span>HR Admin</span>
          </div>

          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  );
}

export default Topbar;