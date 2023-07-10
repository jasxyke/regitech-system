import { getCurrentDate } from "../utils/datesHandler";
import css from "./GreetingsHeader.module.css";

const GreetingsHeader = ({ name }) => {
  const date = getCurrentDate();

  return (
    <div>
      <div className={"mt-5 " + css.greeting_header}>
        <h2>
          <strong>Hello, {name}!</strong>
        </h2>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default GreetingsHeader;
