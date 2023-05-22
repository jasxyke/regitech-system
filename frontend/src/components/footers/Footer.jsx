import LoginCss from "../../pages/Login/LoginPage.module.css";

const Footer = () => {
  return (
    <div>
      <div className="row text-center mt-auto">
        <div className={LoginCss.copyright}>
          Copyright@2022 | RegiTech | Developed DICT 3-1
        </div>
      </div>
    </div>
  );
};

export default Footer;
