import React, { useState } from "react";
import "./Attendance.css";
import {
  Search,
  CalendarDays,
  CheckCircle2,
  Clock3,
  XCircle,
  Users,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const attendanceData = [
  {
    id: "EMP1024",
    name: "Jeyapriya",
    department: "IT",
    checkIn: "09:02 AM",
    checkOut: "06:05 PM",
    workingHours: "8h 03m",
    status: "Present",
    initials: "JP",
  },
  {
    id: "EMP1025",
    name: "Arun Kumar",
    department: "Human Resources",
    checkIn: "08:54 AM",
    checkOut: "06:12 PM",
    workingHours: "8h 18m",
    status: "Present",
    initials: "AK",
  },
  {
    id: "EMP1026",
    name: "Priya Sharma",
    department: "Finance",
    checkIn: "09:15 AM",
    checkOut: "06:00 PM",
    workingHours: "7h 45m",
    status: "Late",
    initials: "PS",
  },
  {
    id: "EMP1027",
    name: "Rahul Raj",
    department: "Marketing",
    checkIn: "-",
    checkOut: "-",
    workingHours: "-",
    status: "Leave",
    initials: "RR",
  },
  {
    id: "EMP1028",
    name: "Meena Devi",
    department: "Design",
    checkIn: "08:48 AM",
    checkOut: "05:58 PM",
    workingHours: "8h 10m",
    status: "Present",
    initials: "MD",
  },
  {
    id: "EMP1029",
    name: "Karthik S",
    department: "IT",
    checkIn: "09:21 AM",
    checkOut: "06:18 PM",
    workingHours: "7h 57m",
    status: "Late",
    initials: "KS",
  },
  {
    id: "EMP1030",
    name: "Divya Priya",
    department: "Human Resources",
    checkIn: "-",
    checkOut: "-",
    workingHours: "-",
    status: "Absent",
    initials: "DP",
  },
];

function Attendance() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredData = attendanceData.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.id.toLowerCase().includes(search.toLowerCase()) ||
      employee.department
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      employee.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="attendance-page">

      {/* Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">TIME & ATTENDANCE</span>

          <h1>Attendance</h1>

          <p>
            Monitor employee attendance and working hours.
          </p>
        </div>

        <button className="primary-button">
          <Download size={17} />
          Export Report
        </button>
      </div>

      {/* Date Selector */}
      <div className="attendance-date-bar">

        <button className="date-arrow">
          <ChevronLeft size={19} />
        </button>

        <div className="selected-date">
          <CalendarDays size={19} />

          <div>
            <strong>September 09, 2026</strong>
            <span>Wednesday</span>
          </div>
        </div>

        <button className="date-arrow">
          <ChevronRight size={19} />
        </button>

        <button className="today-button">
          Today
        </button>

      </div>

      {/* Statistics */}
      <div className="attendance-stats">

        <div className="attendance-stat-card">
          <div className="attendance-stat-icon total">
            <Users size={21} />
          </div>

          <div>
            <span>Total Employees</span>
            <strong>248</strong>
          </div>
        </div>

        <div className="attendance-stat-card">
          <div className="attendance-stat-icon present">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Present</span>
            <strong>221</strong>
          </div>
        </div>

        <div className="attendance-stat-card">
          <div className="attendance-stat-icon late">
            <Clock3 size={21} />
          </div>

          <div>
            <span>Late Arrivals</span>
            <strong>18</strong>
          </div>
        </div>

        <div className="attendance-stat-card">
          <div className="attendance-stat-icon absent">
            <XCircle size={21} />
          </div>

          <div>
            <span>Absent</span>
            <strong>9</strong>
          </div>
        </div>

      </div>

      {/* Attendance Percentage */}
      <div className="attendance-overview-card">

        <div className="attendance-overview-content">

          <div>
            <span>Today's Attendance Rate</span>

            <h2>89.1%</h2>

            <p>
              221 of 248 employees are present today.
            </p>
          </div>

          <div className="attendance-circle">
            <div className="attendance-circle-inner">
              <strong>89%</strong>
              <span>Present</span>
            </div>
          </div>

        </div>

        <div className="attendance-progress">

          <div className="progress-label">
            <span>Attendance progress</span>
            <strong>89.1%</strong>
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: "89.1%" }}
            ></div>
          </div>

        </div>

      </div>

      {/* Table */}
      <div className="attendance-table-card">

        <div className="attendance-toolbar">

          <div>
            <h3>Daily Attendance</h3>
            <p>
              Employee attendance records for today
            </p>
          </div>

          <div className="attendance-filters">

            <div className="attendance-search">
              <Search size={17} />

              <input
                type="text"
                placeholder="Search employee..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value)
              }
            >
              <option value="All">All Status</option>
              <option value="Present">Present</option>
              <option value="Late">Late</option>
              <option value="Leave">Leave</option>
              <option value="Absent">Absent</option>
            </select>

          </div>

        </div>

        <div className="attendance-table-wrapper">

          <table className="attendance-table">

            <thead>
              <tr>
                <th>Employee</th>
                <th>Department</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Working Hours</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {filteredData.map((employee) => (
                <tr key={employee.id}>

                  <td>
                    <div className="attendance-employee">

                      <div className="attendance-avatar">
                        {employee.initials}
                      </div>

                      <div>
                        <strong>
                          {employee.name}
                        </strong>

                        <span>
                          {employee.id}
                        </span>
                      </div>

                    </div>
                  </td>

                  <td>
                    {employee.department}
                  </td>

                  <td>
                    <span className="time-value">
                      {employee.checkIn}
                    </span>
                  </td>

                  <td>
                    <span className="time-value">
                      {employee.checkOut}
                    </span>
                  </td>

                  <td>
                    <strong className="working-hours">
                      {employee.workingHours}
                    </strong>
                  </td>

                  <td>
                    <span
                      className={`attendance-status ${employee.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      <span></span>
                      {employee.status}
                    </span>
                  </td>

                </tr>
              ))}

              {filteredData.length === 0 && (
                <tr>
                  <td colSpan="6">
                    <div className="attendance-empty">
                      <Users size={34} />
                      <h3>No attendance records found</h3>
                      <p>
                        Try changing your search or filter.
                      </p>
                    </div>
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

        {/* Footer */}
        <div className="attendance-table-footer">

          <span>
            Showing{" "}
            <strong>{filteredData.length}</strong>{" "}
            employees
          </span>

          <div className="attendance-pagination">
            <button>
              <ChevronLeft size={16} />
            </button>

            <button className="active-page">
              1
            </button>

            <button>2</button>

            <button>3</button>

            <button>
              <ChevronRight size={16} />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Attendance;