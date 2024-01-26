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
                        <span className='font-medium'>Digital Transformation</span>
                    </h1>
                </div>

                <img className='mt-4 w-full' src="/DigitalTransform.png" alt="" />

                <div className='pt-8 pl-8'>
                    <h1 className='text-2xl mb-8'>Digital Transformation</h1>
                    <p className='my-8'>
                        At [COMPANY NAME], our ethos is built on the foundation of compromise.
                        We understand that the best results stem from a balance of ideas, where every voice is heard and every concern is addressed.
                        Our commitment to our clients goes beyond mere agreements; it&apos;s a mutual promise to work towards a common goal with integrity and respect.
                        By fostering an environment where compromise is not about conceding but about reaching greater heights together, we create solutions that are not just satisfactory, but exemplary.
                        Let us join hands with your vision, embracing compromise as the key to unlocking unparalleled success.
                    </p>

                    <div className="mb-4 w-full grid grid-cols-2 text-center">
                        <div className={"mr-1 mb-1 md:p-20 p-10 cursor-pointer font-bold bg-[url('/Innovation.png')] bg-cover bg-center hover:opacity-100" + (show1 ? " opacity-100" : " opacity-80")} onClick={() => toggleShow("value1")}>
                            <a href='#value1' className='block w-full bg-white'>Innovation</a>
                        </div>
                        <div className={"mb-1 md:p-20 p-10 cursor-pointer font-bold bg-[url('/Integration.png')] bg-cover bg-center hover:opacity-100" + (show2 ? " opacity-100" : " opacity-80")} onClick={() => toggleShow("value2")}>
                            <a href='#value2' className='block w-full bg-white'>Integration</a>
                        </div>
                        <div className={"mr-1 md:p-20 p-10 cursor-pointer text-center font-bold bg-[url('/CustomerCentricity.png')] bg-cover bg-center hover:opacity-100" + (show3 ? " opacity-100" : " opacity-80")} onClick={() => toggleShow("value3")}>
                            <a href='#value3' className='block w-full bg-white'>Customer Centricity</a>
                        </div>
                        <div className={"md:p-20 p-10 cursor-pointer font-bold bg-[url('/Security.png')] bg-cover bg-center hover:opacity-100" + (show4 ? " opacity-100" : " opacity-80")} onClick={() => toggleShow("value4")}>
                            <a href='#value4' className='block w-full bg-white'>Security</a>
                        </div>
                    </div>

                    {show1 && (
                        <div className='p-4 my-4' id='value1'>
                            <h1 className='text-xl font-bold mb-4'>Innovation</h1>
                            <p className='text-s'>
                                At [COMPANY NAME], innovation isn&apos;t just a buzzword; it&apos;s our driving force.
                                We push the boundaries of what&apos;s possible, transforming businesses with breakthrough ideas and cutting-edge technology.
                                Our commitment to innovation ensures that we deliver not just solutions, but visionary changes that redefine industries.
                            </p>
                        </div>
                    )}
                    {show2 && (
                        <div className='p-4 my-4' id='value2'>
                            <h1 className='text-xl font-bold mb-4'>Integration</h1>
                            <p className='text-s'>
                                At [COMPANY NAME], integration is the key to a cohesive digital transformation.
                                Our approach weaves together disparate systems into a streamlined, interconnected ecosystem.
                                We ensure that integration serves as the foundation for enhanced collaboration, optimized operations, and strategic insights.
                            </p>
                        </div>
                    )}
                    {show3 && (
                        <div className='p-4 my-4' id='value3'>
                            <h1 className='text-xl font-bold mb-4'>Customer Centricity</h1>
                            <p className='text-s'>
                                Every digital strategy at [COMPANY NAME] starts with the customer.
                                We pivot around your clients needs, using digital transformation to tailor experiences that are as unique as they are efficient.
                                By placing customers at the heart of digital advancement, we ensure solutions that are not just relevant, but revolutionary.
                            </p>
                        </div>
                    )}
                    {show4 && (
                        <div className='p-4 my-4' id='value4'>
                            <h1 className='text-xl font-bold mb-4'>Security</h1>
                            <p className='text-s'>
                                Security at [COMPANY NAME] is uncompromising.
                                As digital landscapes evolve, we fortify your business with advanced cybersecurity measures.
                                Our proactive approach to security means your transformation into the digital realm is not just innovative but also invulnerable.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Page