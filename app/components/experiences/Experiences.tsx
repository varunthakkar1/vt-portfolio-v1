"use client";
import Experience, { ExperienceModel } from "./Experience";
import { useInView } from "react-intersection-observer";

const Experiences = ({
  data,
}: {
  data: Array<ExperienceModel>;
}): JSX.Element => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const style = { opacity: inView ? "100" : "0" };

  return (
    <div className="flex justify-center w-full min-h-screen items-center">
      <div className="flex justify-center w-10/12 lg:w-8/12 2xl:w-1/2">
        <div className="flex flex-col w-full justify-center">
          <div
            ref={ref}
            className="flex w-full mb-[5%] justify-center text-white text-lg md:text-2xl lg:text-4xl"
          >
            EXPERIENCES
          </div>
          <div className="flex items-center text-[11px] sm:text-sm md:text-md xl:text-lg 2xl:text-xl flex-wrap">
            {data &&
              data.map((experience, key) => {
                return <Experience key={key} {...experience} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
