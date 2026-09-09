import React, { useState } from "react";
import "./Settings.css";

function Settings() {
  const [activeTab, setActiveTab] = useState("Profile");

  const [notifications, setNotifications] = useState({
    email: true,
    attendance: true,
    leave: true,
    payroll: false,
  });

  const tabs = [
    {
      name: "Profile",
      icon: "bi-person",
    },
    {
      name: "Notifications",
      icon: "bi-bell",
    },
    {
      name: "Security",
      icon: "bi-shield-lock",
    },
    {
      name: "System",
      icon: "bi-sliders",
    },
  ];

  const toggleNotification = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="settings-page">
      <div className="settings-header">
        <div>
          <h1>Settings</h1>
          <p>Manage your HR portal preferences and account settings</p>
        </div>

        <button className="save-settings-btn">
          <i className="bi bi-check2"></i>
          Save Changes
        </button>
      </div>

      <div className="settings-layout">
        <div className="settings-sidebar">
          <div className="settings-user">
            <div className="settings-avatar">A</div>

            <div>
              <h3>Admin User</h3>
              <p>HR Administrator</p>
            </div>
          </div>

          <div className="settings-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={activeTab === tab.name ? "active" : ""}
                onClick={() => setActiveTab(tab.name)}
              >
                <i className={`bi ${tab.icon}`}></i>
                <span>{tab.name}</span>
                <i className="bi bi-chevron-right arrow"></i>
              </button>
            ))}
          </div>
        </div>

        <div className="settings-content">
          {activeTab === "Profile" && (
            <div className="settings-section">
              <div className="section-heading">
                <div>
                  <h2>Profile Information</h2>
                  <p>Update your personal and account information</p>
                </div>

                <i className="bi bi-person-circle"></i>
              </div>

              <div className="profile-picture-section">
                <div className="large-avatar">A</div>

                <div>
                  <h4>Profile Picture</h4>
                  <p>Recommended size: 200 × 200 px</p>

                  <div className="picture-buttons">
                    <button className="upload-btn">
                      <i className="bi bi-upload"></i>
                      Upload Photo
                    </button>

                    <button className="remove-btn">
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" defaultValue="Admin" />
                </div>

                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" defaultValue="User" />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    defaultValue="admin@hrportal.com"
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    defaultValue="+91 98765 43210"
                  />
                </div>

                <div className="form-group">
                  <label>Department</label>
                  <select defaultValue="Human Resources">
                    <option>Human Resources</option>
                    <option>Development</option>
                    <option>Design</option>
                    <option>Marketing</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Role</label>
                  <input
                    type="text"
                    defaultValue="HR Administrator"
                  />
                </div>
              </div>

              <div className="account-info">
                <div>
                  <span>Account Created</span>
                  <strong>January 12, 2026</strong>
                </div>

                <div>
                  <span>Last Login</span>
                  <strong>Today, 08:42 AM</strong>
                </div>

                <div>
                  <span>Account Status</span>
                  <strong className="account-active">
                    Active
                  </strong>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Notifications" && (
            <div className="settings-section">
              <div className="section-heading">
                <div>
                  <h2>Notification Settings</h2>
                  <p>Choose which notifications you want to receive</p>
                </div>

                <i className="bi bi-bell"></i>
              </div>

              <div className="notification-list">
                <div className="notification-item">
                  <div className="notification-icon blue">
                    <i className="bi bi-envelope"></i>
                  </div>

                  <div className="notification-text">
                    <h4>Email Notifications</h4>
                    <p>
                      Receive important HR updates through email
                    </p>
                  </div>

                  <button
                    className={`switch ${
                      notifications.email ? "on" : ""
                    }`}
                    onClick={() => toggleNotification("email")}
                  >
                    <span></span>
                  </button>
                </div>

                <div className="notification-item">
                  <div className="notification-icon green">
                    <i className="bi bi-calendar-check"></i>
                  </div>

                  <div className="notification-text">
                    <h4>Attendance Alerts</h4>
                    <p>
                      Get notified about attendance and late check-ins
                    </p>
                  </div>

                  <button
                    className={`switch ${
                      notifications.attendance ? "on" : ""
                    }`}
                    onClick={() =>
                      toggleNotification("attendance")
                    }
                  >
                    <span></span>
                  </button>
                </div>

                <div className="notification-item">
                  <div className="notification-icon orange">
                    <i className="bi bi-calendar2-x"></i>
                  </div>

                  <div className="notification-text">
                    <h4>Leave Requests</h4>
                    <p>
                      Receive alerts when employees submit leave requests
                    </p>
                  </div>

                  <button
                    className={`switch ${
                      notifications.leave ? "on" : ""
                    }`}
                    onClick={() => toggleNotification("leave")}
                  >
                    <span></span>
                  </button>
                </div>

                <div className="notification-item">
                  <div className="notification-icon purple">
                    <i className="bi bi-wallet2"></i>
                  </div>

                  <div className="notification-text">
                    <h4>Payroll Notifications</h4>
                    <p>
                      Get notified when payroll processing is completed
                    </p>
                  </div>

                  <button
                    className={`switch ${
                      notifications.payroll ? "on" : ""
                    }`}
                    onClick={() => toggleNotification("payroll")}
                  >
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Security" && (
            <div className="settings-section">
              <div className="section-heading">
                <div>
                  <h2>Security</h2>
                  <p>Manage your password and account security</p>
                </div>

                <i className="bi bi-shield-lock"></i>
              </div>

              <div className="security-form">
                <div className="form-group">
                  <label>Current Password</label>
                  <div className="password-input">
                    <input type="password" placeholder="••••••••" />
                    <i className="bi bi-eye"></i>
                  </div>
                </div>

                <div className="form-group">
                  <label>New Password</label>
                  <div className="password-input">
                    <input type="password" placeholder="••••••••" />
                    <i className="bi bi-eye"></i>
                  </div>
                </div>

                <div className="form-group">
                  <label>Confirm New Password</label>
                  <div className="password-input">
                    <input type="password" placeholder="••••••••" />
                    <i className="bi bi-eye"></i>
                  </div>
                </div>

                <button className="update-password-btn">
                  Update Password
                </button>
              </div>

              <div className="security-status">
                <div className="security-status-icon">
                  <i className="bi bi-shield-check"></i>
                </div>

                <div>
                  <h4>Account Security</h4>
                  <p>
                    Your account security level is currently strong.
                  </p>
                </div>

                <strong>Strong</strong>
              </div>
            </div>
          )}

          {activeTab === "System" && (
            <div className="settings-section">
              <div className="section-heading">
                <div>
                  <h2>System Preferences</h2>
                  <p>Configure general HR portal preferences</p>
                </div>

                <i className="bi bi-sliders"></i>
              </div>

              <div className="system-options">
                <div className="system-option">
                  <div>
                    <h4>Language</h4>
                    <p>Select the portal display language</p>
                  </div>

                  <select defaultValue="English">
                    <option>English</option>
                    <option>Tamil</option>
                    <option>Hindi</option>
                  </select>
                </div>

                <div className="system-option">
                  <div>
                    <h4>Date Format</h4>
                    <p>Choose your preferred date format</p>
                  </div>

                  <select defaultValue="DD/MM/YYYY">
                    <option>DD/MM/YYYY</option>
                    <option>MM/DD/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>

                <div className="system-option">
                  <div>
                    <h4>Time Zone</h4>
                    <p>Set the default portal time zone</p>
                  </div>

                  <select defaultValue="India Standard Time">
                    <option>India Standard Time</option>
                    <option>GMT</option>
                    <option>Eastern Standard Time</option>
                  </select>
                </div>

                <div className="system-option">
                  <div>
                    <h4>Automatic Updates</h4>
                    <p>Keep HR portal data automatically updated</p>
                  </div>

                  <button className="switch on">
                    <span></span>
                  </button>
                </div>
              </div>

              <div className="system-info">
                <div>
                  <span>Portal Version</span>
                  <strong>HR Portal v1.0.0</strong>
                </div>

                <div>
                  <span>Last System Update</span>
                  <strong>September 08, 2026</strong>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;