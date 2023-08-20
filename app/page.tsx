import Image from "next/image";
import { AiOutlineArrowDown } from "react-icons/ai";
const MAX_STAR_DELAY: number = 2000;
const MAX_STARS: number = 200;

const generateStar = (): JSX.Element => {
  const delay: number = Math.floor(Math.random() * MAX_STAR_DELAY) - 1000;
  const top: number = Math.floor(Math.random() * 100);
  const left: number = Math.floor(Math.random() * 100);
  const delayString: string = `${delay}ms`;
  const className = `rounded-full absolute w-[1px] h-[1px] bg-white animate-twinkle`;
  return (
    <div
      className={className}
      style={{
        top: `${top}vh`,
        left: `${left}vw`,
        animationDelay: delayString,
      }}
    />
  );
};

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between font-montserrat">
      {new Array<number>(MAX_STARS).fill(0).map((key) => {
        return <div key={key}>{generateStar()}</div>;
      })}
      <div className="bg-primary w-full h-screen justify-center items-center overflow-y-scroll no-scrollbar">
        <div className="flex flex-col w-full min-h-screen justify-center">
          <div className="flex text-white text-xl md:text-4xl lg:text-8xl font-medium z-10 w-full justify-center mt-[40vh] align-middle">
            VARUN THAKKAR
          </div>
          <div className="flex text-slate-400 text-lg md:text-2xl lg:text-4xl font-normal z-10 w-full justify-center mb-[30vh]">
            SOFTWARE ENGINEER
          </div>
          <div className="flex justify-center text-white w-full animate-bounce">
            <AiOutlineArrowDown size={"50px"} />
          </div>
        </div>
        <div className="flex flex-col w-full min-h-screen justify-center">
          ABOUT ME
        </div>
      </div>
    </main>
  );
}
