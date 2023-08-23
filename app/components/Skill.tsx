const Skill = ({ skill }: { skill: string }): JSX.Element => {
  return (
    <div className="bg-slate-400 rounded text-opacity-0 w-min py-[2px] px-[5px] font-bold">
      {skill}
    </div>
  );
};

export default Skill;
