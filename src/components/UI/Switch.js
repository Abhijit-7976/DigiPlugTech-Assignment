import { useState } from "react";

const Switch = () => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleHandler = () => {
    setIsSelected(s => !s);
  };

  return (
    <div
      className={`switch ${isSelected ? "switch-selected" : ""}`}
      onClick={toggleHandler}>
      <div className="" />
    </div>
  );
};

export default Switch;
