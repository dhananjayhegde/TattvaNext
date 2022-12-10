import React, { useEffect, useState } from 'react'
import getFeaturedImageFromWP from '../utils/HathaSessionUtil'

function BenefitsList({benefits}){
    return (
        <ul className='text-sm md:text-base text-gray-600 mt-2 list-disc list-inside'>
            { benefits.map( benefit => <li>{benefit}</li> ) }
        </ul>
    )
}

export default function ProgramCard({program}) {
    
    const [featuredImage, setFeaturedImage] = useState("https://via.plcaeholder.com/300");
    const [post_title, post_excerpt, details, benefits, terms_and_conditions] = program;
    
    useEffect(() => {
        const fiUrl = getFeaturedImageFromWP( program.feaured_image );
        setFeaturedImage(fiUrl);
    });
    
    return (
        <div className='card-2 flex flex-col md:flex-row min-h-24 w-full rounded-lg my-4 py-4 md:py-8 px-4 md:px-8 overflow-hidden bg-white shadow-lg shadow-slate-100/0.5'>
            <div className='flex flex-col justify-center items-center basis-1/4'>
                <img src={featuredImage} alt={title} className="object-cover object-center w-full h-full drop-shadow-2"/>
            </div>
            <div className='flex flex-col justify-start basis-3/4 mx-1 p-2 mx-2'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-700'>{post_title}</h2>
                <p className='text-sm md:text-base italic text-gray-500 my-2'>
                    {details}
                </p>
                <BenefitsList beenfits={benefits} />
            </div>
        </div>
    );
}