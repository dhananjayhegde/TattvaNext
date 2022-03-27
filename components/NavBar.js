import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavBar({}){
    return (
        <>
            <div className='sticky top-0 z-40 w-full inline-flex justify-center rounded-br-lg rounded-bl-lg items-center bg-gradient-to-r from-blue-500 to-purple-600 text-slate-100 font-semibold'>
                <FontAwesomeIcon className='mr-2 my-2 text-2xl' icon={['fab', 'whatsapp']}/>
                <a href='https://wa.me/918099664362'>Contact Me</a>
            </div>
            <nav className="z-10 flex justify-between w-4/5 bg-slate-800 text-gray-200 font-bold px-4 py-4 rounded-lg m-auto relative top-10">
                <div className="logo-container relative">
                    <figure className="absolute -left-8 -top-8 w-20 h-20 overflow-hidden rounded-full border border-4 border-slate-100 shadow-lg shadow-grey-500/40">
                        <img src="/logo.png" alt="Logo" className="object-cover"/>
                    </figure>
                </div>
                <ul className='flex'>
                    <li className='mx-4 hidden md:block'>
                        <Link href='/' >Home</Link>
                    </li>
                    <li className='mx-4'>
                        <Link href='/about' >Upcoming Programs</Link>
                    </li>
                    <li className='mx-4  hidden md:block'>
                        <Link href='/projects' >Hatha Yoga</Link>
                    </li>
                    <li className='mx-4  hidden md:block'>
                        <Link href='/projects' >About</Link>
                    </li>
                    <li className='mx-4  hidden md:block'>
                        <Link href='/projects' >Contac Us</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}