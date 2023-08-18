import Image from 'next/image'
const MAX_STAR_DELAY: number = 500
const MAX_STARS: number = 500

const generateStar1 = (): JSX.Element => {
  const delay: number = Math.floor(Math.random() * MAX_STAR_DELAY)
  const top: string = String(Math.floor(Math.random() * 500))
  const pos: string = `${top}px`
  const className = `rounded-full absolute top-[200px] left-[200px] w-[4px] h-[4px] bg-white animate-twinkle delay-[${delay}ms]`
  console.log(className)
  return <div className={className}/>
}

const generateStar2 = (): JSX.Element => {
  const delay: number = Math.floor(Math.random() * MAX_STAR_DELAY)
  const top: string = String(Math.floor(Math.random() * 500))
  const pos: string = `${top}px`
  const className = `rounded-full absolute top-[500px] left-[500px] w-[4px] h-[4px] bg-white animate-twinkle delay-[${delay}ms]`
  console.log(className)
  return <div className={className}/>
}

const stars = new Array<number>(5);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='flex bg-primary w-full h-screen justify-center items-center'>
        <div className='flex text-secondary text-8xl font-medium font-montserrat'>Varun Thakkar</div>
        {generateStar1()}
        {generateStar2()}
      </div>
    </main>
  )
}
