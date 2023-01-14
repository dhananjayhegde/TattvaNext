import Image from "next/image"
import pageHero from '../public/images/surya-kriya__1.jpeg'

const HeroCard = () => {
    return (
        <div style={{height: "75vh" }} className="flex w-100 mx-40 py-10 px-20">
            <div className="w-1/2 flex flex-col justify-center content mb-4">
                <h1 className="text-6xl font-bold text-gray-700 self-center">
                    Angamardana
                </h1>
            </div>
            <div className="w-1/2 relative ">
                <Image 
                    src={pageHero}
                    layout="fill"
                    placeholder="blur"
                    className="rounded-lg object-cover shadow-lg shadow-slate-100/0.7"                    
                />
            </div>
        </div>
    )
}

const Sample = () => {

    return (
        <section className="h-screen flex flex-col justify-center">
            <HeroCard />
        </section>
    )
}

export default Sample