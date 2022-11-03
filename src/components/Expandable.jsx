import { useState, React } from "react";

const Expandable = ({ children, tag }) => {
  const [isOpen, setIsOpen] = useState(false);

  
  const toggleOpen = () => {
    setIsOpen((currOpen) => !currOpen);
  };

  return (
    <li className="dropdown">
      <button onClick={toggleOpen} >{tag}</button>
      <ul className="dropdown">{isOpen && children}</ul>
    </li>
  );
};

export default Expandable;
