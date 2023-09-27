import { Button } from "react-bootstrap";

const SecondaryButton = ({ text, onClick, disabled = false }) => {
  return (
    <>
      <style type="text/css">
        {`
            .btn-outline-maroon{
                border-color: var(--primary-maroon); 
                border-width: 2px;  
            }
            .btn-outline-maroon:hover{
                background-color: var(--primary-maroon);
                color: white;
            }
        `}
      </style>
      <Button
        variant="outline-maroon"
        onClick={(e) => onClick()}
        disabled={disabled}
      >
        {text}
      </Button>
    </>
  );
};

export default SecondaryButton;
