import React, { useState } from "react";
import "./Announcements.css";

const announcementsData = [
  {
    id: 1,
    title: "Annual Company Meeting",
    description:
      "The annual company meeting will be held on September 25, 2026. All employees are requested to attend.",
    category: "Company",
    date: "08 Sep 2026",
    time: "10:30 AM",
    author: "HR Department",
    priority: "High",
  },
  {
    id: 2,
    title: "Work From Home Policy Update",
    description:
      "The work from home policy has been updated. Please review the new guidelines effective from October.",
    category: "Policy",
    date: "06 Sep 2026",
    time: "02:15 PM",
    author: "Admin Team",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Employee Wellness Program",
    description:
      "A new employee wellness program is starting this month with fitness and wellbeing activities.",
    category: "Wellness",
    date: "04 Sep 2026",
    time: "11:00 AM",
    author: "HR Department",
    priority: "Low",
  },
  {
    id: 4,
    title: "Office Maintenance Notice",
    description:
      "The office will undergo scheduled maintenance this Saturday. Employees may work remotely during this period.",
    category: "Notice",
    date: "02 Sep 2026",
    time: "09:45 AM",
    author: "Admin Team",
    priority: "Medium",
  },
  {
    id: 5,
    title: "New Employee Benefits",
    description:
      "We are pleased to announce additional employee benefits including learning allowances and team activities.",
    category: "Benefits",
    date: "30 Aug 2026",
    time: "04:00 PM",
    author: "HR Department",
    priority: "Low",
  },
];

function Announcements() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Company",
    "Policy",
    "Wellness",
    "Notice",
    "Benefits",
  ];

  const filteredAnnouncements = announcementsData.filter((announcement) => {
    const matchesSearch =
      announcement.title.toLowerCase().includes(search.toLowerCase()) ||
      announcement.description
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      announcement.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="announcements-page">
      <div className="announcements-header">
        <div>
          <h1>Announcements</h1>
          <p>Share important updates and information with employees</p>
        </div>

        <button className="new-announcement-btn">
          <i className="bi bi-plus-lg"></i>
          New Announcement
        </button>
      </div>

      <div className="announcement-stats">
        <div className="announcement-stat-card">
          <div className="announcement-stat-icon blue">
            <i className="bi bi-megaphone"></i>
          </div>
          <div>
            <span>Total Announcements</span>
            <h2>24</h2>
            <small>All time</small>
          </div>
        </div>

        <div className="announcement-stat-card">
          <div className="announcement-stat-icon green">
            <i className="bi bi-check-circle"></i>
          </div>
          <div>
            <span>Published</span>
            <h2>20</h2>
            <small>Currently active</small>
          </div>
        </div>

        <div className="announcement-stat-card">
          <div className="announcement-stat-icon orange">
            <i className="bi bi-clock"></i>
          </div>
          <div>
            <span>Scheduled</span>
            <h2>03</h2>
            <small>Upcoming posts</small>
          </div>
        </div>

        <div className="announcement-stat-card">
          <div className="announcement-stat-icon purple">
            <i className="bi bi-eye"></i>
          </div>
          <div>
            <span>Average Reach</span>
            <h2>92%</h2>
            <small>Employee engagement</small>
          </div>
        </div>
      </div>

      <div className="announcement-layout">
        <div className="announcements-main-card">
          <div className="announcement-top">
            <div>
              <h3>Recent Announcements</h3>
              <p>Latest company updates and notices</p>
            </div>

            <div className="announcement-search">
              <i className="bi bi-search"></i>

              <input
                type="text"
                placeholder="Search announcements..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="announcement-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="announcement-list">
            {filteredAnnouncements.length > 0 ? (
              filteredAnnouncements.map((announcement) => (
                <div
                  className="announcement-item"
                  key={announcement.id}
                >
                  <div className="announcement-category-icon">
                    {announcement.category === "Company" && (
                      <i className="bi bi-building"></i>
                    )}

                    {announcement.category === "Policy" && (
                      <i className="bi bi-file-earmark-text"></i>
                    )}

                    {announcement.category === "Wellness" && (
                      <i className="bi bi-heart-pulse"></i>
                    )}

                    {announcement.category === "Notice" && (
                      <i className="bi bi-info-circle"></i>
                    )}

                    {announcement.category === "Benefits" && (
                      <i className="bi bi-gift"></i>
                    )}
                  </div>

                  <div className="announcement-content">
                    <div className="announcement-title-row">
                      <h4>{announcement.title}</h4>

                      <span
                        className={`priority ${announcement.priority.toLowerCase()}`}
                      >
                        {announcement.priority}
                      </span>
                    </div>

                    <p>{announcement.description}</p>

                    <div className="announcement-meta">
                      <span>
                        <i className="bi bi-calendar3"></i>
                        {announcement.date}
                      </span>

                      <span>
                        <i className="bi bi-clock"></i>
                        {announcement.time}
                      </span>

                      <span>
                        <i className="bi bi-person"></i>
                        {announcement.author}
                      </span>
                    </div>
                  </div>

                  <button className="announcement-menu">
                    <i className="bi bi-three-dots-vertical"></i>
                  </button>
                </div>
              ))
            ) : (
              <div className="announcement-empty">
                No announcements found
              </div>
            )}
          </div>
        </div>

        <div className="announcement-side">
          <div className="schedule-card">
            <div className="side-card-heading">
              <div>
                <h3>Upcoming</h3>
                <p>Scheduled announcements</p>
              </div>

              <i className="bi bi-calendar-event"></i>
            </div>

            <div className="schedule-item">
              <div className="schedule-date">
                <strong>15</strong>
                <span>SEP</span>
              </div>

              <div>
                <h4>Holiday Announcement</h4>
                <p>09:00 AM • HR Department</p>
              </div>
            </div>

            <div className="schedule-item">
              <div className="schedule-date">
                <strong>20</strong>
                <span>SEP</span>
              </div>

              <div>
                <h4>Quarterly Results</h4>
                <p>11:30 AM • Management</p>
              </div>
            </div>

            <div className="schedule-item">
              <div className="schedule-date">
                <strong>25</strong>
                <span>SEP</span>
              </div>

              <div>
                <h4>Annual Meeting</h4>
                <p>10:00 AM • HR Department</p>
              </div>
            </div>
          </div>

          <div className="reach-card">
            <div className="side-card-heading">
              <div>
                <h3>Employee Reach</h3>
                <p>Announcement engagement</p>
              </div>

              <i className="bi bi-bar-chart"></i>
            </div>

            <div className="reach-circle">
              <div>
                <strong>92%</strong>
                <span>Reached</span>
              </div>
            </div>

            <div className="reach-details">
              <div>
                <span>Viewed</span>
                <strong>92%</strong>
              </div>

              <div>
                <span>Unread</span>
                <strong>08%</strong>
              </div>
            </div>

            <button className="reach-btn">
              View Analytics
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Announcements;