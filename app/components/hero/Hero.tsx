import { AiOutlineArrowDown } from "react-icons/ai";

const Hero = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full min-h-screen justify-center">
      <div className="flex text-white text-2xl md:text-4xl lg:text-8xl font-medium z-10 w-full justify-center align-middle">
        VARUN THAKKAR
      </div>
      <div className="flex text-slate-300 text-xl md:text-2xl lg:text-4xl font-normal z-10 w-full justify-center">
        SOFTWARE ENGINEER
      </div>
      <div className="relative text-white w-full top-[40vh] animate-bounce">
        <div className="flex justify-center">
          <AiOutlineArrowDown size={"50px"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
