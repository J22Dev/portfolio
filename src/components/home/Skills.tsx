import React from "react";
import Container from "../common/Container";
import {
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiCss3,
  SiHtml5,
  SiPostman,
  SiJson,
  SiMicrosoftteams,
  SiCisco,
  SiGnubash,
  SiPowershell,
} from "react-icons/si";
import { FaCode, FaNetworkWired } from "react-icons/fa";
const skills = [
  {
    title: "Development Related",
    items: [
      {
        label: "XML",
        icon: FaCode,
      },
      {
        label: "JSON",
        icon: SiJson,
      },
      {
        label: "MySQL",
        icon: SiMysql,
      },
      {
        label: "React",
        icon: SiReact,
      },
      {
        label: "Node",
        icon: SiNodedotjs,
      },

      {
        label: "CSS",
        icon: SiCss3,
      },
      {
        label: "HTML",
        icon: SiHtml5,
      },
    ],
  },
  {
    title: "IT Related",
    items: [
      {
        icon: FaNetworkWired,
        label: "Networking",
      },
      {
        icon: SiPowershell,
        label: "Windows",
      },
      {
        icon: SiGnubash,
        label: "Linux",
      },
    ],
  },
  {
    title: "Applications",
    items: [
      {
        label: "PostMan",
        icon: SiPostman,
      },
      {
        label: "SoapUI",
        icon: FaCode,
      },
      {
        label: "Cisco WebEx",
        icon: SiCisco,
      },
      {
        label: "Cisco Finesse",
        icon: SiCisco,
      },
      {
        label: "Microsoft Teams",
        icon: SiMicrosoftteams,
      },
    ],
  },
];
type SkillsProps = {
  title: string;
  lead: string;
};
const Skills = ({ title, lead }: SkillsProps) => {
  return (
    <section id="skills">
      <Container>
        <div className="py-10">
          <h2 className="text-4xl text-gray-200 leading-snug font-semibold">
            {title}
          </h2>
          <p className="text-gray-400 text-lg mb-4">{lead}</p>
          <div className="rounded-md grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => {
              return (
                <div
                  key={skill.title}
                  className="flex flex-col items-start bg-slate-800 p-6 rounded-sm"
                >
                  <h4 className="text-2xl font-semibold text-gray-200 leading-snug mb-4">
                    {skill.title}
                  </h4>
                  <ul className="flex flex-col gap-4  w-full rounded-sm">
                    {skill.items.map(({ label, icon: Icon }) => {
                      return (
                        <li
                          className="odd:text-blue-600 even:text-indigo-600 bg-slate-900 p-4 rouned-sm flex  items-center gap-4"
                          key={label}
                        >
                          <Icon className="h-8 w-8 " />
                          <span className="font-semibold">{label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
