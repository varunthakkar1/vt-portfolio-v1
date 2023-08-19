import Image from 'next/image'
const MAX_STAR_DELAY: number = 2000
const MAX_STARS: number = 200

const generateStar = (): JSX.Element => {
  const delay: number = Math.floor(Math.random() * MAX_STAR_DELAY) - 1000
  const top: number = Math.floor(Math.random() * 100)
  const left: number = Math.floor(Math.random() * 100)
  const delayString: string = `${delay}ms`
  const className = `rounded-full absolute w-[3px] h-[3px] bg-white animate-twinkle`
  return <div className={className} style={{ top: `${top}vh`, left: `${left}vw`, animationDelay: delayString}}/>
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-montserrat">
      {new Array<number>(MAX_STARS).fill(0).map((key) => {
          return <div key={key}>{generateStar()}</div>
        })}
      <div className='flex flex-col bg-primary w-full h-screen justify-center items-center'>
        <div className='flex text-white text-8xl font-medium z-10 w-full justify-center'>Varun Thakkar</div>
        <div className='flex text-secondary text-4xl font-normal z-10 w-full justify-center'>Software Engineer</div>
      </div>
    </main>
  )
}
