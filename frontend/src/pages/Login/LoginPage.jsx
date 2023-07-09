import LoginForm from "./LoginForm.jsx";
import Logo from "../../components/Logo.jsx";
import LoginCss from "./LoginPage.module.css";
import PictureCarousel from "../../components/PictureCarousel";

const LoginPage = () => {
  return (
    <div className={LoginCss.login_page + " container-fluid m-0 p-0"}>
      <div className="row g-0">
        <div className="col-lg-8 col-md-6 d-none d-md-block">
          <PictureCarousel />
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
          <div className="row text-center mt-auto">
            <div className={LoginCss.copyright}>
              Copyright@2022 | RegiTech | Developed DICT 3-1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
