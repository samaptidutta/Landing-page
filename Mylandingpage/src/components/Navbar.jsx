import { Menu,X } from 'lucide-react'
import { useState } from 'react'
import React from 'react'
import logo from '../assets/mylogo.png'
import { navItems } from '../constants'



function Navbar() {

    const [mobileDraweOpen,setMobileDrawerOpen] = useState(false)

    const toggleNavbar = ()=>{
        setMobileDrawerOpen(!mobileDraweOpen)
    }


    return (
        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
            <div className="container  px-4 mx-auto relative text-sm ">
                <div className='flex justify-between items-center'>

                    {/* for logo and text */}
                    <div className='flex items-center flex-shrink-0'>
                        <img className='h-10 w-10 mr-2' src={logo}  alt="logo" />
                        <span className='text-xl tracking-tight'>VirtualR</span>
                    </div>
                    {/* for items  */}
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map((item,index)=>(
                            <li kye={index}>
                                <a href={item.href}>{item.label} </a>
                            </li>
                        ))}

                    </ul>

                    {/* for buttons */}
                    <div className="hidden lg:flex justify-center  space-x-12 items-center">
                        <a href="#" className='py-2 px-2 border rounded-lg'>Sign In</a>
                        <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create an account</a>
                    </div>

                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDraweOpen ? <X/> : <Menu/>}
                        </button>
                    </div>
                </div>
                {mobileDraweOpen && (
                    <div className=' sticky right-0 z-20 bg-neutral-900 w-full  p-12 flex flex-col justify-center items-center lg:hidden rounded-md mt-4 mb-0 backdrop-blur-lg'>
                    <ul>
                        {navItems.map((item,index)=>(
                            <li key={index} className='py-4'>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6  mt-6">
                        <a href="#" className='py-2 px-4 border rounded-md '>Sign In</a>
                        <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md '>Create an account</a>
                    </div>
            </div>
                ) }
                
            </div>
        </nav>
    )
}

export default Navbar
