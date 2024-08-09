"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
    const [showCollapsibleSidebar, setShowCollapsibleSidebar] = useState(false)
    const [hamburgerImg, setHamburgerImg] = useState<string>('/hamburger.svg')
    const hamburgerClick = () => {
        if (hamburgerImg === '/hamburger.svg') {
            setHamburgerImg('/close.svg')
        }
        else {
            setHamburgerImg('/hamburger.svg')
        }
        setShowCollapsibleSidebar(!showCollapsibleSidebar);

    }

    return (
        <div className='bg-[#121e2c] flex flex-row justify-between px-2 w-screen fixed top-0 left-0 z-100'>
            <h3 className='m-4 z-100'>
                <Link href={'/'}>
                    <Image src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80735fd2fd0810a24fba_funngro-logo.svg" loading="lazy" alt="" width={175} height={48} />
                </Link>
            </h3>
            <button className='md:hidden hamburgerBtn transition-all z-100' onClick={hamburgerClick} >
                <Image src={hamburgerImg} className='hamburgerImg invert z-100' height={24} width={24} alt='hamburger icon'/>
            </button>

            {showCollapsibleSidebar && <div className="md:hidden absolute right-0 mt-12 z-100 bg-dark-black z-100" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2 bg-dark-black w-screen z-100">
                    <Link href="/" className="block rounded-md px-5 py-2 text-white z-100 font-medium  hover:bg-gray-700 hover:text-white">
                        {/* <button onClick={() => setShowDropdown(!showDropdown)} className='inline-flex flex-row items-center text-black'> */}
                        <span>Teen</span>
                        {/* <svg className="w-2.5 h-2.5 ms-3 flex justify-center items-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg> */}
                        {/* </button> */}
                    </Link>
                    <Link href="/company" className="block rounded-md px-5 py-2 text-white font-medium z-100 hover:bg-gray-700 hover:text-white">
                        Company
                    </Link>
                    <a href="#" className="block rounded-md px-5 py-2 text-white z-100 font-medium  hover:bg-gray-700 hover:text-white">
                        Parent
                    </a>
                    <div className='flex gap-4 py-2 px-5 z-100'>
                    <a href="https://play.google.com/store/apps/details?id=com.wishbanc.funngro" className="navbar1_link icon z-100 w-inline-block">
                        <Image src='/androidIcon.svg' className='invert z-100' height={24} width={24} alt='android icon'/>
                    </a>
                    <a href="https://apps.apple.com/in/app/funngro/id1579361075" className="navbar1_link icon w-inline-block z-100">
                        <Image src='/apple.svg' className='invert z-100' height={24} width={24} alt='app store apple'/>
                    </a>
                    </div>
                    <div className="bg-[#47c480] w-52 h-12 inline-flex justify-center items-center rounded-2xl mx-5 py-2 z-100">
                        <a href="https://teenlancer.funngro.com/pages/login/" target="_blank" className="inline-flex z-100 gap-3 bg-[#47c480] justify-center items-center">
                            <div className='text-white z-100'>Company Login</div>
                            <Image src='/rightarrow.svg' className='invert z-100' height={24} width={24} alt='right arrow' />
                        </a>
                    </div>
                </div>
            </div>}

            {<ul className='flex flex-row z-100 text-white gap-6 m-4 px-2 md:justify-between justify-around items-center hidden w-full md:inline-flex md:w-auto'>
                <li className='hover:font-bold transition-all duration-100 mx-3 z-100'>
                    <Link className='inline-flex items-center z-100' href={'/'}>
                        Teen
                        {/* <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg> */}
                    </Link>
                </li>
                <li className='hover:font-bold transition-all duration-100 mx-3 z-100'>
                    <Link href={'/company'} className='z-100'>
                        Company
                    </Link>
                </li>
                <li className='hover:font-bold transition-all duration-100 mx-3 z-100'>
                    <Link href={'#'} className='z-100'>
                        Parent
                    </Link>
                </li>
                <li className='hover:font-bold transition-all duration-100 mx-3 z-100'>
                    <a href="https://play.google.com/store/apps/details?id=com.wishbanc.funngro" className="z-100 navbar1_link icon w-inline-block">
                        <Image src='/androidIcon.svg' className='invert z-100' height={24} width={24} alt='andorid icon'/>
                    </a>
                </li>
                <li>
                    <a href="https://apps.apple.com/in/app/funngro/id1579361075" className="navbar1_link z-100 icon w-inline-block">
                        <div className="nav-cta-icon w-embed z-100">
                            <Image src='/apple.svg' className='invert z-100' height={24} width={24} alt='app store icon'/>
                        </div>
                    </a>
                </li>
                <li>
                    <div className="bg-[#47c480] z-100 w-52 h-12 inline-flex justify-center items-center rounded-2xl">
                        <a href="https://teenlancer.funngro.com/pages/login/" target="_blank" className="inline-flex gap-3 bg-[#47c480] z-100 justify-center items-center">
                            <div className='z-100'>Company Login</div>
                            <Image src='/rightarrow.svg' className='invert z-100' height={24} width={24} alt='right arrow'/>
                        </a>
                    </div>
                </li>
            </ul>}

            {/* <div id="dropdown" className={`z-10 ${showDropdown ? "" : "hidden"} bg-white divide-y divide-gray-100 absolute rounded-lg shadow w-44 dark:bg-gray-700 mt-11 xl:right-[16%] lg:right-[16%]  md:right-[24%] right-[20%]`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href='https://codingservices.in/sandbox' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sandbox</a>
                    </li>
                    <li>
                        <a href="https://todo-qudaes5wn-agrim-agarwals-projects.vercel.app/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Todo App</a>
                    </li>
                    <li>
                        <a href="https://spotifyclonemadebyme.freewebhostmost.com/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Spotify Clone</a>
                    </li>
                </ul>
            </div> */}
        </div>
    )
}

export default Navbar