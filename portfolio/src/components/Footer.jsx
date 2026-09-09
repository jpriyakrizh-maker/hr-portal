import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">JP</div>

      <p>© 2026 Jeyapriya. All Rights Reserved.</p>

      <div className="footer-links">
        <a
          href="https://github.com/jpriyakrizh-maker"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/jeya-priya-059b27414/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a href="mailto:jp1206206@gmail.com">
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;