import React from "react";
import footercss from "./MainFooter.module.css";
import logo from "../../assets/puplogo.png";

const MainFooter = () => {
  return (
    <>
      <div className={footercss.footer}>
        <div className={footercss.container}>
          <div className={footercss.row}>
            <div className="col-md-6 col-lg-3 col-12 ft-1">
              <div className={footercss.ft_1}>
                <div className="logo">
                  <a href="/staff/dashboard">
                    <img src={logo} className={footercss.logo}></img>
                  </a>
                  <h3>
                    <span style={{ color: "#f5f3f3" }}>Reg</span>
                    <span style={{ color: "#fff200" }}>iTech</span>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-12 ft-2">
              <div className={footercss.ft_2}>
                <h3>Quick Links</h3>
                <ul className={footercss.navitem}>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.pup.edu.ph/">Polytechnic University of the Philippines</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://sis2.pup.edu.ph/">Polytechnic University of the Philippines Student Information System</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link"href="https://osssac.pup.edu.ph/knowledgebase.php?article=201/">Polytechnic University of the Philippines Appointment System</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="row text-center ms-auto">
            <div className={footercss.copyright}>
              Copyright@2022 | RegiTech | Developed by DICT 3-1
            </div>
          </div>
        
        </div>     
      </div>
    </>
  );
};
export default MainFooter;
