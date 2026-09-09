
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Users,
  BarChart3,
} from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Frontend demo login
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* Left Section */}
        <div className="login-visual">
          <div className="login-brand">
            <div className="login-logo">
              <Users size={25} />
            </div>

            <div>
              <h2>
                HR<span>Portal</span>
              </h2>
              <p>Human Resources</p>
            </div>
          </div>

          <div className="login-visual-content">
            <div className="visual-badge">
              <ShieldCheck size={17} />
              Secure HR Management
            </div>

            <h1>
              Manage your people,
              <br />
              <span>grow your business.</span>
            </h1>

            <p>
              A smarter way to manage employees, attendance,
              payroll, recruitment and performance from one
              powerful HR platform.
            </p>

            <div className="login-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <Users size={19} />
                </div>

                <div>
                  <strong>Employee Management</strong>
                  <span>Manage your entire workforce</span>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <BarChart3 size={19} />
                </div>

                <div>
                  <strong>Powerful Analytics</strong>
                  <span>Make decisions with real-time data</span>
                </div>
              </div>
            </div>
          </div>

          <div className="login-copyright">
            © 2026 HR Portal. All rights reserved.
          </div>
        </div>

        {/* Right Section */}
        <div className="login-form-section">
          <div className="login-form-wrapper">

            <div className="mobile-login-brand">
              <div className="login-logo">
                <Users size={22} />
              </div>

              <h2>
                HR<span>Portal</span>
              </h2>
            </div>

            <div className="login-heading">
              <h1>Welcome back</h1>

              <p>
                Sign in to access your HR dashboard
              </p>
            </div>

            <form onSubmit={handleLogin}>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <div className="input-wrapper">
                  <Mail size={19} />

                  <input
                    id="email"
                    type="email"
                    placeholder="admin@hrportal.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="form-group">
                <div className="password-label">
                  <label htmlFor="password">
                    Password
                  </label>

                  <button
                    type="button"
                    className="forgot-password"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="input-wrapper">
                  <Lock size={19} />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember */}
              <div className="remember-row">
                <label className="remember-label">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
              </div>

              {/* Login */}
              <button
                type="submit"
                className="login-button"
              >
                <span>Sign In</span>
                <ArrowRight size={19} />
              </button>
            </form>

            <div className="login-security">
              <ShieldCheck size={16} />
              <span>
                Your information is protected and secure
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;