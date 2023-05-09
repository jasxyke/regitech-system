import { Link } from "react-router-dom";
import leftbg from "../../assets/backgroundleft.jpg";
import SignupForm from "./SignupForm.jsx";
import Logo from "../../components/Logo.jsx";
import LoginCss from "../Login/LoginPage.module.css";
import Footer from "../../components/Footer.jsx";

const SignupPage = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <div className="row g-0">
        <div className="col-lg-8 col-md-6 d-none d-md-block">
          <img src={leftbg} alt="leftbg" className={LoginCss.left_img} />
        </div>
        <div
          className={`col-lg-4 col-md-6 overflow-hidden ${LoginCss["right-side"]}`}
        >
          <Logo />
          <h2 className="px-5">Registration</h2>
          <SignupForm />
          <div className="mt-3 text-center">
            <Link to="/">Don't have an account yet?</Link>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
