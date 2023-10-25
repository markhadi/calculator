import { useState } from "react";

const buttonVariants = {
  del: "btn-common",
  reset: "btn-common col-span-2",
  "=": "btn-equals",
  default: "btn-default",
};

const Button = ({ children, ...props }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressDown = () => {
    setIsPressed(true);
  };

  const handlePressUp = () => {
    setIsPressed(false);
  };

  const variant = buttonVariants[children] || buttonVariants.default;

  return (
    <button
      {...props}
      onMouseDown={handlePressDown}
      onMouseUp={handlePressUp}
      onTouchStart={handlePressDown}
      onTouchEnd={handlePressUp}
      className={`btn ${variant} ${children !== "x" ? "" : "!lowercase"} ${
        isPressed ? "transform translate-y-1 shadow-none" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
