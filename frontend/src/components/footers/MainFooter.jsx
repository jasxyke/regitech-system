import React from "react";
import footercss from "./MainFooter.module.css";
import logo from "../../assets/puplogo.png";

const MainFooter = () => {
  return (
    <>
      <div className={footercss.footer}>
        <div className={footercss.container + " container py-3 pt-4"}>
          <div className={footercss.logoBox + " logo"}>
            <a href="/staff/dashboard">
              <img src={logo} className={footercss.logo}></img>
            </a>
            <h3>
              <span style={{ color: "#f5f3f3" }}>Reg</span>
              <span style={{ color: "#fff200" }}>iTech</span>
            </h3>
          </div>
          <div className={footercss.ft_2 + " " + footercss.linksContainer}>
            <h3>Quick Links</h3>
            <ul className={footercss.navitem}>
              <li className="nav-item">
                <a className="nav-link" href="https://www.pup.edu.ph/">
                  Polytechnic University of the Philippines
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://sis2.pup.edu.ph/">
                  Polytechnic University of the Philippines Student Information
                  System
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://osssac.pup.edu.ph/knowledgebase.php?article=201/"
                >
                  Polytechnic University of the Philippines Appointment System
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainFooter;
