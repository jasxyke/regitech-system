import { Link } from "react-router-dom";
import footercss from "./MainFooter.module.css";
import logo from '../../assets/puplogo.png';

const MainFooter = () => {
    return (
      <div>
        <a href="/">
        <image src={logo} width="100px"></image>
        </a>
        <div className="footer-links">
          <div className="footer-link-wrapper">
              <div className="footer-link-items">
                  <h2>Quick Links</h2>
                  <Link to='/'>Polytechnic University of the Philippines</Link>
                  <Link to='/'>Polytechnic University of the Philippines Student Information System | PUPSIS</Link>
                  <Link to='/'>Polytechnic University of the Philippines Appointment System</Link>
              </div>
            </div>
        </div>
    </div>
    )
  }
  
export default MainFooter