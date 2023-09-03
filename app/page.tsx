import { promises as fs } from "fs";
import path from "path";
import { ExperienceModel } from "@/app/components/experiences/Experience";
import { ProjectModel } from "@/app/components/projects/Project";
import About from "@/app/components/about/About";
import Experiences from "@/app/components/experiences/Experiences";
import Hero from "@/app/components/hero/Hero";
import Projects from "@/app/components/projects/Projects";
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

export default async function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between font-montserrat">
      {new Array<number>(MAX_STARS).fill(0).map((val, key) => {
        return <div key={key}>{generateStar()}</div>;
      })}
      <div className="bg-primary w-full h-screen justify-center items-center overflow-y-scroll no-scrollbar">
        <Hero />
        <About />
        <Experiences data={await getExperiences()} />
        <Projects data={await getProjects()} />
      </div>
    </main>
  );
}

async function getExperiences(): Promise<Array<ExperienceModel>> {
  const dataPath = path.join(process.cwd(), "./data/experiences.json");
  const experiences: Array<ExperienceModel> = JSON.parse(
    await fs.readFile(path.resolve(dataPath), "utf8")
  );
  return experiences;
}

async function getProjects(): Promise<Array<ProjectModel>> {
  const dataPath = path.join(process.cwd(), "./data/projects.json");
  const projects: Array<ProjectModel> = JSON.parse(
    await fs.readFile(path.resolve(dataPath), "utf8")
  );
  return projects;
}
