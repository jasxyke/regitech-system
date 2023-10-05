import { Link } from "react-router-dom";
import leftbg from "../../assets/backgroundleft.jpg";
import SignupForm from "./SignupForm.jsx";
import Logo from "../../components/Logo.jsx";
import SignupCss from "../Signup/SignupPage.module.css";
import PictureCarousel from "../../components/PictureCarousel";
const SignupPage = () => {
  return (
    <div className={SignupCss.login_page + " container-fluid m-0 p-0"}>
      <div className="row g-0">
        <div className="col-lg-8 col-md-6 d-none d-md-block">
          <PictureCarousel />
        </div>
        <div className={`col-lg-4 col-md-6  ${SignupCss["right-side"]}`}>
          <Logo />
          <h2 className="px-5">Registration</h2>
          <div className={`${SignupCss["content-container"]}`}>
            <SignupForm />
            <div className="mt-1 mb-5 text-center">
              <Link to="/" className="text-white">
                Already have an account?
              </Link>
            </div>
            <div className={`row mt-auto text-center`}>
              <div className={SignupCss["copyright"]}>
                © RegiTech | Developed by DICT 3-1 Group 5 batch 2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
