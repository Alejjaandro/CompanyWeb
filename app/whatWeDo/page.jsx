'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Page = () => {

    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
    const options2 = [
        {
            option: 'Option 1',
            image: '/Consulting.png'
        },
        {
            option: 'Option 2',
            image: '/Design.jpg'
        },
        {
            option: 'Option 3',
            image: '/Environment.jpg'
        }
    ];

    const [selectedOption, setSelectedOption] = useState(options[1]);

    const previousOption = () => {
        if (options.indexOf(selectedOption) - 1 < 0) {
            setSelectedOption(options[options.length - 1]);
        } else {
            setSelectedOption(options[options.indexOf(selectedOption) - 1]);
        }
    };

    const nextOption = () => {
        if (options.indexOf(selectedOption) + 1 === options.length) {
            setSelectedOption(options[0]);
        } else {
            setSelectedOption(options[options.indexOf(selectedOption) + 1]);
        }
    };

    // console.log(selectedOption);

    return (
        <div className='w-full overflow-hidden md:ml-[25%] h-screen flex'>
            <div className='m-4 absolute top-1/2 z-[1]'>
                <button onClick={()=> previousOption()}><FaArrowAltCircleLeft color='black' size={35} /></button>
            </div>
            
            {options.map((option, index) => (
                <div
                    key={index}
                    className={`min-w-[33%] flex justify-center items-center transition duration-300 ease-in-out transform text-xl uppercase bg-[url('/Environment.jpg')] bg-cover ${selectedOption === option
                            ? `font-medium text-white border-4 border-white`
                            : "opacity-50 bg-cover text-black"
                        }`}
                >
                    <Link href={'/'}>{option}</Link>
                </div>
            ))}
            
            <div className='m-4 absolute top-1/2 right-0'>
                <button onClick={()=> nextOption()}><FaArrowAltCircleRight color='black' size={35} /></button>
            </div>
        </div>
    )
}

export default Page