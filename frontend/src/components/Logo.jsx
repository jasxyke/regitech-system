import logo from "../assets/puplogo.png";

const Logo = () => {
  return (
    <div>
      <div className="text-center pt-4 mb-2">
        <img src={logo} />
      </div>
      <h1 className="text-center mb-4">
        Reg<span style={{ color: "yellow" }}>iTech</span>
      </h1>
    </div>
  );
};

export default Logo;
