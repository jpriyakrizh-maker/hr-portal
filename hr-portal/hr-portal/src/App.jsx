import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employee from "./pages/Employee";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Payroll from "./pages/Payroll";
import Recruitment from "./pages/Recruitment";
import Performance from "./pages/Performance";
import Announcements from "./pages/Announcements";
import Settings from "./pages/Settings";

import "./App.css";

function Layout({ children }) {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="app-main">
        <Topbar />

        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        {/* Employees */}
        <Route
          path="/employee"
          element={
            <Layout>
              <Employee />
            </Layout>
          }
        />

        {/* Attendance */}
        <Route
          path="/attendance"
          element={
            <Layout>
              <Attendance />
            </Layout>
          }
        />

        {/* Leave */}
        <Route
          path="/leave"
          element={
            <Layout>
              <Leave />
            </Layout>
          }
        />

        {/* Payroll */}
        <Route
          path="/payroll"
          element={
            <Layout>
              <Payroll />
            </Layout>
          }
        />

        {/* Recruitment */}
        <Route
          path="/recruitment"
          element={
            <Layout>
              <Recruitment />
            </Layout>
          }
        />

        {/* Performance */}
        <Route
          path="/performance"
          element={
            <Layout>
              <Performance />
            </Layout>
          }
        />

        {/* Announcements */}
        <Route
          path="/announcements"
          element={
            <Layout>
              <Announcements />
            </Layout>
          }
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />

        {/* Wrong URL */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;