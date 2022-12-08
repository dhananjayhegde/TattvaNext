import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Alert({message, type}){
    let className = "py-2 px-8 rounded-lg tracking-wide text-center";
    if(type === 'error'){
        className += " bg-red-300"
    }else if(type === 'warning'){
        className += " bg-amber-300"
    }else if(type === 'info'){
        className += " bg-blue-300"
    }else {
        className += " bg-teal-300"
    }
    return (
        <div className={className}>
            <p>{message}</p>
        </div>
    )
}