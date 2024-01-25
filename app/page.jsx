import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="w-full h-screen ml-0 md:ml-[25%]">
            <div className="h-full">
                {/* BG IMAGES */}
                <div className="grid grid-cols-2 overflow-hidden w-full h-full">
                    {/* Images are just examples */}
                    <div className="bg-[url('/Design.jpg')] bg-cover bg-center" />
                    <div className="bg-[url('/Compromise.jpg')] bg-cover bg-center" />
                    <div className="bg-[url('/Consulting.png')] bg-cover bg-center" />
                    <div className="bg-[url('/CompanyProject.jpg')] bg-cover bg-center" />
                </div>
                {/* TITLE */}
                <div className="relative top-[-50%] mt-[-78.5px] text-center">
                    <h1 className="uppercase text-4xl font-semibold text-white">Home</h1>
                    <button className='mt-10 p-4 text-xl border-4 text-white hover:bg-gray-200'>
                        <Link href={`/whatWeDo`}>WHAT WE DO</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
