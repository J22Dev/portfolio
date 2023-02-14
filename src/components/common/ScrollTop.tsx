import React from "react";
import ReactDOM from "react-dom";
import { FiArrowUp } from "react-icons/fi";
import Container from "./Container";

const ScrollTop = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleScroll = (e: Event) => {
    e.preventDefault();
    if (window.scrollY >= window.innerHeight / 3) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return open
    ? ReactDOM.createPortal(
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 transform right-8 rounded-full p-2 z-[100] w-12 h-12 flex items-center bg-slate-800 text-gray-200 border-2 border-slate-700 justify-center "
        >
          <FiArrowUp className="h-full w-full" />
        </button>,
        document.querySelector("#portal") as HTMLDivElement
      )
    : null;
};

export default ScrollTop;
