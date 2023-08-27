import React from "react";
import { MdArrowBack } from "react-icons/md";
import PrimaryButton from "./PrimaryButton";
import { useNavigate } from "react-router-dom";
const BackButton = ({ text }) => {
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
          navigate(-1);
        }}
      />
    </div>
  );
};

export default BackButton;
