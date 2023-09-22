const Footer = () => {
  return (
    <div id="footer-spacer">
      <div id="footer-container">
        <div className="spacer"></div>
        <div id="contact-container">
          <ul>
            <h3>Contact</h3>
            <li>email</li>
            <li>
              <a href="https://www.linkedin.com/in/dorionboesch/">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/Paz828">GitHub</a>
            </li>
          </ul>
        </div>
        <div id="more-projects-container">
          <button id="all-projects-btn">View All Projects</button>
        </div>
        <div id="resume-container">
          <h3>Resume</h3>
        </div>
        <div className="spacer"></div>
      </div>
    </div>
  );
};

export default Footer;
