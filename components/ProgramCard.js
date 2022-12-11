import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

function BenefitsList(benefits){
    return (        
        <ul className='text-sm md:text-base text-gray-600 mt-2 list-disc list-inside'>
            { 
                Object.values(benefits).map((item, index) => item && <li key={index}>{ item }</li>) 
            }
        </ul>
    )
}

function ConditionsList(conditions){
    return (
        <ul className='text-sm md:text-base text-gray-600 mt-2 list-disc list-inside'>
            { 
                Object.values(conditions).map( (item, index) => item && <li>{ item }</li>) 
            }
        </ul>
    )
}

export default function ProgramCard(program) {
    const program_slug = "/program/" + program.slug;
    return (
        <div className='card-2 flex flex-col md:flex-row min-h-24 w-full rounded-lg my-4 py-4 md:py-8 px-4 md:px-8 overflow-hidden bg-white shadow-lg shadow-slate-100/0.5'>
            <div className='flex flex-col justify-center items-center basis-1/4 relative'>
                {/* For reasons unknown, this does not work for mobile screen - Image tag not rendered at all */}
                {/* <Image 
                    src={program.featured_image_abs_url} 
                    alt={program.title} 
                    layout="fill" 
                    sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
                    placeholder='blur'
                    blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8v4ShHgAGcQIkMQxEBQAAAABJRU5ErkJggg=='
                    className="object-cover object-center w-full h-full drop-shadow-2"
                /> */}
                <img 
                    src={program.featured_image_abs_url} 
                    alt={program.title} 
                    className="object-cover object-center w-full h-full drop-shadow-2"
                />
            </div>
            <div className='flex flex-col justify-start basis-3/4 mx-1 p-2 mx-2'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-700 underline'>
                    <Link href={program_slug}>{program.title}</Link>
                </h2>
                <p className='text-sm md:text-base italic text-gray-500 my-2'>
                    {program.excerpt}
                </p>
                <BenefitsList {...program.benefits} />
            </div>
        </div>
    );
}