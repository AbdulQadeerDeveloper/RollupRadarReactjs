import React from 'react'
import Switcher from './Switcher'
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineGithub, AiFillFacebook } from "react-icons/ai"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { AppBar } from '@material-ui/core';

function Footer() {
    return (
        <footer className='bg-footer-dark'>
            <div className='bg-030712 text-center py-4 px-0'>
                <div className='w-140 max-w-full my-0 mx-auto py-0 px-4'>
                    <i className='text-e15241 mr-1'>🚀</i>
                    <span className='text-eee text-sm'>
                    RollupRadar gives you useful insights and analytics on L1, L2 and L3 Rollups in Blockchain.
                    </span>
                </div>
            </div>

            <div className='rounded-div mt-8 w-ful text-white hidden lg:block'>
                <div className='my-5 grid gap-2 md:grid-cols-4 sm:grid-cols-3'>
                    <div>
                        <h1 className='text-2xl font-semibold'>RollupRadar</h1>
                        <li className='text-4a4a4a dark:text-eee'>
                                    <a href='javascript:void(0);' className='text-sm font-medium hover:text-green-hover'><button className='text-xs px-3 py-1 bg-slate-700 rounded-lg'>+ List your Rollup</button></a>
                                </li>
                        </div>
                    <div>
                        <h2 className='text-xl font-semibold mb-2'>Docs</h2>
                        <ul className=' text-gray-400'>
                        <li className='text-4a4a4a dark:text-eee'>
                                    <a href='https://rollupradar.gitbook.io/' className='text-sm font-medium hover:text-green-hover'>Knowledge base</a>
                                </li>
                       
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold mb-2'>Partner with us</h2>
                        <ul className=' text-gray-400'>
                            <li><li className='text-4a4a4a dark:text-eee'>
                            <a href='mailto:partnership@rollupradar.xyz' className='text-white text-xs'>Partner with us</a>
                                </li></li>
                           
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-lg font-semibold'>암호화폐 최신 정보를 원하세요?</h2>
                        <div>
                            <input className='py-1 outline-none text-black text-sm rounded-lg indent-3 my-2 bg-slate-200' type="email" placeholder='이메일 입력' />
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div className='flex justify-between col-start-2 col-end-4 md:mt-4 sm:mt-9 mt-[68px]'>
                        <AiFillFacebook size={20} />
                        <AiOutlineGithub size={20} />
                        <AiOutlineInstagram size={20} />
                        <AiOutlineTwitter size={20} />
                    </div>
                </div>
                <div className='flex justify-center pb-2 text-xs'>
                    <small>© 2024 RollupRadar. All Rights Reserved.</small>
                </div>
            </div>

            <div className='py-2 1lg:hidden'>
                <div className='flex justify-center items-center'>
                    <a href='https://forms.gle/PjEsUKf4Lb7mziPU6' className='text-white text-xs'><button className='text-xs px-3 py-1 bg-slate-700 rounded-lg'>+ List your Rollup</button></a>
                    
                    <span className='mx-1 text-4a4a4a'>•</span>
                    <a href='https://rollupradar.gitbook.io/untitled/' className='text-white text-xs'>docs</a>
                    <span className='mx-1 text-4a4a4a'>•</span>
                    <a href='mailto:partnership@rollupradar.xyz' className='text-white text-xs'>Partner with us</a>
                </div>
                <div className='flex justify-center items-center mt-2 text-xs text-4a4a4a'>
                    © 2024 RollupRadar. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer