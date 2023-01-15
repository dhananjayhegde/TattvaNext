import { useRouter } from 'next/router'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LinkButton from '../../components/LinkButton'
import { getHathaProgramBySlug, getHathaPrograms } from '../../utils/HathaUtils'
import { getUpcomingSessionsByProgram, getUpcomingSessionsByProgramSlug } from '../../utils/HathaUtils'
import { generateEventCards2 } from '../../utils/Utils'
import ImageGallery from '../../components/ImageGallery'
import TeacherRamya from '../../components/TeacherRamya'
import getGalleryImages from '../../utils/ImagekitUtil'

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
    
    const [programsResp, eventsResp, galleryImages] = await Promise.all([
        getHathaProgramBySlug( slug ),
        getUpcomingSessionsByProgramSlug( slug ),
        getGalleryImages( slug )
    ])
    
    return {
        props: {          
            programs: programsResp,
            events: eventsResp,
            galleryImages: galleryImages.map(image => ({
                url: image.url,
                thumbnail: image.thumbnail
            }))
        },
        revalidate: 300
    }
}

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

const Program = ( { events, programs, galleryImages } ) => {
    
    const { error: programError } = programs
    const { error: eventsError } = events

    const program = programs.programs[0]
    
    return (
        <div className='flex flex-col min-h-screen'>      
            {/* Hero section */}      
            <HeroCard program={program}/>

            {/* Upcoming Programs section */}
            <section className='flex flex-col md:flex-row md:flex-wrap md:gap-4 justify-start md:justify-center mt-10 mx-8 md:mx-32 min-h-min'>
                
                { !eventsError 
                    ? <h3 className='text-3xl md:text-4xl font-bold text-gray-600 my-8 pb-4 border-b-2 border-slate-200/0.5'>Upcoming {program.title} sessoins</h3>                         
                    : ""
                }

                { !eventsError ? <div className='hidden md:block break-row'></div> : "" }
                
                { /* Event cards */ }
                <div className='flex flex-col md:flex-row md:flex-wrap md:gap-4 justify-start md:justify-center '>
                    { generateEventCards2( events ) }
                </div>
                
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

            { galleryImages.length > 0
                ?   <section className='w-screen mt-10 px-8 py-8 md:px-48 md:py-24 bg-slate-900'>
                        <ImageGallery images={galleryImages} />
                    </section>
                : ""
            }

            <TeacherRamya />
      </div>
    )
}

export default Program

