import { useState } from "react";

const Expandable = ({ children, tag }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((currOpen) => !currOpen);
  };

  return (
    <>
      <p onClick={toggleOpen}>{tag}</p>
      <ul className="dropdown">{isOpen && children}</ul>
    </>
  );
};

export default Expandable;
