import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Alert({message, type}){
    let className = `alert ${type}`;
    let icon = type === "ok" ? "circle-check" : "exclamation";
    return (
        <div className={className}>
            <FontAwesomeIcon icon={icon} className='mr-4 text-gray-600'/>
            <span>{message}</span>
        </div>
    )
}