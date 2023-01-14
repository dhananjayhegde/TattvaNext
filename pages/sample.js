import Image from "next/image"
import pageHero from '../public/images/yogasanas.png'

const Sample = () => {

    return (
        <div className="flex h-screen w-100 mx-40 py-10 px-20">
            <div className="w-1/2 flex flex-col justify-center content mb-4">
                <h1 className="text-6xl font-bold text-gray-700 self-center">Angamardana</h1>
            </div>
            <div className="w-1/2 relative">
                <Image 
                    src={pageHero}
                    layout="fill"
                    placeholder="blur"
                    className="object-cover"
                />
            </div>
        </div>
    )
}

export default Sample