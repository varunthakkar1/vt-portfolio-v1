import Experience, { ExperienceModel } from "./Experience";

const Experiences = (): JSX.Element => {
  const data: Array<ExperienceModel> = require("../../../data/experiences.json");

  return (
    <div className="flex items-center text-xs sm:text-sm md:text-md lg:text-lg flex-wrap">
      {data.map((experience, key) => {
        return <Experience key={key} {...experience} />;
      })}
    </div>
  );
};

export default Experiences;
