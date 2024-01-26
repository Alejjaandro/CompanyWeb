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
                        <span className='font-medium'>Marketing and Branding</span>
                    </h1>
                </div>

                <img className='mt-4 w-full' src="/Marketing.png" alt="" />

                <div className='pt-8 pl-8'>
                    <h1 className='text-2xl mb-8'>Marketing and Branding</h1>
                    <p className='my-8'>
                        At [COMPANY NAME], we pride ourselves on a commitment to excellence that is evident in every project we undertake.
                        We strongly believe in the power of teamwork, innovation, and sustainable commitment to create lasting positive impacts.
                        Our cross-functional team collaborates closely, blending expertise and creativity to exceed expectations.
                        From initial concept to final implementation, each project phase is managed with precision and care.
                        We are dedicated not only to achieving our clients goals but also to contributing to a better future through responsible business practices.
                        Join us as we showcase our latest endeavors in driving change and fostering growth.
                    </p>

                    <div className="w-full mb-4 grid grid-cols-2 text-center">
                        <div onClick={() => toggleShow("value1")} className={"mr-1 mb-1 md:p-20 p-10 cursor-pointer font-bold bg-[url('/BrandIdentity.png')] bg-cover bg-center hover:opacity-100" + (show1 ? " opacity-100" : " opacity-80")}>
                            <a href='#value1' className='block w-full bg-white'>Brand Identity</a>
                        </div>
                        <div className={"mb-1 md:p-20 p-10 cursor-pointer font-bold bg-[url('/MarketResearch.png')] bg-cover bg-center hover:opacity-100" + (show2 ? " opacity-100" : " opacity-80")} onClick={() => toggleShow("value2")}>
                            <a href='#value2' className='block w-full bg-white'>Market Research</a>
                        </div>
                        <div className={"mr-1 md:p-20 p-10 text-center cursor-pointer font-bold bg-[url('/ContentCreation.png')] bg-cover bg-center hover:opacity-100" + (show3 ? " opacity-100" : " opacity-80")} onClick={() => toggleShow("value3")}>
                            <a href='#value3' className='block w-full bg-white'>Content Creation</a>
                        </div>
                        <div className={"md:p-20 p-10 cursor-pointer font-bold bg-[url('/SEO.png')] bg-cover bg-center hover:opacity-100" + (show4 ? " opacity-100" : " opacity-80")} onClick={() => toggleShow("value4")}>
                            <a href='#value4' className='block w-full bg-white'>SEO and Analytics</a>
                        </div>
                    </div>

                    {show1 && (
                        <div className='p-4 my-4' id='value1'>
                            <h1 className='text-xl font-bold mb-4'>Brand Identity</h1>
                            <p className='text-s'>
                                At [COMPANY NAME], brand identity is the art of storytelling that sets you apart.
                                Our approach carves a unique space for your brand in the market, creating a resonant and memorable image that captures your essence and communicates it effectively to your audience.
                            </p>
                        </div>
                    )}
                    {show2 && (
                        <div className='p-4 my-4' id='value2'>
                            <h1 className='text-xl font-bold mb-4'>Market Research</h1>
                            <p className='text-s'>
                                Market research at [COMPANY NAME] is the cornerstone of informed strategy.
                                We delve deep into data, trends, and consumer behavior to ensure that every campaign is backed by actionable insights and aligns with the shifting market dynamics.
                            </p>
                        </div>
                    )}
                    {show3 && (
                        <div className='p-4 my-4' id='value3'>
                            <h1 className='text-xl font-bold mb-4'>Content Creation</h1>
                            <p className='text-s'>
                                Our content creation process at [COMPANY NAME] is driven by the pursuit of engaging and impactful storytelling.
                                From eye-catching graphics to compelling narratives, we curate content that resonates with your audience and amplifies your brand&apos;s voice.
                            </p>
                        </div>
                    )}
                    {show4 && (
                        <div className='p-4 my-4' id='value4'>
                            <h1 className='text-xl font-bold mb-4'>SEO and Analytics</h1>
                            <p className='text-s'>
                                SEO and analytics are integral to our marketing strategy at [COMPANY NAME].
                                We optimize your online presence for maximum visibility and analyze data to continually refine our approach, ensuring your brand stays ahead in the digital landscape.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Page