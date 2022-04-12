import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LinkButton from '../components/LinkButton'

export default function Home() {
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
        <div className='card-1 flex min-h-24 md:w-80 border-2 border-gray-200/0.5 rounded-lg my-4 py-2 shadow-lg shadow-slate-100/0.7'>
          <div className='flex flex-col justify-center items-center basis-1/4 mx-1 p-2 border-r-2 border-gray-100/0.2'>
            <p className='text-lg font-bold text-gray-400 uppercase'>Apr</p>
            <h3 className='text-4xl font-bold text-gray-600'>18</h3>
          </div>
          <div className='flex flex-col justify-start basis-3/4 mx-1 p-2'>
            <h2 className='text-2xl font-bold text-gray-600'>Yogasanas</h2>
            <p className='text-sm text-gray-500 mt-2'>Apr 18 - 22 (Mon-Fri)</p>
            <p className='text-sm text-gray-500'>6:30am - 8:30am</p>
            <p className='text-xs text-gray-500 mt-2'>Sthira Asthi, Doddakalsandra</p>
          </div>
        </div>
        <div className='card-1 flex min-h-24 md:w-80 border-2 border-gray-200/0.5 rounded-lg my-4 py-2 shadow-lg shadow-slate-100/0.7'>
          <div className='flex flex-col justify-center items-center basis-1/4 mx-1 p-2 border-r-2 border-gray-100/0.2'>
            <p className='text-lg font-bold text-gray-400 uppercase'>Apr</p>
            <h3 className='text-4xl font-bold text-gray-600'>25</h3>
          </div>
          <div className='flex flex-col justify-start basis-3/4 mx-1 p-2'>
            <h2 className='text-2xl font-bold text-gray-600'>Angamardana & Pranayama</h2>
            <p className='text-sm text-gray-500 mt-2'>Apr 25 - 29 (Mon-Fri)</p>
            <p className='text-sm text-gray-500'>6:30am - 8:30am</p>
            <p className='text-xs text-gray-500 mt-2'>Sthira Asthi, Doddakalsandra</p>
          </div>
        </div>
        <div className='card-1 flex min-h-24 md:w-80 border-2 border-gray-200/0.5 rounded-lg my-4 py-2 shadow-lg shadow-slate-100/0.7'>
          <div className='flex flex-col justify-center items-center basis-1/4 mx-1 p-2 border-r-2 border-gray-100/0.2'>
            <p className='text-lg font-bold text-gray-400 uppercase'>Apr</p>
            <h3 className='text-4xl font-bold text-gray-600'>23</h3>
          </div>
          <div className='flex flex-col justify-start basis-3/4 mx-1 p-2'>
            <h2 className='text-2xl font-bold text-gray-600'>Bhutashuddhi</h2>
            <p className='text-sm text-gray-500 mt-2'>Apr 23</p>
            <p className='text-sm text-gray-500'>6:30am - 8:00am</p>
            <p className='text-xs text-gray-500 mt-2'>Sthira Asthi, Doddakalsandra</p>
          </div>
        </div>
        <div className='hidden md:block break-row'></div>
        <LinkButton btnClass='my-8 btn btn-primary' href="https://www.instamojo.com/pay_tattvahy/?ref=profile_bar" text="Register"/>                    
      </section>
      
      
      <section className='flex flex-col md:flex-row justify-start mt-10 md:px-32 pb-8 min-h-min bg-slate-100'>
        <div className='flex flex-col items-center mx-8 md:mx-32'>
          {/* Section Heading */}
          <h2 className='text-4xl md:text-6xl font-bold text-gray-600 my-8 pb-4 border-b-2 border-slate-200/0.5'>Programs Offered</h2>
          
          {/* Cards */}        
          
          <div className='card-2 flex flex-col md:flex-row min-h-24 w-full rounded-lg my-4 py-4 md:py-8 px-4 md:px-8 overflow-hidden bg-white shadow-lg shadow-slate-100/0.5'>
            <div className='flex flex-col justify-center items-center basis-1/4'>
              <img src="/images/surya-kriya.png" alt="Surya Kriya" className="object-cover object-center w-full h-full drop-shadow-2"/>
            </div>
            <div className='flex flex-col justify-start basis-3/4 mx-1 p-2 mx-2'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-700'>Surya Kriya</h2>
              <p className='text-sm md:text-base italic text-gray-500 my-2'>
                Surya Kriya is a potent 21-step yogic practice of tremendous antiquity, designed as a holistic process for health and inner wellbeing.
              </p>
              <ul className='text-sm md:text-base text-gray-600 mt-2 list-disc list-inside'>
                <li>Develops mental clarity & focus</li>
                <li>Remedies weak constitution</li>
                <li>Boosts vigor & viatlity</li>
              </ul>
            </div>
          </div>

          <div className='card-2 flex flex-col md:flex-row min-h-24 w-full rounded-lg my-4 py-4 md:py-8 px-4 md:px-8 overflow-hidden bg-white shadow-lg shadow-slate-100/0.5'>
            <div className='flex flex-col justify-center items-center basis-1/4 mx-2'>
              <img src="/images/angamardana.png" alt="Angamardana" className="object-cover object-center w-full h-full drop-shadow-2"/>
            </div>
            <div className='flex flex-col justify-start basis-3/4 mx-1 p-2'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-700'>Angamardana</h2>
              <p className='text-sm md:text-base italic text-gray-500 my-2'>
                Surya Kriya is a potent 21-step yogic practice of tremendous antiquity, designed as a holistic process for health and inner wellbeing.
              </p>
              <ul className='text-sm md:text-base text-gray-600 mt-2 list-disc list-inside'>
                <li>Strengths the spine</li>
                <li>Builds physical strength</li>
                <li>Prepares the body for Hatha Yoga</li>
              </ul>
            </div>
          </div>

          <div className='card-2 flex flex-col md:flex-row  min-h-24 w-full rounded-lg my-4 py-4 md:py-8 px-4 md:px-8 overflow-hidden bg-white shadow-lg shadow-slate-100/0.5'>
            <div className='flex flex-col justify-center items-center basis-1/4 mx-2'>
              <img src="/images/yogasanas.png" alt="Yogasanas" className="object-cover object-center w-full h-full drop-shadow-2"/>
            </div>
            <div className='flex flex-col justify-start basis-3/4 mx-1 p-2'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-700'>Yogasanas</h2>
              <p className='text-sm md:text-base italic text-gray-500 my-2'>
                Surya Kriya is a potent 21-step yogic practice of tremendous antiquity, designed as a holistic process for health and inner wellbeing.
              </p>
              <ul className='text-sm md:text-base text-gray-600 mt-2 list-disc list-inside'>
                <li>Relieves from chronic health issues</li>
                <li>Stabilizes body & mind</li>
                <li>Deceleratin of aging process</li>
              </ul>
            </div>
          </div>

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
