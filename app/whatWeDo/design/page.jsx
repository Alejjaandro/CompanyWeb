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
                        <div className={"mr-1 mb-1 md:p-20 p-10 cursor-pointer font-bold bg-[url('/CreativeProccess.png')] bg-cover bg-center hover:opacity-100" + (show1 ? " opacity-100" : " opacity-80")} onClick={() => toggleShow("value1")}>
                            <a href='#value1' className='block w-full bg-white'>Creative Process</a>
                        </div>
                        <div className={"mb-1 md:p-20 p-10 cursor-pointer font-bold bg-[url('/TechnologyDesign.png')] bg-cover bg-center hover:opacity-100" + (show2 ? " opacity-100" : " opacity-80")} onClick={() => toggleShow("value2")}>
                            <a href='#value2' className='block w-full bg-white'>Technology in Design</a>
                        </div>
                        <div className={"mr-1 md:p-20 p-10 cursor-pointer text-center font-bold bg-[url('/ClientCollaboration.png')] bg-cover bg-center hover:opacity-100" + (show3 ? " opacity-100" : " opacity-80")} onClick={() => toggleShow("value3")}>
                            <a href='#value3' className='block w-full bg-white'>Client Collaboration</a>
                        </div>
                        <div className={"md:p-20 p-10 cursor-pointer font-bold bg-[url('/SustainableDesign.png')] bg-cover bg-center hover:opacity-100" + (show4 ? " opacity-100" : " opacity-80")} onClick={() => toggleShow("value4")}>
                            <a href='#value4' className='block w-full bg-white'>Sustainable Design</a>
                        </div>
                    </div>

                    {show1 && (
                        <div className='p-4 my-4' id='value1'>
                            <h1 className='text-xl font-bold mb-4'>Creative Process</h1>
                            <p className='text-s'>
                                At [COMPANY NAME], our creative process is the heart of innovation. We believe in a collaborative environment where every idea is heard and explored.
                                Our workshops are incubators for creative thinking, where we map out visions, sketch out possibilities, and prototype the future,
                                ensuring that every design is not only aesthetically pleasing but also intrinsically meaningful.
                            </p>
                        </div>
                    )}
                    {show2 && (
                        <div className='p-4 my-4' id='value2'>
                            <h1 className='text-xl font-bold mb-4'>Technology in Design</h1>
                            <p className='text-s'>
                                We merge the latest technological advancements with our design expertise at [COMPANY NAME].
                                Our approach harnesses cutting-edge tools to refine and perfect our designs, delivering precision and efficiency.
                                From 3D modeling to virtual reality, we use technology to bring your vision to life with accuracy and detail that sets new industry standards.
                            </p>
                        </div>
                    )}
                    {show3 && (
                        <div className='p-4 my4' id='value3'>
                            <h1 className='text-xl font-bold mb-4'>Client Collaboration</h1>
                            <p className='text-s'>
                                At [COMPANY NAME], collaboration with our clients is the cornerstone of every successful project.
                                We believe in a partnership approach that invites our clients into every stage of the design process.
                                Through open communication and shared vision, we co-create designs that truly reflect the unique identity and objectives of each client.
                                Your insights are invaluable, and together, we turn design concepts into reality with a personal touch.
                            </p>
                        </div>
                    )}
                    {show4 && (
                        <div className='p-4 my-4' id='value4'>
                            <h1 className='text-xl font-bold mb-4'>Sustainable Design</h1>
                            <p className='text-s'>
                                Sustainability is woven into the fabric of our design philosophy at [COMPANY NAME].
                                We are committed to creating solutions that are not only beautiful and functional but also environmentally conscious.
                                Our sustainable design practices ensure that we’re not just designing for today but building a legacy for future generations.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Page