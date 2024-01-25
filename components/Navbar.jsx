"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () => setSidebar(!sidebar);

    return (
        <div>
            <div className='w-1/4 mt-[10%] fixed font-medium uppercase hidden md:flex flex-col'>
                {/* LOGO & MENU */}
                <div className='flex flex-col items-center'>
                    <Image src="/CompanyLogo.png" alt="image" width={150} height={150} className='mb-10' />
                    <ul className='w-full'>
                        <li className='p-4 hover:line-through border-t-2 border-b-2'><Link href={`/`}>Home</Link></li>
                        <li className='p-4 list-none group border-b-2'>
                            <Link href={`/whatWeDo`} className='hover:line-through'>What we Do</Link>
                            <div className='hidden group-hover:flex flex-col gap-4 p-4 font-normal normal-case'>
                                <Link href="/whatWeDo/consulting" className='hover:line-through border-b-2'>Consulting</Link>
                                <Link href="/whatWeDo/design" className='hover:line-through border-b-2'>Design</Link>
                                <Link href="/whatWeDo/environment" className='hover:line-through border-b-2'>Environment</Link>
                                <Link href="/whatWeDo/compromise" className='hover:line-through border-b-2'>Compromise</Link>
                                <Link href="/whatWeDo/companyProject" className='hover:line-through border-b-2'>Company Project</Link>
                                <Link href="/whatWeDo/environment" className='hover:line-through border-b-2'>Environment</Link>
                            </div>
                        </li>
                        <li className='p-4 hover:line-through border-b-2'><Link href={`/whoAreWe`}>Who we Are</Link></li>
                    </ul>
                </div>
                {/* CONTACT */}
                <div className='p-4'>
                    <p className='mt-10 mb-4'>Contact</p>
                    <span className='capitalize block m-2'>Adress: <span className='font-light normal-case'>C/Example, 29001 Málaga</span></span>
                    <span className='capitalize block m-2'>Phone: <span className='font-light'> +34 952 999 999</span></span>
                    <span className='capitalize block m-2'>Email: <span className='font-light normal-case'>company@email.com</span></span>
                </div>
                {/* SOCIAL */}
                <div className='p-4'>
                    <p className='mt-10 mb-4'>Social Media</p>
                    <div className='flex gap-2'>
                        <Image src="/InstagramLogo.jpg" alt="image" width={50} height={50} className='mb-10' />
                        <Image src="/LinkedinLogo.png" alt="image" width={50} height={50} className='mb-10' />
                    </div>
                </div>

            </div>

            {/* MOBILE NAVBAR */}
            <div className='md:hidden p-4 flex justify-between'>
                <div onClick={handleSidebar} className="flex items-center">
                    <AiOutlineMenu size={25} />
                </div>
                <Image src="/CompanyLogo.png" alt="image" width={50} height={50} />
            </div>

            <div className={sidebar ? "md:hidden fixed w-full h-screen bg-black/70 z-10" : ""}>
                <div className={
                    sidebar
                        ? "fixed h-screen bg-white ease-in duration-500"
                        : "fixed left-[-100%] ease-in duration-500"
                }>
                    <div className="flex justify-between w-full">

                        <div>
                            <ul className='w-full'>
                                <li className='p-4 hover:line-through border-t-2 border-b-2'><Link href={`/`}>Home</Link></li>
                                <li className='p-4 list-none group border-b-2'>
                                    <Link href={`/whatWeDo`} className='hover:line-through'>What we Do</Link>
                                    <div className='hidden group-hover:flex flex-col gap-4 p-4 font-normal normal-case'>
                                        <Link href={`/`} className='hover:line-through border-b-2'>Option 1</Link>
                                        <Link href={`/`} className='hover:line-through border-b-2'>Option 2</Link>
                                        <Link href={`/`} className='hover:line-through border-b-2'>Option 3</Link>
                                    </div>
                                </li>
                                <li className='p-4 hover:line-through border-b-2'><Link href={`/whoAreWe`}>Who we Are</Link></li>
                            </ul>
                            {/* CONTACT */}
                            <div className='p-4'>
                                <p className='mt-10 mb-4'>Contact</p>
                                <span className='capitalize block m-2'>Adress: <span className='font-light normal-case'>C/Example, 29001 Málaga</span></span>
                                <span className='capitalize block m-2'>Phone: <span className='font-light'> +34 952 999 999</span></span>
                                <span className='capitalize block m-2'>Email: <span className='font-light normal-case'>company@email.com</span></span>
                            </div>
                            {/* SOCIAL */}
                            <div className='p-4'>
                                <p className='mt-10 mb-4'>Social Media</p>
                                <div className='flex gap-2'>
                                    <Image src="/InstagramLogo.jpg" alt="image" width={50} height={50} className='mb-10' />
                                    <Image src="/LinkedinLogo.png" alt="image" width={50} height={50} className='mb-10' />
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar