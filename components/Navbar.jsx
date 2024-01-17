import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='m-4 flex flex-col gap-4'>
        <Link href={`/`} className='hover:line-through'>Home</Link>
        <Link href={`/whoAreWe`} className='hover:line-through'>Who are We</Link>
        <Link href={`/whatWeDo`} className='hover:line-through'>What we Do</Link>
        <Link href={`/contact`} className='hover:line-through'>Contact</Link>
    </div>
  )
}

export default Navbar