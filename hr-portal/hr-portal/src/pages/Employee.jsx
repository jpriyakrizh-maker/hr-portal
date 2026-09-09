import React, { useState } from "react";
import "./Employee.css";
import {
  Search,
  SlidersHorizontal,
  Plus,
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  Download,
  Users,
  UserCheck,
  UserX,
  X,
} from "lucide-react";

const employeeData = [
  {
    id: "EMP1024",
    name: "Jeyapriya",
    role: "Frontend Developer",
    department: "IT",
    email: "jeyapriya@hrportal.com",
    phone: "+91 98765 43210",
    joinDate: "Jan 12, 2025",
    status: "Active",
    initials: "JP",
  },
  {
    id: "EMP1025",
    name: "Arun Kumar",
    role: "HR Executive",
    department: "Human Resources",
    email: "arun@hrportal.com",
    phone: "+91 98765 12345",
    joinDate: "Feb 18, 2025",
    status: "Active",
    initials: "AK",
  },
  {
    id: "EMP1026",
    name: "Priya Sharma",
    role: "Accountant",
    department: "Finance",
    email: "priya@hrportal.com",
    phone: "+91 91234 56789",
    joinDate: "Mar 05, 2025",
    status: "Active",
    initials: "PS",
  },
  {
    id: "EMP1027",
    name: "Rahul Raj",
    role: "Marketing Manager",
    department: "Marketing",
    email: "rahul@hrportal.com",
    phone: "+91 99887 66554",
    joinDate: "Apr 22, 2024",
    status: "On Leave",
    initials: "RR",
  },
  {
    id: "EMP1028",
    name: "Meena Devi",
    role: "UI/UX Designer",
    department: "Design",
    email: "meena@hrportal.com",
    phone: "+91 98765 77889",
    joinDate: "Jun 14, 2025",
    status: "Active",
    initials: "MD",
  },
  {
    id: "EMP1029",
    name: "Karthik S",
    role: "Backend Developer",
    department: "IT",
    email: "karthik@hrportal.com",
    phone: "+91 98765 22334",
    joinDate: "Jul 02, 2025",
    status: "Active",
    initials: "KS",
  },
  {
    id: "EMP1030",
    name: "Divya Priya",
    role: "Recruiter",
    department: "Human Resources",
    email: "divya@hrportal.com",
    phone: "+91 97654 33221",
    joinDate: "Aug 10, 2025",
    status: "Inactive",
    initials: "DP",
  },
];

function Employees() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const filteredEmployees = employeeData.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.id.toLowerCase().includes(search.toLowerCase()) ||
      employee.role.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" ||
      employee.department === department;

    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="employees-page">

      {/* Page Header */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">PEOPLE</span>
          <h1>Employees</h1>
          <p>
            Manage and monitor your organization's workforce.
          </p>
        </div>

        <div className="page-header-actions">
          <button className="secondary-button">
            <Download size={17} />
            Export
          </button>

          <button
            className="primary-button"
            onClick={() => setShowAddForm(true)}
          >
            <Plus size={18} />
            Add Employee
          </button>
        </div>
      </div>

      {/* Statistics */}
      <div className="employee-stats">

        <div className="employee-stat">
          <div className="employee-stat-icon">
            <Users size={21} />
          </div>

          <div>
            <span>Total Employees</span>
            <strong>248</strong>
          </div>
        </div>

        <div className="employee-stat">
          <div className="employee-stat-icon">
            <UserCheck size={21} />
          </div>

          <div>
            <span>Active</span>
            <strong>232</strong>
          </div>
        </div>

        <div className="employee-stat">
          <div className="employee-stat-icon">
            <UserX size={21} />
          </div>

          <div>
            <span>On Leave</span>
            <strong>12</strong>
          </div>
        </div>

        <div className="employee-stat">
          <div className="employee-stat-icon">
            <Users size={21} />
          </div>

          <div>
            <span>New This Month</span>
            <strong>15</strong>
          </div>
        </div>

      </div>

      {/* Employee Table Card */}
      <div className="employees-table-card">

        <div className="employees-toolbar">

          <div className="employee-search">
            <Search size={18} />

            <input
              type="text"
              placeholder="Search employees..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="employee-filters">

            <div className="department-filter">
              <SlidersHorizontal size={17} />

              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="All">All Departments</option>
                <option value="IT">IT</option>
                <option value="Human Resources">
                  Human Resources
                </option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
                <option value="Design">Design</option>
              </select>
            </div>

          </div>
        </div>

        {/* Table */}
        <div className="employees-table-wrapper">
          <table className="employees-full-table">

            <thead>
              <tr>
                <th>Employee</th>
                <th>Department</th>
                <th>Role</th>
                <th>Contact</th>
                <th>Join Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee.id}>

                  <td>
                    <div className="full-employee-info">

                      <div className="full-employee-avatar">
                        {employee.initials}
                      </div>

                      <div>
                        <strong>{employee.name}</strong>
                        <span>{employee.id}</span>
                      </div>

                    </div>
                  </td>

                  <td>
                    <span className="department-text">
                      {employee.department}
                    </span>
                  </td>

                  <td>
                    <span className="role-text">
                      {employee.role}
                    </span>
                  </td>

                  <td>
                    <div className="contact-info">
                      <span>{employee.email}</span>
                      <small>{employee.phone}</small>
                    </div>
                  </td>

                  <td>{employee.joinDate}</td>

                  <td>
                    <span
                      className={`employee-status ${
                        employee.status
                          .toLowerCase()
                          .replace(" ", "-")
                      }`}
                    >
                      <span className="status-circle"></span>
                      {employee.status}
                    </span>
                  </td>

                  <td>
                    <div className="employee-actions">

                      <button
                        title="View"
                        onClick={() =>
                          setSelectedEmployee(employee)
                        }
                      >
                        <Eye size={17} />
                      </button>

                      <button title="Edit">
                        <Pencil size={17} />
                      </button>

                      <button title="More">
                        <MoreHorizontal size={18} />
                      </button>

                    </div>
                  </td>

                </tr>
              ))}

              {filteredEmployees.length === 0 && (
                <tr>
                  <td colSpan="7">
                    <div className="no-employees">
                      <Users size={35} />
                      <h3>No employees found</h3>
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

        {/* Table Footer */}
        <div className="table-footer">

          <span>
            Showing{" "}
            <strong>{filteredEmployees.length}</strong>{" "}
            of <strong>{employeeData.length}</strong> employees
          </span>

          <div className="pagination">
            <button disabled>Previous</button>
            <button className="current-page">1</button>
            <button>2</button>
            <button>3</button>
            <button>Next</button>
          </div>

        </div>

      </div>

      {/* View Employee Modal */}
      {selectedEmployee && (
        <div
          className="employee-modal-overlay"
          onClick={() => setSelectedEmployee(null)}
        >
          <div
            className="employee-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="employee-modal-header">
              <div>
                <span>EMPLOYEE PROFILE</span>
                <h2>Employee Details</h2>
              </div>

              <button
                onClick={() => setSelectedEmployee(null)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="employee-profile">

              <div className="large-employee-avatar">
                {selectedEmployee.initials}
              </div>

              <div>
                <h3>{selectedEmployee.name}</h3>
                <p>{selectedEmployee.role}</p>
                <span>{selectedEmployee.id}</span>
              </div>

            </div>

            <div className="employee-detail-grid">

              <div>
                <label>Department</label>
                <strong>
                  {selectedEmployee.department}
                </strong>
              </div>

              <div>
                <label>Status</label>
                <strong>
                  {selectedEmployee.status}
                </strong>
              </div>

              <div>
                <label>Email</label>
                <strong>
                  {selectedEmployee.email}
                </strong>
              </div>

              <div>
                <label>Phone</label>
                <strong>
                  {selectedEmployee.phone}
                </strong>
              </div>

              <div>
                <label>Joining Date</label>
                <strong>
                  {selectedEmployee.joinDate}
                </strong>
              </div>

              <div>
                <label>Employee ID</label>
                <strong>
                  {selectedEmployee.id}
                </strong>
              </div>

            </div>

            <div className="employee-modal-actions">
              <button className="secondary-button">
                <Pencil size={17} />
                Edit Employee
              </button>

              <button
                className="primary-button"
                onClick={() => setSelectedEmployee(null)}
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Add Employee Modal */}
      {showAddForm && (
        <div
          className="employee-modal-overlay"
          onClick={() => setShowAddForm(false)}
        >
          <div
            className="employee-modal add-employee-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="employee-modal-header">
              <div>
                <span>NEW EMPLOYEE</span>
                <h2>Add Employee</h2>
              </div>

              <button
                onClick={() => setShowAddForm(false)}
              >
                <X size={20} />
              </button>
            </div>

            <form
              className="add-employee-form"
              onSubmit={(e) => {
                e.preventDefault();
                setShowAddForm(false);
              }}
            >

              <div className="form-row">

                <div className="form-field">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    required
                  />
                </div>

              </div>

              <div className="form-row">

                <div className="form-field">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="employee@email.com"
                    required
                  />
                </div>

                <div className="form-field">
                  <label>Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>

              </div>

              <div className="form-row">

                <div className="form-field">
                  <label>Department</label>

                  <select required>
                    <option value="">
                      Select department
                    </option>
                    <option>IT</option>
                    <option>Human Resources</option>
                    <option>Finance</option>
                    <option>Marketing</option>
                    <option>Design</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Role</label>
                  <input
                    type="text"
                    placeholder="Enter job role"
                    required
                  />
                </div>

              </div>

              <div className="form-field">
                <label>Joining Date</label>
                <input type="date" required />
              </div>

              <div className="add-form-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => setShowAddForm(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-button"
                >
                  <Plus size={17} />
                  Add Employee
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}

export default Employees;