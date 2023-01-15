import React from 'react'

const TeacherRamya = () => {
    return (
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
    )
}

export default TeacherRamya