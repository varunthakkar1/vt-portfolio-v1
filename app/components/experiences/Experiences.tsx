import Experience, { ExperienceModel } from "./Experience";

const Experiences = (): JSX.Element => {
  const data: Array<ExperienceModel> = require("../../../data/experiences.json");

  return (
    <div className="flex flex-col w-full justify-center">
      <div className="flex w-full mb-[10px] justify-center text-white text-lg md:text-2xl lg:text-4xl">
        EXPERIENCES
      </div>
      <div className="flex items-center text-xs sm:text-sm md:text-md flex-wrap">
        {data.map((experience, key) => {
          return <Experience key={key} {...experience} />;
        })}
      </div>
    </div>
  );
};

export default Experiences;
