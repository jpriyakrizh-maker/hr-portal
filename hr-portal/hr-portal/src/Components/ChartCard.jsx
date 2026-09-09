import React from "react";
import {
  TrendingUp,
  MoreHorizontal,
} from "lucide-react";
import "./ChartCard.css";


const attendanceData = [
  { day: "Mon", value: 82 },
  { day: "Tue", value: 91 },
  { day: "Wed", value: 87 },
  { day: "Thu", value: 94 },
  { day: "Fri", value: 89 },
  { day: "Sat", value: 76 },
];

function ChartCard() {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <h3>Attendance Overview</h3>
          <p>Employee attendance for this week</p>
        </div>

        <button className="chart-menu">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="chart-summary">
        <div>
          <h2>89.6%</h2>
          <span>
            <TrendingUp size={14} />
            4.8% vs last week
          </span>
        </div>

        <select className="chart-select" defaultValue="week">
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
        </select>
      </div>

      <div className="chart-area">
        <div className="chart-y-axis">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>

        <div className="chart-content">
          <div className="chart-grid">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="chart-bars">
            {attendanceData.map((item) => (
              <div className="bar-column" key={item.day}>
                <div className="bar-value">
                  {item.value}%
                </div>

                <div
                  className="attendance-bar"
                  style={{
                    height: `${item.value}%`,
                  }}
                ></div>

                <span className="bar-label">
                  {item.day}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartCard;