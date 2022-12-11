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

export async function getServerSideProps() {
  const programs = await getHathaPrograms();
  const events = await getUpcomingSessions("WP");
  
  return {
      props: {          
          programs: programs,
          events: events
      }
  }
}

export default function Home({ events, programs, message }) {
  
  const eventCards = events ? events.map((event) => {
    return {
      fromDateTime: new Date(event.fromDateTime),
      toDateTime: new Date(event.toDateTime),
      title: event.title,
      category: event.category,
      location: event.location
    }
  }).filter(event => event.fromDateTime > new Date())
    .sort((event1, event2) => event1.fromDateTime - event2.fromDateTime)
    .map((fe, index) => {
      return (
        <EventCard 
            key={index}
            fromDateTime={fe.fromDateTime}
            toDateTime={fe.toDateTime}
            title={fe.title}
            location={fe.location}
            category={fe.category} />
      );
    })
    : <Alert message={message} type="warning" />;
  
  
  const programCards = programs.map((program) => <ProgramCard {...program} /> );
  
  
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
          <p className='text-gray-600'>
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
        { events? <LinkButton btnClass='my-8 btn btn-primary' href="https://www.instamojo.com/pay_tattvahy/?ref=profile_bar" text="Register"/> : "" }
      </section>
      
      <section className='flex flex-col md:flex-row justify-start mt-10 md:px-32 pb-8 min-h-min bg-slate-100'>
        <div className='flex flex-col items-center mx-8 md:mx-32'>
          {/* Section Heading */}
          
          <h2 className='text-4xl md:text-6xl font-bold text-gray-600 my-8 pb-4 border-b-2 border-slate-200/0.5'>Programs Offered</h2>
          { programCards }

          <LinkButton 
            btnClass='my-8 btn btn-primary' 
            href="https://wa.me/918099664362?text=Namaskaram%21%0A%0AI%20want%20to%20start%20practicing%20Hathayoga.%20Please%20guide%20me.%0A%0AThank%20you%2C%0A" 
            text="Request Class"
            icon="fa-brands fa-whatsapp"
          />        
        </div>
      </section>
      
      <section className='flex flex-col justify-start mt-10 mx-12 md:mx-64'>
        <div className='flex flex-col items-center'>
          {/* Section Heading */}
          <h2 className='text-4xl md:text-6xl font-bold text-gray-600 my-8 pb-4 border-b-2 border-slate-200/0.7'>About Ramya</h2>
        </div>
        <div className='flex flex-col md:flex-row md:gap-4 md:items-start'>
          <div className='md:basis-1/4 rounded-xl overflow-hidden shadow-xl shadow-slate-300'>
            <img src="/images/ramya__2.jpg" alt="Ramya" className="object-cover object-center w-full h-full shadow-2"/>
          </div>
          <div className="md:basis-3/4 text-center text-gray-700 mt-8 md:mt-0 leading-relaxed">
            <p>Back in 2016, 
              <span className='text-slate-900 font-bold text-xl'> Ramya </span>  was an IT professional when she attended her first Hatha Yoga classes in Isha Foundation, Coimbatore.  Since then, there was no looking back for her.  If there is one thing she is devoted to, that is her Yoga practices.  She attended other advanced Programs in the IshaYoga Center, till she came across Hatha Yoga Teacher Training Program.
  At once, she decided that that is what she wanted to do. </p>
            <p className='mt-4'>In 2018, she attended a 21 week, 1750 hrs long teacher training program.  In her own words, those were one of the best days of her life and she wouldn’t exchange it with anything; most trans-formative 21-weeks. When she went there, getting certified was least of her worries.  All she wanted was to soak in her practices, explore more of what this is. </p>
            <p className='mt-4'>Since her training, she has taken various Online/ Offline Yoga programs for kids and Adults across India and has touched so many lives through these practices. . </p>
            <p className='mt-4 font-bold text-lg'>Her mission is to make 
              <span className="mx-1 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block">
                <span className="relative text-white uppercase"> Yoga for all </span>
              </span> a reality!
            </p>
            <p className='mt-4'>Start your journey today and experience the benefits for yourself.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
