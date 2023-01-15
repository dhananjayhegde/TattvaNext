import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LinkButton from '../components/LinkButton'
import EventCard from '../components/EventCard'
import getUpcomingSessions from '../utils/HathaUtils'
import { getHathaPrograms } from '../utils/HathaUtils'
import Alert from '../components/Alert'
import ProgramCard from '../components/ProgramCard'
import generateEventCards from '../utils/Utils'
import TeacherRamya from '../components/TeacherRamya'
import WhatsappButton from '../components/WhatsappButton'

export async function getStaticProps() {

  const [programs, events] = await Promise.all([
    getHathaPrograms(),
    getUpcomingSessions("WP")
  ])
  
  return {
      props: {          
          programs: programs,
          events: events
      },
      revalidate: 60
  }
}

export default function Home({ events, programs, message }) {
    
  const { error: programError } = programs
  const { error: eventsError } = events  
  
  const eventCards = generateEventCards( events );
  const programCards = programs.programs.map((program) => <ProgramCard key={program.id} {...program} /> );
  
  
  return (
    <div className='flex flex-col min-h-screen'>
      
      {/* Hero section */}      
      <section className='flex flex-col md:flex-row md:flex-wrap justify-start md:items-center mt-24 mx-8 md:mx-64'>
        <div className='flex flex-col justify-end content mb-4 md:basis-1/2'>
          <p className='text-gray-500 font-semibold text-lg md:text-4xl'>
            Yoga is not what you do
          </p>
          <h2 className='text-gray-600 font-bold text-4xl md:text-6xl'>
            It is what you <span className='text-6xl md:text-8xl'>become!</span>
          </h2>
          <p className='text-gray-600 mt-4'>
            We conduct both week-long workshops and weekend practice sessions.  Choose what suits your need best.
          </p>
          <LinkButton btnClass='my-8 btn btn-primary hidden md:block' href="https://www.instamojo.com/pay_tattvahy/?ref=profile_bar" text="Class Schedule"/>             
        </div>
        <img src="/images/ramya__1.png" alt="Logo" className="object-contain md:w-1/3 md:h-auto md:basis-1/2"/>
        <LinkButton btnClass='my-8 btn btn-primary md:hidden' href="https://www.instamojo.com/pay_tattvahy/?ref=profile_bar" text="Class Schedule"/>
      </section>
      
      {/* Upcoming Programs section */}
      <section className='flex flex-col md:flex-row md:flex-wrap md:gap-4 justify-start md:justify-center mt-10 mx-8 md:mx-32 min-h-min'>
        
        { /* Event cards */ }
        { eventCards }
        
        <div className='hidden md:block break-row'></div>
        { !eventsError? <LinkButton btnClass='my-8 btn btn-primary' href="https://www.instamojo.com/pay_tattvahy/?ref=profile_bar" text="Register"/> : "" }
      </section>
      
      <section className='flex flex-col md:flex-row justify-start mt-10 md:px-32 pb-8 min-h-min bg-slate-100'>
        <div className='flex flex-col items-center mx-8 md:mx-32'>
          {/* Section Heading */}
          
          <h2 className='text-4xl md:text-6xl font-bold text-gray-600 my-8 pb-4 border-b-2 border-slate-200/0.5'>Programs Offered</h2>
          { programCards }
          
          <WhatsappButton />
        </div>
      </section>

      <TeacherRamya />
    </div>
  )
}
