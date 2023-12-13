import { motion } from "framer-motion";
import AnimText from "../components/AnimateText";
import Button from "../components/Button";
import { Link } from 'react-router-dom'

function Home() {
  return (
   <div className='flex flex-col flex-row justify-center mx-auto bg-[#0F172A]/100 bg-fixed min-h-screen'>
        <motion.span className="mb-12 flex justify-center font-mono font-thin text-3xl text-green-500">
          <AnimText delay={1} />
        </motion.span>
        <Button>
            <div>
                <Link to='/About' className='px-6 py-3 border border-m-8 rounded-full border-green-500 font-mono text-green-500 text-sm hover:text-white hover:border-white'>Click Here To Learn About Me!</Link>
            </div>
        </Button> 
   </div>
  )
}

export default Home
