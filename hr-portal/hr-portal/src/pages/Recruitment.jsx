import React, { useState } from "react";
import "./Recruitment.css";
const candidates = [
  {
    id: "CAN001",
    name: "Karthik Raj",
    role: "Frontend Developer",
    department: "Development",
    experience: "2 Years",
    applied: "05 Sep 2026",
    status: "Interview",
  },
  {
    id: "CAN002",
    name: "Divya Kumar",
    role: "UI/UX Designer",
    department: "Design",
    experience: "1.5 Years",
    applied: "04 Sep 2026",
    status: "Shortlisted",
  },
  {
    id: "CAN003",
    name: "Manoj Kumar",
    role: "Backend Developer",
    department: "Development",
    experience: "3 Years",
    applied: "02 Sep 2026",
    status: "Review",
  },
  {
    id: "CAN004",
    name: "Keerthana S",
    role: "HR Executive",
    department: "HR",
    experience: "2 Years",
    applied: "01 Sep 2026",
    status: "Selected",
  },
  {
    id: "CAN005",
    name: "Ajay Prakash",
    role: "Marketing Executive",
    department: "Marketing",
    experience: "1 Year",
    applied: "30 Aug 2026",
    status: "Rejected",
  },
];

function Recruitment() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Shortlisted", "Interview", "Selected"];

  const filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch =
      candidate.name.toLowerCase().includes(search.toLowerCase()) ||
      candidate.role.toLowerCase().includes(search.toLowerCase()) ||
      candidate.id.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      activeFilter === "All" || candidate.status === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="recruitment-page">
      <div className="recruitment-header">
        <div>
          <h1>Recruitment</h1>
          <p>Manage job openings and candidate applications</p>
        </div>

        <button className="add-job-btn">
          <i className="bi bi-plus-lg"></i>
          Post New Job
        </button>
      </div>

      <div className="recruitment-stats">
        <div className="recruitment-card">
          <div className="recruitment-icon blue">
            <i className="bi bi-briefcase"></i>
          </div>
          <div>
            <span>Open Positions</span>
            <h2>08</h2>
            <small>Currently hiring</small>
          </div>
        </div>

        <div className="recruitment-card">
          <div className="recruitment-icon purple">
            <i className="bi bi-people"></i>
          </div>
          <div>
            <span>Total Applicants</span>
            <h2>124</h2>
            <small>All applications</small>
          </div>
        </div>

        <div className="recruitment-card">
          <div className="recruitment-icon orange">
            <i className="bi bi-person-check"></i>
          </div>
          <div>
            <span>Interviews</span>
            <h2>18</h2>
            <small>This month</small>
          </div>
        </div>

        <div className="recruitment-card">
          <div className="recruitment-icon green">
            <i className="bi bi-person-plus"></i>
          </div>
          <div>
            <span>New Hires</span>
            <h2>06</h2>
            <small>This month</small>
          </div>
        </div>
      </div>

      <div className="recruitment-layout">
        <div className="candidates-section">
          <div className="candidates-card">
            <div className="candidates-top">
              <div>
                <h3>Candidate Applications</h3>
                <p>Track and manage recruitment applications</p>
              </div>

              <div className="recruitment-search">
                <i className="bi bi-search"></i>
                <input
                  type="text"
                  placeholder="Search candidates..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="recruitment-filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={activeFilter === filter ? "active" : ""}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="candidates-table-wrapper">
              <table className="candidates-table">
                <thead>
                  <tr>
                    <th>Candidate</th>
                    <th>Position</th>
                    <th>Experience</th>
                    <th>Applied Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredCandidates.length > 0 ? (
                    filteredCandidates.map((candidate) => (
                      <tr key={candidate.id}>
                        <td>
                          <div className="candidate-info">
                            <div className="candidate-avatar">
                              {candidate.name.charAt(0)}
                            </div>

                            <div>
                              <strong>{candidate.name}</strong>
                              <span>{candidate.id}</span>
                            </div>
                          </div>
                        </td>

                        <td>
                          <strong className="role-name">
                            {candidate.role}
                          </strong>
                          <span className="department">
                            {candidate.department}
                          </span>
                        </td>

                        <td>{candidate.experience}</td>

                        <td>{candidate.applied}</td>

                        <td>
                          <span
                            className={`candidate-status ${candidate.status
                              .toLowerCase()
                              .replace(" ", "-")}`}
                          >
                            {candidate.status}
                          </span>
                        </td>

                        <td>
                          <button className="candidate-action">
                            <i className="bi bi-three-dots"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="empty-candidates">
                        No candidates found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="jobs-card">
          <div className="jobs-heading">
            <div>
              <h3>Open Positions</h3>
              <p>Active job openings</p>
            </div>

            <button>
              View All
            </button>
          </div>

          <div className="job-item">
            <div className="job-icon blue">
              <i className="bi bi-code-slash"></i>
            </div>

            <div className="job-details">
              <strong>Frontend Developer</strong>
              <span>Development • Full Time</span>
            </div>

            <b>12</b>
          </div>

          <div className="job-item">
            <div className="job-icon purple">
              <i className="bi bi-palette"></i>
            </div>

            <div className="job-details">
              <strong>UI/UX Designer</strong>
              <span>Design • Full Time</span>
            </div>

            <b>08</b>
          </div>

          <div className="job-item">
            <div className="job-icon green">
              <i className="bi bi-person-lines-fill"></i>
            </div>

            <div className="job-details">
              <strong>HR Executive</strong>
              <span>HR • Full Time</span>
            </div>

            <b>06</b>
          </div>

          <div className="job-item">
            <div className="job-icon orange">
              <i className="bi bi-megaphone"></i>
            </div>

            <div className="job-details">
              <strong>Marketing Executive</strong>
              <span>Marketing • Full Time</span>
            </div>

            <b>09</b>
          </div>

          <div className="recruitment-progress">
            <div className="progress-heading">
              <span>Hiring Target</span>
              <strong>75%</strong>
            </div>

            <div className="progress-track">
              <div className="progress-value"></div>
            </div>

            <p>15 of 20 positions filled</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recruitment;