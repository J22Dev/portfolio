import React from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";
import { FiMenu, FiX } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import useToggle from "../../hooks/useToggle";
import useWindowSize from "../../hooks/useWindowSize";
const Link = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <NavLink to={to} className="hover:text-gray-400 duration-200 text-gray-200">
      {children}
    </NavLink>
  );
};
const links = [
  {
    to: "/#hero",
    label: "Home",
  },
  {
    to: "/#about",
    label: "About",
  },
  {
    to: "/#skills",
    label: "Skills",
  },
  {
    to: "/#contact",
    label: "Contact",
  },
];
const Navigation = () => {
  const { isOpen, toggleOpen } = useToggle();
  const { width, height } = useWindowSize();
  const [collapseHeight, setCollapseHeight] = React.useState<number>(0);
  const renderLinks = (className: string) =>
    links.map((link) => (
      <li className={className} onClick={() => isOpen && toggleOpen()}>
        {link.to.includes("#") ? (
          <HashLink
            className="text-gray-200 hover:text-gray-400 duration-200"
            smooth
            to={link.to}
          >
            {link.label}
          </HashLink>
        ) : (
          <Link key={link.label} to={link.to}>
            {link.label}
          </Link>
        )}
      </li>
    ));
  const collapseRef = React.useRef<HTMLLIElement>(null);
  React.useEffect(() => {
    if (collapseRef.current) {
      setCollapseHeight(collapseRef.current.scrollHeight);
    }
  }, [collapseRef, width]);
  return (
    <nav className="bg-slate-900  sticky top-0 shadow-md shadow-slate-900/50 border-b-2 border-slate-800">
      <Container>
        <ul className="text-gray-200 flex justify-between items-center h-12 gap-4">
          <li className="mr-auto">
            <NavLink
              to="/"
              className="text-xl font-semibold hover:text-gray-400 duration-200"
            >
              JeremyBarber
            </NavLink>
          </li>
          {renderLinks("hidden md:flex")}
          <li
            style={{
              maxHeight: isOpen ? collapseHeight : 0,
            }}
            ref={collapseRef}
            className="md:hidden overflow-hidden duration-200 absolute top-12 left-0 w-full"
          >
            <ul className="flex flex-col  px-4 gap-4 bg-slate-800">
              {renderLinks("first:mt-4 last:mb-4")}
            </ul>
          </li>
          <li className="md:hidden">
            <button
              onClick={toggleOpen}
              className="flex text-xl hover:text-gray-400 duration-200"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navigation;
