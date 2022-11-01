import { useState } from "react";

const Expandable = ({ children, tag }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((currOpen) => !currOpen);
  };

  return (
    <li className="dropdown">
      <p onClick={toggleOpen}>{tag}</p>
      <ul className="dropdown">{isOpen && children}</ul>
    </li>
  );
};

export default Expandable;
