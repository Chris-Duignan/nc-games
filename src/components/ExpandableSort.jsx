import { useState } from "react";

const ExpandableSort = ( props ) => {
  const [isOpen, setIsOpen] = useState(false);

  const {children} = props;
  const toggleOpen = () => {
    setIsOpen((currOpen) => !currOpen);
  };

  return (
    <>
      <button onClick={toggleOpen} className={props.className}>{isOpen ? "Close" : "Open"}</button>
      {isOpen && children}
    </>
  );
};

export default ExpandableSort;
