import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="w-full h-screen ml-[25%]">
            <div className="relative h-full">
                {/* BG IMAGES */}
                <div className="grid grid-cols-2 overflow-hidden w-full h-full">
                    {/* Images are just examples */}
                    <div className="bg-[url('/HomeBackground.jpg')] bg-cover" />
                    <div className="bg-[url('/HomeBackground.jpg')] bg-cover" />
                    <div className="bg-[url('/HomeBackground.jpg')] bg-cover" />
                    <div className="bg-[url('/HomeBackground.jpg')] bg-cover" />
                </div>
                {/* TITLE */}
                <div className="absolute top-1/2 mt-[-78.5px] right-1/2 mr-[-78.5px] text-center z-10">
                    <h1 className="uppercase text-4xl font-semibold text-white">Home</h1>
                    <button className='mt-10 p-4 text-xl border-4 text-white hover:bg-gray-200'>
                        <Link href={`/whatWeDo`}>WHAT WE DO</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
