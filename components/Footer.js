
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className="mt-4 text-center lg:text-left bg-gray-500 text-slate-100">
        <div className="flex justify-center items-center p-6 border-b border-gray-300">
            <div className="mr-12 hidden lg:block">
                <span>Get connected with us:</span>
            </div>
            <div className="flex justify-center text-xl">
                <a href="#!" className="mr-6 text-slate-100">
                    <FontAwesomeIcon icon="fa-brands fa-facebook"/>
                </a>            
                <a href="#!" className="mr-6 text-slate-100">
                    <FontAwesomeIcon icon="fa-brands fa-twitter"/>
                </a>
                <a href="#!" className="mr-6 text-slate-100">
                    <FontAwesomeIcon icon="fa-brands fa-google"/>
                </a>
                <a href="#!" className="mr-6 text-slate-100">
                    <FontAwesomeIcon icon="fa-brands fa-instagram"/>
                </a>
                <a href="#!" className="mr-6 text-slate-100">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin"/>
                </a>
            </div>
        </div>
        <div className="mx-6 py-10 text-center md:text-left">
            <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className='hidden lg:block'></div>
                <div className="">
                    <h6 className="
                        uppercase
                        font-semibold
                        mb-4
                        flex
                        items-center
                        justify-center
                        md:justify-start
                    ">
                    Tattva Hathayoga
                    </h6>
                    <p className='italic'>
                        Learn classical hathayoga in its purest form
                    </p>
                </div>
                <div>
                    <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                    Address
                    </h6>
                    <p className="flex items-center justify-center md:justify-start mb-4">
                        <a href="https://goo.gl/maps/LqLtZM9pnhWUG9A58" target="_blank">#793, Sthira Aasthi, Narayana Nagar, Doddakalsandra Stage 1, Bengaluru</a>
                    </p>
                    <p className="flex items-center justify-center md:justify-start mb-4">
                        <FontAwesomeIcon icon="fa-solid fa-envelope" className='mr-2'/>
                        <a href="mailto:tattvahathayoga@gmail.com">tattvahathayoga@gmail.com</a>
                    </p>
                    <p className="flex items-center justify-center md:justify-start mb-4">
                        <FontAwesomeIcon icon="fa-solid fa-phone" className='mr-2'/>
                        <a href="tel:+918099664362">+ 91 8099 66 4362</a>
                    </p>                
                </div>
            </div>
        </div>
        <div className="text-center p-6 bg-gray-600">
            <span>© 2022 Copyright: </span>
            <a className="text-slate-100 font-semibold" href="https://tailwind-elements.com/">Tattva Hathayoga</a>
        </div>
    </footer>
  )
}
