import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { useAuth0 } from '@auth0/auth0-react';
function Navbar() {

    const [isVisible, setIsVisible] = useState(false)
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };

    const dropDown = () => {
        setIsVisible(!isVisible)
    };

    const clicked = () => {
        setIsVisible(false);
    };

    return (
        <nav className='flex items-center justify-between flex-wrap bg-[#0F172A]/95 p-4'>
            <div className='flex items-center flex-shrink-0 text-green-500 mr-6'>
                <Link to='/' className='font-mono font-thin text-xl tracking-tight'>Jacob's Portfolio</Link>
            </div>
            <div className='block'>
                <button onClick={dropDown} className='flex items-center px-3 py-2 text-green-500 border rounded border-green-400 hover:text-white hover:border-white'>
                    <i className='fas fa-bars'></i>
                </button>
            </div>
            { isVisible ? (
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm flex flex-row justify-center lg:flex-grow">
                    <Button className='p-3 m-5 justify-center'>
                        <div>
                            <Link to='/' className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0 font-mono font-thin text-green-400  border rounded border-transparent hover:text-white mr-4'>Home</Link>
                        </div>
                    </Button>
                    <Button className='p-3 m-5 justify-center'>
                        <div>
                            <Link to='/About' className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0 font-mono font-thin text-green-400 hover:text-white mr-4'>About Me</Link>
                        </div>
                    </Button>
                    <Button className='p-3 m-5 justify-center'>
                        <div>
                            <Link to='/Passion' className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0 font-mono font-thin text-green-400 hover:text-white mr-4'>My Passion</Link>
                        </div>
                    </Button>
                    <Button className='p-3 m-5 justify-center'>
                        <div>
                            <Link to='/Expertise' className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0 font-mono font-thin text-green-400 hover:text-white mr-4'>My Expertise</Link>
                        </div>
                    </Button>
                    <Button className='p-3 m-5 justify-center'>
                        <div>
                            <Link to='/Contact' className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0 font-mono font-thin text-green-400 hover:text-white mr-4'>Contact Me</Link>
                        </div>
                    </Button>
                    <Button className='p-3 m-2 justify-center'>
                            <div>
                                <Link to='/dashboard' onClick={ clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4'>
                                    Dashboard
                                </Link>
                            </div>
                        </Button>
                        {
                            !isAuthenticated ? 
                            <Button className='p-2 m-5 justify-center'>
                                <div>
                                    <Link to="/" onClick={signInOnClick} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-white hover:text-white'>
                                        Login
                                    </Link>
                                </div>
                            </Button>
                            :
                            <Button className='p-3 m-5 justify-center'>
                                <div>
                                    <Link to="/" onClick={signOutOnClick} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'>
                                        Sign Out
                                    </Link>
                                </div>
                            </Button>
                        }
                </div>
            </div>
            ) : (
            <></>
            ) }
        </nav>
    )  
}

export default Navbar