import React from "react";
import Container from "../common/Container";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
type HeroProps = {
  title: string;
  lead: string;
  subTitle: string;
};
const Hero = ({ title, lead, subTitle }: HeroProps) => {
  return (
    <section id="hero" className="bg-slate-900">
      <Container>
        <div className="flex flex-col items-start justify-center py-40">
          <h2 className="text-gray-400 text-lg font-semibold leading-none">
            {subTitle}
          </h2>
          <h1 className="text-gray-200 font-semibold text-6xl leading-snug">
            {title}
          </h1>
          <p className="text-gray-400 text-xl mb-4">{lead}</p>
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
      </Container>
    </section>
  );
};

export default Hero;
