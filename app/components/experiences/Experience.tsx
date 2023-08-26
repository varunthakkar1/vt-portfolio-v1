import { FiArrowRight, FiMinus } from "react-icons/fi";
import Skill from "../Skill";

export interface ExperienceModel {
  position: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
}

const Experience = ({
  position,
  company,
  date,
  description,
  skills,
}: ExperienceModel): JSX.Element => {
  return (
    <div className="flex w-full min-w-[300px] flex-col rounded-sm my-[12px]">
      <div className="flex w-full text-slate-300 font-normal">{date}</div>
      <div className="flex w-full font-semibold my-[2px]">
        <div className="flex text-white">{position}</div>
        <div className="relative top-[4px] text-white">
          <FiMinus />
        </div>
        <div className="flex text-white">{company}</div>
      </div>
      <div className="flex w-full text-slate-300 font-normal">
        <div className="relative top-[2px] md:top-[4px] mr-[5px]">
          <FiArrowRight />
        </div>
        {description}
      </div>
      <div className="flex my-[3px] flex-wrap whitespace-nowrap">
        {skills.map((skill: string, key) => {
          return <Skill key={key} skill={skill} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
