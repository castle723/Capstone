//@ts-ignore
import firstProject from '../public/firstAssignment.jpg';
//@ts-ignore
import secondProject from '../public/secondAssignment.jpg';
//@ts-ignore
import thirdProject from '../public/thirdAssignment.jpg';
//@ts-ignore
import fourthProject from '../public/fourthAssignment.jpg';
//@ts-ignore
import fifthProject from '../public/fifthAssignment.jpg';
//@ts-ignore
import sixthProject from '../public/sixthAssignment.jpg';
import Button from "../components/Button";
import { Link } from 'react-router-dom'

function Expertise() {
  return (
    <div>
      <div className='font-thin font-mono text-green-500'>
      <div className= 'flex flex-col items-center bg-[#0F172A]/100 bg-fixed min-h-screen'>
        <h1 className=' mb-3 mt-10 text-2xl underline'>My Expertise</h1>
        <h2 className=' mb-3 mt-16 text-lg underline'>My Soft Skills</h2>
          <div className='ml-20 grid grid-cols-4 gap-4 justify-content-center place-content-evenly h-40'>
            <div className='justify-self-center'>Creative Problem Solver</div>
            <div className='justify-self-center'>Independent Learner</div>
            <div className='justify-self-center'>Effective Communicator</div>
            <div className='justify-self-start'>Open Minded</div>
            <div className='justify-self-center'>Adaptable</div>
            <div className='justify-self-center'>Attention to Detail</div>
            <div className='justify-self-center'>Deeply Analytical</div>
            <div className='justify-self-start'>Team Player</div>
          </div>
        <h2 className=' mb-3 mt-10 text-lg underline'>My Hard Skills</h2>
        <div className='grid grid-cols-5 place-content-center h-60 gap-6'>
          <div className='justify-self-center'>
            <i className="fa-brands fa-html5 text-5xl"></i>
            <h3 className='text-xs ml-1'>HTML</h3>
          </div>
          <div className='justify-self-center'>
            <i className="fa-brands fa-css3 text-5xl"></i>
            <h3 className='ml-2 text-xs'>CSS</h3>
          </div>
          <div className='justify-self-center'>
            <i className="ml-1.5 fa-brands fa-bootstrap text-5xl"></i>
            <h3 className='text-xs'>Bootstrap</h3>
          </div>
          <div className='justify-self-center'>
            <i className="fa-brands fa-python text-5xl"></i>
            <h3 className='text-xs'>Python</h3>
          </div>
          <div className='justify-self-center'>
            <i className="ml-4 fa-brands fa-js text-5xl"></i>
            <h3 className='text-xs'>JavaScript</h3>
          </div> 
          <div className='justify-self-center'>
            <i className="fa-brands fa-react text-5xl"></i>
            <h3 className='ml-1.5 text-xs'>React</h3>
          </div>
          <div className='justify-self-center'>
            <i className="fa-solid fa-flask text-5xl"></i>
            <h3 className='ml-0.5 text-xs'>Flask</h3>
          </div>
          <div className='justify-self-center'>
            <i className="ml-1 fa-solid fa-wind text-5xl"></i>
            <h3 className='text-xs'>Tailwind</h3>
          </div>
          <div className='justify-self-center'>
            <i className="fa-solid fa-database text-5xl"></i>
            <h3 className='ml-3 text-xs'>SQL</h3>
          </div>
          <div className='justify-self-center'>
            <i className="fa-brands fa-square-github text-5xl"></i>
            <h3 className='ml-2.5 text-xs'>Git</h3>
          </div>
          </div>
        <h2 className=' mb-10 mt-10 text-lg underline'>My Past Projects</h2>
        <div className='grid grid-cols-3 mb-16 gap-16 place-content-center'>
           <div>
           <img src={firstProject} alt='Photo of my first Project'/>
            <Button>
              <div>
                <Link to='https://github.com/castle723/HTML-Assignment.git' className='font-mono text-green-500 text-sm hover:text-white hover:border-white'>My First HTML Project, A Website For A Photographer</Link>
              </div>
            </Button> 
           </div>
           <div>
           <img src={secondProject} alt='Photo of my second Project'/>
            <Button>
              <div>
                <Link to='https://github.com/castle723/Griot-theater.git' className='font-mono text-green-500 text-sm hover:text-white hover:border-white'>My Second HTML Project, A Website For A Theater</Link>
              </div>
            </Button> 
           </div>
           <div>
           <img src={thirdProject} alt='Photo of my third Project'/>
            <Button>
              <div>
                <Link to='https://github.com/castle723/Generic_gym.git' className='font-mono text-green-500 text-sm hover:text-white hover:border-white'>My Third HTML Project With JS, A Generic Website For A Gym</Link>
              </div>
            </Button> 
           </div>
           <div>
           <img src={fourthProject} alt='Photo of my fourth Project'/>
            <Button>
              <div>
                <Link to='https://github.com/castle723/flask-final.git' className='font-mono text-green-500 text-sm hover:text-white hover:border-white'>A Simple But Functioning Flask App Which Connects To An API And Creates A Token</Link>
              </div>
            </Button> 
           </div>
           <div>
           <img src={sixthProject} alt='Photo of my sixth Project'/>
            <Button>
              <div>
                <Link to='https://github.com/castle723/js-api-hw.git' className='font-mono text-green-500 text-sm hover:text-white hover:border-white'>A simple JS Application Which Calls Data From A Stored API</Link>
              </div>
            </Button> 
           </div>
           <div>
           <img src={fifthProject} alt='Photo of my fifth Project'/>
            <Button>
              <div>
                <Link to='https://github.com/castle723/React-car-inv.git' className='font-mono text-green-500 text-sm hover:text-white hover:border-white'>A Simple React App Which Allows You To Modify An API Within The App</Link>
              </div>
            </Button> 
           </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Expertise
