"use client";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

const Hero = (): JSX.Element => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const style = { opacity: inView ? "100" : "0" };

  return (
    <div ref={ref} className="flex flex-col w-full min-h-screen justify-center">
      <div
        style={style}
        className="flex text-white text-2xl md:text-4xl lg:text-8xl font-medium z-10 w-full justify-center align-middle transition-opacity ease-in duration-[1s] opacity-0"
      >
        VARUN THAKKAR
      </div>
      <div
        style={style}
        className="flex text-slate-300 text-xl md:text-2xl lg:text-4xl font-normal z-10 w-full justify-center transition-opacity ease-in duration-[1s] opacity-0 delay-[1s]"
      >
        SOFTWARE ENGINEER
      </div>
      <div
        style={style}
        className="relative text-white w-full top-[40vh] animate-bounce transition-opacity ease-in duration-[1s] opacity-0 delay-[2s]"
      >
        <div className="flex justify-center">
          <AiOutlineArrowDown size={"50px"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
