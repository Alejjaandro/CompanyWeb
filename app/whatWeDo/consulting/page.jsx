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
                        <span className='font-medium'>Consulting</span>
                    </h1>
                </div>

                <img className='mt-4' src="/Consulting.png" alt="" />

                <div className='pt-8 pl-8'>
                    <h1 className='text-2xl mb-8'>Consulting</h1>
                    <p className='my-8'>
                        In the fast-paced world of business, [COMPANY NAME] stands out as a beacon of guidance and expertise.
                        Our consulting services are tailored to navigate complex challenges and unlock sustainable growth.
                        We provide unparalleled support, drawing from a deep well of industry knowledge and a network of seasoned experts.
                        Our goal is to empower your business with the tools and insights needed for success.
                        Through personalized service, we align with your vision and work tirelessly to bring it to fruition.
                        Experience the transformative impact of our consulting work as we lead the way to your company&apos;s prosperous future.
                    </p>

                    <div className="w-full grid grid-cols-2 text-center">
                        <div className={"mr-1 mb-1 md:p-20 p-10 cursor-pointer font-bold bg-[url('/Support.png')] bg-cover bg-center hover:opacity-100" + (show1 ? " opacity-100" : " opacity-80")} onClick={() => toggleShow("value1")}>
                            <a href='#value1' className='block w-full bg-white'>Support</a>
                        </div>
                        <div className={"mb-1 md:p-20 p-10 cursor-pointer font-bold bg-[url('/Experience.png')] bg-cover bg-center hover:opacity-100" + (show2 ? " opacity-100" : " opacity-80")} onClick={() => toggleShow("value2")}>
                            <a href='#value2' className='block w-full bg-white'>Experience</a>
                        </div>
                        <div className={"mr-1 md:p-20 p-10 cursor-pointer text-center font-bold bg-[url('/Success.png')] bg-cover bg-center hover:opacity-100" + (show3 ? " opacity-100" : " opacity-80")} onClick={() => toggleShow("value3")}>
                            <a href='#value3' className='block w-full bg-white'>Success</a>
                        </div>
                        <div className={"md:p-20 p-10 cursor-pointer font-bold bg-[url('/Knowledge.png')] bg-cover bg-center hover:opacity-100" + (show4 ? " opacity-100" : " opacity-80")} onClick={() => toggleShow("value4")}>
                            <a href='#value4' className='block w-full bg-white'>Knowledge</a>
                        </div>
                    </div>

                    {show1 && (
                        <div className='p-4 my-4' id='value1'>
                            <h1 className='text-xl font-bold mb-4'>Support</h1>
                            <p className='text-s'>
                                At [COMPANY NAME], we understand that the strength of your business lies in the robust support you receive.
                                Our dedicated team offers personalized assistance, ensuring that every query is addressed with attention and expertise.
                                We act as pillars for your projects, providing a reliable foundation for every decision and action.
                            </p>
                        </div>
                    )}
                    {show2 && (
                        <div className='p-4 my-4' id='value2'>
                            <h1 className='text-xl font-bold mb-4'>Experience</h1>
                            <p className='text-s'>
                                With a rich heritage of industry leadership, [COMPANY NAME] brings to you a wealth of knowledge encapsulated in our service.
                                Our seasoned professionals are not just consultants; they are narrators of success, having empowered a myriad of businesses to reach their zenith with our proven expertise.
                            </p>
                        </div>
                    )}
                    {show3 && (
                        <div className='p-4 my-4' id='value3'>
                            <h1 className='text-xl font-bold mb-4'>Success</h1>
                            <p className='text-s'>
                                Knowledge is the compass that guides our consultancy at [COMPANY NAME].
                                We cultivate a culture of continuous learning and innovation, which translates into informed strategies for your business.
                                From the latest industry insights to timeless wisdom, our consultancy equips you with knowledge for a competitive edge.
                            </p>
                        </div>
                    )}
                    {show4 && (
                        <div className='p-4 my-4' id='value4'>
                            <h1 className='text-xl font-bold mb-4'>Knowledge</h1>
                            <p className='text-s'>
                                At [COMPANY NAME], your success is our mission.
                                We celebrate every milestone with you and aim for the stars.
                                Our strategic guidance is designed to turn aspirations into achievements, ensuring that every step we take together is a step towards greater accomplishments.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Page