import { readFile } from "fs/promises";
import Experience, { ExperienceModel } from "./Experience";
import path from "path";

const Experiences = async (): Promise<JSX.Element> => {
  const data: Array<ExperienceModel> = JSON.parse(
    await readFile(
      path.resolve(__dirname, "./../../../data/experiences.json"),
      "utf8"
    )
  );

  return (
    <div className="flex justify-center w-full min-h-screen items-center">
      <div className="flex justify-center w-10/12 lg:w-8/12">
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
      </div>
    </div>
  );
};

export default Experiences;
