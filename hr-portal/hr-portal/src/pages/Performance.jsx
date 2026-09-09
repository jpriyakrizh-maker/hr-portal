import React, { useState } from "react";
import "./Performance.css";

const employees = [
  {
    id: "EMP001",
    name: "Arun Kumar",
    role: "Frontend Developer",
    department: "Development",
    rating: 4.8,
    progress: 92,
    status: "Excellent",
  },
  {
    id: "EMP002",
    name: "Priya Sharma",
    role: "HR Executive",
    department: "HR",
    rating: 4.5,
    progress: 86,
    status: "Good",
  },
  {
    id: "EMP003",
    name: "Rahul Raj",
    role: "UI/UX Designer",
    department: "Design",
    rating: 4.2,
    progress: 78,
    status: "Good",
  },
  {
    id: "EMP004",
    name: "Sneha Devi",
    role: "Marketing Executive",
    department: "Marketing",
    rating: 3.8,
    progress: 70,
    status: "Average",
  },
  {
    id: "EMP005",
    name: "Vijay Kumar",
    role: "Backend Developer",
    department: "Development",
    rating: 4.7,
    progress: 89,
    status: "Excellent",
  },
];

function Performance() {
  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.role.toLowerCase().includes(search.toLowerCase()) ||
      employee.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="performance-page">
      <div className="performance-header">
        <div>
          <h1>Performance</h1>
          <p>Track employee performance and productivity</p>
        </div>

        <button className="review-btn">
          <i className="bi bi-clipboard-check"></i>
          Start Review
        </button>
      </div>

      <div className="performance-stats">
        <div className="performance-card">
          <div className="performance-icon blue">
            <i className="bi bi-graph-up-arrow"></i>
          </div>
          <div>
            <span>Average Score</span>
            <h2>4.4 / 5</h2>
            <small>+8.5% from last month</small>
          </div>
        </div>

        <div className="performance-card">
          <div className="performance-icon green">
            <i className="bi bi-trophy"></i>
          </div>
          <div>
            <span>Top Performers</span>
            <h2>12</h2>
            <small>Employees above 90%</small>
          </div>
        </div>

        <div className="performance-card">
          <div className="performance-icon orange">
            <i className="bi bi-hourglass-split"></i>
          </div>
          <div>
            <span>Reviews Pending</span>
            <h2>07</h2>
            <small>Due this month</small>
          </div>
        </div>

        <div className="performance-card">
          <div className="performance-icon purple">
            <i className="bi bi-people"></i>
          </div>
          <div>
            <span>Employees Reviewed</span>
            <h2>78%</h2>
            <small>Monthly progress</small>
          </div>
        </div>
      </div>

      <div className="performance-grid">
        <div className="performance-table-card">
          <div className="performance-table-top">
            <div>
              <h3>Employee Performance</h3>
              <p>September 2026 performance overview</p>
            </div>

            <div className="performance-search">
              <i className="bi bi-search"></i>

              <input
                type="text"
                placeholder="Search employee..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="performance-table-wrapper">
            <table className="performance-table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Rating</th>
                  <th>Performance</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredEmployees.length > 0 ? (
                  filteredEmployees.map((employee) => (
                    <tr key={employee.id}>
                      <td>
                        <div className="performance-employee">
                          <div className="performance-avatar">
                            {employee.name.charAt(0)}
                          </div>

                          <div>
                            <strong>{employee.name}</strong>
                            <span>{employee.role}</span>
                          </div>
                        </div>
                      </td>

                      <td>{employee.department}</td>

                      <td>
                        <div className="rating">
                          <i className="bi bi-star-fill"></i>
                          <strong>{employee.rating}</strong>
                          <span>/ 5</span>
                        </div>
                      </td>

                      <td>
                        <div className="performance-progress">
                          <div className="performance-progress-top">
                            <span>{employee.progress}%</span>
                          </div>

                          <div className="performance-track">
                            <div
                              className="performance-value"
                              style={{
                                width: `${employee.progress}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </td>

                      <td>
                        <span
                          className={`performance-status ${employee.status.toLowerCase()}`}
                        >
                          {employee.status}
                        </span>
                      </td>

                      <td>
                        <button className="performance-action">
                          <i className="bi bi-eye"></i>
                        </button>

                        <button className="performance-action">
                          <i className="bi bi-pencil"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="performance-empty">
                      No employees found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="goals-card">
          <div className="goals-header">
            <div>
              <h3>Performance Goals</h3>
              <p>Team goal progress</p>
            </div>

            <i className="bi bi-bullseye"></i>
          </div>

          <div className="goal-item">
            <div className="goal-title">
              <span>Project Completion</span>
              <strong>85%</strong>
            </div>

            <div className="goal-track">
              <div className="goal-value first"></div>
            </div>
          </div>

          <div className="goal-item">
            <div className="goal-title">
              <span>Customer Satisfaction</span>
              <strong>78%</strong>
            </div>

            <div className="goal-track">
              <div className="goal-value second"></div>
            </div>
          </div>

          <div className="goal-item">
            <div className="goal-title">
              <span>Team Productivity</span>
              <strong>92%</strong>
            </div>

            <div className="goal-track">
              <div className="goal-value third"></div>
            </div>
          </div>

          <div className="goal-item">
            <div className="goal-title">
              <span>Training Completion</span>
              <strong>65%</strong>
            </div>

            <div className="goal-track">
              <div className="goal-value fourth"></div>
            </div>
          </div>

          <div className="overall-performance">
            <div className="overall-circle">
              <strong>82%</strong>
              <span>Overall</span>
            </div>

            <div>
              <h4>Team Performance</h4>
              <p>Great progress this month</p>
            </div>
          </div>
        </div>
      </div>

      <div className="performance-bottom">
        <div className="bottom-card">
          <div className="bottom-icon blue">
            <i className="bi bi-check2-circle"></i>
          </div>

          <div>
            <span>Goals Completed</span>
            <h3>68 / 84</h3>
          </div>

          <strong>81%</strong>
        </div>

        <div className="bottom-card">
          <div className="bottom-icon purple">
            <i className="bi bi-award"></i>
          </div>

          <div>
            <span>Recognition Awards</span>
            <h3>24</h3>
          </div>

          <strong>+12%</strong>
        </div>

        <div className="bottom-card">
          <div className="bottom-icon orange">
            <i className="bi bi-chat-square-text"></i>
          </div>

          <div>
            <span>Feedback Received</span>
            <h3>156</h3>
          </div>

          <strong>+18%</strong>
        </div>
      </div>
    </div>
  );
}

export default Performance;