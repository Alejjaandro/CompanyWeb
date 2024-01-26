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
                        <span className='font-medium'>Project Management</span>
                    </h1>
                </div>

                <img className='mt-4 w-full' src="/projectManagement.png" alt="" />

                <div className='pt-8 pl-8'>
                    <h1 className='text-2xl mb-8'>Project Management</h1>
                    <p className='my-8'>
                        At [COMPANY NAME], our commitment to the environment is at the core of every decision we make.
                        We strive to create solutions that not only benefit our clients but also contribute to a greener, more sustainable future.
                        Our approach is holistic, integrating eco-friendly practices into our workflows and encouraging a culture of responsibility.
                        We believe that every small step towards environmental consciousness is a leap towards preserving our planet for future generations.
                        Our initiatives range from reducing waste to embracing renewable resources, all while maintaining the highest standards of quality and service.
                        Join us as we embark on this vital journey, planting the seeds for a healthier world through conscious environmental stewardship.
                    </p>

                    <div className="w-full mb-4 grid grid-cols-2 text-center">
                        <div className={"mr-1 mb-1 md:p-20 p-10 cursor-pointer font-bold bg-[url('/StrategicPlanning.png')] bg-cover bg-center hover:opacity-100" + (show1 ? " opacity-100" : " opacity-80")} onClick={() => toggleShow("value1")}>
                            <a href='#value1' className='block w-full bg-white'>Strategic Planning</a>
                        </div>
                        <div className={"mb-1 md:p-20 p-10 cursor-pointer font-bold bg-[url('/CollaborativeSolutions.png')] bg-cover bg-center hover:opacity-100" + (show2 ? " opacity-100" : " opacity-80")} onClick={() => toggleShow("value2")}>
                            <a href='#value2' className='block w-full bg-white'>Collaborative Solutions</a>
                        </div>
                        <div className={"mr-1 md:p-20 p-10 cursor-pointer text-center font-bold bg-[url('/RiskManagement.png')] bg-cover bg-center hover:opacity-100" + (show3 ? " opacity-100" : " opacity-80")} onClick={() => toggleShow("value3")}>
                            <a href='#value3' className='block w-full bg-white'>Risk Management</a>
                        </div>
                        <div className={"md:p-20 p-10 cursor-pointer font-bold bg-[url('/AgileMethodologies.png')] bg-cover bg-center hover:opacity-100" + (show4 ? " opacity-100" : " opacity-80")} onClick={() => toggleShow("value4")}>
                            <a href='#value4' className='block w-full bg-white'>Agile Methodologies</a>
                        </div>
                    </div>

                    {show1 && (
                        <div className='p-4 my-4' id='value1'>
                            <h1 className='text-xl font-bold mb-4'>Strategic Planning</h1>
                            <p className='text-s'>
                                At [COMPANY NAME], strategic planning is the keystone of project management.
                                We meticulously craft every project roadmap to navigate the complex business landscape, ensuring that every step is aligned with our client&apos;s long-term objectives.
                                Our strategic foresight enables us to anticipate challenges and pivot with precision.
                            </p>
                        </div>
                    )}
                    {show2 && (
                        <div className='p-4 my-4' id='value2'>
                            <h1 className='text-xl font-bold mb-4'>Collaborative Solutions</h1>
                            <p className='text-s'>
                                We believe that the best solutions are born from collective effort.
                                [COMPANY NAME] fosters a collaborative environment where ideas thrive, roles are clear, and teamwork is paramount.
                                Together, we build solutions that encapsulate the collective genius of our team and clients.
                            </p>
                        </div>
                    )}
                    {show3 && (
                        <div className='p-4 my-4' id='value3'>
                            <h1 className='text-xl font-bold mb-4'>Risk Management</h1>
                            <p className='text-s'>
                                Our risk management protocols are designed to protect your project&apos;s trajectory.
                                At [COMPANY NAME], we proactively identify potential risks, assess their impact, and implement strategies to mitigate them.
                                This vigilant approach ensures that your projects are safeguarded against the unforeseen.
                            </p>
                        </div>
                    )}
                    {show4 && (
                        <div className='p-4 my-4' id='value4'>
                            <h1 className='text-xl font-bold mb-4'>Agile Methodologies</h1>
                            <p className='text-s'>
                                Agile methodologies at [COMPANY NAME] empower our teams to deliver results with speed and adaptability.
                                By embracing iterative processes and continuous feedback, we ensure that our projects remain responsive to changing needs and deliver maximum value at every stage.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Page