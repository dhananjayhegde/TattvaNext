
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer class="mt-4 text-center lg:text-left bg-gray-500 text-slate-100">
        <div class="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
            <div class="mr-12 hidden lg:block">
            <span>Get connected with us:</span>
            </div>
            <div class="flex justify-center text-xl">
                <a href="#!" class="mr-6 text-slate-100">
                    <FontAwesomeIcon icon="fa-brands fa-facebook"/>
                </a>            
                <a href="#!" class="mr-6 text-slate-100">
                    <FontAwesomeIcon icon="fa-brands fa-twitter"/>
                </a>
                <a href="#!" class="mr-6 text-slate-100">
                    <FontAwesomeIcon icon="fa-brands fa-google"/>
                </a>
                <a href="#!" class="mr-6 text-slate-100">
                    <FontAwesomeIcon icon="fa-brands fa-instagram"/>
                </a>
                <a href="#!" class="mr-6 text-slate-100">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin"/>
                </a>
            </div>
        </div>
        <div class="mx-6 py-10 text-center md:text-left">
            <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="">
                <h6 class="
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
                    <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                    Address
                    </h6>
                    <p class="flex items-center justify-center md:justify-start mb-4">
                        <a href="https://goo.gl/maps/LqLtZM9pnhWUG9A58" target="_blank">#793, Sthira Aasthi, Narayana Nagar, Doddakalsandra Stage 1, Bengaluru</a>
                    </p>
                    <p class="flex items-center justify-center md:justify-start mb-4">
                        <FontAwesomeIcon icon="fa-solid fa-envelope" className='mr-2'/>
                        <a href="mailto:tattvahathayoga@gmail.com">tattvahathayoga@gmail.com</a>
                    </p>
                    <p class="flex items-center justify-center md:justify-start mb-4">
                        <FontAwesomeIcon icon="fa-solid fa-phone" className='mr-2'/>
                        <a href="tel:+918099664362">+ 91 8099 66 4362</a>
                    </p>                
                </div>
            </div>
        </div>
        <div class="text-center p-6 bg-gray-600">
            <span>© 2022 Copyright: </span>
            <a class="text-slate-100 font-semibold" href="https://tailwind-elements.com/">Tattva Hathayoga</a>
        </div>
    </footer>
  )
}
