import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function NavBar({}){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenuButton = (oEvent) => {
        setMenuOpen(!menuOpen);
    }
    
    const renderMobileMenuButton = () => {
        if(menuOpen){
            return <FontAwesomeIcon icon='fa-solid fa-xmark' onClick={toggleMenuButton} />
        } else {
            return <FontAwesomeIcon icon='fa-solid fa-bars' onClick={toggleMenuButton}/>
        }
    }
    
    
    return (
        <>
            <div className='sticky top-0 z-40 w-full inline-flex justify-center rounded-br-lg rounded-bl-lg items-center bg-gradient-to-r from-blue-500 to-purple-600 text-slate-100 font-semibold'>
                <FontAwesomeIcon className='mr-2 my-2 text-2xl' icon={['fab', 'whatsapp']}/>
                <a href='https://wa.me/918099664362'>Contact Me</a>
            </div>
            <nav className="z-10 flex justify-between w-4/5 bg-[#292826] text-gray-200 font-bold px-4 py-4 rounded-lg m-auto relative top-10">
                <div className="logo-container relative">
                    <figure className="absolute -left-8 -top-8 p-2 w-20 h-20 overflow-hidden rounded-full border border-4 border-slate-100 shadow-lg bg-[#292826] shadow-grey-500/40">
                        <img src="/tattva_logo__man-only-orange-black-bg.png" alt="Logo" className="object-cover"/>
                    </figure>
                </div>
                <div className='md:hidden'>
                    {renderMobileMenuButton()}
                </div>                
                <ul className="hidden md:flex">
                    <li className='mx-4 my-2 md:my-0'>
                        <Link href='/' >Home</Link>
                    </li>
                    <li className='mx-4 my-2 md:my-0'>
                        <Link href='https://www.instamojo.com/pay_tattvahy/?ref=profile_bar'>Upcoming Programs</Link>
                    </li>
                    {/* <li className='mx-4 my-2 md:my-0'>
                        <Link href='/projects' >Hatha Yoga</Link>
                    </li>
                    <li className='mx-4 my-2 md:my-0'>
                        <Link href='/projects' >About</Link>
                    </li>
                    <li className='mx-4 my-2 md:my-0'>
                        <Link href='/projects' >Contac Us</Link>
                    </li> */}
                </ul>                
            </nav>
            {/* 
                Mobile Menu - Full screen - this has to be outside the nav element for z-index to work 
                Otehrwise, the stacking order of this is always less than that of the sticky bar 
                due to nav's z-index being less than that of sticky bar

                sticky bar  - 40
                nav bar     - 10
                    mobile menu - 10.50

                To avoid this, mobile menu is kept outside nav
            */}
            <div className={`${menuOpen ? "": "hidden"} fixed top-0 left-0 w-screen h-screen z-50 bg-gray-100/0.5 backdrop-blur-3xl bg-opacity-60 flex flex-col items-end w-full md:hidden text-slate-800 font-bold underline p-8 text-2xl`}>
                <FontAwesomeIcon icon='fa-solid fa-xmark' onClick={toggleMenuButton} />
                <ul className='my-8 leading-loose'>
                    <li className='mx-4 my-2 md:my-0'>
                        <Link href='/' >Home</Link>
                    </li>
                    <li className='mx-4 my-2 md:my-0'>
                        <Link href='https://www.instamojo.com/pay_tattvahy/?ref=profile_bar' >Upcoming Programs</Link>
                    </li>
                    {/* <li className='mx-4 my-2 md:my-0'>
                        <Link href='/projects' >Hatha Yoga</Link>
                    </li>
                    <li className='mx-4 my-2 md:my-0'>
                        <Link href='/projects' >About</Link>
                    </li>
                    <li className='mx-4 my-2 md:my-0'>
                        <Link href='/projects' >Contac Us</Link>
                    </li> */}
                </ul>
            </div>
        </>
    )
}