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
                        <span className='font-medium'>Financial Advisory</span>
                    </h1>
                </div>

                <img className='mt-4 w-full' src="/Financial.png" alt="" />

                <div className='pt-8 pl-8'>
                    <h1 className='text-2xl mb-8'>Financial Advisory</h1>
                    <p className='my-8'>
                        At [COMPANY NAME], we pride ourselves on a commitment to excellence that is evident in every project we undertake.
                        We strongly believe in the power of teamwork, innovation, and sustainable commitment to create lasting positive impacts.
                        Our cross-functional team collaborates closely, blending expertise and creativity to exceed expectations.
                        From initial concept to final implementation, each project phase is managed with precision and care.
                        We are dedicated not only to achieving our clients goals but also to contributing to a better future through responsible business practices.
                        Join us as we showcase our latest endeavors in driving change and fostering growth.
                    </p>

                    <div className="w-full mb-4 grid grid-cols-2 text-center">
                        <div onClick={() => toggleShow("value1")} className={"mr-1 mb-1 md:p-20 p-10 cursor-pointer font-bold bg-[url('/Integrity.png')] bg-cover bg-center hover:opacity-100" + (show1 ? " opacity-100" : " opacity-80")}>
                            <a href='#value1' className='block w-full bg-white'>Integrity</a>
                        </div>
                        <div onClick={() => toggleShow("value2")} className={"mb-1 md:p-20 p-10 cursor-pointer font-bold bg-[url('/PersonalizedPlanning.png')] bg-cover bg-center hover:opacity-100" + (show2 ? " opacity-100" : " opacity-80")}>
                            <a href='#value2' className='block w-full bg-white'>Personalized Planning</a>
                        </div>
                        <div onClick={() => toggleShow("value3")} className={"mr-1 md:p-20 p-10 cursor-pointer text-center font-bold bg-[url('/WealthGrowth.png')] bg-cover bg-center hover:opacity-100" + (show3 ? " opacity-100" : " opacity-80")}>
                            <a href='#value3' className='block w-full bg-white'>Wealth Growth</a>
                        </div>
                        <div onClick={() => toggleShow("value4")} className={"md:p-20 p-10 cursor-pointer font-bold bg-[url('/RetirementPlanning.png')] bg-cover bg-center hover:opacity-100" + (show4 ? " opacity-100" : " opacity-80")}>
                            <a href='#value4' className='block w-full bg-white'>Retirement Planning</a>
                        </div>
                    </div>

                    {show1 && (
                        <div className='p-4 my-4' id='value1'>
                            <h1 className='text-xl font-bold mb-4'>Integrity</h1>
                            <p className='text-s'>
                                At [COMPANY NAME], integrity is the bedrock of our services.
                                We uphold the highest ethical standards, ensuring that every financial recommendation and decision is made with your best interests at heart.
                                Our commitment to honesty and transparency builds the trust that is essential for a successful financial partnership.
                            </p>
                        </div>
                    )}
                    {show2 && (
                        <div className='p-4 my-4' id='value2'>
                            <h1 className='text-xl font-bold mb-4'>Personalized Planning</h1>
                            <p className='text-s'>
                                Your financial goals are unique, and our planning should be too.
                                At [COMPANY NAME], personalized planning is paramount.
                                We craft customized strategies that align with your individual needs, aspirations, and lifestyle, ensuring a path to financial success that is uniquely yours.
                            </p>
                        </div>
                    )}
                    {show3 && (
                        <div className='p-4 my-4' id='value3'>
                            <h1 className='text-xl font-bold mb-4'>Wealth Growth</h1>
                            <p className='text-s'>
                                At [COMPANY NAME], your wealth growth is our mission.
                                We employ sophisticated investment strategies and meticulous asset management to help your wealth flourish.
                                With us, your financial growth is nurtured with expert care and strategic foresight.
                            </p>
                        </div>
                    )}
                    {show4 && (
                        <div className='p-4 my-4' id='value4'>
                            <h1 className='text-xl font-bold mb-4'>Retirement Planning</h1>
                            <p className='text-s'>
                                Retirement planning with [COMPANY NAME] means peace of mind for your golden years.
                                We carefully design retirement strategies that ensure comfort, security, and joy for the future, allowing you to look forward to the retirement you&apos;ve dreamed of with confidence and excitement.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Page