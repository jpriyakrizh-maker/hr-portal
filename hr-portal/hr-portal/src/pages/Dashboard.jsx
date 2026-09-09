import React from "react";
import { ArrowUpRight, CalendarDays, Clock3, Users } from "lucide-react";
import StatCard from "../Components/StatCard";
import EmployeeTable from "../Components/EmployeeTable";
import ChartCard from "../Components/ChartCard";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* Welcome */}
      <section className="dashboard-welcome">
        <div>
          <span className="welcome-label">OVERVIEW</span>
          <h1>Good morning, Jeyapriya</h1>
          <p>
            Here's what's happening with your organization today.
          </p>
        </div>

        <button className="add-employee-button">
          <Users size={18} />
          Add Employee
          <ArrowUpRight size={16} />
        </button>
      </section>

      {/* Statistics */}
      <section className="stats-grid">
        <StatCard
          title="Total Employees"
          value="248"
          change="+12.5%"
          changeText="Compared to last month"
          type="employees"
          positive={true}
        />

        <StatCard
          title="Present Today"
          value="221"
          change="+4.8%"
          changeText="Compared to yesterday"
          type="present"
          positive={true}
        />

        <StatCard
          title="On Leave"
          value="12"
          change="-8.2%"
          changeText="Compared to last week"
          type="leave"
          positive={false}
        />

        <StatCard
          title="New Hires"
          value="15"
          change="+18.4%"
          changeText="This month"
          type="hires"
          positive={true}
        />
      </section>

      {/* Main Analytics */}
      <section className="dashboard-main-grid">

        <ChartCard />

        {/* Quick Summary */}
        <div className="quick-summary-card">
          <div className="section-card-header">
            <div>
              <h3>Today's Summary</h3>
              <p>Workforce activity</p>
            </div>

            <button className="card-more-button">
              <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="summary-list">

            <div className="summary-item">
              <div className="summary-icon present-icon">
                <Users size={19} />
              </div>

              <div className="summary-info">
                <strong>221 Employees</strong>
                <span>Present today</span>
              </div>

              <span className="summary-percentage">
                89%
              </span>
            </div>

            <div className="summary-item">
              <div className="summary-icon late-icon">
                <Clock3 size={19} />
              </div>

              <div className="summary-info">
                <strong>18 Employees</strong>
                <span>Arrived late</span>
              </div>

              <span className="summary-percentage">
                7%
              </span>
            </div>

            <div className="summary-item">
              <div className="summary-icon leave-icon">
                <CalendarDays size={19} />
              </div>

              <div className="summary-info">
                <strong>12 Employees</strong>
                <span>On leave today</span>
              </div>

              <span className="summary-percentage">
                5%
              </span>
            </div>

            <div className="summary-item">
              <div className="summary-icon remote-icon">
                <Users size={19} />
              </div>

              <div className="summary-info">
                <strong>34 Employees</strong>
                <span>Working remotely</span>
              </div>

              <span className="summary-percentage">
                14%
              </span>
            </div>

          </div>

          <button className="summary-view-button">
            View Attendance
            <ArrowUpRight size={16} />
          </button>
        </div>

      </section>

      {/* Employee Table */}
      <section className="dashboard-table-section">
        <EmployeeTable />
      </section>

      {/* Bottom Cards */}
      <section className="dashboard-bottom-grid">

        <div className="dashboard-mini-card">
          <div className="mini-card-icon">
            <CalendarDays size={21} />
          </div>

          <div>
            <span>Upcoming Holidays</span>
            <strong>5 Holidays</strong>
            <small>Next: September 14</small>
          </div>

          <ArrowUpRight size={18} />
        </div>

        <div className="dashboard-mini-card">
          <div className="mini-card-icon">
            <Users size={21} />
          </div>

          <div>
            <span>Pending Requests</span>
            <strong>8 Requests</strong>
            <small>Need your attention</small>
          </div>

          <ArrowUpRight size={18} />
        </div>

        <div className="dashboard-mini-card">
          <div className="mini-card-icon">
            <Clock3 size={21} />
          </div>

          <div>
            <span>Average Working Hours</span>
            <strong>8h 24m</strong>
            <small>This month's average</small>
          </div>

          <ArrowUpRight size={18} />
        </div>

      </section>

    </div>
  );
}

export default Dashboard;