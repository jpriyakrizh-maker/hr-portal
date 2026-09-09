import React from "react";
import { MoreHorizontal, ArrowUpRight } from "lucide-react";
import "./EmployeeTable.css";


const employees = [
  {
    id: "EMP1024",
    name: "Jeyapriya",
    role: "Frontend Developer",
    department: "IT",
    status: "Active",
    joinDate: "Jan 12, 2025",
    initials: "JP",
  },
  {
    id: "EMP1025",
    name: "Arun Kumar",
    role: "HR Executive",
    department: "Human Resources",
    status: "Active",
    joinDate: "Feb 18, 2025",
    initials: "AK",
  },
  {
    id: "EMP1026",
    name: "Priya Sharma",
    role: "Accountant",
    department: "Finance",
    status: "Active",
    joinDate: "Mar 05, 2025",
    initials: "PS",
  },
  {
    id: "EMP1027",
    name: "Rahul Raj",
    role: "Marketing Manager",
    department: "Marketing",
    status: "On Leave",
    joinDate: "Apr 22, 2024",
    initials: "RR",
  },
  {
    id: "EMP1028",
    name: "Meena Devi",
    role: "UI/UX Designer",
    department: "Design",
    status: "Active",
    joinDate: "Jun 14, 2025",
    initials: "MD",
  },
];

function EmployeeTable() {
  return (
    <div className="employee-table-card">
      <div className="table-header">
        <div>
          <h3>Recent Employees</h3>
          <p>Recently added employees in your organization</p>
        </div>

        <button className="view-all-button">
          View All
          <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="table-wrapper">
        <table className="employee-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Department</th>
              <th>Role</th>
              <th>Join Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>
                  <div className="employee-info">
                    <div className="employee-avatar">
                      {employee.initials}
                    </div>

                    <div>
                      <strong>{employee.name}</strong>
                      <span>{employee.id}</span>
                    </div>
                  </div>
                </td>

                <td>{employee.department}</td>

                <td>{employee.role}</td>

                <td>{employee.joinDate}</td>

                <td>
                  <span
                    className={`status-badge ${
                      employee.status === "Active"
                        ? "active"
                        : "on-leave"
                    }`}
                  >
                    <span className="status-dot"></span>
                    {employee.status}
                  </span>
                </td>

                <td>
                  <button className="table-action">
                    <MoreHorizontal size={19} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeTable;