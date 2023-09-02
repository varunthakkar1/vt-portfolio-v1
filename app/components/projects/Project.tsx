"use client";

import { link } from "fs";
import Skill from "../Skill";

export interface ProjectModel {
  name: string;
  description: string;
  skills: string[];
  link?: string;
}

const Project = ({
  name,
  description,
  skills,
  link,
}: ProjectModel): JSX.Element => {
  return (
    <div
      className="flex flex-col justify-between h-[300px] min-w-[300px] max-w-[35%]  p-[15px] z-10 m-[20px] border-2 rounded-md"
      onClick={link ? () => window.open(link) : undefined}
      style={{ cursor: link && "pointer" }}
    >
      <div className="flex text-white font-bold text-xl mt-[15px] lg:text-base 2xl:text-2xl">
        {name}
      </div>
      <div className="flex text-slate-300 text-sm xl:text-base 2xl:text-lg">
        {description}
      </div>
      <div className="flex flex-wrap whitespace-nowrap mb-[15px] text-sm xl:text-base 2xl:text-lg">
        {skills.map((skill: string, key) => {
          return <Skill key={key} skill={skill} />;
        })}
      </div>
    </div>
  );
};

export default Project;
