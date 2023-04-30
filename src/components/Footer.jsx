import React from "react";
import "../styles/footer.scss"
const Footer = () => {
  return (
    <footer>
      <div>
        <h1>TechyStar</h1>
        <p>@all right reserved</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://www.linkedin.com/in/om-shendre-4560211ba/" target={"blank"}>
            Linkedin
          </a>
          <a href="https://www.instagram.com/om_shendre725/" target={"blank"}>
            Instagram
          </a>
          <a href="https://github.com/omshendre" target={"blank"}>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
