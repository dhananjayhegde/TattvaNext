import React from 'react'
import Link from 'next/link'

export default function LinkButton({href, btnClass, text}) {
  return (
    <div className={btnClass}>
        <Link href={href}>{text}</Link>
    </div>
  )
}
