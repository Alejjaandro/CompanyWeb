import Link from 'next/link';

const Page = () => {

    const options = [
        {
            option: 'Consulting',
            image: '/Consulting.png',
            url: '/consulting'
        },
        {
            option: 'Design',
            image: '/Design.jpg',
            url: '/design'

        },
        {
            option: 'Digital Transformation',
            image: '/DigitalTransform.png',
            url: '/digitalTransformation'
        },
        {
            option: 'Project Management',
            image: '/ProjectManagement.png',
            url: '/projectManagement'
        },
        {
            option: 'Marketing and Branding',
            image: '/Marketing.png',
            url: '/marketing'
        },
        {
            option: 'Financial Advisory',
            image: '/Financial.png',
            url: '/financialAdvisory'
        }
    ];

    return (
        <div className='w-full overflow-hidden md:ml-[25%] h-screen grid grid-cols-1 md:grid-cols-2 gap-2 p-2 bg-gray-100'>
            {options.map((option, index) => (
                <div
                    style={{ backgroundImage: `url(${option.image})` }}
                    className="bg-cover bg-center flex justify-center items-center opacity-50 hover:opacity-100 hover:scale-[1.02] transition duration-500 ease-in-out"
                    key={index}
                >
                    <Link href={`/whatWeDo/${option.url}`} className='w-full p-2 bg-white uppercase text-xl md:text-2xl font-semibold text-center'>{option.option}</Link>
                </div>
            ))}
        </div>
    )
}

export default Page