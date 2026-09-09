import React from "react";
import {
  Users,
  UserCheck,
  CalendarOff,
  UserPlus,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import "./StatCard.css";


const iconMap = {
  employees: Users,
  present: UserCheck,
  leave: CalendarOff,
  hires: UserPlus,
};

function StatCard({
  title,
  value,
  change,
  changeText,
  type = "employees",
  positive = true,
}) {
  const Icon = iconMap[type] || Users;

  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <div className={`stat-icon ${type}`}>
          <Icon size={22} />
        </div>

        <div className={`stat-change ${positive ? "positive" : "negative"}`}>
          {positive ? (
            <TrendingUp size={14} />
          ) : (
            <TrendingDown size={14} />
          )}
          <span>{change}</span>
        </div>
      </div>

      <div className="stat-card-content">
        <p>{title}</p>
        <h2>{value}</h2>
        <span className="stat-description">
          {changeText}
        </span>
      </div>
    </div>
  );
}

export default StatCard;