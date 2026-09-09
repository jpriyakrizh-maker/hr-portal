import React, { useState } from "react";
import "./Leave.css";
import {
  Search,
  Plus,
  CalendarDays,
  CheckCircle2,
  Clock3,
  XCircle,
  MoreHorizontal,
  Eye,
  X,
} from "lucide-react";

const leaveData = [
  {
    id: 1,
    employee: "Jeyapriya",
    initials: "JP",
    department: "IT",
    type: "Casual Leave",
    from: "Sep 12, 2026",
    to: "Sep 13, 2026",
    days: 2,
    reason: "Personal work",
    status: "Pending",
  },
  {
    id: 2,
    employee: "Arun Kumar",
    initials: "AK",
    department: "Human Resources",
    type: "Sick Leave",
    from: "Sep 10, 2026",
    to: "Sep 10, 2026",
    days: 1,
    reason: "Not feeling well",
    status: "Approved",
  },
  {
    id: 3,
    employee: "Priya Sharma",
    initials: "PS",
    department: "Finance",
    type: "Annual Leave",
    from: "Sep 15, 2026",
    to: "Sep 18, 2026",
    days: 4,
    reason: "Family vacation",
    status: "Pending",
  },
  {
    id: 4,
    employee: "Rahul Raj",
    initials: "RR",
    department: "Marketing",
    type: "Casual Leave",
    from: "Sep 08, 2026",
    to: "Sep 09, 2026",
    days: 2,
    reason: "Personal reasons",
    status: "Approved",
  },
  {
    id: 5,
    employee: "Meena Devi",
    initials: "MD",
    department: "Design",
    type: "Sick Leave",
    from: "Sep 06, 2026",
    to: "Sep 07, 2026",
    days: 2,
    reason: "Medical appointment",
    status: "Rejected",
  },
];

function Leave() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const filteredLeaves = leaveData.filter((leave) => {
    const matchesSearch =
      leave.employee.toLowerCase().includes(search.toLowerCase()) ||
      leave.department.toLowerCase().includes(search.toLowerCase()) ||
      leave.type.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || leave.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="leave-page">

      {/* Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">TIME OFF</span>

          <h1>Leave Management</h1>

          <p>
            Review and manage employee leave requests.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => setShowModal(true)}
        >
          <Plus size={18} />
          Apply Leave
        </button>
      </div>

      {/* Statistics */}
      <div className="leave-stats">

        <div className="leave-stat-card">
          <div className="leave-stat-icon total">
            <CalendarDays size={21} />
          </div>

          <div>
            <span>Total Requests</span>
            <strong>36</strong>
          </div>
        </div>

        <div className="leave-stat-card">
          <div className="leave-stat-icon pending">
            <Clock3 size={21} />
          </div>

          <div>
            <span>Pending</span>
            <strong>8</strong>
          </div>
        </div>

        <div className="leave-stat-card">
          <div className="leave-stat-icon approved">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Approved</span>
            <strong>24</strong>
          </div>
        </div>

        <div className="leave-stat-card">
          <div className="leave-stat-icon rejected">
            <XCircle size={21} />
          </div>

          <div>
            <span>Rejected</span>
            <strong>4</strong>
          </div>
        </div>

      </div>

      {/* Leave Balance */}
      <div className="leave-balance-card">

        <div className="leave-balance-header">
          <div>
            <h3>Leave Balance Overview</h3>
            <p>Current leave usage across your organization</p>
          </div>

          <select defaultValue="2026">
            <option value="2026">2026</option>
            <option value="2025">2025</option>
          </select>
        </div>

        <div className="leave-balance-grid">

          <div className="balance-item">
            <div className="balance-top">
              <span>Casual Leave</span>
              <strong>42%</strong>
            </div>

            <div className="balance-progress">
              <div
                style={{ width: "42%" }}
              ></div>
            </div>

            <small>84 used of 200 days</small>
          </div>

          <div className="balance-item">
            <div className="balance-top">
              <span>Sick Leave</span>
              <strong>28%</strong>
            </div>

            <div className="balance-progress">
              <div
                style={{ width: "28%" }}
              ></div>
            </div>

            <small>56 used of 200 days</small>
          </div>

          <div className="balance-item">
            <div className="balance-top">
              <span>Annual Leave</span>
              <strong>35%</strong>
            </div>

            <div className="balance-progress">
              <div
                style={{ width: "35%" }}
              ></div>
            </div>

            <small>70 used of 200 days</small>
          </div>

        </div>

      </div>

      {/* Requests Table */}
      <div className="leave-table-card">

        <div className="leave-toolbar">

          <div>
            <h3>Leave Requests</h3>
            <p>
              Review recent employee leave applications
            </p>
          </div>

          <div className="leave-filters">

            <div className="leave-search">
              <Search size={17} />

              <input
                type="text"
                placeholder="Search requests..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />
            </div>

            <select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value)
              }
            >
              <option value="All">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>

          </div>

        </div>

        <div className="leave-table-wrapper">

          <table className="leave-table">

            <thead>
              <tr>
                <th>Employee</th>
                <th>Leave Type</th>
                <th>Duration</th>
                <th>Days</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredLeaves.map((leave) => (
                <tr key={leave.id}>

                  <td>
                    <div className="leave-employee">

                      <div className="leave-avatar">
                        {leave.initials}
                      </div>

                      <div>
                        <strong>
                          {leave.employee}
                        </strong>

                        <span>
                          {leave.department}
                        </span>
                      </div>

                    </div>
                  </td>

                  <td>
                    <span className="leave-type">
                      {leave.type}
                    </span>
                  </td>

                  <td>
                    <div className="leave-duration">
                      <strong>{leave.from}</strong>
                      <span>to</span>
                      <strong>{leave.to}</strong>
                    </div>
                  </td>

                  <td>
                    <strong className="leave-days">
                      {leave.days}
                    </strong>
                  </td>

                  <td>
                    <span className="leave-reason">
                      {leave.reason}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`leave-status ${leave.status.toLowerCase()}`}
                    >
                      {leave.status === "Pending" && (
                        <Clock3 size={14} />
                      )}

                      {leave.status === "Approved" && (
                        <CheckCircle2 size={14} />
                      )}

                      {leave.status === "Rejected" && (
                        <XCircle size={14} />
                      )}

                      {leave.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="leave-action-button"
                      title="View request"
                    >
                      <Eye size={17} />
                    </button>
                  </td>

                </tr>
              ))}

              {filteredLeaves.length === 0 && (
                <tr>
                  <td colSpan="7">
                    <div className="leave-empty">
                      <CalendarDays size={35} />
                      <h3>No leave requests found</h3>
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

        <div className="leave-table-footer">
          <span>
            Showing <strong>{filteredLeaves.length}</strong>{" "}
            requests
          </span>

          <div className="leave-pagination">
            <button>Previous</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>Next</button>
          </div>
        </div>

      </div>

      {/* Apply Leave Modal */}
      {showModal && (
        <div
          className="leave-modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="leave-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="leave-modal-header">
              <div>
                <span>NEW REQUEST</span>
                <h2>Apply Leave</h2>
              </div>

              <button
                onClick={() => setShowModal(false)}
              >
                <X size={20} />
              </button>
            </div>

            <form
              className="leave-form"
              onSubmit={(e) => {
                e.preventDefault();
                setShowModal(false);
              }}
            >

              <div className="form-field">
                <label>Employee</label>

                <select required defaultValue="">
                  <option value="" disabled>
                    Select employee
                  </option>
                  <option>Jeyapriya</option>
                  <option>Arun Kumar</option>
                  <option>Priya Sharma</option>
                  <option>Rahul Raj</option>
                  <option>Meena Devi</option>
                </select>
              </div>

              <div className="form-field">
                <label>Leave Type</label>

                <select required defaultValue="">
                  <option value="" disabled>
                    Select leave type
                  </option>
                  <option>Casual Leave</option>
                  <option>Sick Leave</option>
                  <option>Annual Leave</option>
                  <option>Emergency Leave</option>
                </select>
              </div>

              <div className="form-row">

                <div className="form-field">
                  <label>From</label>
                  <input type="date" required />
                </div>

                <div className="form-field">
                  <label>To</label>
                  <input type="date" required />
                </div>

              </div>

              <div className="form-field">
                <label>Reason</label>

                <textarea
                  rows="4"
                  placeholder="Enter reason for leave..."
                  required
                ></textarea>
              </div>

              <div className="leave-form-actions">

                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-button"
                >
                  <CheckCircle2 size={17} />
                  Submit Request
                </button>

              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}

export default Leave;