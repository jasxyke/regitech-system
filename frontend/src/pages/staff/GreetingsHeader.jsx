import css from "./GreetingsHeader.module.css";

const GreetingsHeader = ({ name }) => {
  return (
    <div>
      <div className={css.greeting_header}>
        <h2>Hello, {name}!</h2>
        <p>thursday, januar 12, 2023</p>
      </div>
    </div>
  );
};

export default GreetingsHeader;
