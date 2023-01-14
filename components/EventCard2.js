import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function EventCard2({ fromDateTime, toDateTime, title, location, category, location_map_url, price }) {

    const monthShortFormat = { month: 'short' }; // Apr
    const dateNumericFormat = { day : 'numeric' }; // 18
    const monthDateFormat = { month: 'short', day: 'numeric' }; // Apr 18
    const weekdayShortFormat = { weekday: 'short' }; // Mon
    const time12HourFomat = { hour12: true, hour: '2-digit', minute: '2-digit' };

    const cardTitle = fromDateTime.toLocaleDateString('en-US', monthDateFormat) + ' - ' + toDateTime.toLocaleDateString('en-US', monthDateFormat)
    const cardSubtitle = fromDateTime.toLocaleDateString('en-US', weekdayShortFormat) + ' - ' + toDateTime.toLocaleDateString('en-US', weekdayShortFormat )
  
    return (
        <div className='card-1 flex min-h-24 md:w-80 rounded-lg border-2 border-amber-100 my-4 shadow-lg shadow-slate-100/0.7'>
            <div className='flex flex-col justify-center rounded-l-lg items-center basis-1/4 bg-amber-200'>
                <p className='text-lg font-bold text-gray-500 uppercase'>{ fromDateTime.toLocaleDateString('en-US', monthShortFormat) }</p>
                <h3 className='text-4xl font-bold text-gray-600'>{ fromDateTime.toLocaleDateString('en-US', dateNumericFormat) }</h3>
            </div>
            <div className='flex flex-col justify-start basis-3/4 mx-1 p-2'>
                <h2 className='text-2xl font-bold text-gray-600'>
                    { cardTitle }
                </h2>
                <p className='text-sm text-gray-600'>
                    { fromDateTime.toLocaleTimeString('en-US', time12HourFomat) + ' - ' + toDateTime.toLocaleTimeString('en-US', time12HourFomat) }
                </p>
                <p className='flex-1 text-sm text-gray-500 mt-2 underline'>
                    <a href={location_map_url} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className='pr-3' icon={['fas', 'fa-arrow-up-right-from-square']}/>
                        {location}
                    </a>
                </p>
                <p className='text-md text-gray-600 mt-2'>
                    Rs. { price } / person
                </p>
            </div>
        </div>
  )
}