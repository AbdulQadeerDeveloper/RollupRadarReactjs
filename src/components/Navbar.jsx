import React, { useEffect } from 'react'
import logo from '../Asset/logo01.png';
import logoDark from '../Asset/logo01.png';
import { CgProfile } from "react-icons/cg"
import { Link, useNavigate } from "react-router-dom"
import Switcher from './Switcher'
import MobileMenu from './MobileMenu'
import { UserAuth } from "../context/AuthContext"
import useAxios from '../hooks/useAxios';
import { separator } from '../Utils/utils';
import { useAppProvider } from '../AppContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTurnUp } from "@fortawesome/free-solid-svg-icons";
import Accordion from '../toggle/toggle';


function Navbar() {
    const { currency, setCurrency, symbol, isDark, toggleDark } = useAppProvider();
    const { user, logout } = UserAuth()
    const navigate = useNavigate()

    const { response } = useAxios('global')

    const handleSignOut = async () => {
        try {
            await logout()
            navigate("/signin")
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <header>
            

            <div className='border-b'>
                <div className='rounded-div flex justify-between items-center h-20 font-semibold'>
                    <div className='flex items-center'>
                        <Link to="/" className='flex items-center'>
                            <img src={logo} width="95px" className='mr-2' /><h1 className='text-xl'></h1>
                        </Link>
                        <div className='nav-menu ml-6 sm:hidden'>
                            <ul className='flex'>
                                <li className='pr-6 text-4a4a4a dark:text-eee'>
                                    <a href='javascript:void(0);' className='text-sm font-medium hover:text-green-hover '>Explorer</a>
                                </li>
                                <li className='pr-6 text-4a4a4a dark:text-eee'>
                                    <a href='javascript:void(0);' className='text-sm font-medium hover:text-green-hover'>RaaS Providers</a>
                                </li>
                                <li className='pr-6 text-4a4a4a dark:text-eee'>
                                    <a href='javascript:void(0);' className='text-sm font-medium hover:text-green-hover'>Rollup SDKs</a>
                                </li>
                                <li className='pr-6 text-4a4a4a dark:text-eee'>
                                    <a href='https://rollupradar.gitbook.io/untitled/' className='text-sm font-medium hover:text-green-hover'>Docs</a>
                                </li>
                                <li className='text-4a4a4a dark:text-eee'>
                                    <a href='https://forms.gle/PjEsUKf4Lb7mziPU6' className='text-sm font-medium hover:text-green-hover'>+ List your rollup</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div>
                           
                        </div>

                        <div className='md:block hidden mr-6'>
                            <Switcher />
                        </div>

                        <div className='md:block hidden'>
                            {user?.email ? (
                                <div className='flex'>
                                    <Link to="/account">
                                        <CgProfile className='cursor-pointer mr-2' size={26} />
                                    </Link>
                                    <button onClick={handleSignOut}>Log Out</button>
                                </div>

                            ) : (
                                <Link to="/signin">
                                    Connect
                                </Link>)}
                        </div>
                        <div className='md:hidden block'>
                            <MobileMenu signOut={handleSignOut} user={user} />
                        </div>
                    </div>
                </div>


            </div>
        </header>
    )
}

export default Navbar