import { useRouter } from 'next/router'

import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LinkButton from '../../components/LinkButton'

import { getHathaProgramBySlug } from '../../utils/HathaUtils'
import { getUpcomingSessionsByProgram } from '../../utils/HathaUtils'
import generateEventCards from '../../utils/Utils'

export async function getServerSideProps(context) {
  
  const { slug } = context.params;    
  
  const programsResp  = await getHathaProgramBySlug( slug[0] );    
  const eventsResp     = programsResp.error ? { error: 'Invalid Program, check the URL' } : await getUpcomingSessionsByProgram( programsResp.programs[0].id );
  
  return {
      props: {          
          programs: programsResp,
          events: eventsResp
      }
  }
}

function BenefitsList(benefits){
    return (        
        <ul className='text-gray-600 mt-2 list-inside'>
            { 
                Object.values(benefits).map((item, index) => {
                    return item && <li key={index}><FontAwesomeIcon className='pr-2 text-gray-400' icon={['fas', 'star-of-life']}/>{ item }</li>
                }) 
            }
        </ul>
    )
}

function ConditionsList(conditions){
    return (
        <div className='text-base md:text-xl' dangerouslySetInnerHTML={{ __html : conditions }} />
    )
}

const Program = ( { events, programs } ) => {
    
    const { error: programError } = programs
    const { error: eventsError } = events

    const program = programs.programs[0]

    console.log(program.terms_and_conditions)
    
    return (
        <div className='flex flex-col min-h-screen'>      
            {/* Hero section */}      
            <section className='flex flex-col md:flex-row md:flex-wrap justify-center md:items-center mt-24 mx-8'>
                {/* <Image src={program.featured_image_abs_url} alt={program.title} layout="fill" className="object-cover object-top w-full h-full drop-shadow-2"/> */}
                <div className='flex flex-col justify-end content mb-4 md:basis-1/2'>
                    <p className='text-gray-500 font-semibold text-lg md:text-4xl underline'>
                        {program.punch_line}
                    </p>
                    <h2 className='text-gray-600 font-bold text-5xl md:text-8xl'>
                        {program.title}
                    </h2>
                    <p className='text-gray-600 mt-4 text-xl md:text-2xl'>
                        {program.excerpt}
                    </p>
                    {/* <LinkButton btnClass='my-8 btn btn-primary hidden md:block' href="https://www.instamojo.com/pay_tattvahy/?ref=profile_bar" text="Class Schedule"/>              */}
                </div>
                
                {/* <LinkButton btnClass='my-8 btn btn-primary md:hidden' href="https://www.instamojo.com/pay_tattvahy/?ref=profile_bar" text="Class Schedule"/> */}
            </section>

            {/* Upcoming Programs section */}
            <section className='flex flex-col md:flex-row md:flex-wrap md:gap-4 justify-start md:justify-center mt-10 mx-8 md:mx-32 min-h-min'>
                
                { /* Event cards */ }
                { generateEventCards( events ) }
                
                <div className='hidden md:block break-row'></div>
                { !eventsError ? <LinkButton btnClass='my-8 btn btn-primary' href="https://www.instamojo.com/pay_tattvahy/?ref=profile_bar" text="Register"/> : "" }
            </section>

            {/* details section */}
            <section className='flex flex-col md:flex-row md:flex-wrap md:gap-4 justify-start md:justify-center mt-10 mx-8 md:mx-96 min-h-min'>
                
                <div className='text-gray-600 mt-4 text-lg md:text-2xl' dangerouslySetInnerHTML={{ __html : program.details }} />
                
            </section>
            
            {/* benefits section */}
            <section className='flex flex-col md:flex-wrap md:gap-4 justify-start items-center md:items-start mt-10 mx-8 md:mx-96 min-h-min'>
                <h3 className='text-2xl md:text-4xl font-bold text-gray-600 my-8 pb-4 border-b-2 border-slate-200/0.5'>Benefits</h3>
                
                <div className='text-base md:text-xl'>
                    { BenefitsList( program.benefits ) }
                </div>
                
            </section>

            {/* terms and conditions */}
            <section className='flex flex-col md:flex-wrap md:gap-4 justify-start items-center md:items-start mt-10 mx-8 md:mx-96 min-h-min'>
                <h3 className='text-2xl md:text-4xl font-bold text-gray-600 my-8 pb-4 border-b-2 border-slate-200/0.5'>Note</h3>
                
                <div 
                    className='external-list text-base md:text-xl' 
                    dangerouslySetInnerHTML={{ __html : program.terms_and_conditions }} 
                />
            </section>
      </div>
    )
    
    
}

export default Program

