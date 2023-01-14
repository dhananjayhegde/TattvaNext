
import React from 'react'

export default function EventCard({ fromDateTime, toDateTime, title, location, category, price }) {

    const monthShortFormat = { month: 'short' }; // Apr
    const dateNumericFormat = { day : 'numeric' }; // 18
    const monthDateFormat = { month: 'short', day: 'numeric' }; // Apr 18
    const weekdayShortFormat = { weekday: 'short' }; // Mon
    const time12HourFomat = { hour12: true, hour: '2-digit', minute: '2-digit' };

    const cardTitle = category
    const cardSubtitle = fromDateTime.toLocaleDateString('en-US', monthDateFormat) + ' - ' + toDateTime.toLocaleDateString('en-US', monthDateFormat) + ' (' + fromDateTime.toLocaleDateString('en-US', weekdayShortFormat) + ' - ' + toDateTime.toLocaleDateString('en-US', weekdayShortFormat ) + ')'
  
    return (
        <div className='card-1 flex min-h-24 md:w-80 rounded-lg border-2 border-amber-100 my-4 shadow-lg shadow-slate-100/0.7'>
            <div className='flex flex-col justify-center rounded-l-lg items-center basis-1/4 bg-amber-200'>
                <p className='text-lg font-bold text-gray-600 uppercase'>{ fromDateTime.toLocaleDateString('en-US', monthShortFormat) }</p>
                <h3 className='text-4xl font-bold text-gray-800'>{ fromDateTime.toLocaleDateString('en-US', dateNumericFormat) }</h3>
            </div>
            <div className='flex flex-col justify-start basis-3/4 mx-1 p-2'>
                <h2 className='text-xl font-bold text-gray-700'>
                    { cardTitle }
                </h2>
                <p className='text-sm text-gray-600 mt-2'>
                    { cardSubtitle }
                </p>
                <p className='text-sm text-gray-600'>
                    { fromDateTime.toLocaleTimeString('en-US', time12HourFomat) + ' - ' + toDateTime.toLocaleTimeString('en-US', time12HourFomat) }
                </p>
                <p className='text-sm text-gray-600 flex-1'>
                    { location }
                </p>
                <p className='text-md text-gray-600 mt-2'>
                    Rs. { price } / person
                </p>
            </div>
        </div>
  )
}
