const About = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center">
      <div className="flex w-full justify-center text-white text-lg md:text-2xl lg:text-4xl">
        ABOUT ME
      </div>
      <div className="flex justify-center w-[70%] items-center text-slate-400 text-md md:text-xl lg:text-2xl">
        In May 2023, I graduated with magna cum laude from Northeastern
        University with a BS in Computer Science.
      </div>
    </div>
  );
};

export default About;
