import React from "react";
import Container from "../common/Container";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
type AboutProps = {
  title: string;
  lead: string;
  background: string[];
};
const About = ({ title, lead, background }: AboutProps) => {
  return (
    <section id="about">
      <Container>
        <div className="py-10">
          <h2 className="text-4xl text-gray-200 leading-snug font-semibold">
            {title}
          </h2>
          <p className="text-gray-400 text-lg mb-4">{lead}</p>
          <div className="bg-slate-800 p-4 rounded-md">
            {background.map((item, idx) => (
              <p className="text-gray-200 mb-4" key={idx}>
                {item}
              </p>
            ))}
            <div className="flex gap-4">
              <NavLink
                to="https://portfolio.us-southeast-1.linodeobjects.com/Jeremy_Barber_CV_For_Upload.pdf"
                target="_blank"
                className="text-lg px-4 py-2 duration-200 text-gray-200 bg-blue-600 hover:bg-blue-800 active:bg-blue-900 rounded-sm"
              >
                Resume
              </NavLink>
              <HashLink
                smooth
                to="/#contact"
                className="text-lg px-4 py-2 duration-200 text-gray-200 bg-indigo-600 hover:bg-indigo-800 active:bg-indigo-900 rounded-sm"
              >
                Contact
              </HashLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
