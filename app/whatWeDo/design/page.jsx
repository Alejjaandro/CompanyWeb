'use client'
import React, { useState } from 'react'

const Page = () => {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    const toggleShow = (value) => {
        setShow1(false);
        setShow2(false);
        setShow3(false);
        setShow4(false);

        if (value === "value1") { setShow1(!show1) }
        else if (value === "value2") { setShow2(!show2) }
        else if (value === "value3") { setShow3(!show3) }
        else if (value === "value4") { setShow4(!show4) }
    };

    return (
        <div className='md:ml-[25%] w-full min-h-screen bg-gray-100 px-8'>
            <div className='bg-white h-full'>
                <div className='pt-8 pl-8'>
                    <h1 className='uppercase text-2xl'>
                        <span className='font-[200]'>What we Do: </span>
                        <span className='font-medium'>Design</span>
                    </h1>
                </div>

                <img className='mt-4 w-full' src="/Design.jpg" alt="" />

                <div className='pt-8 pl-8'>
                    <h1 className='text-2xl'>Design</h1>
                    <p className='my-8'>
                        At [COMPANY NAME], we understand that design is more than just aesthetics—it&apos;s a comprehensive approach to problem-solving that combines functionality with innovation.
                        Our design philosophy is rooted in the belief that form should always follow function.
                        We specialize in creating designs that speak to the audience, encapsulate your brand essence, and convey your message with clarity and impact.
                        Our dedicated team of designers employs the latest trends and technologies to ensure that every concept evolves from a mere idea to a tangible reality that stands out in the market.
                        Join us on a creative journey where every line, curve, and color is crafted with purpose and precision to bring your vision to life.
                    </p>

                    <div className="w-full mb-4 grid grid-cols-2 text-center">
                        <a href='#value1'
                            className={"mr-1 mb-1 md:p-20 p-10 font-bold bg-[url('/TeamWork.jpg')] bg-cover bg-center hover:opacity-100" + (show1 ? " opacity-100" : " opacity-80")}
                            onClick={() => toggleShow("value1")}
                        >
                            Team Work
                        </a>
                        <a href='#value2'
                            className={"mb-1 md:p-20 p-10 font-bold bg-[url('/CompanyProject.jpg')] bg-cover bg-center hover:opacity-100" + (show2 ? " opacity-100" : " opacity-80")}
                            onClick={() => toggleShow("value2")}
                        >
                            Company Project
                        </a>
                        <a href='#value3'
                            className={"mr-1 md:p-20 p-10 text-center font-bold bg-[url('/Compromise.jpg')] bg-cover bg-center hover:opacity-100" + (show3 ? " opacity-100" : " opacity-80")}
                            onClick={() => toggleShow("value3")}
                        >
                            Compromise
                        </a>
                        <a href='#value4'
                            className={"md:p-20 p-10 font-bold bg-[url('/Environment.jpg')] bg-cover bg-center hover:opacity-100" + (show4 ? " opacity-100" : " opacity-80")}
                            onClick={() => toggleShow("value4")}
                        >
                            Environment
                        </a>
                    </div>

                    {show1 && (
                        <div className='p-4' id='value1'>
                            <h1 className='text-xl font-bold mb-4'>Team Work</h1>
                            <p className='text-s'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sit, architecto officia hic eligendi debitis ad magnam iste labore cum cumque saepe exercitationem expedita culpa facilis similique aspernatur sunt optio!
                                Ex iste numquam quam explicabo necessitatibus reiciendis, earum nemo. Possimus, earum non. Accusantium corporis modi delectus nam! Labore illum nostrum possimus beatae impedit quibusdam nihil sed atque dolorum, iste culpa.
                            </p>
                        </div>
                    )}
                    {show2 && (
                        <div className='p-4' id='value1'>
                            <h1 className='text-xl font-bold mb-4'>Company Project</h1>
                            <p className='text-s'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sit, architecto officia hic eligendi debitis ad magnam iste labore cum cumque saepe exercitationem expedita culpa facilis similique aspernatur sunt optio!
                                Ex iste numquam quam explicabo necessitatibus reiciendis, earum nemo. Possimus, earum non. Accusantium corporis modi delectus nam! Labore illum nostrum possimus beatae impedit quibusdam nihil sed atque dolorum, iste culpa.
                            </p>
                        </div>
                    )}
                    {show3 && (
                        <div className='p-4' id='value1'>
                            <h1 className='text-xl font-bold mb-4'>Compromise</h1>
                            <p className='text-s'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sit, architecto officia hic eligendi debitis ad magnam iste labore cum cumque saepe exercitationem expedita culpa facilis similique aspernatur sunt optio!
                                Ex iste numquam quam explicabo necessitatibus reiciendis, earum nemo. Possimus, earum non. Accusantium corporis modi delectus nam! Labore illum nostrum possimus beatae impedit quibusdam nihil sed atque dolorum, iste culpa.
                            </p>
                        </div>
                    )}
                    {show4 && (
                        <div className='p-4' id='value1'>
                            <h1 className='text-xl font-bold mb-4'>Environment</h1>
                            <p className='text-s'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sit, architecto officia hic eligendi debitis ad magnam iste labore cum cumque saepe exercitationem expedita culpa facilis similique aspernatur sunt optio!
                                Ex iste numquam quam explicabo necessitatibus reiciendis, earum nemo. Possimus, earum non. Accusantium corporis modi delectus nam! Labore illum nostrum possimus beatae impedit quibusdam nihil sed atque dolorum, iste culpa.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Page