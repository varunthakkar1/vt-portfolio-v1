import { FiArrowRight, FiMinus } from "react-icons/fi";

export interface ExperienceModel {
  position: string;
  company: string;
  date: string;
  description: string;
}

const Experience = ({
  position,
  company,
  date,
  description,
}: ExperienceModel): JSX.Element => {
  return (
    <div className="flex w-full min-w-[300px] flex-col rounded-sm my-[10px]">
      <div className="flex w-full text-slate-400 font-normal">{date}</div>
      <div className="flex w-full font-semibold my-[2px]">
        <div className="flex text-white">{position}</div>
        <div className="relative top-[4px] text-white">
          <FiMinus />
        </div>
        <div className="flex text-white">{company}</div>
      </div>
      <div className="flex w-full text-slate-400 font-normal">
        <div className="flex flex-col justify-center mr-[5px]">
          <FiArrowRight />
        </div>
        {description}
      </div>
    </div>
  );
};

export default Experience;
