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
        <div className='bg-gray-200 ml-[25%] w-full flex justify-center'>
            <div className='bg-white w-[90%]'>
                {/* WHO WE ARE */}
                <div className='my-20'>
                    <h1 className='text-4xl m-4 uppercase font-medium'>Who are We</h1>
                    <p className='m-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum officiis quam repellendus. Aspernatur veniam fuga incidunt? Deleniti animi, accusantium, id mollitia illo, eos voluptatibus fugiat eveniet officia quia saepe maiores?
                    </p>
                    <div className='my-10 w-full h-full flex justify-center'>
                        <img src="/CompanyLogo.png" alt="" />
                    </div>
                </div>
                {/* WE ARE ..... */}
                <div className='my-20'>
                    <h1 className='text-4xl m-4 uppercase font-medium'>Our History</h1>
                    <p className='m-4'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sit, architecto officia hic eligendi debitis ad magnam iste labore cum cumque saepe exercitationem expedita culpa facilis similique aspernatur sunt optio!
                        Ex iste numquam quam explicabo necessitatibus reiciendis, earum nemo. Possimus, earum non. Accusantium corporis modi delectus nam! Labore illum nostrum possimus beatae impedit quibusdam nihil sed atque dolorum, iste culpa.
                    </p>
                </div>
                {/* VALUES */}
                <div className='my-20'>
                    <h1 className='text-4xl m-4 uppercase font-medium'>Our Values</h1>
                    <div className="w-full grid grid-cols-2 text-center">
                        <a href='#value1'
                            className={"mr-1 mb-1 p-20 font-bold bg-[url('/TeamWork.jpg')] bg-cover hover:opacity-100" + (show1 ? " opacity-100" : " opacity-80")}
                            onClick={() => toggleShow("value1")}
                        >
                            Team Work
                        </a>
                        <a href='#value2'
                            className={"mb-1 p-20 font-bold bg-[url('/CompanyProject.jpg')] bg-cover hover:opacity-100" + (show2 ? " opacity-100" : " opacity-80")}
                            onClick={() => toggleShow("value2")}
                        >
                            Company Project
                        </a>
                        <a href='#value3'
                            className={"mr-1 p-20 font-bold bg-[url('/Compromise.jpg')] bg-cover hover:opacity-100" + (show3 ? " opacity-100" : " opacity-80")}
                            onClick={() => toggleShow("value3")}
                        >
                            Compromise
                        </a>
                        <a href='#value4'
                            className={"p-20 font-bold bg-[url('/Environment.jpg')] bg-cover hover:opacity-100" + (show4 ? " opacity-100" : " opacity-80")}
                            onClick={() => toggleShow("value4")}
                        >
                            Environment
                        </a>
                    </div>

                    {show1 && (
                        <div className='w-1/2 p-4' id='value1'>
                            <h1 className='text-xl font-bold mb-4'>Team Work</h1>
                            <p className='text-s'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sit, architecto officia hic eligendi debitis ad magnam iste labore cum cumque saepe exercitationem expedita culpa facilis similique aspernatur sunt optio!
                                Ex iste numquam quam explicabo necessitatibus reiciendis, earum nemo. Possimus, earum non. Accusantium corporis modi delectus nam! Labore illum nostrum possimus beatae impedit quibusdam nihil sed atque dolorum, iste culpa.
                            </p>
                        </div>
                    )}
                    {show2 && (
                        <div className='w-1/2 p-4' id='value1'>
                            <h1 className='text-xl font-bold mb-4'>Company Project</h1>
                            <p className='text-s'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sit, architecto officia hic eligendi debitis ad magnam iste labore cum cumque saepe exercitationem expedita culpa facilis similique aspernatur sunt optio!
                                Ex iste numquam quam explicabo necessitatibus reiciendis, earum nemo. Possimus, earum non. Accusantium corporis modi delectus nam! Labore illum nostrum possimus beatae impedit quibusdam nihil sed atque dolorum, iste culpa.
                            </p>
                        </div>
                    )}
                    {show3 && (
                        <div className='w-1/2 p-4' id='value1'>
                            <h1 className='text-xl font-bold mb-4'>Compromise</h1>
                            <p className='text-s'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sit, architecto officia hic eligendi debitis ad magnam iste labore cum cumque saepe exercitationem expedita culpa facilis similique aspernatur sunt optio!
                                Ex iste numquam quam explicabo necessitatibus reiciendis, earum nemo. Possimus, earum non. Accusantium corporis modi delectus nam! Labore illum nostrum possimus beatae impedit quibusdam nihil sed atque dolorum, iste culpa.
                            </p>
                        </div>
                    )}
                    {show4 && (
                        <div className='w-1/2 p-4' id='value1'>
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