//@ts-ignore
import profile from '../public/Jacob_Dutton.jpg'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className= 'flex flex-col items-center bg-[#0F172A]/100 bg-fixed min-h-screen'>
      <div className='flex mt-10 mb-3 border rounded h- w-40 m-'>
        <img src={profile} alt='profile photo'/>
      </div>
      <h1 className=' mb-3 font-thin text-xl font-mono text-green-500 underline'> About Me</h1>
      <p className='ml-32 mr-32 mb-8 text-center font-thin text-sm font-mono text-green-500'> 
        Hi! First of all, thankyou for taking the time to view my portfolio and for considering
        me for the position. Pretty much from birth, I've always loved to create things. The ability
        to make ones imagination come to life with your own two hands, for me engineering was always 
        a form of artistic expression. Every lego set was a canvas. And as I grew and matured, so
        did my canvas. In highschool, I invested deeply in robotics and mechanical engineering. 
        So much so in fact, that in 2018 my robot that I had created won 1st place in the national
        VEX Robotics competition. And even though I had been exposed to programming as a form of 
        engineering at the time, it never resonated with me as a possible canvas until much more 
        recently. 
      </p>
      <p className='ml-32 mr-32 mb-8 text-center font-thin text-sm font-mono text-green-500'>
        Due to the financial constraints of my upbringing, I was unable to pursue a career
        in mechanical engineering due to the education requirements. For the past few years I have 
        explored and expiremented, seaching for my substitute, and in June of 2023 I finally found it. 
        I decided to give a few free online coding tutorials a try, and I immediately recognized the
        potential. 6 months of an intensive bootcamp later and here I am, a certified full-stack software
        engineer, my passion finally realized.
      </p>
      <Button>
            <div>
                <Link to='/Passion' className='px-6 py-3 border border-m-8 rounded-full border-green-500 font-mono text-green-500 text-sm hover:text-white hover:border-white'>Click Here To Learn About My Passion!</Link>
            </div>
      </Button>
    </div>
    
  )
}

export default About
