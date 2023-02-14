import React from "react";
import About from "../components/home/About";
import Hero from "../components/home/Hero";
import Contact from "../components/home/Contact";
import Skills from "../components/home/Skills";
const HomePage = () => {
  return (
    <>
      <Hero
        subTitle="Hi, I'm"
        title="Jeremy Barber"
        lead="IT Professional based in the United States."
      />
      <About
        title="About Me"
        lead="Learn more about my background."
        background={[
          `I'm Jeremy, a seasoned IT professional with a passion for software development and a diverse skill set in software troubleshooting and system administration. My background in relational databases, particularly with MySQL, as well as my experience with MSSQL Server and Sybase SQL, allows me to effectively manage and maintain database systems.`,
          `I have attended a full stack development bootcamp where I honed my skills in SQL, JavaScript, React, and Node, giving me a unique perspective on tackling technical issues from both a system administration and software development viewpoint.`,
          `With proficiency in tools such as PostMan and SoapUI, I am able to test API requests and resolve errors with ease. My knowledge of the TCP/IP and OSI models, as well as my familiarity with common network and communication protocols like ssh, rdp, dhcp, and dns, makes me a valuable asset in any technical support or development role.`,
          `In addition to my technical expertise, I have hands-on experience with Salesforce, 
        remote desktop support, fixing configuration files, and 
        testing connections using ping, tracert, and 
        proprietary software. I am always seeking new 
        opportunities to grow my skills and apply my expertise to challenging projects.`,
          `With my combination of technical knowledge, hands-on experience, and passion for software development, I am confident in my ability to make a positive impact in any team.`,
        ]}
      />
      <Skills title="Skills" lead="Learn more about what I can do." />
      <Contact />
    </>
  );
};

export default HomePage;
