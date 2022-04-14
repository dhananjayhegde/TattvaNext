
import React from 'react'

export default function EventCard({ fromDateTime, toDateTime, title, location, category }) {

    const monthShortFormat = { month: 'short' }; // Apr
    const dateNumericFormat = { day : 'numeric' }; // 18
    const monthDateFormat = { month: 'short', day: 'numeric' }; // Apr 18
    const weekdayShortFormat = { weekday: 'short' }; // Mon
    const time12HourFomat = { hour12: true, hour: '2-digit', minute: '2-digit' };
  
    return (
        <div className='card-1 flex min-h-24 md:w-80 border-2 border-gray-200/0.5 rounded-lg my-4 py-2 shadow-lg shadow-slate-100/0.7'>
            <div className='flex flex-col justify-center items-center basis-1/4 mx-1 p-2 border-r-2 border-gray-100/0.2'>
                <p className='text-lg font-bold text-gray-400 uppercase'>{ fromDateTime.toLocaleDateString('en-US', monthShortFormat) }</p>
                <h3 className='text-4xl font-bold text-gray-600'>{ fromDateTime.toLocaleDateString('en-US', dateNumericFormat) }</h3>
            </div>
            <div className='flex flex-col justify-start basis-3/4 mx-1 p-2'>
                <h2 className='text-2xl font-bold text-gray-600'>{ title }</h2>
                <p className='text-sm text-gray-500 mt-2'>{ fromDateTime.toLocaleDateString('en-US', monthDateFormat) + ' - ' + toDateTime.toLocaleDateString('en-US', monthDateFormat) + ' (' + fromDateTime.toLocaleDateString('en-US', weekdayShortFormat) + ' - ' + toDateTime.toLocaleDateString('en-US', weekdayShortFormat ) + ')' }</p>
                <p className='text-sm text-gray-500'>{ fromDateTime.toLocaleTimeString('en-US', time12HourFomat) + ' - ' + toDateTime.toLocaleTimeString('en-US', time12HourFomat) }</p>
                <p className='text-xs text-gray-500 mt-2'>{ location }</p>
            </div>
        </div>
  )
}
