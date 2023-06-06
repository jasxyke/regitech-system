import moment from "moment/moment";
import css from "./GreetingsHeader.module.css";

const GreetingsHeader = ({ name }) => {
  const date = moment().format("dddd, MMMM YY, YYYY");

  return (
    <div>
      <div className={css.greeting_header}>
        <h2>
          <strong>Hello, {name}!</strong>
        </h2>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default GreetingsHeader;
