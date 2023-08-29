import Project, { ProjectModel } from "./Project";
import { readFile } from "fs/promises";
import path from "path";

const Projects = async (): Promise<JSX.Element> => {
  const data: Array<ProjectModel> = JSON.parse(
    await readFile(
      path.resolve(__dirname, "./../../../data/projects.json"),
      "utf8"
    )
  );

  return (
    <div className="flex justify-center w-full min-h-screen items-center">
      <div className="flex justify-center w-10/12 lg:w-8/12">
        <div className="flex flex-col w-full justify-center">
          <div className="flex w-full mb-[30px] justify-center text-white text-lg md:text-2xl lg:text-4xl">
            PROJECTS
          </div>
          <div className="flex items-center justify-evenly text-xs sm:text-sm md:text-md flex-wrap">
            {data.map((project: ProjectModel, key) => {
              return <Project key={key} {...project} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
