import React from "react";

const useToggle = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return {
    isOpen,
    toggleOpen,
  };
};

export default useToggle;
