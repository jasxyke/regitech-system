import { Button } from "react-bootstrap";

const PrimaryButton = ({ text, onClick }) => {
  return (
    <>
      <style type="text/css">
        {`
            .btn-main{
                background-color: var(--primary-maroon);
                color: white;
            }
        `}
      </style>
      <Button
        variant="main"
        onClick={(e) => {
          onClick();
        }}
      >
        {text}
      </Button>
    </>
  );
};

export default PrimaryButton;
