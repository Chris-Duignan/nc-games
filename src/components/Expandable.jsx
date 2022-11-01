import { useState } from "react";

const Expandable = ({ children, tag }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((currOpen) => !currOpen);
  };

  return (
    <ul>
      <button onClick={toggleOpen}>{tag}</button>
      {isOpen && children}
    </ul>
  );
};

export default Expandable;
