import Skill from "../Skill";

export interface ProjectModel {
  name: string;
  description: string;
  skills: string[];
}

const Project = ({ name, description, skills }: ProjectModel): JSX.Element => {
  return (
    <div className="flex flex-col justify-between h-[250px] w-[300px] bg-secondary p-[15px] z-10 bg-opacity-60">
      <div className="flex text-white font-bold text-xl mt-[15px]">{name}</div>
      <div className="flex text-slate-300">{description}</div>
      <div className="flex flex-wrap whitespace-nowrap mb-[15px]">
        {skills.map((skill: string, key) => {
          return <Skill key={key} skill={skill} />;
        })}
      </div>
    </div>
  );
};

export default Project;
