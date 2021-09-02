import React from "react";
import headshot from "../images/headshot.png";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="meetEng">
        <p id="katelyn">MEET THE ENGINEER:</p>
        <p>KATELYN DEVINE</p>
      </div>
      <img src={headshot} alt="headshot" />
      <span>
        <a href="https://github.com/katelyndevine" target="blank">
          GITHUB
        </a>
      </span>
      <span>
        {" "}
        <a href="https://linkedin.com/in/katelyndevinekd" target="blank">
          LINKEDIN
        </a>
      </span>
      {/* <span>
        <a href="https://www.katelyn-portfolio.com/" target="blank">
          GRAPHIC DESIGN
        </a>
      </span> */}
    </div>
  );
};

export default Footer;
