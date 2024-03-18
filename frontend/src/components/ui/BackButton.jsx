import React from "react";
import { MdArrowBack } from "react-icons/md";
import PrimaryButton from "./PrimaryButton";
import { useNavigate } from "react-router-dom";
const BackButton = ({
  text,
  alt = null,
  handleClick = null,
  disabled = false,
}) => {
  const navigate = useNavigate();
  return (
    <div className="mb-4">
      <PrimaryButton
        text={
          <div>
            <MdArrowBack /> {text}
          </div>
        }
        disabled={disabled}
        onClick={
          handleClick === null
            ? () => {
                navigate(alt === null ? -1 : alt);
              }
            : handleClick
        }
      />
    </div>
  );
};

export default BackButton;
