import moment from "moment/moment";
import css from "./GreetingsHeader.module.css";

const GreetingsHeader = ({ name }) => {
  const date = moment().format("dddd, MMMM YY, YYYY");

  return (
    <div>
      <div className={"mt-5 mb-3 "+ css.greeting_header}>
        <h2>
          <strong>Hello, {name}!</strong>
        </h2>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default GreetingsHeader;
