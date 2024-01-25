'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const Page = () => {

    const options = [
        {
            option: 'Consulting',
            image: '/Consulting.png'
        },
        {
            option: 'Design',
            image: '/Design.jpg'
        },
        {
            option: 'Environment',
            image: '/Environment.jpg'
        },
        {
            option: 'Compromise',
            image: '/Compromise.jpg'
        },
        {
            option: 'Company Project',
            image: '/CompanyProject.jpg'
        },
        {
            option: 'Environment',
            image: '/Environment.jpg'
        }
    ];

    return (
        <div className='w-full overflow-hidden md:ml-[25%] h-screen grid grid-cols-1 md:grid-cols-2 gap-2 p-2 bg-gray-100'>
            {options.map((option, index) => (
                <div
                    style={{ backgroundImage: `url(${option.image})` }}
                    className="bg-cover bg-center flex justify-center items-center opacity-50 hover:opacity-100 hover:scale-[1.02] transition duration-500 ease-in-out"
                    key={index}
                >
                    <Link href={'/'} className='w-full p-2 bg-white uppercase text-xl md:text-2xl font-semibold text-center'>{option.option}</Link>
                </div>
            ))}
        </div>
    )
}

export default Page