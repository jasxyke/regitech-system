import leftbg from "../../assets/backgroundleft.jpg";
import LoginForm from "./LoginForm.jsx";
import Logo from "../../components/Logo.jsx";
import LoginCss from "./LoginPage.module.css";
import Footer from "../../components/Footer.jsx";
import { Link } from "react-router-dom";

const LoginPage = () => {
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
          <h2 className="px-5">Login</h2>
          <LoginForm />
          <div className="mt-3 text-center">
            <a href="/sign-up"> don't have an account yet ? </a>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
