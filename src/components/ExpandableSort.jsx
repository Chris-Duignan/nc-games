import { useState } from "react";

const ExpandableSort = ( {children, className, tag }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((currOpen) => !currOpen);
  };

  return (
    <>
      <button onClick={toggleOpen} className={className}>{isOpen ? "Close" : tag}</button>
      {isOpen && children}
    </>
  );
};

export default ExpandableSort;
