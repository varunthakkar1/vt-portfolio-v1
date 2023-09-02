"use client";
import { useInView } from "react-intersection-observer";

const About = (): JSX.Element => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const style = { opacity: inView ? "100" : "0" };

  return (
    <div
      ref={ref}
      className="flex flex-col w-full min-h-screen justify-center items-center transition-opacity ease-in duration-[2s] opacity-0"
      style={style}
    >
      <div className="flex w-full justify-center text-white text-lg md:text-2xl lg:text-4xl">
        ABOUT ME
      </div>
      <div className="flex justify-center min-w-[300px] max-w-[50%] items-center text-slate-300 text-md md:text-xl lg:text-2xl">
        In May 2023, I graduated with magna cum laude from Northeastern
        University with a BS in Computer Science.
      </div>
    </div>
  );
};

export default About;
