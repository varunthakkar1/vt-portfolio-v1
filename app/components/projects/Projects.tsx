"use client";
import Project, { ProjectModel } from "./Project";
import { useInView } from "react-intersection-observer";

const Projects = ({ data }: { data: Array<ProjectModel> }): JSX.Element => {
  const { ref, inView, entry } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  const style = { opacity: inView ? "100" : "0" };
  return (
    <div className="flex justify-center w-full min-h-screen items-center">
      <div className="flex justify-center w-10/12 lg:w-8/12">
        <div className="flex flex-col w-full justify-center">
          <div
            ref={ref}
            style={style}
            className="flex w-full mb-[30px] justify-center text-white text-lg md:text-2xl lg:text-4xl transition-opacity ease-in duration-500 opacity-0"
          >
            PROJECTS
          </div>
          <div
            ref={ref}
            style={style}
            className="flex items-center justify-center flex-wrap transition-opacity ease-in duration-500 opacity-0 delay-500"
          >
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
