'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
    const router = useRouter()

    const register = (e) => {
        e.preventDefault()
        
        if (e.target[4].value !== e.target[5].value) {
            console.log('Passwords do not match')
            return
        }

        // Save data in local storage
        const user = {
            name: e.target[0].value,
            lastname: e.target[1].value,
            email: e.target[2].value,
            username: e.target[3].value,
            password: e.target[4].value,
        }
        localStorage.setItem('user', JSON.stringify(user))
        console.log('Register')

        // Redirect to home page
        router.push('/')
    }

    return (
        <div className='bg-gray-200 md:ml-[25%] w-full min-h-screen flex justify-center'>
            <div className='bg-white w-[90%]'>
                <div className='h-full flex flex-col justify-center items-center'>
                    
                    <div className='h-min w-full p-6 bg-sky-900 text-white flex flex-col justify-center items-center'>

                        <h1 className='text-4xl p-4 uppercase'>Register</h1>
                        <form action="" method='POST' onSubmit={register}>
                            <div className='flex flex-col gap-4 p-4 md:grid md:grid-cols-2 text-black'>
                                <input type="text" placeholder='Name' className='p-2 border-2 border-gray-300' required/>
                                <input type="text" placeholder='Lastname' className='p-2 border-2 border-gray-300' required/>
                                <input type="email" placeholder='Email' className='p-2 border-2 border-gray-300' required/>
                                <input type="text" placeholder='Username' className='p-2 border-2 border-gray-300' required/>
                                <input type="password" placeholder='Password' className='p-2 border-2 border-gray-300' required/>
                                <input type="password" placeholder='Confirm password' className='p-2 border-2 border-gray-300' />
                                <button type='submit' className='bg-sky-600 hover:bg-sky-700 text-white p-2 uppercase'>Login</button>
                            </div>
                        </form>

                        <Link href="/login" className='text-white hover:underline'>Alredy have an account? Login</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page