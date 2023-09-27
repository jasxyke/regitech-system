import React from "react";
import { MdArrowBack } from "react-icons/md";
import PrimaryButton from "./PrimaryButton";
import { useNavigate } from "react-router-dom";
const BackButton = ({ text, alt = null }) => {
  const navigate = useNavigate();
  return (
    <div className="mb-4">
      <PrimaryButton
        text={
          <div>
            <MdArrowBack /> {text}
          </div>
        }
        onClick={() => {
          navigate(alt === null ? -1 : alt);
        }}
      />
    </div>
  );
};

export default BackButton;
