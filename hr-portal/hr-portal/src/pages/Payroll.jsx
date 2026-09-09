import React, { useState } from "react";
import "./Payroll.css";

const payrollData = [
  {
    id: "EMP001",
    name: "Arun Kumar",
    department: "Development",
    salary: "₹45,000",
    deductions: "₹3,500",
    netSalary: "₹41,500",
    status: "Paid",
  },
  {
    id: "EMP002",
    name: "Priya Sharma",
    department: "HR",
    salary: "₹38,000",
    deductions: "₹2,800",
    netSalary: "₹35,200",
    status: "Paid",
  },
  {
    id: "EMP003",
    name: "Rahul Raj",
    department: "Design",
    salary: "₹42,000",
    deductions: "₹3,000",
    netSalary: "₹39,000",
    status: "Pending",
  },
  {
    id: "EMP004",
    name: "Sneha Devi",
    department: "Marketing",
    salary: "₹36,000",
    deductions: "₹2,500",
    netSalary: "₹33,500",
    status: "Paid",
  },
  {
    id: "EMP005",
    name: "Vijay Kumar",
    department: "Development",
    salary: "₹50,000",
    deductions: "₹4,000",
    netSalary: "₹46,000",
    status: "Pending",
  },
];

function Payroll() {
  const [search, setSearch] = useState("");

  const filteredPayroll = payrollData.filter(
    (employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.id.toLowerCase().includes(search.toLowerCase()) ||
      employee.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="payroll-page">
      <div className="payroll-header">
        <div>
          <h1>Payroll</h1>
          <p>Manage employee salaries and payroll information</p>
        </div>

        <button className="process-btn">
          <i className="bi bi-wallet2"></i>
          Process Payroll
        </button>
      </div>

      <div className="payroll-stats">
        <div className="payroll-card">
          <div className="payroll-icon blue">
            <i className="bi bi-cash-stack"></i>
          </div>
          <div>
            <span>Total Payroll</span>
            <h2>₹2,11,500</h2>
            <small>This month</small>
          </div>
        </div>

        <div className="payroll-card">
          <div className="payroll-icon green">
            <i className="bi bi-check-circle"></i>
          </div>
          <div>
            <span>Paid Employees</span>
            <h2>3</h2>
            <small>60% completed</small>
          </div>
        </div>

        <div className="payroll-card">
          <div className="payroll-icon orange">
            <i className="bi bi-clock-history"></i>
          </div>
          <div>
            <span>Pending</span>
            <h2>2</h2>
            <small>Needs attention</small>
          </div>
        </div>

        <div className="payroll-card">
          <div className="payroll-icon purple">
            <i className="bi bi-people"></i>
          </div>
          <div>
            <span>Employees</span>
            <h2>5</h2>
            <small>Active employees</small>
          </div>
        </div>
      </div>

      <div className="payroll-content">
        <div className="payroll-table-card">
          <div className="table-top">
            <div>
              <h3>Salary Details</h3>
              <p>September 2026 payroll</p>
            </div>

            <div className="payroll-actions">
              <div className="search-box">
                <i className="bi bi-search"></i>
                <input
                  type="text"
                  placeholder="Search employee..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <button className="filter-btn">
                <i className="bi bi-funnel"></i>
                Filter
              </button>
            </div>
          </div>

          <div className="payroll-table-wrapper">
            <table className="payroll-table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Basic Salary</th>
                  <th>Deductions</th>
                  <th>Net Salary</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredPayroll.length > 0 ? (
                  filteredPayroll.map((employee) => (
                    <tr key={employee.id}>
                      <td>
                        <div className="employee-info">
                          <div className="employee-avatar">
                            {employee.name.charAt(0)}
                          </div>

                          <div>
                            <strong>{employee.name}</strong>
                            <span>{employee.id}</span>
                          </div>
                        </div>
                      </td>

                      <td>{employee.department}</td>

                      <td>
                        <strong>{employee.salary}</strong>
                      </td>

                      <td className="deduction">
                        {employee.deductions}
                      </td>

                      <td>
                        <strong className="net-salary">
                          {employee.netSalary}
                        </strong>
                      </td>

                      <td>
                        <span
                          className={`status ${
                            employee.status.toLowerCase()
                          }`}
                        >
                          <span className="status-dot"></span>
                          {employee.status}
                        </span>
                      </td>

                      <td>
                        <button className="view-btn">
                          <i className="bi bi-eye"></i>
                        </button>

                        <button className="download-btn">
                          <i className="bi bi-download"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="no-results">
                      No employees found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="payroll-summary">
          <div className="summary-header">
            <div>
              <h3>Payroll Summary</h3>
              <p>September 2026</p>
            </div>

            <i className="bi bi-bar-chart-line"></i>
          </div>

          <div className="summary-item">
            <span>Gross Salary</span>
            <strong>₹2,11,500</strong>
          </div>

          <div className="summary-item">
            <span>Total Deductions</span>
            <strong>₹15,800</strong>
          </div>

          <div className="summary-item">
            <span>Net Payroll</span>
            <strong>₹1,95,700</strong>
          </div>

          <div className="progress-section">
            <div className="progress-title">
              <span>Payroll Process</span>
              <strong>60%</strong>
            </div>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>

          <button className="summary-btn">
            View Payroll Report
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payroll;