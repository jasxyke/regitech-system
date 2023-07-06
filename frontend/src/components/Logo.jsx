import logo from "../assets/puplogo.png";

const Logo = () => {
  return (
    <div>
      <div className="text-center pt-4 mb-2">
        <img src={logo} style={{ width: "120px" }} />
      </div>
      <h1 className="text-center mb-4">
        <span style={{ color: "white" }}>Reg</span>
        <span style={{ color: "yellow" }}>iTech</span>
      </h1>
    </div>
  );
};

export default Logo;
