"use client";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const About = (): JSX.Element => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const style = { opacity: inView ? "100" : "0" };

  return (
    <div className="flex flex-col w-full justify-center items-center my-[12%]">
      <div className="flex flex-col justify-center w-10/12 lg:w-8/12 2xl:w-1/2">
        <div
          ref={ref}
          style={style}
          className="flex w-full justify-center text-white text-lg md:text-2xl lg:text-4xl mb-[5%] transition-opacity ease-in duration-500 opacity-0"
        >
          ABOUT ME
        </div>
        <div
          ref={ref}
          style={style}
          className="flex justify-center flex-col items-center text-slate-300 text-md md:text-xl lg:text-2xl transition-opacity ease-in duration-500 delay-500 opacity-0"
        >
          <div className="flex justify-center w-full">
            I began my programming journey with LEGO Mindstorms, Scratch, and
            16-bit computers in Minecraft (I know it sounds ridiculous). In May
            2023, I graduated magna cum laude from Northeastern University with
            a BS in Computer Science. After having the privilege to develop
            software for three incredible companies, I am now looking for my
            next experience as a software engineer.
          </div>
          <div className="flex justify-center w-full mt-[5%]">
            My interests outside of tech include space exploration, comic books,
            cooking, and cycling. Some of my favorite movies are Arrival,
            Interstellar, and Into the Spider-Verse. I passionately believe
            Indian food is the best food on the planet.
          </div>
          <div className="flex justify-center w-full mt-[5%]">
            Please connect with me on&nbsp;
            <Link
              className="flex inline-link archive-link text-white underline"
              href={"https://www.linkedin.com/in/varun-m-thakkar/"}
              target="_blank"
            >
              LinkedIn
            </Link>
            &nbsp;and explore my code on&nbsp;
            <Link
              className="inline-link archive-link text-white underline"
              target="_blank"
              href={"https://github.com/varunthakkar1"}
            >
              GitHub
            </Link>
            !
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
