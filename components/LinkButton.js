import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function LinkButton({href, btnClass, text, icon}) {
  return (
    <div className={btnClass}>
        {icon ? <FontAwesomeIcon icon={icon} className='mr-2' />: ""}
        <Link href={href}>{text}</Link>
    </div>
  )
}
