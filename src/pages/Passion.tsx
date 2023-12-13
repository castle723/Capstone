import Button from '../components/Button'
import { Link } from 'react-router-dom'

function Passion() {
  return (
    <div className= 'flex flex-col items-center bg-[#0F172A]/100 bg-fixed min-h-screen'>

      <h1 className=' mb-3 mt-10 font-thin text-xl font-mono text-green-500 underline'> My Passion</h1>
      <p className='ml-32 mr-32 mb-8 text-center font-thin text-sm font-mono text-green-500'> 
        I know all too well the stress and frustration that a user feels when software of any kind is 
        not working as intended. Which is why more than anything, I want to develop projects that
        people enjoy using. Not just because they look nice and fulfill an important purpose (though I want
        that too) but also because they dont have to spend three hours googling fixes before they can 
        use the product.
      </p>
      <p className='ml-32 mr-32 mb-8 text-center font-thin text-sm font-mono text-green-500'> 
        Of course perfection is unattainable, but that wont stop me from doing my best to 
        always write impeccable code. I'm only just starting my career as a software developer, and one day 
        my dream is to help start a worker co-op game dev studio, one that puts user enjoyment and developer 
        expertise over profit margins and corporate oversign. But for now, I'm more than content to work 
        somewhere I can produce high quality software and develop my skills and experience.
      </p>
      <Button>
            <div>
                <Link to='/Expertise' className='px-6 py-3 border border-m-8 rounded-full border-green-500 font-mono text-green-500 text-sm hover:text-white hover:border-white'>Click Here To Learn About My Expertise!</Link>
            </div>
      </Button>
    </div>
  )
}

export default Passion
