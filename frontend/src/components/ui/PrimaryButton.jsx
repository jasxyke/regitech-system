import { useState } from "react";
import { Button } from "react-bootstrap";

const PrimaryButton = ({
  text,
  onClick,
  color = "maroon",
  size = "",
  disabled = false,
}) => {
  return (
    <>
      <style type="text/css">
        {`
            .btn-main{
                background-color: var(--primary-maroon);
                color: white;
            }

            .btn-main:hover{
              border: 1px solid var(--primary-maroon);
            }

            .btn-green{
              background-color: var(--status-green);
                color: white;
            }

            .btn-green:hover{
              border: 1px solid var(--status-green);
              color: black;
            }

            .btn-orange{
              background-color: var(--status-orange);
                color: white;
            }

            .btn-orange:hover{
              border: 1px solid var(--status-orange);
              color: black;
            } 
        `}
      </style>
      <Button
        variant={
          color === "green"
            ? "green"
            : color === "orange"
            ? "orange"
            : color === "primary"
            ? "primary"
            : "main"
        }
        onClick={(e) => {
          onClick();
        }}
        size={size}
        disabled={disabled}
      >
        {text}
      </Button>
    </>
  );
};

export default PrimaryButton;
