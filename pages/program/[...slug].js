import { useRouter } from 'next/router'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LinkButton from '../../components/LinkButton'
import { getHathaProgramBySlug, getHathaPrograms } from '../../utils/HathaUtils'
import { getUpcomingSessionsByProgram, getUpcomingSessionsByProgramSlug } from '../../utils/HathaUtils'
import { generateEventCards2 } from '../../utils/Utils'

export async function getStaticPaths(){
    const programs = await getHathaPrograms()
    const paths = programs.programs.map(program => { 
        return {
            params: { slug: [ program.slug ] }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
  
    const slug = context.params.slug[0]; 
    
    const [programsResp, eventsResp] = await Promise.all([
        getHathaProgramBySlug( slug ),
        getUpcomingSessionsByProgramSlug( slug )
    ])
    
    return {
        props: {          
            programs: programsResp,
            events: eventsResp
        },
        revalidate: 300
    }
}

// export async function getServerSideProps(context) {
  
//     const { slug } = context.params; 
    
//     const [programsResp, eventsResp] = await Promise.all([
//         getHathaProgramBySlug( slug[0] ),
//         getUpcomingSessionsByProgramSlug( slug[0] )
//     ])
//     return {
//         props: {          
//             programs: programsResp,
//             events: eventsResp
//         }
//     }
// }

function BenefitsList(benefits){
    return (        
        <ul className='text-slate-900 mt-2 list-inside'>
            { 
                Object.values(benefits).map((item, index) => {
                    return item && <li key={index}><FontAwesomeIcon className='pr-3 text-slate-400' icon={['fas', 'asterisk']}/>{ item }</li>
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

const HeroCard = (props) => {
    const program = props.program
    return (
        <section 
            style={{
                backgroundImage: `url('${program.featured_image_abs_url}')`,
                marginTop:"-50px"

            }} 
            className='h-screen flex md:flex-wrap justify-center mt-10 overflow-hidden bg-fixed bg-cover bg-left'
        >                
            <div className='flex flex-col justify-center p-8 md:p-24 md:w-full bg-gray-700/30 backdrop-brightness-50 '>
                <p className='text-slate-200 font-semibold text-xl md:text-4xl italic'>
                    {program.punch_line}
                </p>
                <h2 className='break-words text-slate-200 font-bold text-6xl md:text-8xl'>
                    {program.title}
                </h2>
                <p className='text-slate-100 mt-4 text-xl md:text-2xl'>
                    {program.excerpt}
                </p>
            </div>
        </section>
    )
}

const Program = ( { events, programs } ) => {
    
    const { error: programError } = programs
    const { error: eventsError } = events

    const program = programs.programs[0]
    // console.log(program.terms_and_conditions)
    
    return (
        <div className='flex flex-col min-h-screen'>      
            {/* Hero section */}      
            <HeroCard program={program}/>

            {/* Upcoming Programs section */}
            <section className='flex flex-col md:flex-row md:flex-wrap md:gap-4 justify-start md:justify-center mt-10 mx-8 md:mx-32 min-h-min'>
                
                { /* Event cards */ }
                { generateEventCards2( events ) }
                
                <div className='hidden md:block break-row'></div>
                { !eventsError ? <LinkButton btnClass='my-8 btn btn-primary' href="https://www.instamojo.com/pay_tattvahy/?ref=profile_bar" text="Register"/> : "" }
            </section>

            {/* details section */}
            <section className='flex flex-col md:flex-row md:flex-wrap md:gap-4 justify-start md:justify-center mt-10 mx-8 md:mx-96 min-h-min'>
                
                <div className='text-slate-800 mt-4 text-lg md:text-xl' dangerouslySetInnerHTML={{ __html : program.details }} />
                
            </section>
            
            {/* benefits section */}
            <section className='flex flex-col md:flex-wrap md:gap-4 justify-start items-center md:items-start mt-10 mx-8 md:mx-96 min-h-min'>
                <h3 className='text-3xl md:text-4xl font-bold text-gray-600 my-8 pb-4 border-b-2 border-slate-200/0.5'>Benefits</h3>
                
                <div className='text-base md:text-xl'>
                    { BenefitsList( program.benefits ) }
                </div>
                
            </section>

            {/* terms and conditions */}
            <section className='flex flex-col md:flex-wrap md:gap-4 justify-start items-center md:items-start mt-10 mx-8 md:mx-96 min-h-min'>
                <h3 className='text-3xl md:text-4xl font-bold text-gray-600 my-8 pb-4 border-b-2 border-slate-200/0.5'>Note</h3>
                
                <div 
                    className='external-list text-base md:text-xl text-slate-900' 
                    dangerouslySetInnerHTML={{ __html : program.terms_and_conditions }} 
                />
            </section>
      </div>
    )
}

export default Program

